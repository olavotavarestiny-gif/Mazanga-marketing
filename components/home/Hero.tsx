'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number]

const trustItems = ['20+ clientes na Suíça', 'ROI mensurável', 'Angola & Suíça']

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#06070B' }}
    >
      {/* Orbe 1: Purple (top-right) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: easeOut }}
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          right: '-10%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          animation: 'floatOrb1 12s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Orbe 2: Orange (bottom-left) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.1, ease: easeOut }}
        className="absolute pointer-events-none"
        style={{
          bottom: '5%',
          left: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          animation: 'floatOrb2 12s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Orbe 3: Blue (center) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: easeOut }}
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          animation: 'floatOrb3 12s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.025'/%3E%3C/svg%3E\")",
          opacity: 0.035,
          zIndex: 9999,
        }}
      />

      {/* Content */}
      <div
        className="relative w-full flex items-center"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: 'clamp(24px, 8vw, 140px)',
          paddingTop: 'calc(72px + clamp(24px, 8vw, 140px))',
          paddingBottom: 'clamp(24px, 8vw, 140px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
            style={{ marginBottom: '32px', display: 'inline-flex' }}
          >
            <div
              style={{
                padding: '6px 16px',
                background: 'rgba(124,58,237,0.10)',
                border: '1px solid rgba(124,58,237,0.20)',
                borderRadius: '999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  flexShrink: 0,
                  animation: 'pulse-dot 2s ease-in-out infinite',
                }}
              />
              <span
                className="font-display font-700 uppercase"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  color: 'rgba(241,245,249,0.6)',
                }}
              >
                Consultoria Activa · Luanda, Angola
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
            className="font-display font-800"
            style={{
              fontSize: 'clamp(38px, 4.2vw, 62px)',
              lineHeight: '1.08',
              letterSpacing: '-0.03em',
              marginBottom: '24px',
            }}
          >
            <span style={{ color: '#F1F5F9', display: 'block' }}>
              Sistemas que geram
            </span>
            <span className="gradient-text" style={{ display: 'block' }}>
              receita previsível
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
            className="font-body"
            style={{
              fontSize: 'clamp(15px, 1.1vw, 17px)',
              color: 'rgba(241,245,249,0.6)',
              lineHeight: '1.7',
              maxWidth: '460px',
              marginBottom: '40px',
            }}
          >
            Não vendemos posts bonitos. Estruturamos e operamos sistemas completos de marketing e vendas para empresas B2B angolanas que querem crescer com dados, não com sorte.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
            style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
              marginBottom: '40px',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 font-display font-700 transition-all duration-200"
              style={{
                padding: '0 24px',
                height: '48px',
                borderRadius: '8px',
                fontSize: '15px',
                background: '#7C3AED',
                color: '#F1F5F9',
                boxShadow: '0 0 32px rgba(124,58,237,0.25)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 0 48px rgba(124,58,237,0.4)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 0 32px rgba(124,58,237,0.25)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Agendar Diagnóstico Gratuito →
            </Link>

            <Link
              href="#solucao"
              className="inline-flex items-center gap-2 font-display font-600 transition-all duration-200"
              style={{
                padding: '0 24px',
                height: '48px',
                borderRadius: '8px',
                fontSize: '15px',
                background: 'transparent',
                border: '1px solid rgba(241,245,249,0.08)',
                color: 'rgba(241,245,249,0.6)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(241,245,249,0.15)'
                e.currentTarget.style.color = '#F1F5F9'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(241,245,249,0.08)'
                e.currentTarget.style.color = 'rgba(241,245,249,0.6)'
              }}
            >
              Ver Como Funciona
            </Link>
          </motion.div>

          {/* Proof bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easeOut }}
            style={{
              display: 'flex',
              gap: '24px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(241,245,249,0.08)',
              flexWrap: 'wrap',
            }}
          >
            {trustItems.map((item, i) => (
              <span key={item} className="flex items-center" style={{ gap: '24px' }}>
                <span
                  className="font-body"
                  style={{ fontSize: '12px', color: 'rgba(241,245,249,0.35)' }}
                >
                  {item}
                </span>
                {i < trustItems.length - 1 && (
                  <span style={{ color: 'rgba(241,245,249,0.08)', fontSize: '16px' }}>·</span>
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column — Dashboard Card (hidden on mobile/tablet) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
          className="hidden lg:block"
          style={{
            background: '#10131C',
            border: '1px solid rgba(241,245,249,0.08)',
            borderRadius: '16px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Gradient line */}
          <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #7C3AED, transparent)' }} />

          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p className="font-display font-700" style={{ fontSize: '16px', color: '#F1F5F9' }}>
              Performance Dashboard
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: 700,
                color: '#22c55e',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
              Live
            </div>
          </div>

          {/* Metrics Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { label: 'Leads', value: '247', change: '+34%', up: true },
              { label: 'CPL', value: '850 Kz', change: '-22%', up: false },
              { label: 'ROAS', value: '4.8x', change: '+18%', up: true },
              { label: 'Reuniões', value: '38', change: '+45%', up: true },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: easeOut }}
                style={{
                  background: '#161A26',
                  border: '1px solid rgba(241,245,249,0.08)',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <p className="font-body" style={{ fontSize: '12px', color: 'rgba(241,245,249,0.35)' }}>
                  {metric.label}
                </p>
                <p className="font-display font-700" style={{ fontSize: '24px', color: '#F1F5F9' }}>
                  {metric.value}
                </p>
                <p style={{ fontSize: '12px', color: metric.up ? '#22c55e' : '#ef4444', fontWeight: 600 }}>
                  {metric.up ? '↑' : '↓'} {metric.change}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mini Bar Chart */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '80px' }}>
              {[30, 45, 35, 50, 40, 65].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: `${height}%`, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.08, ease: easeOut }}
                  style={{
                    flex: 1,
                    background: i === 5 ? '#7C3AED' : 'rgba(241,245,249,0.08)',
                    borderRadius: '4px',
                  }}
                />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(241,245,249,0.35)' }}>
              {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'].map(m => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: '#7C3AED',
        }}
      >
        <p className="font-body text-12px">Scroll</p>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 8l3 3 3-3" />
        </svg>
      </motion.div>
    </section>
  )
}
