import type { MetadataRoute } from 'next'
import { blogPosts } from '@/content/blog-posts'
import { getBlogDates, SITE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date('2026-03-06T09:00:00.000Z'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/servicos`,
      lastModified: new Date('2026-03-06T09:00:00.000Z'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/resultados`,
      lastModified: new Date('2026-03-06T09:00:00.000Z'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contacto`,
      lastModified: new Date('2026-03-06T09:00:00.000Z'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date('2026-03-06T09:00:00.000Z'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/sobre`,
      lastModified: new Date('2026-03-06T09:00:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/carreira`,
      lastModified: new Date('2026-03-06T09:00:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacidade`,
      lastModified: new Date('2026-03-06T09:00:00.000Z'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const dates = getBlogDates(post.slug)

    return {
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(dates.updated),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  })

  return [...staticPages, ...blogPages]
}
