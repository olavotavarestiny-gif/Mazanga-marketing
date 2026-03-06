'use client'

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const cases = [
  {
    id: 1,
    location: 'Suíça · 6 meses de parceria',
    title: 'Escola Chave do Milhão',
    description: 'Instituição internacional focada em inteligência emocional e desenvolvimento pessoal. A Mazanga estruturou e executou uma estratégia de marketing 360º — desde o posicionamento até à execução operacional. O resultado foi consistência real na geração de público qualificado e impacto financeiro mensurável num mercado exigente.',
    metrics: [
      { value: '40K CHF', label: 'Faturados' },
      { value: '3', label: 'Eventos realizados' },
      { value: '100+', label: 'Participantes por evento' },
    ],
  },
  {
    id: 2,
    location: 'Suíça · Portugal · Brasil',
    title: 'Força Seu Nome é Mulher',
    description: 'Evento internacional de grande escala focado no desenvolvimento pessoal e profissional de mulheres. A Mazanga foi responsável pela produção audiovisual estratégica — captação, edição e estruturação de materiais para comunicação e amplificação do evento em múltiplos mercados e culturas.',
    metrics: [
      { value: '3', label: 'Países' },
      { value: 'Int\'l', label: 'Audiência' },
      { value: '100%', label: 'Identidade consistente' },
    ],
    video: 'https://www.youtube.com/embed/TqAKNp_oyNA',
  },
  {
    id: 3,
    location: 'Genebra, Suíça',
    title: 'Vitoria Soin du Corps',
    description: 'Salão de estética em Genebra num segmento onde imagem e perceção de qualidade são decisivas. A Mazanga produziu conteúdos visuais profissionais para valorizar a experiência do espaço, os serviços e o posicionamento da marca num mercado altamente competitivo.',
    metrics: [
      { value: '↑', label: 'Credibilidade visual' },
      { value: 'GVA', label: 'Mercado Genebra' },
      { value: '100%', label: 'Conteúdo produzido' },
    ],
    video: 'https://www.youtube.com/embed/FIgPXP7oFP0',
  },
]

const gridCases = [
  {
    id: 4,
    location: 'Suíça · Consultoria Financeira',
    title: 'Proxi Conseils',
    description: 'Empresa suíça especializada em consultoria financeira e previdência. A Mazanga estruturou a presença digital, construiu funis de conversão e fortaleceu a autoridade da CEO — resultando num processo estruturado de geração de leads qualificados e comunicação digital coerente.',
  },
  {
    id: 5,
    location: 'Monthey, Suíça · Salão',
    title: 'Hairstyling by Cidalia',
    description: 'Salão de cabeleireiro em Monthey. A Mazanga implementou gestão de redes sociais, produção de conteúdos visuais e campanhas de anúncios online com o objetivo de aumentar a procura pelos serviços em pelo menos 20%, reforçando posicionamento e atraindo novos clientes.',
  },
]

export default function Resultados() {
  return (
    <section className="section-shell" style={{ background: 'transparent' }}>
      <div className="shell-container">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
          className="font-display font-600 uppercase text-center"
          style={{
            fontSize: '11px',
            letterSpacing: '0.3em',
            background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '24px',
            display: 'block',
          }}
        >
          Resultados
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
          className="font-display font-700 text-center"
          style={{
            fontSize: 'clamp(32px, 3.5vw, 52px)',
            color: '#FFFFFF',
            lineHeight: '1.15',
            maxWidth: '600px',
            margin: '0 auto 16px auto',
          }}
        >
          Resultados que<br />falam por si.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="font-body text-center"
          style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: '1.6',
            marginBottom: 'clamp(44px, 8vw, 80px)',
          }}
        >
          Clientes reais. Números reais. Mercados exigentes.
        </motion.p>

        {/* Featured Cases */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 8vw, 80px)', marginBottom: 'clamp(48px, 8vw, 80px)' }}>
          {cases.map((caseItem, i) => {
            const isEven = i % 2 === 0
            const hasVideo = caseItem.video

            return (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease }}
                className={hasVideo ? 'grid grid-cols-1 lg:grid-cols-2 items-center' : 'grid grid-cols-1'}
                style={{
                  gap: 'clamp(24px, 6vw, 64px)',
                }}
              >
                {/* Text Side */}
                <div style={!isEven && hasVideo ? { order: 2 } : {}}>
                  <p
                    className="font-body"
                    style={{
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.35)',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      marginBottom: '16px',
                    }}
                  >
                    {caseItem.location}
                  </p>

                  <h3
                    className="font-display font-700"
                    style={{
                      fontSize: '28px',
                      color: '#FFFFFF',
                      marginBottom: '16px',
                    }}
                  >
                    {caseItem.title}
                  </h3>

                  <p
                    className="font-body"
                    style={{
                      fontSize: '15px',
                      color: 'rgba(255,255,255,0.6)',
                      lineHeight: '1.8',
                      marginBottom: '28px',
                    }}
                  >
                    {caseItem.description}
                  </p>

                  {/* Metrics */}
                  <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                    {caseItem.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p
                          className="font-display font-800"
                          style={{
                            fontSize: '32px',
                            background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {metric.value}
                        </p>
                        <p
                          className="font-body font-700 uppercase"
                          style={{
                            fontSize: '12px',
                            color: 'rgba(255,255,255,0.4)',
                            letterSpacing: '0.1em',
                            marginTop: '4px',
                          }}
                        >
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video Side */}
                {hasVideo && (
                  <div style={!isEven ? { order: 1 } : {}}>
                    <div
                      style={{
                        width: '100%',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        position: 'relative',
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        aspectRatio: '16/9',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          inset: '-20px',
                          background: 'radial-gradient(ellipse at center, rgba(255,93,0,0.08), transparent 70%)',
                          zIndex: -1,
                          pointerEvents: 'none',
                        }}
                      />
                      <iframe
                        width="100%"
                        height="100%"
                        src={caseItem.video}
                        title={caseItem.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        style={{ display: 'block', position: 'absolute', top: 0, left: 0 }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
            margin: 'clamp(44px, 8vw, 80px) 0',
          }}
        />

        {/* Grid Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {gridCases.map((caseItem, i) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px',
                padding: '40px 36px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.055)'
                e.currentTarget.style.borderColor = 'rgba(255,93,0,0.2)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <p
                className="font-body"
                style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.3)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                {caseItem.location}
              </p>

              <h3
                className="font-display font-700"
                style={{
                  fontSize: '22px',
                  color: '#FFFFFF',
                  marginBottom: '16px',
                }}
              >
                {caseItem.title}
              </h3>

              <p
                className="font-body"
                style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: '1.75',
                }}
              >
                {caseItem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
