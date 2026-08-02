'use client'

import { useState, useEffect, useRef } from 'react'

export default function CallToAction() {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setShouldAnimate(true)
        } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setShouldAnimate(false)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`max-w-6xl mx-auto px-4 sm:px-6 mt-4 sm:mt-8 transition-all duration-700 ease-out transform-gpu ${
        shouldAnimate
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
<div className="bg-gradient-to-r from-[#3b271a] via-[#5a3b26] to-[#8c7462] rounded-2xl sm:rounded-3xl p-3.5 min-[490px]:p-6 sm:p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.6)] flex flex-row items-center justify-between gap-3 min-[490px]:gap-6 relative overflow-visible min-h-[82px] min-[490px]:min-h-0">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center gap-3 sm:gap-4 z-10 text-right">
          <div className="w-10 h-10 min-[490px]:w-12 min-[490px]:h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
            <svg
              className="w-5 h-5 min-[490px]:w-6 min-[490px]:h-6 sm:w-7 sm:h-7 text-[#e8cda8]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>

          <div>
            <div className="flex items-center gap-1.5 min-[490px]:gap-2 mb-0.5 min-[490px]:mb-1">
              <span className="relative flex h-2 w-2 min-[490px]:h-2.5 min-[490px]:w-2.5">
                <span className="animate-ping absolute inline-flex h-full h-full rounded-full bg-[#d8b58a] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 min-[490px]:h-2.5 min-[490px]:w-2.5 bg-[#d8b58a]"></span>
              </span>

              <span className="text-[11px] min-[490px]:text-xs font-medium text-[#eadbc5]">
                مشاوره و نوبت‌دهی
              </span>
            </div>

            <h2 className="hidden min-[510px]:block text-base sm:text-xl font-bold">
              جهت دریافت نوبت و مشاوره تماس بگیرید
            </h2>

            <p className="text-[10px] min-[490px]:text-xs text-[#eadbc5]/80 font-light mt-0.5">
              شنبه تا پنجشنبه، ۱۵:۰۰ الی ۲۰:۰۰
            </p>
          </div>
        </div>

        <div className="z-10 shrink-0">
          <a
            href="tel:06153230035"
            className="inline-block text-center font-mono text-sm min-[490px]:text-lg sm:text-2xl font-bold tracking-wider bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 px-3 min-[490px]:px-5 sm:px-6 py-2 min-[490px]:py-2.5 sm:py-3 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 active:scale-95 dir-ltr"
          >
            061-53230035
          </a>
        </div>

      </div>
    </section>
  )
}