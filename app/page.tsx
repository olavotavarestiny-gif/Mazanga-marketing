import Hero from '@/components/home/Hero'
import Problema from '@/components/home/Problema'
import Solucao from '@/components/home/Solucao'
import Processo from '@/components/home/Processo'
import Numeros from '@/components/home/Numeros'
import Diferencial from '@/components/home/Diferencial'
import Blog from '@/components/home/Blog'
import CtaFinal from '@/components/home/CtaFinal'

export default function Home() {
  return (
    <>
      <Hero />
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
