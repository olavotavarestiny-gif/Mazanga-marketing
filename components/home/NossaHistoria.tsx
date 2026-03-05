'use client'

import { motion, useInView, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return

    let animationFrame: NodeJS.Timeout
    const startTime = Date.now()
    const duration = 1500

    const updateDisplay = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const value = Math.round(easeProgress * to)
      setDisplay(value.toString())

      if (progress < 1) {
        animationFrame = setTimeout(updateDisplay, 16)
      }
    }

    updateDisplay()
    return () => clearTimeout(animationFrame)
  }, [inView, to])

  return <span ref={ref}>{display}{suffix}</span>
}

const timelineItems = [
  {
    period: '2023 — 2024',
    color: '#FF5D00',
    title: 'Academia Traço Único',
    description: 'Escola de agronegócio onde o marketing digital foi usado para gerar previsibilidade de matrículas e crescimento consistente de turmas.',
  },
  {
    period: '2025',
    color: '#8C0DC2',
    title: 'Nasce a Mazanga',
    description: 'Fundada na Suíça por Olavo Mazanga com foco em resolver um problema real: empresários dependentes do boca-a-boca sem qualquer previsibilidade comercial.',
  },
  {
    period: '2025 — 2026',
    color: '#008FCD',
    title: '20+ Clientes. 5 Países.',
    description: 'Suíça, França, Itália, Portugal e Brasil. Sectores distintos, o mesmo resultado: sistemas que geram receita previsível.',
  },
  {
    period: '2026 →',
    isGradient: true,
    title: 'Angola e o Mundo',
    description: 'Expansão para Angola com a mesma metodologia validada internacionalmente. Olavo Mazanga já palestrou em 2 países sobre marketing e crescimento digital.',
  },
]

export default function NossaHistoria() {
  const timelineLineRef = useRef<HTMLDivElement>(null)
  const timelineInView = useInView(timelineLineRef, { once: true, margin: '-60px' })

  return (
    <section style={{ background: 'transparent', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Gradient orbs background */}
      <div
        style={{
          position: 'absolute',
          top: '-200px',
          right: '-100px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(140,13,194,0.25), transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,143,205,0.2), transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(140,13,194,0.15), transparent 70%)',
          filter: 'blur(120px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '80px', paddingRight: '80px', position: 'relative', zIndex: 1 }}>
        {/* BLOCO 1: Label + Title + Subtitle */}
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
          A Nossa História
        </motion.p>

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
            maxWidth: '700px',
            margin: '0 auto 16px auto',
          }}
        >
          Nascemos da necessidade<br />que vimos no mercado.
        </motion.h2>

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
            marginBottom: '80px',
            maxWidth: '800px',
            margin: '0 auto',
            paddingTop: '16px',
          }}
        >
          De uma escola de agronegócio<br />à assessoria de crescimento<br />digital de referência.
        </motion.p>

        {/* BLOCO 2: Origin Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease }}
          style={{
            maxWidth: '800px',
            margin: '0 auto 96px auto',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '80px',
              fontFamily: 'Syne, sans-serif',
              background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: 0.3,
              lineHeight: '0.5',
              display: 'block',
              marginBottom: '24px',
            }}
          >
            "
          </div>
          <p
            className="font-body"
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: '1.9',
              fontStyle: 'italic',
            }}
          >
            Antes da Mazanga existir como agência, o seu fundador Olavo Mazanga já usava o marketing como ferramenta de crescimento real. Na Academia Traço Único — escola de agronegócio fundada em 2023 — o marketing digital era o motor que enchia as turmas e garantia previsibilidade num setor onde o boca-a-boca era a única estratégia conhecida. Foi aí que a metodologia nasceu: não como teoria, mas como necessidade.
          </p>
        </motion.div>

        {/* BLOCO 3: Timeline */}
        <div style={{ width: '100%', position: 'relative', marginBottom: '96px' }}>
          {/* Connecting line */}
          <motion.div
            ref={timelineLineRef}
            initial={{ width: '0%' }}
            animate={timelineInView ? { width: '100%' } : { width: '0%' }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
            style={{
              position: 'absolute',
              top: '32px',
              left: 0,
              height: '2px',
              background: 'linear-gradient(90deg, #FF5D00, #8C0DC2, #008FCD, rgba(0,143,205,0.2))',
              zIndex: 0,
            }}
          />

          {/* Timeline items */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 0,
              position: 'relative',
              zIndex: 1,
            }}
          >
            {timelineItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '0 16px',
                }}
              >
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={timelineInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.2 + 0.2 }}
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    marginBottom: '24px',
                    position: 'relative',
                    zIndex: 2,
                    background: item.isGradient
                      ? 'linear-gradient(135deg, #FF5D00, #8C0DC2)'
                      : item.color,
                    boxShadow: item.isGradient
                      ? '0 0 20px rgba(255,93,0,0.4)'
                      : `0 0 16px ${item.color}80`,
                  }}
                />

                {/* Year/period */}
                <p
                  className="font-display font-700 uppercase"
                  style={{
                    fontSize: '12px',
                    letterSpacing: '2px',
                    color: item.isGradient
                      ? 'transparent'
                      : item.color,
                    background: item.isGradient
                      ? 'linear-gradient(135deg, #FF5D00, #8C0DC2)'
                      : 'transparent',
                    WebkitBackgroundClip: item.isGradient ? 'text' : 'unset',
                    WebkitTextFillColor: item.isGradient ? 'transparent' : 'unset',
                    backgroundClip: item.isGradient ? 'text' : 'unset',
                    marginBottom: '12px',
                  }}
                >
                  {item.period}
                </p>

                {/* Title */}
                <p
                  className="font-display font-700"
                  style={{
                    fontSize: '17px',
                    color: '#FFFFFF',
                    marginBottom: '10px',
                  }}
                >
                  {item.title}
                </p>

                {/* Description */}
                <p
                  className="font-body"
                  style={{
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: '1.65',
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCO 4: Impact Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
            marginBottom: '96px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '24px',
            overflow: 'hidden',
          }}
        >
          {[
            { value: 20, suffix: '+', label: 'Clientes servidos' },
            { value: 5, suffix: '', label: 'Países' },
            { value: 2, suffix: '', label: 'Países onde palestrámos' },
          ].map((metric, i) => (
            <div
              key={i}
              style={{
                padding: '48px 40px',
                textAlign: 'center',
                background: 'transparent',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              <p
                className="font-display font-800"
                style={{
                  fontSize: 'clamp(40px, 5vw, 64px)',
                  background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                <Counter to={metric.value} suffix={metric.suffix} />
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.4)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                }}
              >
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* BLOCO 5: CEO Quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease }}
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(255,93,0,0.07) 0%, rgba(140,13,194,0.07) 100%)',
            border: '1px solid rgba(255,93,0,0.15)',
            borderRadius: '24px',
            padding: '56px 64px',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <p
            className="font-body"
            style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: '1.8',
              fontStyle: 'italic',
              marginBottom: '32px',
            }}
          >
            Crescer no mercado suíço — um dos mais exigentes do mundo — provou que a metodologia funciona. Angola tem empresas ambiciosas que merecem o mesmo nível de marketing. É para isso que existimos.
          </p>

          {/* Decorative line */}
          <div
            style={{
              width: '48px',
              height: '2px',
              background: 'linear-gradient(90deg, #FF5D00, #8C0DC2)',
              margin: '0 auto 20px auto',
            }}
          />

          <p
            className="font-display font-700"
            style={{
              fontSize: '16px',
              color: '#FFFFFF',
              display: 'block',
              marginBottom: '4px',
            }}
          >
            Olavo Mazanga
          </p>

          <p
            className="font-body"
            style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Fundador & CEO, Mazanga Marketing
          </p>
        </motion.div>
      </div>
    </section>
  )
}
