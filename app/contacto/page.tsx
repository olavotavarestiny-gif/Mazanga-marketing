import { Metadata } from 'next'
import { CheckCircle, Clock, Mail, MessageCircle } from 'lucide-react'
import LeadForm from '@/components/forms/LeadForm'
import PageGradientBackground from '@/components/layout/PageGradientBackground'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Contacto e Diagnóstico de Marketing | Mazanga Marketing',
  description:
    'Pede uma proposta de marketing digital para o teu negócio em Angola. A equipa da Mazanga responde em menos de 24h com próximos passos claros.',
  path: '/contacto',
  keywords: [
    'contacto agencia marketing angola',
    'diagnostico marketing digital',
    'proposta marketing luanda',
    'consultoria marketing angola',
    'agencia marketing whatsapp angola',
  ],
})

const garantias = [
  { icon: Clock, text: 'Resposta em menos de 24h' },
  { icon: CheckCircle, text: 'Sem compromisso inicial' },
  { icon: CheckCircle, text: 'Proposta personalizada para o teu negócio' },
  { icon: MessageCircle, text: 'Primeira conversa por WhatsApp ou call' },
]

export default function ContactoPage() {
  return (
    <PageGradientBackground>
      <section
        style={{
          paddingTop: 'var(--page-top)',
          paddingBottom: 'var(--shell-y)',
        }}
      >
        <div className="shell-container">
          <span
            className="font-display"
            style={{
              fontWeight: 600,
              fontSize: '11px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'block',
              marginBottom: '22px',
            }}
          >
            Pedir proposta
          </span>

          <h1
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: 'clamp(32px, 8vw, 62px)',
              lineHeight: 1.08,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              maxWidth: '980px',
              marginBottom: '18px',
            }}
          >
            Vamos construir o teu{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              sistema de crescimento
            </span>
            .
          </h1>

          <p
            className="font-body"
            style={{
              fontSize: 'clamp(16px, 4.5vw, 18px)',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.7,
              maxWidth: '760px',
              marginBottom: 'clamp(36px, 7vw, 72px)',
            }}
          >
            Preenche o formulário e a nossa equipa entra em contacto em menos de 24h com uma proposta
            inicial personalizada para o teu negócio.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-3">
              <LeadForm />
            </div>

            <div className="lg:col-span-2 flex flex-col gap-5">
              <div
                className="rounded-[20px] border"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.09)',
                  padding: 'clamp(20px, 4vw, 28px)',
                }}
              >
                <h3 className="font-display font-700 text-white text-[22px] sm:text-[24px] lg:text-[28px] leading-tight mb-4">
                  O que acontece depois?
                </h3>
                <ul className="space-y-3.5">
                  {garantias.map((garantia, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <garantia.icon size={16} className="text-brand-orange flex-shrink-0" />
                      <span className="font-body text-[15px] text-white/65 leading-relaxed">{garantia.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-[20px] border"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.09)',
                  padding: 'clamp(22px, 5vw, 32px)',
                }}
              >
                <h3 className="font-display font-700 text-white text-[20px] sm:text-[22px] lg:text-[24px] leading-tight mb-2">
                  Preferes falar directamente?
                </h3>
                <p className="font-body text-[15px] text-white/55 leading-relaxed mb-6">
                  Envia-nos mensagem no WhatsApp e respondemos rapidamente.
                </p>
                <a
                  href="https://wa.me/244942277576?text=Olá,%20tenho%20interesse%20em%20saber%20mais%20sobre%20os%20serviços%20da%20Mazanga%20Marketing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-display font-700 text-[14px] text-white rounded-[10px] px-6 h-11 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #25D366, #12b04f)' }}
                >
                  <MessageCircle size={16} />
                  WhatsApp Directo
                </a>
              </div>

              <div
                className="rounded-[20px] border"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.09)',
                  padding: '24px 28px',
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Mail size={16} className="text-brand-blue" />
                  <span className="font-display font-700 text-white text-[15px]">Email</span>
                </div>
                <a
                  href="mailto:suporte@mazanga.digital"
                  className="font-body text-[15px] text-white/60 hover:text-white transition-colors"
                >
                  suporte@mazanga.digital
                </a>
              </div>

              <div
                className="rounded-[20px] border"
                style={{
                  background: 'rgba(255,93,0,0.06)',
                  borderColor: 'rgba(255,93,0,0.2)',
                  padding: '24px 28px',
                }}
              >
                <p className="font-body text-[15px] text-white/72 leading-relaxed italic">
                  &ldquo;O site da Mazanga é a prova viva do que vendemos. Cada conversa começa com dados e termina com
                  resultados.&rdquo;
                </p>
                <p className="font-display font-600 text-brand-orange text-[15px] mt-3">— Equipa Mazanga</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageGradientBackground>
  )
}
