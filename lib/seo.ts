import type { Metadata } from 'next'
import type { BlogPost } from '@/content/blog-posts'

export const SITE_NAME = 'Mazanga Marketing'
export const SITE_URL = 'https://www.mazanga.digital'
export const DEFAULT_OG_IMAGE = '/images/og-mazanga.svg'

type BuildPageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  type?: 'website' | 'article'
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = 'website',
}: BuildPageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      locale: 'pt_AO',
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — Marketing Digital em Angola`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

export function getBlogDates(post: Pick<BlogPost, 'date' | 'updatedAt'>) {
  return {
    published: post.date,
    updated: post.updatedAt,
  }
}
