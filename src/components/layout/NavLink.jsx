'use client'

import Link from 'next/link'

export default function NavLink({ href, active, children, onClick, isMobile = false }) {
  // استایل‌های مشترک
  const mobileStyles = `block py-3 px-4 rounded-xl font-medium text-sm transition-all duration-200 text-center mx-auto ${
    active
      ? 'text-clinic-coffee-dark font-bold bg-clinic-cream-card scale-[1.02]'
      : 'text-clinic-coffee hover:text-clinic-coffee-dark hover:bg-clinic-cream-dark hover:scale-[1.01]'
  }`

  const desktopStyles = `relative px-3 py-2 rounded-xl transition-all duration-300 group overflow-hidden ${
    active
      ? 'text-clinic-coffee-dark font-bold bg-clinic-cream-card/60 shadow-sm'
      : 'text-clinic-coffee hover:text-clinic-coffee-dark hover:bg-clinic-cream-dark/70'
  }`

  return (
    <Link
      href={href}
      onClick={onClick}
      className={isMobile ? mobileStyles : desktopStyles}
    >
      <span className="relative z-10">{children}</span>
      {!isMobile && (
        <span
          className={`absolute bottom-0 right-0 h-0.5 bg-clinic-coffee-dark transition-all duration-300 ${
            active ? 'w-full' : 'w-0 group-hover:w-full'
          }`}
        />
      )}
    </Link>
  )
}
