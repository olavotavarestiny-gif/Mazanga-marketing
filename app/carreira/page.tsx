import type { Metadata } from 'next'
import PageGradientBackground from '@/components/layout/PageGradientBackground'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Carreira | Mazanga Marketing',
  description:
    'Página de carreira da Mazanga Marketing. Acompanha novas oportunidades e envia o teu perfil para futuras vagas na área de marketing digital.',
  path: '/carreira',
  keywords: [
    'carreira marketing angola',
    'vagas marketing digital angola',
    'trabalhar com marketing luanda',
  ],
})

const applicationEmail = 'recrutamento@mazanga.digital'

const jobs = [
  {
    title: 'Designer Gráfico',
    description:
      'Criar peças visuais para redes sociais, anúncios digitais, apresentações, propostas comerciais e materiais institucionais da Mazanga e dos seus clientes.',
    responsibilities: [
      'Criar designs para redes sociais',
      'Desenvolver criativos para campanhas e anúncios',
      'Criar carrosséis, stories, thumbnails e layouts comerciais',
      'Apoiar na criação de apresentações e propostas',
      'Adaptar peças para diferentes formatos digitais',
    ],
    profile: [
      'Bom gosto visual',
      'Domínio de Canva, Photoshop, Illustrator ou Figma',
      'Atenção ao detalhe',
      'Organização e cumprimento de prazos',
      'Criatividade com foco em comunicação e resultados',
    ],
  },
  {
    title: 'Social Media Specialist',
    description:
      'Planear, organizar e acompanhar a presença digital da Mazanga e dos seus clientes nas redes sociais.',
    responsibilities: [
      'Criar calendários de conteúdo',
      'Desenvolver ideias para posts, reels, stories e campanhas',
      'Acompanhar métricas de redes sociais',
      'Coordenar publicações com designers e editores',
      'Garantir consistência de marca e comunicação',
    ],
    profile: [
      'Boa escrita',
      'Conhecimento de Instagram, Facebook, TikTok e LinkedIn',
      'Organização',
      'Capacidade de analisar métricas',
      'Criatividade e visão estratégica',
    ],
  },
  {
    title: 'LinkedIn Specialist',
    description:
      'Desenvolver estratégias de posicionamento, autoridade e prospecção no LinkedIn para a Mazanga e para clientes B2B.',
    responsibilities: [
      'Criar estratégias de conteúdo para LinkedIn',
      'Otimizar perfis pessoais e páginas empresariais',
      'Apoiar campanhas de autoridade e relacionamento B2B',
      'Criar ideias para posts, artigos e mensagens de conexão',
      'Apoiar ações de prospecção e networking digital',
    ],
    profile: [
      'Conhecimento sólido de LinkedIn',
      'Boa escrita profissional',
      'Interesse por vendas B2B e posicionamento de autoridade',
      'Capacidade estratégica',
      'Organização e atenção ao detalhe',
    ],
  },
  {
    title: 'Gestor de Projeto',
    description:
      'Organizar tarefas, acompanhar entregas, coordenar a equipa e garantir que os projetos avançam com clareza, qualidade e dentro dos prazos.',
    responsibilities: [
      'Organizar tarefas e prazos',
      'Acompanhar o progresso dos projetos',
      'Fazer ponte entre equipa, clientes e direção',
      'Garantir cumprimento de entregas',
      'Criar relatórios simples de acompanhamento',
    ],
    profile: [
      'Organização forte',
      'Boa comunicação',
      'Capacidade de liderança',
      'Atenção ao detalhe',
      'Facilidade em resolver problemas',
      'Responsabilidade com prazos',
    ],
  },
  {
    title: 'Assistente',
    description:
      'Apoiar a equipa e a direção em tarefas administrativas, organização interna, comunicação e acompanhamento operacional.',
    responsibilities: [
      'Organizar documentos e informações',
      'Apoiar no agendamento de reuniões',
      'Acompanhar tarefas internas',
      'Responder mensagens e apoiar processos administrativos',
      'Dar suporte à equipa nas operações do dia a dia',
    ],
    profile: [
      'Organização',
      'Boa comunicação',
      'Responsabilidade',
      'Discrição',
      'Proatividade',
      'Vontade de aprender e crescer',
    ],
  },
  {
    title: 'SDR — Sales Development Representative',
    description:
      'Identificar oportunidades comerciais, contactar potenciais clientes, qualificar leads e marcar reuniões para a equipa comercial.',
    responsibilities: [
      'Prospectar potenciais clientes',
      'Enviar mensagens e emails comerciais',
      'Qualificar leads',
      'Marcar reuniões comerciais',
      'Fazer follow-up com oportunidades em aberto',
      'Atualizar informações no CRM',
    ],
    profile: [
      'Boa comunicação',
      'Interesse por vendas e marketing',
      'Persistência',
      'Organização',
      'Capacidade de lidar com metas',
      'Vontade de aprender sobre prospecção B2B',
    ],
  },
]

function getApplicationHref(title: string) {
  return `mailto:${applicationEmail}?subject=${encodeURIComponent(`Candidatura - ${title}`)}`
}

export default function CarreiraPage() {
  return (
    <PageGradientBackground>
      <section
        style={{
          paddingTop: 'var(--page-top)',
          paddingBottom: 'var(--shell-y)',
        }}
      >
        <div className="shell-container">
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
              display: 'block',
              marginBottom: '22px',
            }}
          >
            Carreira
          </span>

          <h1
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: 'clamp(32px, 8vw, 62px)',
              lineHeight: 1.1,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              maxWidth: '900px',
              marginBottom: '18px',
            }}
          >
            Junta-te ao ecossistema da Mazanga.
          </h1>

          <p
            className="font-body"
            style={{
              fontSize: 'clamp(16px, 4.5vw, 18px)',
              color: 'rgba(255,255,255,0.52)',
              lineHeight: 1.75,
              maxWidth: '760px',
              marginBottom: 'clamp(36px, 7vw, 56px)',
            }}
          >
            Temos novas oportunidades abertas para perfis que querem crescer connosco e contribuir
            para projetos de marketing, vendas e crescimento empresarial.
          </p>

          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{
              gap: '20px',
              marginBottom: 'clamp(28px, 6vw, 44px)',
            }}
          >
            {jobs.map((job) => (
              <article
                key={job.title}
                className="rounded-[20px] border"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.09)',
                  padding: 'clamp(24px, 4vw, 34px)',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '100%',
                }}
              >
                <h2
                  className="font-display"
                  style={{
                    fontWeight: 700,
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                    marginBottom: '14px',
                  }}
                >
                  {job.title}
                </h2>

                <p
                  className="font-body"
                  style={{
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.58)',
                    lineHeight: 1.7,
                    marginBottom: '24px',
                  }}
                >
                  {job.description}
                </p>

                <div style={{ display: 'grid', gap: '22px', marginBottom: '28px' }}>
                  <div>
                    <h3
                      className="font-display"
                      style={{
                        fontWeight: 700,
                        fontSize: '13px',
                        color: '#FFFFFF',
                        letterSpacing: '1.8px',
                        textTransform: 'uppercase',
                        marginBottom: '12px',
                      }}
                    >
                      Responsabilidades
                    </h3>
                    <ul style={{ paddingLeft: '18px' }}>
                      {job.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="font-body"
                          style={{
                            fontSize: '14px',
                            color: 'rgba(255,255,255,0.56)',
                            lineHeight: 1.7,
                            marginBottom: '7px',
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3
                      className="font-display"
                      style={{
                        fontWeight: 700,
                        fontSize: '13px',
                        color: '#FFFFFF',
                        letterSpacing: '1.8px',
                        textTransform: 'uppercase',
                        marginBottom: '12px',
                      }}
                    >
                      Perfil ideal
                    </h3>
                    <ul style={{ paddingLeft: '18px' }}>
                      {job.profile.map((item) => (
                        <li
                          key={item}
                          className="font-body"
                          style={{
                            fontSize: '14px',
                            color: 'rgba(255,255,255,0.56)',
                            lineHeight: 1.7,
                            marginBottom: '7px',
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={getApplicationHref(job.title)}
                  className="font-display inline-flex items-center justify-center"
                  style={{
                    height: '46px',
                    padding: '0 22px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#FFFFFF',
                    background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
                    marginTop: 'auto',
                    width: 'fit-content',
                  }}
                >
                  Candidatar-me
                </a>
              </article>
            ))}
          </div>

          <div
            className="rounded-[20px] border"
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderColor: 'rgba(255,255,255,0.09)',
              maxWidth: '760px',
              padding: 'clamp(26px, 4vw, 40px)',
            }}
          >
            <p
              className="font-body"
              style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.62)',
                lineHeight: 1.75,
                marginBottom: '24px',
              }}
            >
              Se queres trabalhar connosco no futuro, envia o teu CV e portfólio para o nosso email de
              recrutamento.
            </p>

            <a
              href={`mailto:${applicationEmail}`}
              className="font-display inline-flex items-center justify-center"
              style={{
                height: '46px',
                padding: '0 22px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '14px',
                color: '#FFFFFF',
                background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
              }}
            >
              Enviar candidatura por email
            </a>
          </div>
        </div>
      </section>
    </PageGradientBackground>
  )
}
