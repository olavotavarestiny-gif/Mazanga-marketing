'use client'

import { useEffect, useState } from 'react'

type Lang = 'pt' | 'fr'

declare global {
  interface Window {
    __setSiteLanguage?: (lang: Lang) => void
  }
}

export default function LanguageToggle() {
  const [lang, setLang] = useState<Lang>('pt')

  useEffect(() => {
    const saved = localStorage.getItem('site-lang')
    if (saved === 'fr') {
      setLang('fr')
    }
  }, [])

  const changeLanguage = (nextLang: Lang) => {
    setLang(nextLang)
    if (window.__setSiteLanguage) {
      window.__setSiteLanguage(nextLang)
    }
  }

  return (
    <div
      className="inline-flex items-center rounded-full border"
      style={{
        borderColor: 'rgba(255,255,255,0.16)',
        background: 'rgba(255,255,255,0.03)',
        padding: '3px',
      }}
      aria-label="Selecionar idioma"
    >
      <button
        type="button"
        onClick={() => changeLanguage('pt')}
        className="font-display"
        style={{
          height: '28px',
          minWidth: '38px',
          borderRadius: '999px',
          border: 'none',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          color: lang === 'pt' ? '#FFFFFF' : 'rgba(255,255,255,0.55)',
          background: lang === 'pt' ? 'linear-gradient(135deg, #FF5D00, #8C0DC2)' : 'transparent',
        }}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('fr')}
        className="font-display"
        style={{
          height: '28px',
          minWidth: '38px',
          borderRadius: '999px',
          border: 'none',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          color: lang === 'fr' ? '#FFFFFF' : 'rgba(255,255,255,0.55)',
          background: lang === 'fr' ? 'linear-gradient(135deg, #FF5D00, #8C0DC2)' : 'transparent',
        }}
      >
        FR
      </button>
    </div>
  )
}
