import { Metadata } from 'next'
import Resultados from '@/components/home/Resultados'
import CtaFinal from '@/components/home/CtaFinal'

export const metadata: Metadata = {
  title: 'Resultados | Mazanga Marketing — Casos de Sucesso B2B Angola',
  description: 'Casos reais de sucesso. Clientes de Angola e Suíça. Números que comprovam resultados mensuráveis.',
}

export default function ResultadosPage() {
  return (
    <>
      <Resultados />
      <CtaFinal />
    </>
  )
}
