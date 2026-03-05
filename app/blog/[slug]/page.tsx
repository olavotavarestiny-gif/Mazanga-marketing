import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPostBySlug } from '@/lib/blog-posts'

type PageProps = {
  params: Promise<{
    slug: string
  }>
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

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    keywords: post.metadata.keywords,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: 'article',
      siteName: 'Mazanga Marketing',
      locale: 'pt_AO',
      url: `https://mazanga.digital/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metadata.title,
      description: post.metadata.description,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <section style={{ background: '#000000' }}>
      <article
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          paddingTop: 'clamp(88px, 10vw, 120px)',
          paddingLeft: 'clamp(20px, 5vw, 40px)',
          paddingRight: 'clamp(20px, 5vw, 40px)',
          paddingBottom: '120px',
        }}
      >
        <Link
          href="/#blog"
          className="font-body inline-block mb-16 text-[14px] text-white/40 hover:text-white/80 transition-colors"
        >
          ← Voltar ao Blog
        </Link>

        <span
          className="font-display inline-block mb-4"
          style={{
            fontSize: '11px',
            color: 'rgba(255, 255, 255, 0.3)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          {post.category}
        </span>

        <h1
          className="font-display"
          style={{
            fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 48px)',
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '24px',
          }}
        >
          {post.title}
        </h1>

        <div
          className="font-body"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.3)',
            marginBottom: '48px',
          }}
        >
          <span>Mazanga Marketing</span>
          <span>{post.readTime}</span>
        </div>

        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)',
            marginBottom: '48px',
          }}
        />

        <div>
          {post.blocks.map((block, index) => {
            if (block.type === 'paragraph') {
              return (
                <p
                  key={`${post.slug}-${index}`}
                  className="font-body"
                  style={{
                    fontSize: '17px',
                    color: 'rgba(255, 255, 255, 0.75)',
                    lineHeight: 1.9,
                    marginBottom: '24px',
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
                    fontSize: '26px',
                    color: '#FFFFFF',
                    marginTop: '56px',
                    marginBottom: '20px',
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
                    fontSize: '20px',
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
                    background: 'rgba(255, 93, 0, 0.06)',
                    borderLeft: '3px solid #FF5D00',
                    borderRadius: '0 12px 12px 0',
                    padding: '20px 24px',
                    margin: '32px 0',
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.7,
                  }}
                >
                  {block.text}
                </div>
              )
            }

            return (
              <ul key={`${post.slug}-${index}`} style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                {block.items.map((item, itemIndex) => (
                  <li
                    key={`${post.slug}-${index}-${itemIndex}`}
                    className="font-body"
                    style={{
                      fontSize: '16px',
                      color: 'rgba(255, 255, 255, 0.65)',
                      lineHeight: 1.8,
                      marginBottom: '8px',
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
  )
}
