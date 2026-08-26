import 'server-only'
import { z } from 'zod'

const clean = (max: number) => z.string().trim().max(max)

export const diagnosticLeadSchema = z.object({
  name: clean(120).min(2), role: clean(100).min(2), otherRole: clean(100).optional().default(''),
  email: z.string().trim().email().max(180), phone: clean(40).refine((value) => value.replace(/\D/g, '').length >= 9),
  company: clean(160).min(2), website: clean(300).optional().default(''), social: clean(300).optional().default(''),
  sector: clean(120).min(2), province: clean(80).min(2), employees: clean(40).min(1),
  revenue: z.enum(['lt5', '5-10', '10-25', '25-50', '50plus', 'later']), marketingTeam: clean(120).min(1),
  challenge: clean(180).min(2), desiredResults: clean(1200).min(10), services: z.array(clean(120)).min(1).max(9),
  timeline: z.enum(['now', '30days', '1-3months', '3-6months', 'research']),
  investment: z.enum(['lt500', '500-1m', '1-2.5m', '2.5-5m', '5mplus', 'undefined']),
  authority: z.enum(['final', 'direct', 'present', 'none']), additionalInfo: clean(1600).optional().default(''),
  consent: z.literal(true), companyWebsite: clean(200).optional().default(''),
  tracking: z.object({
    utm_source: clean(200).optional(), utm_medium: clean(200).optional(), utm_campaign: clean(200).optional(),
    utm_content: clean(200).optional(), utm_term: clean(200).optional(), fbclid: clean(300).optional(),
    gclid: clean(300).optional(), landing_url: clean(500).optional(), referrer: clean(500).optional(),
  }).optional().default({}),
})

type ScorableLead = Pick<z.infer<typeof diagnosticLeadSchema>, 'revenue' | 'authority' | 'timeline' | 'investment'>

const weights = {
  revenue: { lt5: 0, '5-10': 15, '10-25': 25, '25-50': 35, '50plus': 45, later: 10 },
  authority: { final: 25, direct: 18, present: 8, none: 0 },
  timeline: { now: 20, '30days': 18, '1-3months': 12, '3-6months': 6, research: 0 },
  investment: { lt500: 0, '500-1m': 8, '1-2.5m': 15, '2.5-5m': 22, '5mplus': 30, undefined: 5 },
} as const

export function scoreDiagnosticLead(lead: ScorableLead) {
  const score = weights.revenue[lead.revenue] + weights.authority[lead.authority] + weights.timeline[lead.timeline] + weights.investment[lead.investment]
  const classification = score >= 75 ? 'priority' : score >= 50 ? 'qualified' : score >= 30 ? 'nurture' : 'low'
  const reasons = [
    `Faturação: ${lead.revenue} (${weights.revenue[lead.revenue]} pontos).`,
    `Autoridade: ${lead.authority} (${weights.authority[lead.authority]} pontos).`,
    `Prazo: ${lead.timeline} (${weights.timeline[lead.timeline]} pontos).`,
    `Investimento: ${lead.investment} (${weights.investment[lead.investment]} pontos).`,
  ]
  return { score, classification, reasons }
}

