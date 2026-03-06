import type { Metadata } from 'next'

export const SITE_NAME = 'Mazanga Marketing'
export const SITE_URL = 'https://mazanga.digital'
export const DEFAULT_OG_IMAGE = '/images/og-mazanga.svg'

const DEFAULT_BLOG_DATES = {
  published: '2026-01-10T09:00:00.000Z',
  updated: '2026-03-06T09:00:00.000Z',
}

const BLOG_DATES: Record<string, { published: string; updated: string }> = {
  'importancia-utms-rastrear-clientes': {
    published: '2026-01-10T09:00:00.000Z',
    updated: '2026-03-06T09:00:00.000Z',
  },
  'como-medir-resultados-marketing-diariamente': {
    published: '2026-01-17T09:00:00.000Z',
    updated: '2026-03-06T09:00:00.000Z',
  },
  'diferenca-bom-marketing-negocio': {
    published: '2026-01-24T09:00:00.000Z',
    updated: '2026-03-06T09:00:00.000Z',
  },
  'marketing-angola-vs-europa-diferencas': {
    published: '2026-01-31T09:00:00.000Z',
    updated: '2026-03-06T09:00:00.000Z',
  },
  'importancia-empresarios-angola-economia': {
    published: '2026-02-07T09:00:00.000Z',
    updated: '2026-03-06T09:00:00.000Z',
  },
  'empreender-angola-facilidades-dificuldades': {
    published: '2026-02-14T09:00:00.000Z',
    updated: '2026-03-06T09:00:00.000Z',
  },
}

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

export function getBlogDates(slug: string) {
  return BLOG_DATES[slug] ?? DEFAULT_BLOG_DATES
}
