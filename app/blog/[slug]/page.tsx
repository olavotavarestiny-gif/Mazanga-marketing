import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPostBySlug } from '@/content/blog-posts'
import PageGradientBackground from '@/components/layout/PageGradientBackground'
import { getBlogDates, SITE_NAME, SITE_URL } from '@/lib/seo'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

function formatPostDate(date: string) {
  return new Intl.DateTimeFormat('pt-AO', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

function getPostInitials(title: string) {
  return title
    .split(' ')
    .filter((word) => word.length > 3)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Artigo não encontrado | Mazanga Marketing',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const dates = getBlogDates(post)
  const canonicalPath = `/blog/${post.slug}`
  const coverImageUrl = `${SITE_URL}${post.coverImage}`

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    keywords: post.metadata.keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: 'article',
      siteName: SITE_NAME,
      locale: 'pt_AO',
      url: `${SITE_URL}${canonicalPath}`,
      publishedTime: dates.published,
      modifiedTime: dates.updated,
      authors: [post.author],
      images: [{ url: coverImageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metadata.title,
      description: post.metadata.description,
      images: [coverImageUrl],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const dates = getBlogDates(post)
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`
  const coverImageUrl = `${SITE_URL}${post.coverImage}`
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metadata.description,
    inLanguage: 'pt-AO',
    url: canonicalUrl,
    datePublished: dates.published,
    dateModified: dates.updated,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: canonicalUrl,
    image: coverImageUrl,
    keywords: post.metadata.keywords.join(', '),
  }

  return (
    <PageGradientBackground>
      <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="article-shell" style={{ maxWidth: '980px' }}>
        <Link
          href="/blog"
          className="font-body block w-fit text-[14px] text-white/45 hover:text-white/85 transition-colors"
          style={{ marginBottom: 'clamp(32px, 6vw, 58px)' }}
        >
          ← Voltar ao Blog
        </Link>

        <header
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.9fr) minmax(280px, 0.56fr)',
            gap: 'clamp(30px, 6vw, 72px)',
            alignItems: 'end',
            marginBottom: 'clamp(34px, 6vw, 64px)',
          }}
          className="article-hero-grid"
        >
          <div>
            <span
              className="font-display"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '999px',
                padding: '8px 13px',
                marginBottom: '22px',
                fontSize: '10px',
                color: 'rgba(255,255,255,0.66)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                background: 'rgba(255,255,255,0.035)',
              }}
            >
              {post.category}
            </span>

            <h1
              className="font-display"
              style={{
                fontWeight: 700,
                fontSize: 'clamp(34px, 5.4vw, 70px)',
                color: '#FFFFFF',
                lineHeight: 1.04,
                marginBottom: '24px',
                letterSpacing: 0,
              }}
            >
              {post.title}
            </h1>

            <p
              className="font-body"
              style={{
                fontSize: 'clamp(17px, 2vw, 20px)',
                color: 'rgba(255,255,255,0.58)',
                lineHeight: 1.75,
                marginBottom: '26px',
                maxWidth: '740px',
              }}
            >
              {post.excerpt}
            </p>

            <div
              className="font-body"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.42)',
              }}
            >
              <span>{formatPostDate(post.date)}</span>
              <span style={{ width: '4px', height: '4px', borderRadius: '999px', background: '#FF5D00' }} />
              <span>{post.author}</span>
              <span style={{ width: '4px', height: '4px', borderRadius: '999px', background: '#8C0DC2' }} />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              minHeight: 'clamp(260px, 36vw, 420px)',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: '#08080A',
            }}
          >
            <Image
              src={post.coverImage}
              alt=""
              aria-hidden="true"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 38vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center center',
                opacity: 1,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.08) 45%, rgba(0,0,0,0.38))',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: '28px',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <span
                className="font-display"
                style={{
                  alignSelf: 'flex-start',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}
              >
                Artigo
              </span>
              <span
                className="font-display"
                style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(88px, 13vw, 150px)',
                  fontWeight: 800,
                  lineHeight: 0.9,
                  opacity: 0,
                }}
              >
                {getPostInitials(post.title)}
              </span>
            </div>
          </div>
        </header>

        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)',
            marginBottom: '48px',
          }}
        />

        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {post.blocks.map((block, index) => {
            if (block.type === 'paragraph') {
              return (
                <p
                  key={`${post.slug}-${index}`}
                  className="font-body"
                  style={{
                    fontSize: '18px',
                    color: 'rgba(255, 255, 255, 0.74)',
                    lineHeight: 1.95,
                    marginBottom: '26px',
                  }}
                >
                  {block.text}
                </p>
              )
            }

            if (block.type === 'h2') {
              return (
                <h2
                  key={`${post.slug}-${index}`}
                  className="font-display"
                  style={{
                    fontWeight: 700,
                    fontSize: 'clamp(27px, 3vw, 34px)',
                    color: '#FFFFFF',
                    marginTop: '64px',
                    marginBottom: '22px',
                    lineHeight: 1.18,
                  }}
                >
                  {block.text}
                </h2>
              )
            }

            if (block.type === 'h3') {
              return (
                <h3
                  key={`${post.slug}-${index}`}
                  className="font-display"
                  style={{
                    fontWeight: 700,
                    fontSize: '22px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginTop: '40px',
                    marginBottom: '16px',
                  }}
                >
                  {block.text}
                </h3>
              )
            }

            if (block.type === 'highlight') {
              return (
                <div
                  key={`${post.slug}-${index}`}
                  className="font-body"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255, 93, 0, 0.1), rgba(140, 13, 194, 0.07))',
                    borderLeft: '3px solid #FF5D00',
                    borderRadius: '0 12px 12px 0',
                    padding: '22px 26px',
                    margin: '36px 0',
                    fontSize: '17px',
                    color: 'rgba(255, 255, 255, 0.82)',
                    lineHeight: 1.7,
                  }}
                >
                  {block.text}
                </div>
              )
            }

            return (
              <ul key={`${post.slug}-${index}`} style={{ marginBottom: '28px', paddingLeft: '24px' }}>
                {block.items.map((item, itemIndex) => (
                  <li
                    key={`${post.slug}-${index}-${itemIndex}`}
                    className="font-body"
                    style={{
                      fontSize: '17px',
                      color: 'rgba(255, 255, 255, 0.68)',
                      lineHeight: 1.8,
                      marginBottom: '10px',
                      paddingLeft: '8px',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )
          })}
        </div>

        <div
          style={{
            background: 'linear-gradient(135deg, rgba(255,93,0,0.08), rgba(140,13,194,0.08))',
            border: '1px solid rgba(255,93,0,0.15)',
            borderRadius: '20px',
            padding: 'clamp(24px, 5vw, 48px)',
            textAlign: 'center',
            marginTop: '72px',
            maxWidth: '760px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <h2
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: '24px',
              color: '#FFFFFF',
              marginBottom: '12px',
            }}
          >
            Pronto para aplicar isto no teu negócio?
          </h2>
          <p
            className="font-body"
            style={{
              fontSize: '15px',
              color: 'rgba(255,255,255,0.5)',
              marginBottom: '28px',
              lineHeight: 1.65,
            }}
          >
            Fala connosco e descobre como a Mazanga pode estruturar o teu marketing com base em dados
            reais.
          </p>
          <Link
            href="/contacto"
            className="font-display inline-block hover:opacity-90 transition-opacity"
            style={{
              background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
              fontWeight: 700,
              fontSize: '15px',
              color: '#FFFFFF',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            Agendar Diagnóstico Gratuito →
          </Link>
        </div>
      </article>
      </section>
    </PageGradientBackground>
  )
}
