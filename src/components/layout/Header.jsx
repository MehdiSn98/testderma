'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import NavLink from './NavLink'
import MobileMenu from './MobileMenu'
import { NAV_LINKS, NOBAT_URL } from '@/constants/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    setActiveHash(window.location.hash)
    const handleHashChange = () => setActiveHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleLinkClick = (href) => {
    setIsMenuOpen(false)
    setActiveHash(href.startsWith('#') ? href : '')
  }

  // منطق اصلاح‌شده برای تشخیص لینک فعال (هم مسیرهای روت مثل /services هم هش‌های #)
  const isLinkActive = (href) => {
    if (href === '/') {
      return pathname === '/' && activeHash === ''
    }
    if (href.startsWith('#')) {
      return pathname === '/' && activeHash === href
    }
    return pathname === href
  }

  return (
    <header className="sticky top-0 z-50 bg-clinic-cream-dark/95 backdrop-blur-md shadow-sm border-none outline-none">
      <div className="max-w-7xl mx-auto px-4 h-14 min-[907px]:h-20 flex items-center justify-between">
        
        {/* لوگو / عنوان */}
        <Link href="/" className="inline-flex flex-col justify-center group">
          <span className="text-[13px] sm:text-lg font-bold text-clinic-coffee-text leading-tight group-hover:text-clinic-coffee-dark transition-colors">
            دکتر متخصص پوست و مو
          </span>
          <span className="text-[9px] sm:text-xs text-clinic-coffee-light font-medium leading-none mt-0.5">
            مطب تخصصی زیبایی و لیزر
          </span>
        </Link>

        {/* دکمه همبرگری */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="min-[907px]:hidden p-1.5 text-clinic-coffee hover:text-clinic-coffee-dark hover:bg-clinic-cream-border/50 rounded-lg focus:outline-none transition-all duration-200 active:scale-90"
          aria-label="منو"
        >
          <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* منوی دسکتاپ */}
        <nav className="hidden min-[907px]:flex items-center gap-1 lg:gap-2 font-medium text-sm lg:text-base text-clinic-coffee-text">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              active={isLinkActive(link.href)}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* دکمه دسکتاپ (همراه با انیمیشن درخشش پالس و شاین متحرک) */}
        <a
          href={NOBAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-[907px]:inline-flex relative group overflow-hidden bg-clinic-coffee-dark hover:bg-clinic-coffee-darker text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 shadow-md shadow-clinic-coffee-dark/20 hover:shadow-lg hover:shadow-clinic-coffee-dark/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 animate-pulse hover:animate-none"
        >
          <span className="relative z-10 flex items-center gap-2">
            ثبت نوبت اینترنتی
          </span>
          {/* لایه شاین متحرک */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        </a>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        activeHash={activeHash}
        pathname={pathname}
        onClose={() => setIsMenuOpen(false)}
        onLinkClick={handleLinkClick}
      />
    </header>
  )
}
