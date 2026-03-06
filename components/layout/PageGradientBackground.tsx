import type { ReactNode } from 'react'

type PageGradientBackgroundProps = {
  children: ReactNode
}

export default function PageGradientBackground({ children }: PageGradientBackgroundProps) {
  return (
    <div className="relative overflow-hidden" style={{ background: '#000000', minHeight: '100vh' }}>
      <div
        className="absolute pointer-events-none mobile-orb"
        style={{
          top: '-140px',
          right: '-180px',
          width: '620px',
          height: '620px',
          background: 'radial-gradient(circle, rgba(140,13,194,0.22) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(110px)',
          animation: 'floatOrb1 14s ease-in-out infinite',
        }}
      />
      <div
        className="absolute pointer-events-none mobile-orb"
        style={{
          bottom: '-180px',
          left: '-160px',
          width: '560px',
          height: '560px',
          background: 'radial-gradient(circle, rgba(255,93,0,0.18) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          animation: 'floatOrb2 14s ease-in-out infinite',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
