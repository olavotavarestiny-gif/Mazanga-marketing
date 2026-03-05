'use client'

import { motion } from 'framer-motion'
import { Search, Layers, TrendingUp, Rocket, ArrowRight, Clock } from 'lucide-react'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'

const iconMap = {
  search: Search,
  layers: Layers,
  trending: TrendingUp,
  rocket: Rocket,
}

interface ServicoCardProps {
  id: string
  badge: 'gateway' | 'core' | 'premium'
  badgeLabel: string
  icon: keyof typeof iconMap
  name: string
  description: string
  highlights: string[]
  duration: string
  color: string
  expanded?: boolean
}

export default function ServicoCard({
  id,
  badge,
  badgeLabel,
  icon: iconKey,
  name,
  description,
  highlights,
  duration,
  color,
  expanded = false,
}: ServicoCardProps) {
  const Icon = iconMap[iconKey]
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="group relative rounded-2xl p-6 lg:p-8 bg-bg-elevated border border-bg-subtle hover:border-white/10 hover:scale-[1.01] transition-all duration-300"
    >
      {/* Color accent top bar */}
      <div className="absolute top-0 left-8 right-8 h-px" style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }} />

      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: `${color}15`, border: `1px solid ${color}30` }}
          >
            <Icon size={22} style={{ color }} />
          </div>
          <Badge variant={badge}>{badgeLabel}</Badge>
        </div>
        <div className="flex items-center gap-1.5 font-body text-sm text-text-muted">
          <Clock size={12} />
          {duration}
        </div>
      </div>

      <h3 className="font-display font-700 text-white text-xl lg:text-2xl mb-3 leading-snug">
        {name}
      </h3>
      <p className="font-body text-text-secondary text-sm leading-relaxed mb-6">
        {description}
      </p>

      <div className={`grid ${expanded ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-2'} gap-2.5 mb-6`}>
        {highlights.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
              style={{ background: color }}
            />
            <span className="font-body text-sm text-text-secondary leading-tight">{item}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-4 pt-5 border-t border-bg-subtle">
        <span className="font-body text-xs text-text-muted uppercase tracking-wider">
          Sem preços expostos — proposta personalizada
        </span>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 font-display font-600 text-sm text-brand-orange hover:gap-3 transition-all duration-200 whitespace-nowrap flex-shrink-0"
        >
          Pedir Proposta
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  )
}
