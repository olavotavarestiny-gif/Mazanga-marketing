'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Badge from '@/components/ui/Badge'

interface CasoCardProps {
  slug: string
  sector: string
  empresa: string
  desafio: string
  resultado: string
  resultadoLabel: string
  descricao: string
  gradient: string
  index?: number
}

export default function CasoCard({
  slug,
  sector,
  empresa,
  desafio,
  resultado,
  resultadoLabel,
  descricao,
  gradient,
  index = 0,
}: CasoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      <Link href={`/casos/${slug}`} className="group block">
        <div className="relative rounded-2xl overflow-hidden border border-bg-subtle hover:border-white/15 transition-all duration-300 hover:scale-[1.01]">
          {/* Top gradient bar */}
          <div className="h-1 w-full" style={{ background: gradient }} />

          {/* Background */}
          <div className="absolute inset-0 bg-bg-elevated" />
          <div className="absolute inset-0 opacity-5" style={{ background: gradient }} />

          <div className="relative z-10 p-6 lg:p-8">
            <div className="flex items-start justify-between gap-3 mb-4">
              <Badge variant="default">{sector}</Badge>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,93,0,0.1)', border: '1px solid rgba(255,93,0,0.25)' }}
              >
                <TrendingUp size={14} className="text-brand-orange" />
              </div>
            </div>

            <h3 className="font-display font-700 text-white text-xl lg:text-2xl mb-2 leading-snug">
              {empresa}
            </h3>
            <p className="font-body text-text-muted text-xs mb-1 uppercase tracking-wider">Desafio</p>
            <p className="font-body text-text-secondary text-sm mb-5 leading-relaxed">{desafio}</p>
            <p className="font-body text-text-secondary text-sm mb-6 leading-relaxed">{descricao}</p>

            {/* Result */}
            <div
              className="inline-flex flex-col p-4 rounded-xl mb-5"
              style={{ background: 'rgba(255,93,0,0.08)', border: '1px solid rgba(255,93,0,0.2)' }}
            >
              <span className="font-display font-800 gradient-text text-4xl leading-none">
                {resultado}
              </span>
              <span className="font-body text-text-secondary text-xs mt-1">{resultadoLabel}</span>
            </div>

            <div className="flex items-center gap-2 font-display font-600 text-sm text-text-secondary group-hover:text-white transition-colors">
              Ver caso completo
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
