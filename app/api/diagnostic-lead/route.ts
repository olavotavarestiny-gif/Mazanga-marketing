import { NextRequest, NextResponse } from 'next/server'
import { diagnosticLeadSchema, scoreDiagnosticLead } from '@/lib/diagnostic-server'

type RateEntry = { count: number; resetAt: number }
const globalStore = globalThis as typeof globalThis & { __diagnosticRateStore?: Map<string, RateEntry> }
const rateStore = globalStore.__diagnosticRateStore ?? new Map<string, RateEntry>()
globalStore.__diagnosticRateStore = rateStore

const FORM_ID = process.env.KUKUGEST_DIAGNOSTIC_FORM_ID?.trim() || 'cmtadsouv03kbh2kv8xw8xwxm'
const API_URL = (process.env.KUKUGEST_PUBLIC_API_URL?.trim() || 'https://crm-mazanga.onrender.com').replace(/\/$/, '')

const fields = {
  company: 'cmtadtfsn03kfh2kvk7pu0fu6', name: 'cmtae5dxb03l5h2kv6ioegwjb', phone: 'cmtae3uwa03l1h2kvhtvekph4',
  email: 'cmtae4o5e03l3h2kvq33ekfqa', sector: 'cmtadtrwp03khh2kve4qyypn3', role: 'cmtadwcyp03klh2kv6l62mmlf',
  revenue: 'cmtadwjzh03knh2kvlrzg2xvc', challenge: 'cmtadzqng03krh2kvp62e3zlk', timeline: 'cmtae18zh03kxh2kv64msguzs',
  investment: 'cmtae2ah403kzh2kv9unih57o', summary: 'cmtae65cb03l7h2kvn7lv6nz6',
} as const

function clientIp(request: NextRequest) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown'
}

function limited(ip: string) {
  const now = Date.now()
  const entry = rateStore.get(ip)
  if (!entry || entry.resetAt <= now) {
    rateStore.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 })
    return false
  }
  if (entry.count >= 3) return true
  entry.count += 1
  return false
}

const revenueLabels: Record<string, string> = {
  lt5: 'Menos de 5 milhões Kz/mês', '5-10': '5M a 10M Kz/mês', '10-25': '10M a 30M Kz/mês',
  '25-50': '30M a 100M Kz/mês', '50plus': 'Acima de 100M Kz/mês', later: 'Prefiro informar durante o contacto',
}
const timelineLabels: Record<string, string> = { now: 'Imediatamente', '30days': 'Nos próximos 30 dias', '1-3months': 'Nos próximos 3 meses', '3-6months': 'Entre 3 e 6 meses', research: 'Apenas a pesquisar possibilidades' }
const investmentLabels: Record<string, string> = { lt500: 'Não neste momento', '500-1m': 'Talvez, depende da proposta', '1-2.5m': 'Sim, se fizer sentido', '2.5-5m': 'Sim, já temos orçamento', '5mplus': 'Sim, já temos orçamento', undefined: 'Talvez, depende da proposta' }

function compactSummary(data: ReturnType<typeof diagnosticLeadSchema.parse>, score: ReturnType<typeof scoreDiagnosticLead>) {
  const rows = [
    `QUALIFICAÇÃO INTERNA: ${score.classification.toUpperCase()} (${score.score})`,
    `Razões: ${score.reasons.join(' ')}`, `Cargo: ${data.role}${data.otherRole ? ` — ${data.otherRole}` : ''}`,
    `Província: ${data.province}`, `Colaboradores: ${data.employees}`, `Equipa de marketing: ${data.marketingTeam}`,
    `Resultados pretendidos: ${data.desiredResults}`, `Serviços: ${data.services.join(', ')}`, `Autoridade: ${data.authority}`,
    `Website: ${data.website || 'não informado'}`, `Rede social: ${data.social || 'não informada'}`,
    `Informação adicional: ${data.additionalInfo || 'não informada'}`, `Consentimento: sim — ${new Date().toISOString()}`,
    `Origem: ${JSON.stringify(data.tracking)}`,
  ]
  return rows.join('\n').slice(0, 7000)
}

export async function POST(request: NextRequest) {
  try {
    if (limited(clientIp(request))) {
      return NextResponse.json({ success: false, error: 'Demasiadas tentativas. Aguarde alguns minutos e tente novamente.' }, { status: 429 })
    }

    const raw: unknown = await request.json()
    if (typeof raw === 'object' && raw !== null && 'companyWebsite' in raw && String(raw.companyWebsite).trim()) {
      return NextResponse.json({ success: false, error: 'Não foi possível processar o pedido.' }, { status: 400 })
    }

    const parsed = diagnosticLeadSchema.safeParse(raw)
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: 'Revise os campos obrigatórios e tente novamente.' }, { status: 400 })
    }

    const data = parsed.data
    const score = scoreDiagnosticLead(data)
    const answers = [
      { fieldId: fields.company, value: data.company }, { fieldId: fields.name, value: data.name },
      { fieldId: fields.phone, value: data.phone }, { fieldId: fields.email, value: data.email },
      { fieldId: fields.sector, value: data.sector }, { fieldId: fields.role, value: data.role === 'Outro' ? data.otherRole : data.role },
      { fieldId: fields.revenue, value: revenueLabels[data.revenue] }, { fieldId: fields.challenge, value: data.challenge },
      { fieldId: fields.timeline, value: timelineLabels[data.timeline] }, { fieldId: fields.investment, value: investmentLabels[data.investment] },
      { fieldId: fields.summary, value: compactSummary(data, score) },
    ]

    const response = await fetch(`${API_URL}/api/forms/${FORM_ID}/submit`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ answers }), cache: 'no-store',
      signal: AbortSignal.timeout(15000),
    })
    if (!response.ok) throw new Error(`KukuGest respondeu com estado ${response.status}`)

    return NextResponse.json({ success: true, responseVariant: ['priority', 'qualified'].includes(score.classification) ? 'aligned' : 'review' }, { status: 201 })
  } catch (error) {
    console.error('[diagnostic-lead] Falha de integração sem dados pessoais:', error instanceof Error ? error.message : 'erro desconhecido')
    return NextResponse.json({ success: false, error: 'Não foi possível enviar o pedido. Tente novamente dentro de instantes.' }, { status: 502 })
  }
}

