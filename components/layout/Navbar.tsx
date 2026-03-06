'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import LanguageToggle from './LanguageToggle'

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Resultados', href: '/resultados' },
  { label: 'Nossa história', href: '/sobre' },
  { label: 'Blog', href: '/blog' },
  { label: 'Carreira', href: '/carreira' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'border-b' : 'bg-transparent'
        )}
        style={scrolled ? {
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(20px)',
          borderColor: 'rgba(255,255,255,0.06)',
        } : undefined}
      >
        <div
          className="max-w-[1280px] mx-auto"
          style={{ paddingLeft: 'clamp(24px, 8vw, 140px)', paddingRight: 'clamp(24px, 8vw, 140px)' }}
        >
          <div className="flex items-center h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/logo/mazanga-logo-white.png"
                alt="Mazanga Marketing"
                width={160}
                height={40}
                className="h-9 w-auto object-contain group-hover:opacity-90 transition-opacity"
                priority
              />
            </Link>

            {/* Desktop Nav — grouped with logo on the left */}
            <nav className="hidden lg:flex items-center gap-6" style={{ marginLeft: '40px' }}>
              {navLinks.map((link) => {
                const linkActive = isActive(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-body font-500 transition-colors duration-200 relative"
                    style={{
                      fontSize: '14px',
                      color: linkActive ? '#FFFFFF' : 'rgba(255,255,255,0.7)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF' }}
                    onMouseLeave={e => {
                      if (!linkActive) e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                    }}
                  >
                    {link.label}
                    <span
                      className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                      style={{
                        background: 'linear-gradient(90deg, #008FCD, #8C0DC2)',
                        width: linkActive ? '100%' : '0%',
                      }}
                    />
                  </Link>
                )
              })}
            </nav>

            {/* Desktop CTA — pushed to right */}
            <div className="hidden lg:flex items-center gap-3" style={{ marginLeft: 'auto' }}>
              <LanguageToggle />
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 font-display font-600 transition-all duration-200"
                style={{
                  padding: '8px 20px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
                  color: '#FFFFFF',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = '0.9'
                  e.currentTarget.style.transform = 'scale(1.02)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = '1'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                Diagnóstico Gratuito
              </Link>
            </div>

            {/* Mobile hamburger — pushed to right */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 transition-colors"
              style={{ color: 'rgba(255,255,255,0.7)', marginLeft: 'auto' }}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: '#000000' }}
          >
            <div className="flex items-center justify-between h-[72px] px-6">
              <Link href="/">
                <Image
                  src="/images/logo/mazanga-logo-white.png"
                  alt="Mazanga Marketing"
                  width={140}
                  height={36}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 transition-colors"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col justify-center flex-1 px-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'block font-display font-700 text-4xl py-3 transition-colors duration-200',
                      isActive(link.href)
                        ? 'gradient-text'
                        : 'text-white/90 hover:text-white'
                    )}
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 + 0.1, duration: 0.4 }}
                className="mt-8"
              >
                <div className="mb-4">
                  <LanguageToggle />
                </div>
                <Link
                  href="/contacto"
                  className="w-full inline-flex items-center justify-center font-display font-600 transition-all duration-200"
                  style={{
                    padding: '14px 32px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    background: 'linear-gradient(135deg, #FF5D00, #8C0DC2)',
                    color: '#FFFFFF',
                  }}
                >
                  Diagnóstico Gratuito
                </Link>
              </motion.div>
            </nav>

            <div className="px-8 pb-12 font-body" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}>
              mazanga.digital
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
