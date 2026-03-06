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

const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 60 * 1000
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error('Lead API unexpected error:', error)
    return NextResponse.json(
      { success: false, error: 'Unexpected server error. Please try again.' },
      { status: 500 }
    )
  }
}
