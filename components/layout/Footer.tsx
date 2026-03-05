'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin, MessageCircle, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Problema', href: '#problema' },
  { label: 'Solução', href: '#solucao' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Processo', href: '#processo' },
]

const serviceLinks = [
  'Publicidade Online',
  'Websites & Landing Pages',
  'CRM & Automação',
  'Consultoria',
]

const socials = [
  { icon: Instagram, href: 'https://instagram.com/mazangamarketing', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/mazangamarketing', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://wa.me/244000000000', label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#050508', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1200px] mx-auto" style={{ padding: '64px 20px 32px' }}>

        {/* Grid 4 columns (1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '48px', marginBottom: '48px' }}>

          {/* Col 1 — Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '16px' }}>
              <Image
                src="/images/logo/mazanga-logo-white.png"
                alt="Mazanga Marketing"
                width={130}
                height={32}
                className="h-7 w-auto object-contain"
              />
            </Link>
            <p className="font-body" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: '1.65', marginBottom: '20px' }}>
              Infraestrutura de crescimento para empresas angolanas ambiciosas.
            </p>
            <div className="flex items-center" style={{ gap: '12px' }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="transition-colors duration-200"
                  style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.4)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#FFFFFF' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Navegação */}
          <div>
            <p className="font-display font-700 uppercase" style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>
              Navegação
            </p>
            <div className="flex flex-col" style={{ gap: '12px' }}>
              {navLinks.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-body transition-colors duration-200"
                  style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 — Serviços */}
          <div>
            <p className="font-display font-700 uppercase" style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>
              Serviços
            </p>
            <div className="flex flex-col" style={{ gap: '12px' }}>
              {serviceLinks.map(s => (
                <span key={s} className="font-body" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Col 4 — Contacto */}
          <div>
            <p className="font-display font-700 uppercase" style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>
              Contacto
            </p>
            <div className="flex flex-col" style={{ gap: '12px' }}>
              <span className="font-body" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>Luanda, Angola</span>
              <a href="mailto:info@mazangamarketing.com" className="font-body flex items-center gap-2 transition-colors duration-200" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }} onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF' }} onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}>
                <Mail size={14} />
                info@mazangamarketing.com
              </a>
              <a href="https://wa.me/244000000000" className="font-body flex items-center gap-2 transition-colors duration-200" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }} onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF' }} onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}>
                <MessageCircle size={14} />
                WhatsApp Business
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', gap: '12px' }}
        >
          <p className="font-body" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}>
            © 2025 Mazanga Marketing. Todos os direitos reservados.
          </p>
          <Link
            href="/privacidade"
            className="font-body transition-colors duration-200"
            style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.25)' }}
          >
            Política de Privacidade
          </Link>
        </div>

      </div>
    </footer>
  )
}
