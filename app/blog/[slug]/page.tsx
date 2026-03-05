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
          paddingLeft: 'clamp(20px, 5vw, 40px)',
          paddingRight: 'clamp(20px, 5vw, 40px)',
          paddingBottom: '120px',
        }}
      >
        <Link href="/#blog" className="blog-back-link font-body">
          ← Voltar ao Blog
        </Link>

        <span className="blog-category font-display">{post.category}</span>

        <h1 className="blog-title font-display">{post.title}</h1>

        <div className="blog-meta font-body">
          <span>Mazanga Marketing</span>
          <span>{post.readTime}</span>
        </div>

        <div className="blog-divider" />

        <div className="blog-body">
          {post.blocks.map((block, index) => {
            if (block.type === 'paragraph') {
              return <p key={`${post.slug}-${index}`}>{block.text}</p>
            }

            if (block.type === 'h2') {
              return <h2 key={`${post.slug}-${index}`}>{block.text}</h2>
            }

            if (block.type === 'h3') {
              return <h3 key={`${post.slug}-${index}`}>{block.text}</h3>
            }

            if (block.type === 'highlight') {
              return (
                <div key={`${post.slug}-${index}`} className="blog-highlight">
                  {block.text}
                </div>
              )
            }

            return (
              <ul key={`${post.slug}-${index}`}>
                {block.items.map((item, itemIndex) => (
                  <li key={`${post.slug}-${index}-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            )
          })}
        </div>

        <div className="blog-cta">
          <h2 className="font-display">Pronto para aplicar isto no teu negócio?</h2>
          <p className="font-body">
            Fala connosco e descobre como a Mazanga pode estruturar o teu marketing com base em dados
            reais.
          </p>
          <Link href="/contacto" className="blog-cta-button font-display">
            Agendar Diagnóstico Gratuito →
          </Link>
        </div>
      </article>

      <style jsx>{`
        .blog-back-link {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.4);
          display: inline-block;
          padding-top: 40px;
          margin-bottom: 48px;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .blog-back-link:hover {
          color: rgba(255, 255, 255, 0.8);
        }

        .blog-category {
          display: inline-block;
          margin-bottom: 16px;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.3);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .blog-title {
          font-weight: 700;
          font-size: clamp(28px, 4vw, 48px);
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .blog-meta {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.3);
          margin-bottom: 48px;
        }

        .blog-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
          margin-bottom: 48px;
        }

        .blog-body p {
          font-family: var(--font-outfit), sans-serif;
          font-size: 17px;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.9;
          margin-bottom: 24px;
        }

        .blog-body h2 {
          font-family: var(--font-syne), sans-serif;
          font-weight: 700;
          font-size: 26px;
          color: #ffffff;
          margin-top: 56px;
          margin-bottom: 20px;
        }

        .blog-body h3 {
          font-family: var(--font-syne), sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: rgba(255, 255, 255, 0.9);
          margin-top: 40px;
          margin-bottom: 16px;
        }

        .blog-body strong {
          color: #ffffff;
          font-weight: 600;
        }

        .blog-highlight {
          background: rgba(255, 93, 0, 0.06);
          border-left: 3px solid #ff5d00;
          border-radius: 0 12px 12px 0;
          padding: 20px 24px;
          margin: 32px 0;
          font-family: var(--font-outfit), sans-serif;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
        }

        .blog-body ul {
          margin-bottom: 24px;
          padding-left: 24px;
        }

        .blog-body ul li {
          font-family: var(--font-outfit), sans-serif;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.8;
          margin-bottom: 8px;
          padding-left: 8px;
        }

        .blog-body ul li::marker {
          color: #ff5d00;
        }

        .blog-cta {
          background: linear-gradient(135deg, rgba(255, 93, 0, 0.08), rgba(140, 13, 194, 0.08));
          border: 1px solid rgba(255, 93, 0, 0.15);
          border-radius: 20px;
          padding: clamp(24px, 5vw, 48px);
          text-align: center;
          margin-top: 72px;
        }

        .blog-cta h2 {
          font-weight: 700;
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 12px;
          line-height: 1.25;
        }

        .blog-cta p {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 28px;
          line-height: 1.65;
        }

        .blog-cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #ff5d00, #8c0dc2);
          font-weight: 700;
          font-size: 15px;
          color: #ffffff;
          padding: 14px 32px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.25s ease;
        }

        .blog-cta-button:hover {
          opacity: 0.88;
        }
      `}</style>
    </section>
  )
}
