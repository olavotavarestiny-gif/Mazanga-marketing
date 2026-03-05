'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Loader2, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

const schema = z.object({
  nome: z.string().min(2, 'Nome obrigatório'),
  empresa: z.string().min(2, 'Nome da empresa obrigatório'),
  cargo: z.string().min(2, 'Cargo obrigatório'),
  telefone: z.string().min(9, 'Telefone/WhatsApp obrigatório'),
  email: z.string().email('Email inválido'),
  facturacao: z.string().min(1, 'Selecciona um intervalo'),
  desafio: z.string().min(20, 'Descreve o teu principal desafio (mín. 20 caracteres)'),
  como_nos_encontrou: z.string().min(1, 'Selecciona uma opção'),
  servico_interesse: z.string().min(1, 'Selecciona um serviço'),
})

type FormData = z.infer<typeof schema>

const facturacaoOptions = [
  { value: '', label: 'Selecciona o facturamento anual' },
  { value: '<50m', label: '< 50M Kz' },
  { value: '50m-200m', label: '50M – 200M Kz' },
  { value: '200m-500m', label: '200M – 500M Kz' },
  { value: '500m+', label: '500M+ Kz' },
]

const comoEncontrouOptions = [
  { value: '', label: 'Como nos encontrou?' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'google', label: 'Google' },
  { value: 'indicacao', label: 'Indicação de cliente' },
  { value: 'evento', label: 'Evento / Conferência' },
  { value: 'outro', label: 'Outro' },
]

const servicoOptions = [
  { value: '', label: 'Serviço de interesse' },
  { value: 'diagnostico', label: 'Diagnóstico Estratégico' },
  { value: 'fundacao', label: 'Projecto Fundação' },
  { value: 'growth', label: 'Growth B2B' },
  { value: 'scale', label: 'Scale Premium' },
  { value: 'nao-sei', label: 'Não sei ainda — quero aconselhamento' },
]

const inputBase = 'w-full bg-bg-elevated border border-bg-subtle rounded-xl px-4 py-3 font-body text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-brand-orange/60 transition-colors duration-200'
const labelBase = 'font-display font-600 text-sm text-text-secondary mb-1.5 block'
const errorBase = 'font-body text-xs text-red-400 mt-1'

export default function ContactoForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    // Simulate API call — replace with actual webhook/GoHighLevel integration
    await new Promise((r) => setTimeout(r, 1500))
    console.info('Form submitted:', data)
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl p-8 lg:p-12 bg-bg-elevated border border-bg-subtle text-center"
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: 'rgba(255,93,0,0.15)', border: '1px solid rgba(255,93,0,0.3)' }}
        >
          <CheckCircle size={28} className="text-brand-orange" />
        </div>
        <h3 className="font-display font-700 text-white text-2xl mb-3">
          Proposta recebida!
        </h3>
        <p className="font-body text-text-secondary text-base leading-relaxed mb-6">
          Recebemos o teu pedido. A nossa equipa entra em contacto em{' '}
          <span className="text-white font-500">menos de 24h</span> com uma proposta personalizada para o teu negócio.
        </p>
        <p className="font-body text-text-muted text-sm">
          Enquanto isso, podes seguir-nos no{' '}
          <a href="https://instagram.com/mazangamarketing" className="text-brand-orange hover:underline">Instagram</a> ou{' '}
          <a href="https://linkedin.com/company/mazanga" className="text-brand-blue hover:underline">LinkedIn</a>.
        </p>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl p-6 lg:p-8 bg-bg-elevated border border-bg-subtle"
      noValidate
    >
      <h2 className="font-display font-700 text-white text-xl mb-6">Dados do pedido</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Nome */}
        <div>
          <label className={labelBase}>Nome completo *</label>
          <input
            {...register('nome')}
            placeholder="O teu nome"
            className={cn(inputBase, errors.nome && 'border-red-500/50')}
          />
          {errors.nome && <p className={errorBase}>{errors.nome.message}</p>}
        </div>

        {/* Empresa */}
        <div>
          <label className={labelBase}>Nome da empresa *</label>
          <input
            {...register('empresa')}
            placeholder="Nome da tua empresa"
            className={cn(inputBase, errors.empresa && 'border-red-500/50')}
          />
          {errors.empresa && <p className={errorBase}>{errors.empresa.message}</p>}
        </div>

        {/* Cargo */}
        <div>
          <label className={labelBase}>Cargo *</label>
          <input
            {...register('cargo')}
            placeholder="CEO, Director, etc."
            className={cn(inputBase, errors.cargo && 'border-red-500/50')}
          />
          {errors.cargo && <p className={errorBase}>{errors.cargo.message}</p>}
        </div>

        {/* Telefone */}
        <div>
          <label className={labelBase}>Telefone / WhatsApp *</label>
          <input
            {...register('telefone')}
            placeholder="+244 9XX XXX XXX"
            type="tel"
            className={cn(inputBase, errors.telefone && 'border-red-500/50')}
          />
          {errors.telefone && <p className={errorBase}>{errors.telefone.message}</p>}
        </div>
      </div>

      {/* Email */}
      <div className="mb-5">
        <label className={labelBase}>Email *</label>
        <input
          {...register('email')}
          placeholder="email@empresa.ao"
          type="email"
          className={cn(inputBase, errors.email && 'border-red-500/50')}
        />
        {errors.email && <p className={errorBase}>{errors.email.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Facturação */}
        <div>
          <label className={labelBase}>Facturamento anual *</label>
          <select
            {...register('facturacao')}
            className={cn(inputBase, 'cursor-pointer', errors.facturacao && 'border-red-500/50')}
          >
            {facturacaoOptions.map((o) => (
              <option key={o.value} value={o.value} disabled={!o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.facturacao && <p className={errorBase}>{errors.facturacao.message}</p>}
        </div>

        {/* Serviço interesse */}
        <div>
          <label className={labelBase}>Serviço de interesse *</label>
          <select
            {...register('servico_interesse')}
            className={cn(inputBase, 'cursor-pointer', errors.servico_interesse && 'border-red-500/50')}
          >
            {servicoOptions.map((o) => (
              <option key={o.value} value={o.value} disabled={!o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.servico_interesse && <p className={errorBase}>{errors.servico_interesse.message}</p>}
        </div>
      </div>

      {/* Como encontrou */}
      <div className="mb-5">
        <label className={labelBase}>Como nos encontrou? *</label>
        <select
          {...register('como_nos_encontrou')}
          className={cn(inputBase, 'cursor-pointer', errors.como_nos_encontrou && 'border-red-500/50')}
        >
          {comoEncontrouOptions.map((o) => (
            <option key={o.value} value={o.value} disabled={!o.value}>
              {o.label}
            </option>
          ))}
        </select>
        {errors.como_nos_encontrou && <p className={errorBase}>{errors.como_nos_encontrou.message}</p>}
      </div>

      {/* Desafio */}
      <div className="mb-6">
        <label className={labelBase}>Principal desafio do teu negócio *</label>
        <textarea
          {...register('desafio')}
          placeholder="Descreve o principal desafio que queres resolver com a Mazanga..."
          rows={4}
          className={cn(inputBase, 'resize-none', errors.desafio && 'border-red-500/50')}
        />
        {errors.desafio && <p className={errorBase}>{errors.desafio.message}</p>}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={submitting}
        whileHover={{ scale: submitting ? 1 : 1.02 }}
        whileTap={{ scale: submitting ? 1 : 0.98 }}
        className={cn(
          'w-full flex items-center justify-center gap-2.5 py-4 rounded-full font-display font-700 text-white text-base transition-all duration-300',
          submitting ? 'opacity-70 cursor-not-allowed' : 'glow-button cursor-pointer hover:bg-orange-600',
        )}
        style={{ background: 'var(--orange)' }}
      >
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            A enviar...
          </>
        ) : (
          <>
            <Send size={18} />
            Enviar Pedido de Proposta
          </>
        )}
      </motion.button>

      <p className="font-body text-xs text-text-muted text-center mt-4">
        Ao submeter concordas com o tratamento dos teus dados para resposta ao pedido.
      </p>
    </form>
  )
}
