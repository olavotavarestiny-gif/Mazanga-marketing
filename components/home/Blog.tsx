'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { blogPosts, type BlogPost } from '@/content/blog-posts'

const ease = [0.22, 1, 0.36, 1] as const

const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

function formatPostDate(date: string) {
  return new Intl.DateTimeFormat('pt-AO', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

function getPostInitials(post: BlogPost) {
  return post.title
    .split(' ')
    .filter((word) => word.length > 3)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

function EditorialImage({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <div
      className="blog-cover"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: featured ? 'clamp(260px, 38vw, 430px)' : '190px',
        borderRadius: featured ? '18px' : '14px',
        border: '1px solid rgba(255,255,255,0.09)',
        background: '#08080A',
      }}
    >
      <Image
        src={post.coverImage}
        alt=""
        aria-hidden="true"
        fill
        priority={featured}
        sizes={featured ? '(max-width: 1023px) 100vw, 46vw' : '(max-width: 680px) 100vw, (max-width: 1023px) 50vw, 33vw'}
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
            'linear-gradient(180deg, rgba(0,0,0,0.14), rgba(0,0,0,0.12) 45%, rgba(0,0,0,0.42))',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: featured ? '28px' : '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          zIndex: 1,
        }}
      >
        <span
          className="font-display"
          style={{
            alignSelf: 'flex-start',
            border: '1px solid rgba(255,255,255,0.16)',
            borderRadius: '999px',
            padding: '7px 12px',
            color: 'rgba(255,255,255,0.76)',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '1.6px',
            textTransform: 'uppercase',
            background: 'rgba(0,0,0,0.24)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {post.category}
        </span>
        <span
          className="font-display"
          style={{
            color: '#FFFFFF',
            fontSize: featured ? 'clamp(78px, 14vw, 150px)' : '72px',
            fontWeight: 800,
            lineHeight: 0.9,
            opacity: 0,
            letterSpacing: 0,
          }}
        >
          {getPostInitials(post)}
        </span>
      </div>
    </div>
  )
}

export default function Blog() {
  const featuredPost = sortedPosts[0]
  const gridPosts = sortedPosts.slice(1)

  return (
    <section id="blog" className="section-shell blog-editorial" style={{ background: 'transparent' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: 'clamp(18px, 6vw, 80px)',
          paddingRight: 'clamp(18px, 6vw, 80px)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.1fr) minmax(260px, 0.55fr)',
            gap: 'clamp(28px, 6vw, 80px)',
            alignItems: 'end',
            marginBottom: 'clamp(36px, 6vw, 72px)',
          }}
          className="blog-header-grid"
        >
          <div>
            <span
              className="font-display"
              style={{
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block',
                marginBottom: '18px',
              }}
            >
              BLOG
            </span>

            <h2
              className="font-display"
              style={{
                fontWeight: 700,
                fontSize: 'clamp(34px, 5vw, 68px)',
                color: '#FFFFFF',
                lineHeight: 1.02,
                maxWidth: '760px',
                letterSpacing: 0,
              }}
            >
              Leituras para decisões de crescimento.
            </h2>
          </div>

          <p
            className="font-body"
            style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.52)',
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Estratégia, vendas, tracking e mercado angolano para empresários que querem crescer
            com método.
          </p>
        </div>

        <motion.div transition={{ duration: 0.8, ease }}>
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block"
            style={{ textDecoration: 'none', marginBottom: 'clamp(22px, 4vw, 32px)' }}
          >
            <article
              className="blog-featured-card"
              style={{
                width: '100%',
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025))',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '22px',
                padding: 'clamp(16px, 2vw, 22px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 0.92fr) minmax(0, 1.08fr)',
                gap: 'clamp(24px, 5vw, 56px)',
                alignItems: 'stretch',
              }}
            >
              <EditorialImage post={featuredPost} featured />

              <div
                style={{
                  padding: 'clamp(12px, 3vw, 30px) clamp(4px, 2vw, 18px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div
                  className="font-body"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    flexWrap: 'wrap',
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.42)',
                    marginBottom: '18px',
                  }}
                >
                  <span>{formatPostDate(featuredPost.date)}</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '999px', background: '#FF5D00' }} />
                  <span>{featuredPost.author}</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '999px', background: '#8C0DC2' }} />
                  <span>{featuredPost.readTime}</span>
                </div>

                <h3
                  className="font-display"
                  style={{
                    fontWeight: 700,
                    fontSize: 'clamp(28px, 4.2vw, 46px)',
                    color: '#FFFFFF',
                    lineHeight: 1.12,
                    marginBottom: '18px',
                    letterSpacing: 0,
                  }}
                >
                  {featuredPost.title}
                </h3>

                <p
                  className="font-body"
                  style={{
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.58)',
                    lineHeight: 1.8,
                    marginBottom: '28px',
                    maxWidth: '610px',
                  }}
                >
                  {featuredPost.excerpt}
                </p>

                <span
                  className="font-display"
                  style={{
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#FFFFFF',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  Ler artigo completo
                  <span
                    aria-hidden="true"
                    style={{
                      width: '34px',
                      height: '1px',
                      background: 'linear-gradient(90deg, #FF5D00, #8C0DC2)',
                      display: 'inline-block',
                      transition: 'width 0.25s ease',
                    }}
                    className="blog-read-line"
                  />
                </span>
              </div>
            </article>
          </Link>
        </motion.div>

        <div className="blog-post-grid">
          {gridPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              transition={{ duration: 0.6, ease, delay: index * 0.06 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block" style={{ textDecoration: 'none' }}>
                <article
                  className="blog-card"
                  style={{
                    background: 'rgba(255,255,255,0.035)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <EditorialImage post={post} />

                  <div style={{ padding: '24px 24px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div
                      className="font-body"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '14px',
                        color: 'rgba(255,255,255,0.38)',
                        fontSize: '12px',
                        marginBottom: '14px',
                      }}
                    >
                      <span>{formatPostDate(post.date)}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3
                      className="font-display"
                      style={{
                        fontWeight: 700,
                        fontSize: '20px',
                        color: '#FFFFFF',
                        lineHeight: 1.32,
                        marginBottom: '12px',
                        letterSpacing: 0,
                      }}
                    >
                      {post.title}
                    </h3>

                    <p
                      className="font-body"
                      style={{
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.52)',
                        lineHeight: 1.72,
                        marginBottom: '24px',
                        flex: 1,
                      }}
                    >
                      {post.excerpt}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 'auto',
                        paddingTop: '18px',
                        borderTop: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      <span
                        className="font-body"
                        style={{
                          fontSize: '12px',
                          color: 'rgba(255,255,255,0.38)',
                        }}
                      >
                        {post.author}
                      </span>
                      <span
                        className="font-display"
                        style={{
                          fontWeight: 700,
                          fontSize: '13px',
                          background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        Ler
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .blog-post-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .group:hover .blog-featured-card,
        .group:hover .blog-card {
          background: rgba(255, 255, 255, 0.065) !important;
          border-color: rgba(255, 93, 0, 0.22) !important;
          transform: translateY(-4px);
        }

        .group:hover .blog-cover img {
          transform: scale(1.04);
        }

        .group:hover .blog-read-line {
          width: 52px !important;
        }

        .blog-cover img {
          transition:
            opacity 0.3s ease,
            transform 0.5s ease;
        }

        @media (max-width: 1023px) {
          .blog-header-grid,
          .blog-featured-card {
            grid-template-columns: 1fr !important;
          }

          .blog-post-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 680px) {
          .blog-post-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
