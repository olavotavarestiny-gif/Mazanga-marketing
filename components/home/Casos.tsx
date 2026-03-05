'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const casos = [
  {
    slug: 'construcao-angola',
    sector: 'Construção',
    pais: 'Angola',
    empresa: 'Construtora de Grande Dimensão',
    desafio: 'Sem pipeline organizado — dependência total de indicações pessoais.',
    resultado: '+340%',
    resultadoLabel: 'leads qualificados em 60 dias',
    gradient: 'linear-gradient(135deg, rgba(255,93,0,0.15) 0%, rgba(140,13,194,0.12) 100%)',
    accentColor: '#FF5D00',
    featured: true,
  },
  {
    slug: 'retail-luanda',
    sector: 'Retail',
    pais: 'Angola',
    empresa: 'Cadeia de Lojas — Luanda',
    desafio: 'Investia em marketing sem métricas nem retorno mensurável.',
    resultado: '6.2x',
    resultadoLabel: 'ROI nos primeiros 90 dias',
    gradient: 'linear-gradient(135deg, rgba(0,143,205,0.15) 0%, rgba(140,13,194,0.12) 100%)',
    accentColor: '#008FCD',
    featured: false,
  },
  {
    slug: 'servicos-b2b',
    sector: 'Serviços B2B',
    pais: 'Angola',
    empresa: 'Consultora de Gestão',
    desafio: 'Pipeline inexistente, sem CRM, crescimento estagnado há 2 anos.',
    resultado: '+180%',
    resultadoLabel: 'pipeline activo em 4 meses',
    gradient: 'linear-gradient(135deg, rgba(255,93,0,0.12) 0%, rgba(0,143,205,0.12) 100%)',
    accentColor: '#FF5D00',
    featured: false,
  },
]

export default function Casos() {
  const [featured, ...rest] = casos

  return (
    <section id="casos" style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 mb-14"
        >
          <div>
            <p
              className="font-display font-600 uppercase mb-4"
              style={{ fontSize: '12px', letterSpacing: '0.15em', color: '#FF5D00' }}
            >
              Casos de Estudo
            </p>
            <h2
              className="font-display font-700 text-white"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: '1.1' }}
            >
              Resultados{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #FF5D00, #8C0DC2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                reais
              </span>
            </h2>
          </div>
          <Link
            href="/casos"
            className="flex-shrink-0 inline-flex items-center gap-2 font-display font-600 transition-colors"
            style={{ fontSize: '14px', color: '#606060' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#606060' }}
          >
            Ver todos os casos
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

          {/* Featured — large */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-3"
          >
            <Link href={`/casos/${featured.slug}`} className="group block h-full">
              <div
                className="rounded-2xl overflow-hidden h-full transition-all duration-300 group-hover:scale-[1.01]"
                style={{ border: '1px solid #1A1A1A', background: '#0F0F0F' }}
              >
                {/* Image area — 16/9 gradient placeholder */}
                <div
                  className="relative w-full"
                  style={{ aspectRatio: '16/9', background: featured.gradient }}
                >
                  {/* Accent top bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(to right, transparent, ${featured.accentColor}, transparent)` }}
                  />
                  {/* Result overlay */}
                  <div className="absolute inset-0 flex items-end p-8">
                    <div>
                      <div
                        className="font-display font-800 gradient-text"
                        style={{ fontSize: 'clamp(56px, 7vw, 80px)', lineHeight: '0.9', letterSpacing: '-0.02em' }}
                      >
                        {featured.resultado}
                      </div>
                      <div className="font-body mt-1" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
                        {featured.resultadoLabel}
                      </div>
                    </div>
                  </div>
                  {/* Badge top-left */}
                  <div className="absolute top-5 left-5">
                    <span
                      className="font-display font-600 uppercase"
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.1em',
                        padding: '4px 10px',
                        borderRadius: '100px',
                        background: 'rgba(0,0,0,0.6)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#A0A0A0',
                      }}
                    >
                      {featured.sector} · {featured.pais}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-700 text-white mb-2" style={{ fontSize: '20px' }}>
                    {featured.empresa}
                  </h3>
                  <p className="font-body mb-5" style={{ fontSize: '14px', color: '#606060', lineHeight: '1.6' }}>
                    {featured.desafio}
                  </p>
                  <div
                    className="inline-flex items-center gap-2 font-display font-600 transition-all duration-200 group-hover:gap-3"
                    style={{ fontSize: '13px', color: '#606060' }}
                  >
                    Ver caso completo <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Right — 2 smaller cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.map((caso, i) => (
              <motion.div
                key={caso.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease }}
                className="flex-1"
              >
                <Link href={`/casos/${caso.slug}`} className="group block h-full">
                  <div
                    className="rounded-2xl p-6 h-full transition-all duration-300 group-hover:scale-[1.01] flex flex-col"
                    style={{ background: '#0F0F0F', border: '1px solid #1A1A1A' }}
                  >
                    {/* Top accent */}
                    <div
                      className="h-px w-full mb-5 rounded-full"
                      style={{ background: caso.gradient }}
                    />

                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span
                        className="font-display font-600 uppercase"
                        style={{
                          fontSize: '10px',
                          letterSpacing: '0.1em',
                          padding: '3px 10px',
                          borderRadius: '100px',
                          background: `${caso.accentColor}15`,
                          border: `1px solid ${caso.accentColor}35`,
                          color: caso.accentColor,
                        }}
                      >
                        {caso.sector}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: '#505050', flexShrink: 0 }}
                      />
                    </div>

                    <h3 className="font-display font-700 text-white mb-2" style={{ fontSize: '17px', lineHeight: '1.2' }}>
                      {caso.empresa}
                    </h3>
                    <p className="font-body mb-4 flex-1" style={{ fontSize: '13px', color: '#606060', lineHeight: '1.6' }}>
                      {caso.desafio}
                    </p>

                    {/* Result */}
                    <div className="flex items-baseline gap-2 mt-auto">
                      <span
                        className="font-display font-800 gradient-text"
                        style={{ fontSize: '32px', lineHeight: 1, letterSpacing: '-0.01em' }}
                      >
                        {caso.resultado}
                      </span>
                      <span className="font-body" style={{ fontSize: '12px', color: '#505050' }}>
                        {caso.resultadoLabel}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
