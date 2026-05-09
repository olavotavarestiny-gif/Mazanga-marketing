import type { Metadata } from 'next'
import Blog from '@/components/home/Blog'
import PageGradientBackground from '@/components/layout/PageGradientBackground'
import { blogPosts } from '@/content/blog-posts'
import { buildPageMetadata, getBlogDates, SITE_NAME, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Blog de Marketing Digital e Negócios em Angola | Mazanga Marketing',
  description:
    'Artigos sobre marketing digital, estratégia e crescimento de negócios em Angola. Conteúdo prático para empresários que querem escalar com método.',
  path: '/blog',
  keywords: [
    'blog marketing digital angola',
    'artigos de marketing angola',
    'negocios em angola',
    'estrategia de marketing luanda',
    'crescimento empresarial angola',
  ],
})

const blogListSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: `${SITE_NAME} Blog`,
  url: `${SITE_URL}/blog`,
  inLanguage: 'pt-AO',
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  blogPost: blogPosts.map((post) => {
    const dates = getBlogDates(post)

    return {
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      description: post.excerpt,
      datePublished: dates.published,
      dateModified: dates.updated,
      image: `${SITE_URL}${post.coverImage}`,
      author: {
        '@type': 'Organization',
        name: post.author,
      },
    }
  }),
}

export default function BlogPage() {
  return (
    <PageGradientBackground>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <Blog />
    </PageGradientBackground>
  )
}
