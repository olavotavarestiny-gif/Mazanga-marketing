import { Metadata } from 'next'
import Resultados from '@/components/home/Resultados'
import CtaFinal from '@/components/home/CtaFinal'
import PageGradientBackground from '@/components/layout/PageGradientBackground'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Resultados de Marketing em Angola | Mazanga Marketing',
  description:
    'Casos reais de marketing digital com resultados mensuráveis em Angola e na Europa. Estratégias orientadas a ROI para negócios que querem crescer.',
  path: '/resultados',
  keywords: [
    'resultados marketing angola',
    'casos de sucesso marketing digital',
    'roi marketing luanda',
    'leads qualificados angola',
    'agencia performance angola',
  ],
})

export default function ResultadosPage() {
  return (
    <PageGradientBackground>
      <Resultados />
      <CtaFinal />
    </PageGradientBackground>
  )
}
