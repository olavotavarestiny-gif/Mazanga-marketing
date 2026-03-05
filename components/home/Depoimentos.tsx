'use client'

import { useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ChevronLeft, ChevronRight, X, Star } from 'lucide-react'
import GradientText from '@/components/ui/GradientText'
import SectionWrapper from '@/components/ui/SectionWrapper'

const depoimentos = [
  {
    id: 1,
    nome: 'António Silva',
    empresa: 'Construções Silva & Filhos',
    cargo: 'CEO',
    sector: 'Construção',
    texto: 'A Mazanga transformou completamente a nossa forma de captar clientes. Em 60 dias já tínhamos um pipeline organizado e leads a entrar de forma consistente.',
    thumbnail: null,
    videoUrl: null,
    stars: 5,
  },
  {
    id: 2,
    nome: 'Maria Fernandes',
    empresa: 'TechSolutions Angola',
    cargo: 'Directora Geral',
    sector: 'Tecnologia',
    texto: 'Finalmente percebemos onde o nosso dinheiro de marketing estava a ir. O dashboard executivo que a Mazanga implementou mudou a forma como tomamos decisões.',
    thumbnail: null,
    videoUrl: null,
    stars: 5,
  },
  {
    id: 3,
    nome: 'Carlos Mendes',
    empresa: 'Grupo Mendes Retail',
    cargo: 'Director Comercial',
    sector: 'Retail',
    texto: 'O ROI foi de 6x no primeiro semestre. Nunca pensámos que seria possível ter um sistema tão bem organizado e com resultados tão mensuráveis.',
    thumbnail: null,
    videoUrl: null,
    stars: 5,
  },
]

function VideoModal({ depoimento, onClose }: { depoimento: typeof depoimentos[0]; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="relative w-full max-w-2xl rounded-2xl overflow-hidden bg-bg-elevated border border-bg-subtle"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Video placeholder */}
          <div
            className="aspect-video flex items-center justify-center"
            style={{ background: 'var(--gradient-hero)', opacity: 0.8 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                <Play size={28} className="text-white ml-1" fill="white" />
              </div>
              <p className="font-display font-600 text-white text-sm">Depoimento em vídeo</p>
              <p className="font-body text-white/60 text-xs mt-1">{depoimento.nome} — {depoimento.empresa}</p>
            </div>
          </div>
          <div className="p-5">
            <p className="font-body text-text-secondary text-sm">&ldquo;{depoimento.texto}&rdquo;</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
          >
            <X size={16} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export default function Depoimentos() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )
  const [activeModal, setActiveModal] = useState<typeof depoimentos[0] | null>(null)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <SectionWrapper className="py-20 lg:py-28 bg-bg-primary" id="depoimentos">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-10">
          <div>
            <p className="font-display text-sm font-600 uppercase tracking-widest text-brand-orange mb-3">
              Depoimentos
            </p>
            <h2
              className="font-display font-800 text-white leading-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              O que dizem os nossos{' '}
              <GradientText>clientes</GradientText>
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full bg-bg-elevated border border-bg-subtle flex items-center justify-center text-text-secondary hover:text-white hover:border-brand-orange/50 transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-bg-elevated border border-bg-subtle flex items-center justify-center text-text-secondary hover:text-white hover:border-brand-orange/50 transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div variants={itemVariants} className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {depoimentos.map((dep) => (
              <div
                key={dep.id}
                className="flex-none w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)]"
              >
                <div className="group relative rounded-2xl bg-bg-elevated border border-bg-subtle p-6 h-full hover:border-white/10 transition-all duration-300 flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(dep.stars)].map((_, i) => (
                      <Star key={i} size={14} className="text-brand-orange fill-brand-orange" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-body text-text-secondary text-sm leading-relaxed flex-1 mb-5">
                    &ldquo;{dep.texto}&rdquo;
                  </p>

                  {/* Author + Play */}
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-display font-700 text-white text-sm">{dep.nome}</div>
                      <div className="font-body text-text-muted text-xs">{dep.cargo} · {dep.empresa}</div>
                    </div>
                    <button
                      onClick={() => setActiveModal(dep)}
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 glow-button"
                      style={{ background: 'var(--orange)' }}
                      aria-label={`Ver vídeo de ${dep.nome}`}
                    >
                      <Play size={14} className="text-white ml-0.5" fill="white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {activeModal && (
        <VideoModal depoimento={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </SectionWrapper>
  )
}
