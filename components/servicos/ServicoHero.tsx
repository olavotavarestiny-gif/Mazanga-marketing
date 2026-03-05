'use client'

import { motion } from 'framer-motion'
import Badge from '@/components/ui/Badge'
import GradientText from '@/components/ui/GradientText'
import Button from '@/components/ui/Button'

export default function ServicoHero() {
  return (
    <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-bg-primary overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--blue) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
      />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="max-w-3xl"
        >
          <Badge variant="tech" className="mb-5">Todos os Serviços</Badge>
          <h1
            className="font-display font-800 text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
          >
            Um sistema para cada{' '}
            <GradientText>fase do crescimento</GradientText>
          </h1>
          <p className="font-body text-text-secondary text-lg leading-relaxed mb-8 max-w-xl">
            Cada serviço foi desenhado para uma fase específica. Começamos onde estás e evoluímos à medida que cresces. Sem preços expostos — porque cada empresa é diferente.
          </p>
          <Button href="/contacto" variant="primary" size="lg">
            Pedir Proposta Personalizada
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
