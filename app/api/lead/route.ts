import { NextRequest, NextResponse } from 'next/server'

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
  if (forwardedFor) return forwardedFor.split(',')[0].trim()
  return req.headers.get('x-real-ip') ?? 'unknown'
}

function isRateLimited(key: string) {
  const now = Date.now()
  const current = rateLimitStore.get(key)

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  if (current.count >= RATE_LIMIT_MAX) return true

  current.count += 1
  rateLimitStore.set(key, current)
  return false
}

function validatePayload(payload: LeadPayload) {
  const name = payload.name?.trim() ?? ''
  const email = payload.email?.trim().toLowerCase() ?? ''
  const phone = payload.phone?.trim() ?? ''

  if (!name || !email || !phone) return 'Campos obrigatórios em falta: nome, email, telefone'
  if (name.length < 2) return 'Nome deve ter pelo menos 2 caracteres'
  if (!EMAIL_REGEX.test(email)) return 'Formato de email inválido'

  return null
}

async function sendLeadToKukugest(payload: LeadPayload) {
  const webhookUrl = process.env.KUKUGEST_WEBHOOK_URL?.trim()
  const webhookSecret = process.env.KUKUGEST_WEBHOOK_SECRET?.trim()

  if (!webhookUrl || !webhookSecret) {
    return { sent: false, reason: 'KUKUGEST_WEBHOOK_URL ou KUKUGEST_WEBHOOK_SECRET não configurados' }
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${webhookSecret}`,
    },
    body: JSON.stringify(payload),
    cache: 'no-store',
  })

  if (!response.ok) {
    const body = await response.text().catch(() => '')
    throw new Error(`Kukugest lead endpoint error (${response.status}): ${body || 'sem resposta'}`)
  }

  const result = (await response.json().catch(() => ({}))) as { contactId?: number; existing?: boolean }
  return { sent: true, contactId: result.contactId, existing: result.existing ?? false }
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req)

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Demasiadas submissões. Tenta novamente em breve.' },
        { status: 429 }
      )
    }

    const body = (await req.json()) as LeadPayload

    // Honeypot — bots preenchem este campo, utilizadores reais não
    if ((body.website ?? '').trim().length > 0) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    const validationError = validatePayload(body)
    if (validationError) {
      return NextResponse.json({ success: false, error: validationError }, { status: 400 })
    }

    const leadPayload: LeadPayload = {
      name: body.name?.trim(),
      company: body.company?.trim(),
      role: body.role?.trim(),
      phone: body.phone?.trim(),
      email: body.email?.trim().toLowerCase(),
      revenue: body.revenue?.trim(),
      service_interest: body.service_interest?.trim(),
      source: body.source?.trim(),
      main_challenge: body.main_challenge?.trim(),
    }

    const result = await sendLeadToKukugest(leadPayload)

    if (!result.sent) {
      return NextResponse.json(
        { success: false, error: 'Sistema CRM não configurado. Contacta o administrador.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, contactId: result.contactId }, { status: 201 })
  } catch (error) {
    console.error('[lead API] Erro inesperado:', error)
    return NextResponse.json(
      { success: false, error: 'Erro inesperado. Tenta novamente.' },
      { status: 500 }
    )
  }
}
