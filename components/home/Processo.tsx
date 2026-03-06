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
      className="section-shell"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent',
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
        className="shell-container"
        style={{
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
            margin: '0 auto clamp(40px, 7vw, 80px)',
            fontStyle: 'normal',
          }}
        >
          Da primeira reunião aos primeiros resultados
        </motion.h2>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
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
                position: 'relative',
              }}
            >
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
          ))}
        </div>
      </div>
    </section>
  )
}
