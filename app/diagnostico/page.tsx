import type { Metadata } from 'next'
import DiagnosticLanding from '@/components/diagnostico/DiagnosticLanding'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Diagnóstico Estratégico para Empresas | Mazanga Marketing',
  description: 'Solicite uma análise da presença digital da sua empresa e identifique oportunidades de melhoria no posicionamento, comunicação e aquisição de clientes.',
  path: '/diagnostico',
  keywords: ['diagnóstico marketing Angola', 'estratégia digital empresas Angola', 'marketing B2B Luanda', 'geração de leads Angola'],
})

export default function DiagnosticoPage() {
  return <DiagnosticLanding />
}

