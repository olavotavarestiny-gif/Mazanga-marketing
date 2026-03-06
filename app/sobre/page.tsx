import { Metadata } from 'next'
import NossaHistoria from '@/components/home/NossaHistoria'
import CtaFinal from '@/components/home/CtaFinal'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Nossa História | Mazanga Marketing',
  description:
    'Conhece a história da Mazanga Marketing: da origem internacional à atuação em Angola com foco em crescimento digital orientado por dados.',
  path: '/sobre',
  keywords: [
    'mazanga marketing',
    'agencia marketing em angola',
    'marketing digital luanda',
    'consultoria marketing b2b',
  ],
})

export default function SobrePage() {
  return (
    <>
      <NossaHistoria />
      <CtaFinal />
    </>
  )
}
