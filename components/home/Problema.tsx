'use client'

import { motion } from 'framer-motion'

const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number]

const problems = [
  {
    title: 'Investem sem medir',
    desc: 'Gastam em marketing sem saber se funciona. Sem métricas, sem ROI, sem dados para decidir.',
  },
  {
    title: 'Fornecedores desconectados',
    desc: 'Designer faz uma coisa, social media outra, tráfego outra. Ninguém fala com ninguém.',
  },
  {
    title: 'Sem CRM nem pipeline',
    desc: 'Vendem mas não sabem prever. Leads perdidos, follow-ups esquecidos, oportunidades desperdiçadas.',
  },
  {
    title: 'Dependência de networking',
    desc: 'Crescimento depende de quem conheces, não de um sistema replicável.',
  },
  {
    title: 'Marketing visto como custo',
    desc: 'Não como investimento. Porque nunca ninguém mostrou o retorno de forma clara.',
  },
  {
    title: 'Não sabem o CAC',
    desc: 'Quanto custa adquirir 1 cliente novo? A maioria não faz ideia.',
  },
]

export default function Problema() {
  return (
    <section
      id="problema"
      className="section-shell"
      style={{
        background: 'transparent',
      }}
    >
      <div className="shell-container">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="font-display uppercase text-center mb-6"
          style={{
            fontWeight: 600,
            fontSize: '11px',
            letterSpacing: '0.3em',
            background: 'linear-gradient(135deg, #FF5D00 0%, #8C0DC2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontStyle: 'normal',
          }}
        >
          Problema
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
            margin: '0 auto 16px',
            fontStyle: 'normal',
          }}
        >
          O marketing da maioria das empresas angolanas está partido
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
            marginBottom: 'clamp(40px, 7vw, 64px)',
          }}
        >
          Reconheces algum destes sinais?
        </motion.p>

        {/* Grid of 6 pain points */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: easeOut,
              }}
              className="group"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: 'clamp(22px, 4vw, 28px) clamp(20px, 4vw, 32px)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = 'rgba(255,255,255,0.055)'
                el.style.borderColor = 'rgba(255,93,0,0.25)'
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 8px 32px rgba(255,93,0,0.08)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = 'rgba(255,255,255,0.03)'
                el.style.borderColor = 'rgba(255,255,255,0.07)'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              {/* Pseudo-element glow */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'radial-gradient(circle at 0 0, rgba(255,93,0,0.06) 0%, transparent 70%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none',
                }}
                className="group-hover:opacity-100"
              />

              {/* Ordinal number */}
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  background: 'linear-gradient(135deg, #FF5D00 0%, #8C0DC2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'block',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Title */}
              <p
                className="font-display"
                style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '8px',
                  position: 'relative',
                  zIndex: 1,
                  fontStyle: 'normal',
                }}
              >
                {problem.title}
              </p>

              {/* Description */}
              <p
                className="font-body"
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: '1.6',
                  position: 'relative',
                  zIndex: 1,
                  fontStyle: 'normal',
                }}
              >
                {problem.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* "O Resultado?" card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.6, ease: easeOut }}
          className="mobile-stack"
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, rgba(140,13,194,0.12) 0%, rgba(255,93,0,0.06) 100%)',
            border: '1px solid rgba(140,13,194,0.25)',
            borderRadius: '20px',
            padding: 'clamp(26px, 5vw, 48px) clamp(20px, 5vw, 56px)',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left side */}
          <div>
            <p
              className="font-display uppercase"
              style={{
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.3em',
                color: '#FF5D00',
                marginBottom: '20px',
                fontStyle: 'normal',
              }}
            >
              O resultado?
            </p>
            <p
              className="font-display"
              style={{
                fontWeight: 700,
                fontSize: '24px',
                color: '#FFFFFF',
                lineHeight: '1.5',
                fontStyle: 'normal',
              }}
            >
              Crescimento instável, desperdício de recursos, falta de previsibilidade.
            </p>
          </div>

          {/* Right side */}
          <div
            style={{
              background: 'rgba(140,13,194,0.15)',
              border: '1px solid rgba(140,13,194,0.3)',
              borderRadius: '12px',
              padding: '28px 32px',
            }}
          >
            <p
              className="font-body"
              style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: '1.7',
              }}
            >
              Se te identificas com algum destes pontos — a Mazanga foi construída para ti. Construímos os sistemas que eliminam estes problemas, um por um.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
