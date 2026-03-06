import type { Metadata } from 'next'
import PageGradientBackground from '@/components/layout/PageGradientBackground'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Mazanga Marketing',
  description:
    'Política de Privacidade da Mazanga Marketing sobre recolha, uso e proteção de dados pessoais.',
}

export default function PrivacidadePage() {
  return (
    <PageGradientBackground>
      <section
        style={{
          paddingTop: 'clamp(124px, 14vw, 168px)',
          paddingBottom: '120px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            paddingLeft: 'clamp(24px, 6vw, 80px)',
            paddingRight: 'clamp(24px, 6vw, 80px)',
          }}
        >
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
            Legal
          </span>

          <h1
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: 'clamp(34px, 4.5vw, 56px)',
              lineHeight: 1.12,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom: '18px',
            }}
          >
            Política de Privacidade
          </h1>

          <p
            className="font-body"
            style={{
              fontSize: '17px',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.75,
              maxWidth: '860px',
              marginBottom: '56px',
            }}
          >
            Esta política explica como recolhemos, usamos e protegemos os dados pessoais submetidos
            através do site da Mazanga Marketing.
          </p>

          <div
            className="rounded-[20px] border"
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderColor: 'rgba(255,255,255,0.09)',
              padding: 'clamp(24px, 4vw, 40px)',
              maxWidth: '900px',
            }}
          >
            <div className="font-body" style={{ display: 'grid', gap: '24px', color: 'rgba(255,255,255,0.72)' }}>
              <div>
                <h2 className="font-display" style={{ fontSize: '24px', color: '#FFFFFF', marginBottom: '10px' }}>
                  1. Dados recolhidos
                </h2>
                <p style={{ fontSize: '16px', lineHeight: 1.75 }}>
                  Recolhemos apenas os dados necessários para responder a pedidos de contacto e
                  propostas, como nome, telefone, email, empresa e informações fornecidas no
                  formulário.
                </p>
              </div>

              <div>
                <h2 className="font-display" style={{ fontSize: '24px', color: '#FFFFFF', marginBottom: '10px' }}>
                  2. Finalidade do tratamento
                </h2>
                <p style={{ fontSize: '16px', lineHeight: 1.75 }}>
                  Os dados são utilizados exclusivamente para comunicação comercial legítima,
                  acompanhamento de pedidos e melhoria dos serviços prestados.
                </p>
              </div>

              <div>
                <h2 className="font-display" style={{ fontSize: '24px', color: '#FFFFFF', marginBottom: '10px' }}>
                  3. Partilha e conservação
                </h2>
                <p style={{ fontSize: '16px', lineHeight: 1.75 }}>
                  Não vendemos dados pessoais a terceiros. Conservamos os dados apenas pelo período
                  necessário para cumprir as finalidades descritas nesta política.
                </p>
              </div>

              <div>
                <h2 className="font-display" style={{ fontSize: '24px', color: '#FFFFFF', marginBottom: '10px' }}>
                  4. Contacto e direitos
                </h2>
                <p style={{ fontSize: '16px', lineHeight: 1.75 }}>
                  Para solicitar acesso, correção ou eliminação dos teus dados, entra em contacto por
                  email para{' '}
                  <a href="mailto:info@mazanga.digital" style={{ color: '#FFFFFF', textDecoration: 'underline' }}>
                    info@mazanga.digital
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageGradientBackground>
  )
}
