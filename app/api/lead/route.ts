import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

type LeadPayload = {
  name?: string
  company?: string
  role?: string
  phone?: string
  email?: string
  revenue?: string
  service_interest?: string
  source?: string
  main_challenge?: string
  website?: string
}

type RateLimitEntry = {
  count: number
  resetAt: number
}

type GhlContactPayload = {
  firstName: string
  lastName: string
  name: string
  email?: string
  phone?: string
  source?: string
  locationId?: string
  tags?: string[]
}

const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 60 * 1000
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const GHL_API_BASE = 'https://services.leadconnectorhq.com'
const GHL_API_VERSION = '2021-07-28'

const globalForRateLimit = globalThis as typeof globalThis & {
  __leadRateLimitStore?: Map<string, RateLimitEntry>
}

const rateLimitStore = globalForRateLimit.__leadRateLimitStore ?? new Map<string, RateLimitEntry>()
globalForRateLimit.__leadRateLimitStore = rateLimitStore

function getClientIp(req: NextRequest) {
  const forwardedFor = req.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }

  return req.headers.get('x-real-ip') ?? 'unknown'
}

function isRateLimited(key: string) {
  const now = Date.now()
  const current = rateLimitStore.get(key)

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return true
  }

  current.count += 1
  rateLimitStore.set(key, current)
  return false
}

function validatePayload(payload: LeadPayload) {
  const name = payload.name?.trim() ?? ''
  const email = payload.email?.trim().toLowerCase() ?? ''
  const phone = payload.phone?.trim() ?? ''

  if (!name || !email || !phone) {
    return 'Missing required fields: name, email, phone'
  }

  if (name.length < 2) {
    return 'Name must be at least 2 characters'
  }

  if (!EMAIL_REGEX.test(email)) {
    return 'Invalid email format'
  }

  return null
}

function splitName(fullName: string) {
  const trimmed = fullName.trim().replace(/\s+/g, ' ')
  const [firstName = '', ...rest] = trimmed.split(' ')
  return {
    firstName,
    lastName: rest.join(' '),
    fullName: trimmed,
  }
}

function toGhlContactPayload(payload: LeadPayload): GhlContactPayload {
  const normalizedName = splitName(payload.name?.trim() ?? '')
  const locationId = process.env.GHL_LOCATION_ID?.trim()

  return {
    firstName: normalizedName.firstName,
    lastName: normalizedName.lastName,
    name: normalizedName.fullName,
    email: payload.email?.trim().toLowerCase(),
    phone: payload.phone?.trim(),
    source: payload.source?.trim() || 'website',
    locationId: locationId || undefined,
    tags: [
      'Website Lead',
      payload.service_interest?.trim() ? `Servico:${payload.service_interest.trim()}` : '',
      payload.revenue?.trim() ? `Facturacao:${payload.revenue.trim()}` : '',
    ].filter(Boolean),
  }
}

async function sendLeadToGhlWebhook(payload: LeadPayload, webhookUrl: string) {
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...payload,
      submitted_at: new Date().toISOString(),
    }),
    cache: 'no-store',
  })

  if (!response.ok) {
    const bodyText = await response.text().catch(() => '')
    throw new Error(`Webhook GHL error (${response.status}): ${bodyText || 'no response body'}`)
  }
}

async function sendLeadToGhlApi(payload: LeadPayload, apiKey: string) {
  const locationId = process.env.GHL_LOCATION_ID?.trim()

  const response = await fetch(`${GHL_API_BASE}/contacts/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Version: GHL_API_VERSION,
      'Content-Type': 'application/json',
      ...(locationId ? { 'Location-Id': locationId } : {}),
    },
    body: JSON.stringify(toGhlContactPayload(payload)),
    cache: 'no-store',
  })

  if (!response.ok) {
    const bodyText = await response.text().catch(() => '')
    throw new Error(`API GHL error (${response.status}): ${bodyText || 'no response body'}`)
  }
}

async function forwardLeadToGhl(payload: LeadPayload) {
  const webhookUrl = process.env.GHL_WEBHOOK_URL?.trim()
  const apiKey = process.env.GHL_API_KEY?.trim()

  if (!webhookUrl && !apiKey) {
    return { enabled: false as const }
  }

  if (webhookUrl) {
    await sendLeadToGhlWebhook(payload, webhookUrl)
    return { enabled: true as const, mode: 'webhook' as const }
  }

  if (apiKey) {
    await sendLeadToGhlApi(payload, apiKey)
    return { enabled: true as const, mode: 'api' as const }
  }

  return { enabled: false as const }
}

export async function POST(req: NextRequest) {
  try {
    if (!supabase) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Server configuration error: missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY',
        },
        { status: 500 }
      )
    }

    const ip = getClientIp(req)

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many submissions. Please try again shortly.' },
        { status: 429 }
      )
    }

    const body = (await req.json()) as LeadPayload

    // Honeypot must remain empty for legitimate users
    if ((body.website ?? '').trim().length > 0) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    const validationError = validatePayload(body)
    if (validationError) {
      return NextResponse.json({ success: false, error: validationError }, { status: 400 })
    }

    const leadToInsert = {
      name: body.name?.trim() ?? null,
      company: body.company?.trim() ?? null,
      role: body.role?.trim() ?? null,
      phone: body.phone?.trim() ?? null,
      email: body.email?.trim().toLowerCase() ?? null,
      revenue: body.revenue?.trim() ?? null,
      service_interest: body.service_interest?.trim() ?? null,
      source: body.source?.trim() ?? null,
      main_challenge: body.main_challenge?.trim() ?? null,
    }

    const { error } = await supabase.from('leads').insert([leadToInsert])

    if (error) {
      console.error('Supabase lead insert failed:', error)
      return NextResponse.json(
        { success: false, error: 'Unable to save lead right now. Please try again.' },
        { status: 500 }
      )
    }

    try {
      const forwardResult = await forwardLeadToGhl(body)

      return NextResponse.json(
        {
          success: true,
          forwardedToGhl: forwardResult.enabled,
          forwardingMode: 'mode' in forwardResult ? forwardResult.mode : null,
        },
        { status: 201 }
      )
    } catch (forwardError) {
      console.error('Lead forwarding to GHL failed:', forwardError)

      return NextResponse.json(
        {
          success: true,
          forwardedToGhl: false,
          warning: 'Lead guardado no sistema interno, mas falhou envio para GoHighLevel.',
        },
        { status: 201 }
      )
    }
  } catch (error) {
    console.error('Lead API unexpected error:', error)
    return NextResponse.json(
      { success: false, error: 'Unexpected server error. Please try again.' },
      { status: 500 }
    )
  }
}
