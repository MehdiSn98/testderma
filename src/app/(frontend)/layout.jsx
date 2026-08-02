'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import './styles.css'

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')
  const pathname = usePathname()

  // مدیریت تغییرات برای بخش‌های داخلی صفحه (مثل #services)
  useEffect(() => {
    setActiveHash(window.location.hash)
    const handleHashChange = () => setActiveHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navLinks = [
    { name: 'صفحه اصلی', href: '/' },
    { name: 'خدمات درمانی و زیبایی', href: '#services' },
    { name: 'گالری', href: '#gallery' },
    { name: 'مطالب آموزشی', href: '#articles' },
    { name: 'تماس با ما', href: '#contact' },
  ]

  // تابع بررسی فعال بودن منو
  const isLinkActive = (href) => {
    if (href === '/') {
      return pathname === '/' && activeHash === ''
    }
    return activeHash === href
  }

  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-800 antialiased font-sans min-h-screen flex flex-col justify-between">
        
        
<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm mb-5">
  <div className="max-w-7xl mx-auto px-4 h-6 sm:h-20 flex items-center justify-between">
    
    <Link href="/" className="flex flex-col justify-center pt-8">
      <span className="text-[11px] sm:text-lg font-bold text-teal-700 leading-none ">دکتر متخصص پوست و مو</span>
      <span className="text-[8px] sm:text-xs text-slate-500 font-medium leading-tight mt-0.5">مطب تخصصی زیبایی و لیزر</span>
    </Link>

    {/* دکمه منوی همبرگری */}
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="min-[907px]:hidden p-1 text-slate-600 hover:text-teal-600 rounded-lg focus:outline-none transition-colors pt-8"
      aria-label="منو"
    >
      <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isMenuOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>

    {/* منوی دسکتاپ */}
    <nav className="hidden min-[907px]:flex items-center gap-2 lg:gap-3 font-medium text-sm lg:text-base">
      {navLinks.map((link) => {
        const active = isLinkActive(link.href)
        return (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setActiveHash(link.href.startsWith('#') ? link.href : '')}
            className={`px-3 py-1.5 rounded-xl transition-all duration-200 ${
              active
                ? 'text-teal-600 font-bold bg-teal-50/80 shadow-sm'
                : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
            }`}
          >
            {link.name}
          </a>
        )
      })}
    </nav>

    {/* دکمه مشاوره دسکتاپ */}
    <a 
      href="#consultation" 
      className="hidden min-[907px]:inline-flex bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full font-medium text-sm transition-all shadow-md shadow-teal-600/20 active:scale-95"
    >
      درخواست مشاوره
    </a>
  </div>

  {/* منوی کشویی موبایل */}
  <div
    className={`min-[907px]:hidden overflow-hidden transition-all duration-300 ease-in-out grid ${
      isMenuOpen ? 'grid-rows-[1fr] opacity-100 border-b border-slate-100' : 'grid-rows-[0fr] opacity-0'
    }`}
  >
    <div className="min-h-0 bg-white px-4 pt-2 pb-6 space-y-2">
      {navLinks.map((link) => {
        const active = isLinkActive(link.href)
        return (
          <a
            key={link.href}
            href={link.href}
            onClick={() => {
              setIsMenuOpen(false)
              setActiveHash(link.href.startsWith('#') ? link.href : '')
            }}
            className={`block py-2.5 px-3 rounded-xl font-medium text-sm transition-all duration-200 ${
              active
                ? 'text-teal-700 font-bold bg-teal-50'
                : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
            }`}
          >
            {link.name}
          </a>
        )
      })}
      <a 
        href="#consultation" 
        onClick={() => setIsMenuOpen(false)} 
        className="block text-center bg-teal-600 text-white py-2.5 rounded-xl font-medium text-sm mt-4 shadow-md shadow-teal-600/20 active:scale-95 transition-transform"
      >
        ثبت درخواست مشاوره
      </a>
    </div>
  </div>
</header>

        {/* بدنه اصلی */}
        <main className="flex-grow">{children}</main>

        {/* فوتر موبایل فرست */}
        <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 px-4 border-t border-slate-800 mt-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-right">
            
            {/* ستون ۱: معرفی کوتاه مطب */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-white text-lg font-bold mb-3 flex items-center gap-2 justify-center md:justify-start">
                <span>🩺</span> مطب تخصصی پوست و مو
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 max-w-sm md:max-w-none">
                ارائه جدیدترین خدمات درمانی و زیبایی پوست، مو و لیزر با بهره‌گیری از پیشرفته‌ترین تجهیزات روز دنیا و کادر مجرب.
              </p>
              
              {/* شبکه‌های اجتماعی */}
              <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
                  aria-label="اینستاگرام"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/989120000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
                  aria-label="واتس‌اپ"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
                <a 
                  href="https://t.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
                  aria-label="تلگرام"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.128.832.941z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* ستون ۲: دسترسی سریع */}
            <div className="md:pr-8">
              <h4 className="text-white text-base font-bold mb-3">دسترسی سریع</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li><a href="#services" className="hover:text-teal-400 transition-colors">خدمات زیبایی و درمانی</a></li>
                <li><a href="#gallery" className="hover:text-teal-400 transition-colors">گالری</a></li>
                <li><a href="#articles" className="hover:text-teal-400 transition-colors">مقالات و آموزش‌ها</a></li>
                <li><a href="#consultation" className="hover:text-teal-400 transition-colors">درخواست مشاوره</a></li>
              </ul>
            </div>

            {/* ستون ۳: اطلاعات تماس و آدرس */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-white text-base font-bold mb-3">ارتباط با مطب</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 text-center md:text-right">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-teal-400 shrink-0">📍</span>
                  <span>آبادان - خیابان امیری - خیابان پرویزی - مجتمع دهکده سلامت - طبقه اول</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-teal-400 shrink-0">📞</span>
                  <a href="tel:06153230035" className="hover:text-teal-400 font-mono text-sm">061-53230035</a>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-teal-400 shrink-0">🕒</span>
                  <span>شنبه تا پنجشنبه: ۱۵:۰۰ الی ۲۰:۰۰</span>
                </li>
              </ul>
            </div>

          </div>

          {/* خط جداکننده و کپی‌رایت */}
          <div className="pt-6 border-t border-slate-800/80 text-center text-[11px] sm:text-xs text-slate-500">
            <p>© {new Date().getFullYear()} تمامی حقوق مادی و معنوی این وب‌سایت متعلق به مطب تخصصی پوست و مو می‌باشد.</p>
          </div>
        </footer>

      </body>
    </html>
  )
}
