'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, Loader2, Send } from 'lucide-react'
import {
  authorityOptions, challengeOptions, employeeOptions, initialDiagnosticData, investmentOptions,
  marketingTeamOptions, provinceOptions, revenueOptions, roleOptions, sectorOptions, serviceOptions,
  timelineOptions, type DiagnosticFormData,
} from '@/lib/diagnostic-options'
import styles from './diagnostico.module.css'

type Errors = Partial<Record<keyof DiagnosticFormData, string>>
type DataLayerEvent = Record<string, string | number | boolean>

declare global { interface Window { dataLayer?: DataLayerEvent[] } }

const stepFields: (keyof DiagnosticFormData)[][] = [
  ['name', 'role', 'otherRole', 'email', 'phone'],
  ['company', 'sector', 'province', 'employees', 'revenue', 'marketingTeam'],
  ['challenge', 'desiredResults', 'services', 'timeline', 'investment', 'authority', 'consent'],
]

function track(event: string, values: Omit<DataLayerEvent, 'event'> = {}) { window.dataLayer?.push({ event, ...values }) }

export default function DiagnosticForm() {
  const [data, setData] = useState(initialDiagnosticData)
  const [step, setStep] = useState(0)
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [result, setResult] = useState<'aligned' | 'review' | null>(null)
  const started = useRef(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'] as const
    const tracking = Object.fromEntries(keys.map(key => [key, params.get(key) || undefined]).filter(([, value]) => value))
    setData(current => ({ ...current, tracking: { ...tracking, landing_url: window.location.href, referrer: document.referrer || undefined } }))
  }, [])

  const update = <K extends keyof DiagnosticFormData>(key: K, value: DiagnosticFormData[K]) => {
    if (!started.current) { started.current = true; track('diagnostic_form_start') }
    setData(current => ({ ...current, [key]: value }))
    setErrors(current => ({ ...current, [key]: undefined }))
  }

  function validate(currentStep = step) {
    const next: Errors = {}
    if (currentStep === 0) {
      if (data.name.trim().length < 2) next.name = 'Indique o nome completo.'
      if (!data.role) next.role = 'Selecione o cargo ou função.'
      if (data.role === 'Outro' && data.otherRole.trim().length < 2) next.otherRole = 'Indique a função.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = 'Indique um e-mail válido.'
      if (data.phone.replace(/\D/g, '').length < 9) next.phone = 'Indique um telefone válido.'
    }
    if (currentStep === 1) {
      if (data.company.trim().length < 2) next.company = 'Indique o nome da empresa.'
      if (!data.sector) next.sector = 'Selecione o setor.'
      if (!data.province) next.province = 'Selecione a província.'
      if (!data.employees) next.employees = 'Selecione uma faixa.'
      if (!data.revenue) next.revenue = 'Selecione uma faixa.'
      if (!data.marketingTeam) next.marketingTeam = 'Selecione uma opção.'
    }
    if (currentStep === 2) {
      if (!data.challenge) next.challenge = 'Selecione o principal desafio.'
      if (data.desiredResults.trim().length < 10) next.desiredResults = 'Explique brevemente os resultados pretendidos.'
      if (!data.services.length) next.services = 'Selecione pelo menos um serviço.'
      if (!data.timeline) next.timeline = 'Selecione um prazo.'
      if (!data.investment) next.investment = 'Selecione uma faixa.'
      if (!data.authority) next.authority = 'Selecione uma opção.'
      if (!data.consent) next.consent = 'É necessário autorizar o tratamento dos dados.'
    }
    setErrors(next)
    const first = stepFields[currentStep].find(field => next[field])
    if (first) {
      track('diagnostic_form_error', { form_step: currentStep + 1, field: String(first) })
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus())
    }
    return Object.keys(next).length === 0
  }

  function nextStep() {
    if (!validate()) return
    const value = Math.min(step + 1, 2)
    setStep(value); track('diagnostic_form_step', { form_step: value + 1 })
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    if (!validate(2) || submitting) return
    setSubmitting(true); setSubmitError('')
    try {
      const response = await fetch('/api/diagnostic-lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      const body = await response.json().catch(() => ({})) as { success?: boolean; error?: string; responseVariant?: 'aligned' | 'review' }
      if (!response.ok || !body.success) throw new Error(body.error || 'Não foi possível enviar o pedido.')
      const variant = body.responseVariant || 'review'
      setResult(variant); track('Lead', { form_name: 'diagnostico_estrategico' })
      if (variant === 'aligned') track('qualified_lead', { form_name: 'diagnostico_estrategico' })
    } catch (error) { setSubmitError(error instanceof Error ? error.message : 'Erro de ligação. Tente novamente.') }
    finally { setSubmitting(false) }
  }

  const select = (name: keyof DiagnosticFormData, label: string, options: readonly (string | readonly [string, string])[], required = true) => (
    <Field label={label} error={errors[name]} required={required}>
      <select name={name} value={String(data[name])} onChange={event => update(name, event.target.value as never)} aria-invalid={Boolean(errors[name])}>
        <option value="">Selecionar opção</option>
        {options.map(option => { const pair = Array.isArray(option) ? option : [option, option]; return <option key={pair[0]} value={pair[0]}>{pair[1]}</option> })}
      </select>
    </Field>
  )

  if (result) return (
    <div className={styles.success} role="status" aria-live="polite"><div><Check size={28} /></div><p className={styles.formKicker}>{result === 'aligned' ? 'Pedido recebido' : 'Obrigado pelo seu interesse'}</p><h3>{result === 'aligned' ? 'A nossa equipa irá analisar as informações da empresa.' : 'Recebemos as informações da empresa.'}</h3><p>{result === 'aligned' ? 'Se identificarmos alinhamento com as soluções da Mazanga, entraremos em contacto para dar continuidade ao diagnóstico.' : 'Iremos avaliar o enquadramento do pedido. Caso exista alinhamento com as nossas soluções, a equipa da Mazanga entrará em contacto.'}</p><Link href="/">Voltar ao website <ArrowRight size={16} /></Link></div>
  )

  return (
    <form ref={formRef} onSubmit={submit} className={styles.formCard} noValidate>
      <input className={styles.honeypot} name="companyWebsite" value={data.companyWebsite} onChange={e => update('companyWebsite', e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className={styles.formHeader}><div><p className={styles.formKicker}>Passo {step + 1} de 3</p><h3>{['Sobre o responsável', 'Sobre a empresa', 'Necessidade e intenção'][step]}</h3></div><span>{Math.round(((step + 1) / 3) * 100)}%</span></div>
      <div className={styles.progress}><i style={{ width: `${((step + 1) / 3) * 100}%` }} /></div>

      {step === 0 && <div className={styles.fields}>
        <Field label="Nome completo" error={errors.name} required><input name="name" value={data.name} onChange={e => update('name', e.target.value)} autoComplete="name" placeholder="Nome e apelido" /></Field>
        {select('role', 'Cargo ou função', roleOptions)}
        {data.role === 'Outro' && <Field label="Qual é a sua função?" error={errors.otherRole} required><input name="otherRole" value={data.otherRole} onChange={e => update('otherRole', e.target.value)} placeholder="Indique a função" /></Field>}
        <Field label="E-mail profissional" error={errors.email} required><input name="email" type="email" inputMode="email" value={data.email} onChange={e => update('email', e.target.value)} autoComplete="email" placeholder="nome@empresa.ao" /></Field>
        <Field label="Telefone / WhatsApp" error={errors.phone} required><input name="phone" type="tel" inputMode="tel" value={data.phone} onChange={e => update('phone', e.target.value)} autoComplete="tel" placeholder="+244 9XX XXX XXX" /></Field>
      </div>}

      {step === 1 && <div className={styles.fields}>
        <Field label="Nome da empresa" error={errors.company} required><input name="company" value={data.company} onChange={e => update('company', e.target.value)} autoComplete="organization" placeholder="Nome da empresa" /></Field>
        <Field label="Website" required={false}><input name="website" type="url" value={data.website} onChange={e => update('website', e.target.value)} placeholder="https://empresa.ao" /></Field>
        <Field label="Instagram ou rede principal" required={false}><input name="social" value={data.social} onChange={e => update('social', e.target.value)} placeholder="@empresa ou ligação" /></Field>
        {select('sector', 'Setor de atividade', sectorOptions)}
        {select('province', 'Província', provinceOptions)}
        {select('employees', 'Número aproximado de colaboradores', employeeOptions)}
        {select('revenue', 'Faturação média mensal', revenueOptions)}
        {select('marketingTeam', 'A empresa possui equipa ou responsável de marketing?', marketingTeamOptions)}
      </div>}

      {step === 2 && <div className={styles.fields}>
        {select('challenge', 'Qual é o principal desafio da empresa no digital?', challengeOptions)}
        <Field label="Que resultados a empresa pretende alcançar?" error={errors.desiredResults} required full><textarea name="desiredResults" value={data.desiredResults} onChange={e => update('desiredResults', e.target.value)} rows={4} placeholder="Descreva os objetivos comerciais e de marketing." /></Field>
        <Field label="Que serviços considera necessários?" error={errors.services} required full><div className={styles.checkOptions}>{serviceOptions.map(service => <label key={service}><input type="checkbox" checked={data.services.includes(service)} onChange={() => update('services', data.services.includes(service) ? data.services.filter(item => item !== service) : [...data.services, service])} /><span><Check size={13} /></span>{service}</label>)}</div><input className={styles.checkboxFocus} name="services" aria-hidden="true" /></Field>
        {select('timeline', 'Quando pretende iniciar?', timelineOptions)}
        {select('investment', 'Investimento mensal considerado para marketing', investmentOptions)}
        {select('authority', 'Quem participa na decisão de contratação?', authorityOptions)}
        <Field label="Há alguma informação adicional que devemos conhecer?" required={false} full><textarea name="additionalInfo" value={data.additionalInfo} onChange={e => update('additionalInfo', e.target.value)} rows={3} placeholder="Contexto adicional, prioridades ou observações." /></Field>
        <div className={styles.consent}><label><input name="consent" type="checkbox" checked={data.consent} onChange={e => update('consent', e.target.checked)} /><span><Check size={13} /></span><p>Autorizo a Mazanga Marketing a utilizar os dados fornecidos para analisar este pedido e entrar em contacto comigo, de acordo com a <Link href="/privacidade">Política de Privacidade</Link>.</p></label>{errors.consent && <small role="alert">{errors.consent}</small>}</div>
      </div>}

      {submitError && <p className={styles.submitError} role="alert">{submitError}</p>}
      <div className={styles.formActions}>{step > 0 ? <button type="button" className={styles.backButton} onClick={() => setStep(value => value - 1)}><ArrowLeft size={17} /> Anterior</button> : <span />}{step < 2 ? <button type="button" className={styles.nextButton} onClick={nextStep}>Continuar <ArrowRight size={17} /></button> : <button type="submit" className={styles.nextButton} disabled={submitting}>{submitting ? <><Loader2 className={styles.spinner} size={17} /> A enviar…</> : <>Enviar pedido de diagnóstico <Send size={17} /></>}</button>}</div>
      <p className={styles.dataNote}>Os seus dados serão utilizados apenas para avaliar o pedido e realizar o contacto comercial.</p>
    </form>
  )
}

function Field({ label, error, required, full, children }: { label: string; error?: string; required: boolean; full?: boolean; children: React.ReactNode }) {
  return <label className={`${styles.field} ${full ? styles.fieldFull : ''}`}><span>{label}{required && <b> *</b>}</span>{children}{error && <small role="alert">{error}</small>}</label>
}

