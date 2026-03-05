'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'

const clientes = [
  'Construções Silva & Filhos',
  'TechSolutions Angola',
  'Grupo Mendes Retail',
  'Angola Invest',
  'Luanda Properties',
  'DataBridge AO',
  'Prime Commerce',
  'BizAngola Group',
]

const clientesRow2 = [
  'NovaBuild Lda',
  'Kompass Africa',
  'CapitalTech AO',
  'ProSales Angola',
  'Meridian Group',
  'Atlas Digital',
  'Kinaxixi Corp',
  'Futuro Ventures',
]

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex-none mx-6 group">
      <div className="flex items-center justify-center h-10 px-5 rounded-lg border border-bg-subtle bg-bg-elevated hover:border-white/15 transition-all duration-300">
        <span className="font-display font-600 text-text-muted text-sm uppercase tracking-wider group-hover:text-text-secondary transition-colors whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  )
}

export default function LogoBar() {
  const doubledRow1 = [...clientes, ...clientes]
  const doubledRow2 = [...clientesRow2, ...clientesRow2]

  return (
    <SectionWrapper className="py-16 lg:py-20 bg-bg-surface overflow-hidden" id="clientes">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="font-display text-sm font-600 uppercase tracking-widest text-text-muted">
          Empresas que confiam na Mazanga
        </p>
      </motion.div>

      {/* Row 1 — left to right */}
      <div className="marquee-container mb-4 relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg-surface), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg-surface), transparent)' }} />
        <div className="marquee-track">
          {doubledRow1.map((name, i) => (
            <LogoItem key={`r1-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="marquee-container relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg-surface), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg-surface), transparent)' }} />
        <div className="marquee-track-reverse">
          {doubledRow2.map((name, i) => (
            <LogoItem key={`r2-${i}`} name={name} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
