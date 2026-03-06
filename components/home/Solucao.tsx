'use client'

import { motion } from 'framer-motion'

const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number]

const steps = [
  {
    number: '1',
    label: 'NÍVEL 1: FUNDAÇÃO',
    color: '#FF5D00',
    title: 'Projecto de Fundação',
    subtitle: 'Entrada sem compromisso. Primeiros resultados em 60-90 dias.',
    bgGradient: 'linear-gradient(180deg, rgba(255,93,0,0.12) 0%, rgba(255,93,0,0.04) 100%)',
    border: '1px solid rgba(255,93,0,0.2)',
    height: '180px',
  },
  {
    number: '2',
    label: 'NÍVEL 2: OPERAÇÃO',
    color: '#8C0DC2',
    title: 'Operação Recorrente',
    subtitle: 'Para empresas prontas a escalar. Sistema completo a funcionar todos os meses, com leads e vendas previsíveis.',
    bgGradient: 'linear-gradient(180deg, rgba(140,13,194,0.15) 0%, rgba(140,13,194,0.05) 100%)',
    border: '1px solid rgba(140,13,194,0.25)',
    height: '280px',
  },
  {
    number: '3',
    label: 'NÍVEL 3: CRESCIMENTO',
    color: '#008FCD',
    title: 'Parceria Estratégica',
    subtitle: 'Para empresas ambiciosas que querem dominar o mercado. Co-responsabilidade total por resultados.',
    bgGradient: 'linear-gradient(180deg, rgba(0,143,205,0.15) 0%, rgba(0,143,205,0.05) 100%)',
    border: '1px solid rgba(0,143,205,0.25)',
    height: '380px',
  },
]

export default function Solucao() {
  return (
    <section
      id="solucao"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent',
        padding: '120px 0',
      }}
    >
      {/* Orbe laranja — baixo-esquerdo */}
      <div
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-100px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255,93,0,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      {/* Orbe azul — cima-direito */}
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          right: '-80px',
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
          Solução
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="font-display text-center text-white"
          style={{
            fontSize: 'clamp(32px, 3.5vw, 52px)',
            fontWeight: 700,
            lineHeight: '1.15',
            maxWidth: '650px',
            margin: '0 auto 16px',
            fontStyle: 'normal',
          }}
        >
          A tua jornada de crescimento começa aqui.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
          className="font-body text-center"
          style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: '100px',
            fontWeight: 400,
          }}
        >
          Cada empresa entra no nível certo e evolui naturalmente para o seguinte.
        </motion.p>

        {/* Staircase Container */}
        <div
          style={{
            width: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            gap: '0',
            height: '420px',
            marginBottom: '56px',
          }}
        >
          {/* Progress line background */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.2, delay: 0.2, ease: easeOut }}
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '100%',
              height: '2px',
              background: 'linear-gradient(90deg, #FF5D00, #8C0DC2, #008FCD)',
              zIndex: 0,
            }}
          />

          {/* Steps */}
          {steps.map((step, i) => (
            <div key={i} style={{ position: 'relative', width: 'calc(33.33% - 2px)' }}>
              {/* Step div */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.25,
                  ease: easeOut,
                }}
                style={{
                  height: step.height,
                  background: step.bgGradient,
                  border: step.border,
                  borderBottom: 'none',
                  borderRadius: '16px 16px 0 0',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  position: 'relative',
                  zIndex: 1,
                  overflow: 'hidden',
                }}
              >
                {/* Step number (decorative) */}
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: '64px',
                    lineHeight: '1',
                    opacity: 0.08,
                    color: '#FFFFFF',
                    position: 'absolute',
                    bottom: '24px',
                    right: '24px',
                  }}
                >
                  {step.number}
                </div>

                {/* Label */}
                <p
                  className="font-display font-700 uppercase"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.25em',
                    color: step.color,
                    marginBottom: '16px',
                    fontStyle: 'normal',
                  }}
                >
                  {step.label}
                </p>

                {/* Title */}
                <p
                  className="font-display"
                  style={{
                    fontWeight: 700,
                    fontSize: '20px',
                    color: '#FFFFFF',
                    lineHeight: '1.3',
                    marginBottom: '12px',
                    fontStyle: 'normal',
                  }}
                >
                  {step.title}
                </p>

                {/* Subtitle */}
                <p
                  className="font-body"
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: '1.6',
                    maxWidth: '220px',
                    fontWeight: 400,
                  }}
                >
                  {step.subtitle}
                </p>
              </motion.div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + i * 0.25,
                    ease: easeOut,
                  }}
                  style={{
                    position: 'absolute',
                    top: '-18px',
                    right: '-18px',
                    width: '36px',
                    height: '36px',
                    background:
                      i === 0
                        ? 'linear-gradient(135deg, #FF5D00, #8C0DC2)'
                        : 'linear-gradient(135deg, #8C0DC2, #008FCD)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '16px',
                    zIndex: 10,
                    fontWeight: 'bold',
                  }}
                >
                  ↗
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center' }}>
          <p
            className="font-body"
            style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '24px',
              fontWeight: 400,
            }}
          >
            Não importa onde estás agora.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: '15px',
              color: '#FFFFFF',
              padding: '14px 32px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onClick={() => {
              window.location.href = '/contacto'
            }}
          >
            Descobre o teu nível →
          </motion.button>
        </div>
      </div>
    </section>
  )
}
