'use client'

import { usePathname } from 'next/navigation'
import NavLink from './NavLink'
import { NAV_LINKS, NOBAT_URL } from '@/constants/navigation'

export default function MobileMenu({ isOpen, activeHash, onClose, onLinkClick }) {
  const pathname = usePathname()

  const isLinkActive = (href) => {
    if (href === '/') return pathname === '/' && activeHash === ''
    return activeHash === href
  }

  return (
    <div
      className={`min-[907px]:hidden overflow-hidden transition-all duration-300 ease-in-out grid ${
        isOpen 
          ? 'grid-rows-[1fr] opacity-100 border-b border-[#e8decb] pointer-events-auto' 
          : 'grid-rows-[0fr] opacity-0 pointer-events-none invisible' 
      }`}
    >
      <div className="min-h-0 bg-[#faf6f0] px-6 space-y-2 text-center border-t border-[#e8decb]/40">
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
          className="relative overflow-hidden block text-center bg-[#3b271a] hover:bg-[#26180f] text-[#f7f3ed] py-3 rounded-xl font-medium text-sm mt-4 shadow-md shadow-[#3b271a]/20 active:scale-95 transition-all duration-200 group"
        >
          <span className="relative z-10">ثبت نوبت اینترنتی</span>
          <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        </a>
      </div>
    </div>
  )
}
