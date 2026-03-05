import { Metadata } from 'next'
import NossaHistoria from '@/components/home/NossaHistoria'
import CtaFinal from '@/components/home/CtaFinal'

export const metadata: Metadata = {
  title: 'Nossa História | Mazanga Marketing',
  description: 'A história da Mazanga: da Academia Traço Único à assessoria de crescimento digital com 20+ clientes em 5 países.',
}

export default function SobrePage() {
  return (
    <>
      <NossaHistoria />
      <CtaFinal />
    </>
  )
}
