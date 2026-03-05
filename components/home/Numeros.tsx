const stats = [
  { value: '20+', label: 'Clientes internacionais' },
  { value: '4.8x', label: 'ROAS médio alcançado' },
  { value: '-40%', label: 'Redução média do CAC' },
  { value: '60d', label: 'Até primeiros resultados' },
]

export default function Numeros() {
  return (
    <section style={{ background: '#000000' }}>
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: 'clamp(60px, 8vw, 100px) 0',
          maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          overflow: 'hidden',
        }}
      >
        <div className="marquee-container">
          <div className="marquee-track" style={{ animationDuration: '20s' }}>
            {/* Stats triplicados para loop perfeito */}
            {[...stats, ...stats, ...stats].map((s, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexShrink: 0,
                }}
              >
                {/* Stat item */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0 64px',
                    textAlign: 'center',
                  }}
                >
                  <p
                    className="font-display font-800"
                    style={{
                      fontSize: 'clamp(36px, 4vw, 52px)',
                      lineHeight: '1',
                      marginBottom: '6px',
                      background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.5) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="font-body"
                    style={{
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.35)',
                      letterSpacing: '0.02em',
                      margin: 0,
                    }}
                  >
                    {s.label}
                  </p>
                </div>

                {/* Separador vertical */}
                <div
                  style={{
                    width: '1px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.08)',
                    flexShrink: 0,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
