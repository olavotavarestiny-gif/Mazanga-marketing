import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Camera, Target, Users } from 'lucide-react'
import CtaFinal from '@/components/home/CtaFinal'
import PageGradientBackground from '@/components/layout/PageGradientBackground'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Equipa | Mazanga Marketing',
  description:
    'Conhece a equipa da Mazanga Marketing: profissionais focados em estratégia, criatividade, dados e crescimento para empresas em Angola.',
  path: '/equipa',
  keywords: [
    'equipa mazanga marketing',
    'agencia marketing angola equipa',
    'marketing digital luanda equipa',
    'consultores marketing angola',
  ],
})

const teamMembers = [
  {
    name: 'Jeovany Gabriel',
    role: 'Designer Gráfico',
    image: '/images/team/DJI_20260615133822_0132_D.webp',
    imagePosition: '50% 28%',
  },
  {
    name: 'Belmiro Quipipa',
    role: 'Content Operator',
    image: '/images/team/DJI_20260615134136_0151_D.webp',
    imagePosition: '50% 18%',
  },
  {
    name: 'Olavo Mazanga',
    role: 'Fundador',
    image: '/images/team/IMG_2572.webp',
    imagePosition: '50% 20%',
  },
  {
    name: 'Iracelma Martins',
    role: 'Content Creator',
    image: '/images/team/1776292974005.jpeg',
    imagePosition: '50% 50%',
  },
]

const principles = [
  {
    icon: Target,
    title: 'Foco no resultado',
    description: 'Cada decisão parte de uma meta clara: gerar procura, oportunidades e crescimento sustentável.',
  },
  {
    icon: Users,
    title: 'Proximidade com o cliente',
    description: 'Trabalhamos perto das equipas comerciais para entender o mercado antes de propor soluções.',
  },
  {
    icon: Camera,
    title: 'Execução cuidada',
    description: 'Da estratégia ao visual final, tratamos cada entrega como uma peça importante do sistema.',
  },
]

export default function EquipaPage() {
  return (
    <PageGradientBackground>
      <main>
        <section
          className="relative"
          style={{
            paddingTop: 'var(--page-top)',
            paddingBottom: 'clamp(64px, 9vw, 112px)',
          }}
        >
          <div
            className="absolute left-1/2 pointer-events-none"
            style={{
              top: 'clamp(72px, 10vw, 120px)',
              width: 'min(760px, 82vw)',
              height: '360px',
              transform: 'translateX(-50%)',
              borderRadius: '50%',
              background:
                'radial-gradient(ellipse at center, rgba(255,93,0,0.16) 0%, rgba(140,13,194,0.14) 38%, rgba(0,143,205,0.08) 58%, transparent 72%)',
              filter: 'blur(46px)',
            }}
          />
          <div
            className="relative"
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              paddingLeft: 'var(--shell-x)',
              paddingRight: 'var(--shell-x)',
            }}
          >
            <div style={{ width: '100%' }}>
              <div
                style={{
                  width: 'min(100%, 920px)',
                  margin: '0 auto clamp(44px, 7vw, 76px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <h1
                  className="font-display font-800"
                  style={{
                    fontSize: 'clamp(38px, 8vw, 72px)',
                    lineHeight: 1.02,
                    letterSpacing: '-0.035em',
                    color: '#FFFFFF',
                    margin: '0 auto 24px',
                    maxWidth: '860px',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  A equipa por trás do{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    crescimento
                  </span>
                  .
                </h1>

                <p
                  className="font-body"
                  style={{
                    fontSize: 'clamp(16px, 4vw, 18px)',
                    lineHeight: 1.75,
                    color: 'rgba(255,255,255,0.58)',
                    maxWidth: '720px',
                    width: '100%',
                    margin: '0 auto 34px',
                    textAlign: 'center',
                  }}
                >
                  Somos uma equipa multidisciplinar que combina estratégia, criatividade, dados e
                  execução para ajudar empresas angolanas a crescer com mais previsibilidade.
                </p>

                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 font-display font-700 transition-all duration-200"
                  style={{
                    padding: '14px 26px',
                    borderRadius: '8px',
                    fontSize: '15px',
                    background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
                    color: '#FFFFFF',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  Falar com a equipa
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                {teamMembers.map((member) => (
                  <article
                    key={member.image}
                    className="group relative"
                    style={{
                      borderRadius: '22px',
                      padding: '1px',
                      background:
                        'linear-gradient(145deg, rgba(255,93,0,0.62), rgba(140,13,194,0.42), rgba(0,143,205,0.24))',
                      boxShadow: '0 18px 70px rgba(0,0,0,0.34)',
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
                      style={{
                        borderRadius: '22px',
                        background:
                          'linear-gradient(145deg, rgba(255,93,0,0.34), rgba(140,13,194,0.28), rgba(0,143,205,0.18))',
                      }}
                    />

                    <div
                      className="relative overflow-hidden transition-all duration-500 group-hover:-translate-y-2"
                      style={{
                        borderRadius: '21px',
                        background:
                          'linear-gradient(180deg, rgba(17,17,17,0.96), rgba(7,7,10,0.98))',
                        border: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      <div
                        className="relative overflow-hidden"
                        style={{
                          aspectRatio: '0.82',
                          borderRadius: '20px 20px 0 0',
                          background: 'rgba(255,255,255,0.04)',
                        }}
                      >
                        <Image
                          src={member.image}
                          alt={`${member.name}, ${member.role}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          style={{ objectPosition: member.imagePosition }}
                        />
                        <div
                          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          style={{
                            background:
                              'linear-gradient(180deg, rgba(255,93,0,0.08), rgba(140,13,194,0.12))',
                          }}
                        />
                      </div>

                      <div style={{ padding: '22px 20px 24px' }}>
                        <h2 className="font-display font-700 text-white text-[21px] leading-tight mb-2">
                          {member.name}
                        </h2>
                        <p
                          className="font-body text-[14px] leading-relaxed"
                          style={{ color: 'rgba(255,255,255,0.58)' }}
                        >
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ paddingBottom: 'clamp(72px, 10vw, 128px)' }}>
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              paddingLeft: 'var(--shell-x)',
              paddingRight: 'var(--shell-x)',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="border"
                  style={{
                    borderRadius: '16px',
                    background: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.08)',
                    padding: 'clamp(22px, 4vw, 30px)',
                  }}
                >
                  <div
                    className="flex items-center justify-center mb-5"
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      color: '#FF5D00',
                      background: 'rgba(255,93,0,0.1)',
                      border: '1px solid rgba(255,93,0,0.18)',
                    }}
                  >
                    <principle.icon size={19} />
                  </div>
                  <h2 className="font-display font-700 text-white text-[22px] leading-tight mb-3">
                    {principle.title}
                  </h2>
                  <p className="font-body text-[15px] leading-relaxed text-white/56">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CtaFinal />
    </PageGradientBackground>
  )
}
