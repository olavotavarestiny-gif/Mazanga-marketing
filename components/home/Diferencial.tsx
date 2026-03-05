'use client'

import { motion } from 'framer-motion'
import { Globe, BarChart3, Handshake } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const cards = [
  {
    icon: Globe,
    title: 'Experiência Internacional',
    desc: '20+ clientes na Suíça antes de Angola. Metodologia importada, adaptada à realidade angolana. Não estamos a experimentar — já provamos que funciona.',
    color: '#FF5D00',
  },
  {
    icon: BarChart3,
    title: 'Obcecados por ROI',
    desc: 'Não vendemos "presença digital". Cada Kz investido é rastreado, medido e optimizado. Sabes exactamente quanto custa adquirir 1 cliente e quanto retorna.',
    color: '#8C0DC2',
  },
  {
    icon: Handshake,
    title: 'Parceiros, Não Fornecedores',
    desc: 'Não executamos ordens. Desafiamos, aconselhamos, co-criamos. Se algo não funciona, dizemos. Se funciona, escalamos. Crescemos quando o cliente cresce.',
    color: '#008FCD',
  },
]

export default function Diferencial() {
  return (
    <section style={{ background: '#080810', padding: '120px 0' }}>
      <div
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
          className="text-center"
          style={{ marginBottom: '64px', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <p className="font-display font-700 uppercase" style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#FF5D00', marginBottom: '16px' }}>
            Diferencial
          </p>
          <h2 className="font-display font-800" style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', lineHeight: '1.1', letterSpacing: '-0.03em', color: '#FFFFFF' }}>
            Não somos mais uma agência
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '16px' }}>
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="rounded-2xl transition-all duration-300"
              style={{ background: '#0C0C14', border: '1px solid rgba(255,255,255,0.06)', padding: '36px' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${c.color}40`; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div
                style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: `${c.color}10`, border: `1px solid ${c.color}20`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '24px',
                  margin: '0 auto 24px',
                }}
              >
                <c.icon size={22} style={{ color: c.color }} />
              </div>
              <h3 className="font-display font-700" style={{ fontSize: '20px', color: '#FFFFFF', marginBottom: '12px', lineHeight: '1.3', textAlign: 'center' }}>
                {c.title}
              </h3>
              <p className="font-body" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', textAlign: 'center' }}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
