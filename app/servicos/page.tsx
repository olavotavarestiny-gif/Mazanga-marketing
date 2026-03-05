import { Metadata } from 'next'
import Servicos from '@/components/home/Servicos'
import CtaFinal from '@/components/home/CtaFinal'
import PageGradientBackground from '@/components/layout/PageGradientBackground'

export const metadata: Metadata = {
  title: 'Serviços | Mazanga Marketing — Sistema B2B Angola',
  description: 'Mídia Paga, Conteúdo Visual, Web Design, Automações. Serviços de marketing digital integrados para empresas angolanas.',
}

export default function ServicosPage() {
  return (
    <PageGradientBackground>
      <Servicos />
      <CtaFinal />
    </PageGradientBackground>
  )
}
