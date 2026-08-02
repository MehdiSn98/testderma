'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { servicesSlides } from '@/data/services'

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === servicesSlides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev === servicesSlides.length - 1 ? 0 : prev + 1))
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? servicesSlides.length - 1 : prev - 1))

  const handleTouchStart = (e) => { touchStartX.current = e.targetTouches[0].clientX }
  const handleTouchMove = (e) => { touchEndX.current = e.targetTouches[0].clientX }
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    if (distance < -50) nextSlide()
    else if (distance > 50) prevSlide()
    touchStartX.current = 0
    touchEndX.current = 0
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">
      <div 
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/80 bg-slate-900 select-none border border-slate-100"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {servicesSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-7000 ease-linear"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40 md:bg-gradient-to-l md:from-slate-950/30 md:via-slate-950/80 md:to-slate-950" />
            </div>

            <div className="relative z-20 h-full p-6 pb-12 sm:p-10 sm:pb-16 md:p-12 md:pb-20 pr-8 sm:pr-14 md:pr-20 flex flex-col justify-end md:justify-center text-right">
              <div className="max-w-xl">
                <span className="inline-block bg-teal-500/30 text-teal-200 text-xs font-semibold px-3.5 py-1 rounded-full border border-teal-500/40 mb-3 backdrop-blur-md shadow-sm">
                  {slide.badge}
                </span>
                <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mb-3 drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-slate-100 text-xs sm:text-sm md:text-base mb-6 leading-relaxed font-normal line-clamp-2 sm:line-clamp-3 drop-shadow">
                  {slide.description}
                </p>
                <div>
                  <Link
                    href={slide.link}
                    className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
                  >
                    <span>توضیحات بیشتر</span>
                    <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          aria-label="اسلاید قبلی"
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900/50 text-white hover:bg-slate-900/80 backdrop-blur-md border border-white/10 items-center justify-center transition-all hover:scale-105 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          aria-label="اسلاید بعدی"
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900/50 text-white hover:bg-slate-900/80 backdrop-blur-md border border-white/10 items-center justify-center transition-all hover:scale-105 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5">
          {servicesSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`برو به اسلاید ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-6 bg-teal-400' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
