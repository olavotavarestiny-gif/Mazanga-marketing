'use client'

import { motion } from 'framer-motion'

const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number]

const steps = [
  {
    num: '01',
    title: 'Diagnóstico',
    desc: 'Analisamos o teu negócio, mercado, concorrência e oportunidades. Identificamos exactamente onde estás a perder clientes.',
    color: '#FF5D00',
  },
  {
    num: '02',
    title: 'Estratégia',
    desc: 'Desenhamos o plano de crescimento com metas claras, KPIs, timeline e investimento necessário. Sem surpresas.',
    color: '#8C0DC2',
  },
  {
    num: '03',
    title: 'Implementação',
    desc: 'Construímos e lançamos tudo: site, campanhas, CRM, automações. Setup completo em 30-45 dias.',
    color: '#008FCD',
  },
  {
    num: '04',
    title: 'Optimização',
    desc: 'Monitorizamos, testamos, melhoramos. Relatórios transparentes. Decisões baseadas em dados, nunca em feeling.',
    color: '#FF5D00',
  },
]

export default function Processo() {
  return (
    <section
      id="processo"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent',
        padding: '120px 0',
      }}
    >
      {/* Orbe laranja — baixo-direito */}
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          right: '-80px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255,93,0,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      {/* Orbe azul — cima-esquerdo */}
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          left: '-100px',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(0,143,205,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="font-display uppercase text-center"
          style={{
            fontWeight: 600,
            fontSize: '11px',
            letterSpacing: '0.3em',
            background: 'linear-gradient(135deg, #FF5D00 0%, #8C0DC2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontStyle: 'normal',
            marginBottom: '24px',
            display: 'block',
          }}
        >
          Processo
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="font-display text-center text-white"
          style={{
            fontSize: 'clamp(32px, 3.5vw, 48px)',
            fontWeight: 700,
            lineHeight: '1.2',
            maxWidth: '700px',
            margin: '0 auto 80px',
            fontStyle: 'normal',
          }}
        >
          Da primeira reunião aos primeiros resultados
        </motion.h2>

        {/* Steps — horizontal with arrows */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '0',
            flexWrap: 'wrap',
          }}
          className="lg:flex-nowrap"
        >
          {steps.map((step, i) => (
            <div key={step.num} style={{ display: 'flex', alignItems: 'flex-start', gap: '0' }}>
              {/* Step */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: easeOut,
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  flex: 1,
                  minWidth: '200px',
                  maxWidth: '220px',
                  position: 'relative',
                }}
              >
                {/* Number box */}
                <div
                  className="font-display font-800"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: `${step.color}15`,
                    border: `1px solid ${step.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    color: step.color,
                    marginBottom: '20px',
                    fontStyle: 'normal',
                    flexShrink: 0,
                  }}
                >
                  {step.num}
                </div>

                {/* Title */}
                <p
                  className="font-display font-700"
                  style={{
                    fontSize: '18px',
                    color: '#FFFFFF',
                    marginBottom: '12px',
                    fontStyle: 'normal',
                  }}
                >
                  {step.title}
                </p>

                {/* Description */}
                <p
                  className="font-body"
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: '1.65',
                    fontWeight: 400,
                  }}
                >
                  {step.desc}
                </p>
              </motion.div>

              {/* Arrow after step (except last) */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + i * 0.1,
                    ease: easeOut,
                  }}
                  className="hidden lg:flex"
                  style={{
                    color: 'rgba(255,255,255,0.2)',
                    fontSize: '20px',
                    alignItems: 'center',
                    height: '56px',
                    flexShrink: 0,
                    paddingRight: '8px',
                  }}
                >
                  →
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
