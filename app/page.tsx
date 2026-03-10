import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import LogoBar from '@/components/home/LogoBar'
import Problema from '@/components/home/Problema'
import Solucao from '@/components/home/Solucao'
import Processo from '@/components/home/Processo'
import Numeros from '@/components/home/Numeros'
import Diferencial from '@/components/home/Diferencial'
import Blog from '@/components/home/Blog'
import CtaFinal from '@/components/home/CtaFinal'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Agência de Marketing Digital em Angola | Mazanga Marketing',
  description:
    'A Mazanga cria sistemas de crescimento com mídia paga, conteúdo visual, web design e automações para negócios em Angola. Estratégia orientada por dados e resultados.',
  path: '/',
  keywords: [
    'marketing digital angola',
    'agencia de marketing angola',
    'agencia marketing luanda',
    'marketing para negocios angola',
    'geracao de leads angola',
    'consultoria marketing angola',
  ],
})

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <Problema />
      <Solucao />
      <Processo />
      <Numeros />
      <Diferencial />
      <Blog />
      <CtaFinal />
    </>
  )
}
