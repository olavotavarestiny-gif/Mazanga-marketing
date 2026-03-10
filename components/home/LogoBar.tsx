'use client'

import Image from 'next/image'
import { InfiniteSlider } from '@/components/ui/infinite-slider'

const logos = [
  { src: '/images/logos/1.png', alt: 'Cliente 1' },
  { src: '/images/logos/2.png', alt: 'Cliente 2' },
  { src: '/images/logos/3.png', alt: 'Cliente 3' },
  { src: '/images/logos/4.png', alt: 'Cliente 4' },
  { src: '/images/logos/6.png', alt: 'Cliente 6' },
]

export default function LogoBar() {
  return (
    <section style={{ background: 'transparent', padding: '60px 0' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 6vw, 80px)',
          paddingRight: 'clamp(24px, 6vw, 80px)',
          overflow: 'hidden',
        }}
      >
        <p
          style={{
            textAlign: 'center',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '36px',
            fontWeight: 500,
            letterSpacing: '0.5px',
          }}
        >
          Empresas que confiaram em nós
        </p>

        <div
          style={{
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        >
          <InfiniteSlider gap={48} duration={30}>
            {logos.map((logo) => (
              <div
                key={logo.alt}
                style={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 'auto',
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  style={{
                    height: '36px',
                    width: 'auto',
                    objectFit: 'contain',
                    opacity: 0.6,
                    filter: 'brightness(0) invert(1)',
                  }}
                  priority={false}
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  )
}
