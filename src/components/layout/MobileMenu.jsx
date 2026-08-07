'use client'

import { usePathname } from 'next/navigation'
import NavLink from './NavLink'
import { NAV_LINKS, NOBAT_URL } from '@/constants/navigation'

export default function MobileMenu({ isOpen, activeHash, onClose, onLinkClick }) {
  const pathname = usePathname()

  const isLinkActive = (href) => {
    // ۱. اگر لینک یک هاش باشد (مثل #services)
    if (href.startsWith('#')) {
      return activeHash === href
    }

    // ۲. اگر لینک صفحه اصلی باشد
    if (href === '/') {
      return pathname === '/' && activeHash === ''
    }

    // ۳. اگر لینک یک مسیر جداگانه باشد (مثل /services یا /about)
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <div
      className={`min-[907px]:hidden overflow-hidden transition-all duration-300 ease-in-out grid ${
        isOpen 
          ? 'grid-rows-[1fr] opacity-100 pointer-events-auto' 
          : 'grid-rows-[0fr] opacity-0 pointer-events-none invisible' 
      }`}
    >
      <div className="min-h-0 bg-clinic-cream-light px-6 space-y-2 text-center pb-4">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            isMobile
            active={isLinkActive(link.href)}
            onClick={() => onLinkClick(link.href)}
          >
            {link.name}
          </NavLink>
        ))}

        <a
          href={NOBAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="relative overflow-hidden block text-center bg-clinic-coffee-dark hover:bg-clinic-coffee-darker text-white py-3 rounded-xl font-medium text-sm mt-4 shadow-md shadow-clinic-coffee-dark/20 active:scale-95 transition-all duration-200 group animate-pulse hover:animate-none"
        >
          <span className="relative z-10">ثبت نوبت اینترنتی</span>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        </a>
      </div>
    </div>
  )
}