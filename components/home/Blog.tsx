'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { blogPosts } from '@/content/blog-posts'

const ease = [0.22, 1, 0.36, 1] as const

export default function Blog() {
  const featuredPost = blogPosts[0]
  const gridPosts = blogPosts.slice(1)

  return (
    <section id="blog" className="section-shell" style={{ background: 'transparent' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 6vw, 80px)',
          paddingRight: 'clamp(24px, 6vw, 80px)',
        }}
      >
        <span
          className="font-display"
          style={{
            fontWeight: 600,
            fontSize: '11px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            display: 'block',
            marginBottom: '24px',
          }}
        >
          BLOG
        </span>

        <h2
          className="font-display"
          style={{
            fontWeight: 700,
            fontSize: 'clamp(32px, 3.5vw, 52px)',
            color: '#FFFFFF',
            textAlign: 'center',
            lineHeight: 1.15,
            maxWidth: '600px',
            margin: '0 auto 16px auto',
          }}
        >
          Insights que fazem
          <br />
          o negócio crescer.
        </h2>

        <p
          className="font-body"
          style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.45)',
            textAlign: 'center',
            marginBottom: '72px',
            lineHeight: 1.5,
          }}
        >
          Marketing, dados e estratégia
          <br />
          para empresários que querem crescer
          <br />
          com método.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
        >
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block"
            style={{ textDecoration: 'none', marginBottom: '24px' }}
          >
            <div
              className="grid grid-cols-1 lg:grid-cols-2"
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '24px',
                padding: 'clamp(30px, 5vw, 56px) clamp(24px, 5vw, 64px)',
                gap: 'clamp(24px, 5vw, 64px)',
                alignItems: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            >
              <div>
                <span
                  className="font-display"
                  style={{
                    fontWeight: 700,
                    fontSize: '10px',
                    letterSpacing: '2px',
                    background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    marginBottom: '20px',
                  }}
                >
                  DESTAQUE
                </span>

                <span
                  className="font-display"
                  style={{
                    fontSize: '11px',
                    color: 'rgba(255,255,255,0.35)',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                    display: 'block',
                  }}
                >
                  {featuredPost.category}
                </span>

                <h3
                  className="font-display"
                  style={{
                    fontWeight: 700,
                    fontSize: 'clamp(24px, 5.5vw, 28px)',
                    color: '#FFFFFF',
                    lineHeight: 1.3,
                    marginBottom: '16px',
                  }}
                >
                  {featuredPost.title}
                </h3>

                <p
                  className="font-body"
                  style={{
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.75,
                    marginBottom: '28px',
                  }}
                >
                  {featuredPost.excerpt}
                </p>

                <div
                  className="font-body"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.3)',
                  }}
                >
                  <span>Mazanga Marketing</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <span
                  className="font-display"
                  style={{
                    fontWeight: 600,
                    fontSize: '14px',
                    background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'block',
                    marginTop: '8px',
                  }}
                >
                  Ler artigo completo →
                </span>
              </div>

              <div
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,93,0,0.08), rgba(140,13,194,0.08))',
                  border: '1px solid rgba(255,93,0,0.1)',
                  borderRadius: '16px',
                  height: 'clamp(200px, 45vw, 280px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  className="font-display"
                  style={{
                    fontWeight: 800,
                    fontSize: 'clamp(84px, 24vw, 120px)',
                    color: '#FFFFFF',
                    opacity: 0.06,
                    lineHeight: 1,
                  }}
                >
                  UTM
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {gridPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block" style={{ textDecoration: 'none' }}>
                <article
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '20px',
                    padding: 'clamp(24px, 5vw, 36px) clamp(20px, 5vw, 32px)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <span
                    className="font-display"
                    style={{
                      fontSize: '11px',
                      color: 'rgba(255,255,255,0.3)',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      marginBottom: '14px',
                    }}
                  >
                    {post.category}
                  </span>

                  <h3
                    className="font-display"
                    style={{
                      fontWeight: 700,
                      fontSize: '18px',
                      color: '#FFFFFF',
                      lineHeight: 1.4,
                      marginBottom: '12px',
                    }}
                  >
                    {post.title}
                  </h3>

                  <p
                    className="font-body"
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.5)',
                      lineHeight: 1.7,
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
                      paddingTop: '20px',
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <span
                      className="font-body"
                      style={{
                        fontSize: '12px',
                        color: 'rgba(255,255,255,0.25)',
                      }}
                    >
                      {post.readTime}
                    </span>
                    <span
                      className="font-display"
                      style={{
                        fontWeight: 600,
                        fontSize: '13px',
                        background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Ler →
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .group:hover > div {
          background: rgba(255, 255, 255, 0.055) !important;
          border-color: rgba(255, 93, 0, 0.2) !important;
          transform: translateY(-2px);
        }

        .group:hover article {
          background: rgba(255, 255, 255, 0.055) !important;
          border-color: rgba(255, 93, 0, 0.15) !important;
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  )
}
