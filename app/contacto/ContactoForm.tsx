'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
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
  { value: 'midia-paga', label: 'Mídia paga' },
  { value: 'conteudo-visual', label: 'Conteúdo visual' },
  { value: 'web-design', label: 'Web design' },
  { value: 'automacoes', label: 'Automações' },
]

const labelBase = 'font-body text-[13px] text-white/60 mb-2 block'
const inputBase =
  'w-full h-[52px] bg-white/[0.02] border border-white/10 rounded-xl px-5 font-body text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-brand-orange/55 transition-colors duration-200'
const textareaBase =
  'w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 font-body text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-brand-orange/55 transition-colors duration-200 resize-none'
const errorBase = 'font-body text-xs text-red-400 mt-1.5'

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
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.info('Form submitted:', data)
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[20px] border text-center"
        style={{
          background: 'rgba(255,255,255,0.03)',
          borderColor: 'rgba(255,255,255,0.09)',
          padding: 'clamp(28px, 4vw, 44px)',
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{
            background: 'linear-gradient(135deg, rgba(255,93,0,0.16), rgba(140,13,194,0.16))',
            border: '1px solid rgba(255,93,0,0.3)',
          }}
        >
          <CheckCircle size={28} className="text-brand-orange" />
        </div>
        <h3 className="font-display font-700 text-white text-[30px] leading-tight mb-3">Pedido recebido</h3>
        <p className="font-body text-white/65 text-[16px] leading-relaxed mb-4">
          Recebemos o teu pedido e a nossa equipa entra em contacto em menos de 24h com próximos
          passos claros.
        </p>
        <p className="font-body text-white/40 text-sm">Obrigado por escolher a Mazanga Marketing.</p>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[20px] border"
      style={{
        background: 'rgba(255,255,255,0.03)',
        borderColor: 'rgba(255,255,255,0.09)',
        padding: 'clamp(30px, 4vw, 44px)',
      }}
      noValidate
    >
      <p
        className="font-display uppercase"
        style={{
          fontWeight: 600,
          fontSize: '11px',
          letterSpacing: '2px',
          color: 'rgba(255,255,255,0.42)',
          marginBottom: '10px',
        }}
      >
        Pedido de proposta
      </p>
      <h2 className="font-display font-700 text-white text-[30px] leading-tight mb-10">Dados do pedido</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className={labelBase}>Nome completo *</label>
          <input
            {...register('nome')}
            placeholder="O teu nome"
            className={cn(inputBase, errors.nome && 'border-red-500/60')}
          />
          {errors.nome && <p className={errorBase}>{errors.nome.message}</p>}
        </div>

        <div>
          <label className={labelBase}>Nome da empresa *</label>
          <input
            {...register('empresa')}
            placeholder="Nome da tua empresa"
            className={cn(inputBase, errors.empresa && 'border-red-500/60')}
          />
          {errors.empresa && <p className={errorBase}>{errors.empresa.message}</p>}
        </div>

        <div>
          <label className={labelBase}>Cargo *</label>
          <input
            {...register('cargo')}
            placeholder="CEO, Director, etc."
            className={cn(inputBase, errors.cargo && 'border-red-500/60')}
          />
          {errors.cargo && <p className={errorBase}>{errors.cargo.message}</p>}
        </div>

        <div>
          <label className={labelBase}>Telefone / WhatsApp *</label>
          <input
            {...register('telefone')}
            placeholder="+244 9XX XXX XXX"
            type="tel"
            className={cn(inputBase, errors.telefone && 'border-red-500/60')}
          />
          {errors.telefone && <p className={errorBase}>{errors.telefone.message}</p>}
        </div>
      </div>

      <div className="mb-6">
        <label className={labelBase}>Email *</label>
        <input
          {...register('email')}
          placeholder="email@empresa.ao"
          type="email"
          className={cn(inputBase, errors.email && 'border-red-500/60')}
        />
        {errors.email && <p className={errorBase}>{errors.email.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className={labelBase}>Facturamento anual *</label>
          <select
            {...register('facturacao')}
            defaultValue=""
            className={cn(inputBase, 'cursor-pointer', errors.facturacao && 'border-red-500/60')}
          >
            {facturacaoOptions.map((option) => (
              <option key={option.value} value={option.value} disabled={!option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.facturacao && <p className={errorBase}>{errors.facturacao.message}</p>}
        </div>

        <div>
          <label className={labelBase}>Serviço de interesse *</label>
          <select
            {...register('servico_interesse')}
            defaultValue=""
            className={cn(inputBase, 'cursor-pointer', errors.servico_interesse && 'border-red-500/60')}
          >
            {servicoOptions.map((option) => (
              <option key={option.value} value={option.value} disabled={!option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.servico_interesse && <p className={errorBase}>{errors.servico_interesse.message}</p>}
        </div>
      </div>

      <div className="mb-6">
        <label className={labelBase}>Como nos encontrou? *</label>
        <select
          {...register('como_nos_encontrou')}
          defaultValue=""
          className={cn(inputBase, 'cursor-pointer', errors.como_nos_encontrou && 'border-red-500/60')}
        >
          {comoEncontrouOptions.map((option) => (
            <option key={option.value} value={option.value} disabled={!option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.como_nos_encontrou && <p className={errorBase}>{errors.como_nos_encontrou.message}</p>}
      </div>

      <div className="mb-7">
        <label className={labelBase}>Principal desafio do teu negócio *</label>
        <textarea
          {...register('desafio')}
          placeholder="Descreve o principal desafio que queres resolver com a Mazanga..."
          rows={5}
          className={cn(textareaBase, errors.desafio && 'border-red-500/60')}
        />
        {errors.desafio && <p className={errorBase}>{errors.desafio.message}</p>}
      </div>

      <motion.button
        type="submit"
        disabled={submitting}
        whileHover={{ scale: submitting ? 1 : 1.01 }}
        whileTap={{ scale: submitting ? 1 : 0.99 }}
        className="w-full h-12 rounded-[10px] font-display font-700 text-[15px] text-white inline-flex items-center justify-center gap-2 transition-all duration-200"
        style={{
          background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
          opacity: submitting ? 0.75 : 1,
          cursor: submitting ? 'not-allowed' : 'pointer',
        }}
      >
        {submitting ? (
          <>
            <Loader2 size={17} className="animate-spin" />
            A enviar...
          </>
        ) : (
          <>
            <Send size={17} />
            Enviar Pedido de Proposta
          </>
        )}
      </motion.button>

      <p className="font-body text-xs text-white/35 text-center mt-4">
        Ao submeter concordas com o tratamento dos teus dados para resposta ao pedido.
      </p>
    </form>
  )
}
