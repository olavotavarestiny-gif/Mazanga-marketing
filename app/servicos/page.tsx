import { Metadata } from 'next'
import Servicos from '@/components/home/Servicos'
import CtaFinal from '@/components/home/CtaFinal'
import PageGradientBackground from '@/components/layout/PageGradientBackground'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Serviços de Marketing Digital em Angola | Mazanga Marketing',
  description:
    'Mídia paga, conteúdo visual, web design e automações para empresas em Angola. Serviços integrados para gerar leads qualificados e crescimento previsível.',
  path: '/servicos',
  keywords: [
    'servicos de marketing digital angola',
    'midia paga angola',
    'conteudo visual angola',
    'web design luanda',
    'automacoes marketing angola',
  ],
})

export default function ServicosPage() {
  return (
    <PageGradientBackground>
      <Servicos />
      <CtaFinal />
    </PageGradientBackground>
  )
}
