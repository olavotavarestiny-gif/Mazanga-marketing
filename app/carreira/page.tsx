import type { Metadata } from 'next'
import PageGradientBackground from '@/components/layout/PageGradientBackground'

export const metadata: Metadata = {
  title: 'Carreira | Mazanga Marketing',
  description:
    'Carreiras na Mazanga Marketing. Neste momento não temos vagas disponíveis, mas podes enviar o teu perfil para futuras oportunidades.',
}

export default function CarreiraPage() {
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
            Carreira
          </span>

          <h1
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: 'clamp(32px, 8vw, 62px)',
              lineHeight: 1.1,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              maxWidth: '900px',
              marginBottom: '18px',
            }}
          >
            Junta-te ao ecossistema da Mazanga.
          </h1>

          <p
            className="font-body"
            style={{
              fontSize: 'clamp(16px, 4.5vw, 18px)',
              color: 'rgba(255,255,255,0.52)',
              lineHeight: 1.75,
              maxWidth: '760px',
              marginBottom: 'clamp(36px, 7vw, 56px)',
            }}
          >
            Neste momento não temos vagas disponíveis. Ainda assim, estamos sempre atentos a perfis
            fortes para futuras oportunidades.
          </p>

          <div
            className="rounded-[20px] border"
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderColor: 'rgba(255,255,255,0.09)',
              maxWidth: '760px',
              padding: 'clamp(26px, 4vw, 40px)',
            }}
          >
            <p
              className="font-body"
              style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.62)',
                lineHeight: 1.75,
                marginBottom: '24px',
              }}
            >
              Se queres trabalhar connosco no futuro, envia o teu CV e portfólio para o nosso email de
              recrutamento.
            </p>

            <a
              href="mailto:recrutamento@mazanga.digtal"
              className="font-display inline-flex items-center justify-center"
              style={{
                height: '46px',
                padding: '0 22px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '14px',
                color: '#FFFFFF',
                background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
              }}
            >
              Enviar candidatura por email
            </a>
          </div>
        </div>
      </section>
    </PageGradientBackground>
  )
}
