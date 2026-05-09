import { stat } from 'node:fs/promises'
import path from 'node:path'
import { blogPosts } from '@/content/blog-posts'
import { SITE_NAME, SITE_URL } from '@/lib/seo'

const FEED_DESCRIPTION =
  'Estratégias, marketing, vendas e crescimento para empresas em Angola.'
const FEED_LANGUAGE = 'pt-AO'
const FEED_COPYRIGHT = 'Mazanga Marketing'

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function absoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl
  }

  return `${SITE_URL}${pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`}`
}

function formatRssDate(date: string) {
  return new Date(date).toUTCString()
}

function getImageMimeType(imagePath: string) {
  if (imagePath.endsWith('.png')) return 'image/png'
  if (imagePath.endsWith('.jpg') || imagePath.endsWith('.jpeg')) return 'image/jpeg'
  if (imagePath.endsWith('.webp')) return 'image/webp'
  if (imagePath.endsWith('.gif')) return 'image/gif'
  if (imagePath.endsWith('.svg')) return 'image/svg+xml'

  return 'application/octet-stream'
}

async function getPublicFileSize(publicPath: string) {
  if (!publicPath.startsWith('/')) {
    return 0
  }

  try {
    const file = await stat(path.join(process.cwd(), 'public', publicPath))
    return file.size
  } catch {
    return 0
  }
}

export async function GET() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const lastBuildDate =
    posts
      .map((post) => post.updatedAt)
      .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0] ??
    new Date().toISOString()

  const items = (
    await Promise.all(
      posts.map(async (post) => {
        const postUrl = `${SITE_URL}/blog/${post.slug}`
        const enclosureLength = post.coverImage ? await getPublicFileSize(post.coverImage) : 0
        const enclosure = post.coverImage
          ? `<enclosure url="${escapeXml(absoluteUrl(post.coverImage))}" length="${enclosureLength}" type="${getImageMimeType(post.coverImage)}" />`
          : ''

        return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <description>${escapeXml(post.excerpt)}</description>
      <link>${escapeXml(postUrl)}</link>
      <guid isPermaLink="true">${escapeXml(postUrl)}</guid>
      <pubDate>${formatRssDate(post.date)}</pubDate>
      <author>${escapeXml(post.author)}</author>
      ${enclosure}
    </item>`
      })
    )
  ).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <link>${escapeXml(SITE_URL)}</link>
    <language>${FEED_LANGUAGE}</language>
    <copyright>${escapeXml(FEED_COPYRIGHT)}</copyright>
    <lastBuildDate>${formatRssDate(lastBuildDate)}</lastBuildDate>
    ${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}
