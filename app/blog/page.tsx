import type { Metadata } from 'next'
import Blog from '@/components/home/Blog'

export const metadata: Metadata = {
  title: 'Blog | Mazanga Marketing',
  description:
    'Insights de marketing, dados e estratégia para empresários que querem crescer com método.',
}

export default function BlogPage() {
  return <Blog />
}
