import { Metadata } from 'next'
import ContactoForm from './ContactoForm'
import GradientText from '@/components/ui/GradientText'
import Badge from '@/components/ui/Badge'
import { MessageCircle, Mail, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pedir Proposta | Mazanga Marketing — Contacto',
  description: 'Pede a tua proposta personalizada. Respondemos em menos de 24h com um diagnóstico inicial e próximos passos claros.',
}

const garantias = [
  { icon: Clock, text: 'Resposta em menos de 24h' },
  { icon: CheckCircle, text: 'Sem compromisso inicial' },
  { icon: CheckCircle, text: 'Proposta personalizada para o teu negócio' },
  { icon: MessageCircle, text: 'Primeira conversa por WhatsApp ou call' },
]

export default function ContactoPage() {
  return (
    <>
      <section className="relative pt-36 pb-8 lg:pt-44 bg-bg-primary overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--orange) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
        />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            paddingLeft: 'clamp(24px, 6vw, 80px)',
            paddingRight: 'clamp(24px, 6vw, 80px)',
          }}
        >
          <Badge variant="gateway" className="mb-5">Pedir Proposta</Badge>
          <h1
            className="font-display font-800 text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
          >
            Vamos construir o teu{' '}
            <GradientText>sistema de crescimento</GradientText>
          </h1>
          <p className="font-body text-text-secondary text-lg max-w-xl leading-relaxed">
            Preenche o formulário e a nossa equipa entra em contacto em menos de 24h com uma proposta inicial personalizada.
          </p>
        </div>
      </section>

      <section className="py-12 pb-24 bg-bg-primary">
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            paddingLeft: 'clamp(24px, 6vw, 80px)',
            paddingRight: 'clamp(24px, 6vw, 80px)',
          }}
        >
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Form */}
          <div className="lg:col-span-3">
            <ContactoForm />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Garantias */}
            <div className="rounded-2xl p-6 bg-bg-elevated border border-bg-subtle">
              <h3 className="font-display font-700 text-white text-lg mb-4">O que acontece depois?</h3>
              <ul className="space-y-3">
                {garantias.map((g, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <g.icon size={16} className="text-brand-orange flex-shrink-0" />
                    <span className="font-body text-sm text-text-secondary">{g.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp direct */}
            <div className="rounded-2xl p-6 bg-bg-elevated border border-bg-subtle">
              <h3 className="font-display font-700 text-white text-base mb-2">Preferes falar directamente?</h3>
              <p className="font-body text-text-secondary text-sm mb-4">Envia-nos mensagem pelo WhatsApp agora.</p>
              <a
                href="https://wa.me/244935000000?text=Olá,%20tenho%20interesse%20em%20saber%20mais%20sobre%20os%20serviços%20da%20Mazanga%20Marketing."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-display font-600 text-sm px-5 py-3 rounded-full hover:bg-[#20BD5A] transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp Directo
              </a>
            </div>

            {/* Email */}
            <div className="rounded-2xl p-6 bg-bg-elevated border border-bg-subtle">
              <div className="flex items-center gap-2 mb-2">
                <Mail size={16} className="text-brand-blue" />
                <span className="font-display font-700 text-white text-sm">Email</span>
              </div>
              <a
                href="mailto:info@mazanga.digital"
                className="font-body text-text-secondary text-sm hover:text-white transition-colors"
              >
                info@mazanga.digital
              </a>
            </div>

            {/* Quote */}
            <div
              className="rounded-2xl p-6 border border-brand-orange/20"
              style={{ background: 'rgba(255,93,0,0.05)' }}
            >
              <p className="font-body text-text-secondary text-sm leading-relaxed italic">
                &ldquo;O site da Mazanga é a prova viva do que vendemos. Cada conversa começa com dados e termina com resultados.&rdquo;
              </p>
              <p className="font-display font-600 text-brand-orange text-sm mt-3">— Equipa Mazanga</p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}
