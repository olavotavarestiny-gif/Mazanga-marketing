'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#000000', padding: '120px 0' }}>
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(140,13,194,0.15) 0%, rgba(255,93,0,0.08) 50%, transparent 100%)',
        }}
      />

      <div
        className="relative text-center"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: '80px',
          paddingRight: '80px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
        >
          <h2
            className="font-display font-800"
            style={{
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              marginBottom: '20px',
            }}
          >
            Pronto para ter um sistema que gera receita?
          </h2>

          <p
            className="font-body"
            style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: '1.7',
              maxWidth: '520px',
              margin: '0 auto 40px',
            }}
          >
            Em 30 minutos mostramos-te exactamente onde a tua empresa está a perder clientes — e como corrigir. Sem compromisso.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 font-display font-700 transition-all duration-200"
              style={{
                padding: '14px 28px',
                borderRadius: '8px',
                fontSize: '15px',
                background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
                color: '#FFFFFF',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.opacity = '0.88'
                e.currentTarget.style.transform = 'scale(1.03)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,93,0,0.30), 0 4px 20px rgba(140,13,194,0.30)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Agendar Diagnóstico Gratuito
              <ArrowRight size={15} />
            </Link>

            <Link
              href="https://wa.me/244000000000"
              className="inline-flex items-center gap-2 font-display font-600 transition-all duration-200"
              style={{
                padding: '14px 28px',
                borderRadius: '8px',
                fontSize: '15px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.18)',
                color: 'rgba(255,255,255,0.75)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'
                e.currentTarget.style.color = '#FFFFFF'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
              }}
            >
              <MessageCircle size={15} />
              WhatsApp Directo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
