'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const services = [
  {
    icon: '🎯',
    title: 'Mídia Paga',
    teaser: 'Anúncios que geram leads qualificados, não apenas cliques.',
    description: 'Gerimos as tuas campanhas no Meta Ads e Google Ads com uma abordagem científica — testes estruturados, optimização contínua e decisões baseadas em dados reais. Cada kwanza investido é rastreado e justificado com resultados mensuráveis.',
    oneoff: {
      title: 'Campanha de Lançamento',
      desc: 'Setup completo de campanhas, criativos iniciais, configuração de tracking e 60 dias de operação. Ideal para validar o mercado rapidamente.',
    },
    mensal: {
      title: 'Gestão Contínua',
      desc: 'Operação mensal de todas as campanhas, testes A/B semanais, optimização de budget e relatório executivo mensal com insights accionáveis.',
    },
  },
  {
    icon: '🎨',
    title: 'Conteúdo Visual',
    teaser: 'Criativos que param o scroll e convertem a atenção em acção.',
    description: 'Produzimos conteúdo visual estratégico — não apenas bonito, mas desenhado para converter. Vídeos, imagens e criativos construídos com base nos dados das campanhas para maximizar performance e engagement real.',
    oneoff: {
      title: 'Pack de Criativos',
      desc: 'Produção de um conjunto de criativos para campanha — vídeos curtos, imagens estáticas e variações para teste. Entrega única com briefing estratégico incluído.',
    },
    mensal: {
      title: 'Produção Recorrente',
      desc: 'Produção mensal contínua de conteúdo alinhado com as campanhas activas. Criativos frescos todos os meses para evitar fadiga de anúncio e manter a performance.',
    },
  },
  {
    icon: '💻',
    title: 'Web Design',
    teaser: 'Websites que vendem, não apenas que existem.',
    description: 'Desenvolvemos websites e landing pages optimizados para conversão — não apenas visualmente atractivos, mas construídos para transformar visitantes em leads. Cada página tem um objectivo claro, um funil definido e tracking completo.',
    oneoff: {
      title: 'Website Estratégico',
      desc: 'Desenvolvimento completo do website — arquitectura de informação, design, desenvolvimento, SEO técnico e integração com ferramentas de marketing. Pronto para converter.',
    },
    mensal: {
      title: 'Manutenção e Optimização',
      desc: 'Gestão mensal do website — actualizações, testes de conversão, optimizações técnicas e melhorias baseadas nos dados de comportamento dos visitantes.',
    },
  },
  {
    icon: '⚡',
    title: 'Automações',
    teaser: 'O teu sistema de vendas a trabalhar enquanto dormes.',
    description: 'Implementamos e operamos sistemas de CRM e automação de marketing que eliminam tarefas manuais e garantem que nenhum lead fica sem seguimento. Desde o primeiro contacto até ao fecho da venda, cada etapa é estruturada e automatizada.',
    oneoff: {
      title: 'Setup de CRM e Automações',
      desc: 'Implementação completa do CRM, configuração de pipelines, criação de sequências de follow-up automático e integração com WhatsApp e email. Formação da equipa incluída.',
    },
    mensal: {
      title: 'Operação e Optimização',
      desc: 'Gestão mensal do CRM — monitorização do pipeline, optimização das automações, novos fluxos conforme necessário e relatório de conversão mensal.',
    },
  },
]

export default function Servicos() {
  const [openCard, setOpenCard] = useState<number | null>(null)
  const toggle = (i: number) => setOpenCard(prev => prev === i ? null : i)

  return (
    <section style={{ background: 'transparent', padding: '120px 0' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
        }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
          className="font-display font-700 uppercase text-center"
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
          Serviços
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
            maxWidth: '650px',
            margin: '0 auto 16px auto',
          }}
        >
          Tudo o que precisas,<br />num único parceiro.
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
            marginBottom: '72px',
          }}
        >
          Quatro áreas. Dois modelos de entrega. Um sistema integrado que funciona.
        </motion.p>

        {/* Grid 2x2 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}
          className="lg:grid-cols-2 md:grid-cols-1"
        >
          {services.map((s, i) => {
            const isOpen = openCard === i

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                onClick={() => toggle(i)}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${isOpen ? 'rgba(255,93,0,0.3)' : 'rgba(255,255,255,0.07)'}`,
                  borderRadius: '20px',
                  padding: '40px 36px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  if (!isOpen) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.055)'
                    e.currentTarget.style.borderColor = 'rgba(255,93,0,0.2)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.25)'
                  }
                }}
                onMouseLeave={e => {
                  if (!isOpen) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, rgba(255,93,0,0.15), rgba(140,13,194,0.15))',
                    border: '1px solid rgba(255,93,0,0.2)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    marginBottom: '24px',
                  }}
                >
                  {s.icon}
                </div>

                {/* Title */}
                <h3
                  className="font-display font-700"
                  style={{
                    fontSize: '22px',
                    color: '#FFFFFF',
                    marginBottom: '12px',
                  }}
                >
                  {s.title}
                </h3>

                {/* Teaser */}
                <p
                  className="font-body"
                  style={{
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: '1.6',
                    marginBottom: '28px',
                  }}
                >
                  {s.teaser}
                </p>

                {/* Ver mais trigger */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '13px',
                  }}
                >
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {isOpen ? 'Fechar' : 'Ver mais'}
                  </span>
                  <span
                    style={{
                      transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    →
                  </span>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        style={{
                          marginTop: '28px',
                          paddingTop: '28px',
                          borderTop: '1px solid rgba(255,255,255,0.07)',
                        }}
                      >
                        {/* Full description */}
                        <p
                          className="font-body"
                          style={{
                            fontSize: '15px',
                            color: 'rgba(255,255,255,0.65)',
                            lineHeight: '1.75',
                            marginBottom: '28px',
                          }}
                        >
                          {s.description}
                        </p>

                        {/* Delivery models grid */}
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '16px',
                            marginTop: '8px',
                          }}
                          className="md:grid-cols-1"
                        >
                          {/* ONE-OFF box */}
                          <div
                            style={{
                              background: 'rgba(255,93,0,0.06)',
                              border: '1px solid rgba(255,93,0,0.18)',
                              borderRadius: '14px',
                              padding: '24px',
                            }}
                          >
                            <p
                              className="font-display font-700 uppercase"
                              style={{
                                fontSize: '10px',
                                letterSpacing: '0.2em',
                                color: '#FF5D00',
                                marginBottom: '10px',
                              }}
                            >
                              One-off
                            </p>
                            <p
                              className="font-display font-700"
                              style={{
                                fontSize: '15px',
                                color: '#FFFFFF',
                                marginBottom: '8px',
                              }}
                            >
                              {s.oneoff.title}
                            </p>
                            <p
                              className="font-body"
                              style={{
                                fontSize: '13px',
                                color: 'rgba(255,255,255,0.55)',
                                lineHeight: '1.6',
                              }}
                            >
                              {s.oneoff.desc}
                            </p>
                          </div>

                          {/* MENSAL box */}
                          <div
                            style={{
                              background: 'rgba(140,13,194,0.08)',
                              border: '1px solid rgba(140,13,194,0.2)',
                              borderRadius: '14px',
                              padding: '24px',
                            }}
                          >
                            <p
                              className="font-display font-700 uppercase"
                              style={{
                                fontSize: '10px',
                                letterSpacing: '0.2em',
                                color: '#8C0DC2',
                                marginBottom: '10px',
                              }}
                            >
                              Mensal
                            </p>
                            <p
                              className="font-display font-700"
                              style={{
                                fontSize: '15px',
                                color: '#FFFFFF',
                                marginBottom: '8px',
                              }}
                            >
                              {s.mensal.title}
                            </p>
                            <p
                              className="font-body"
                              style={{
                                fontSize: '13px',
                                color: 'rgba(255,255,255,0.55)',
                                lineHeight: '1.6',
                              }}
                            >
                              {s.mensal.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
