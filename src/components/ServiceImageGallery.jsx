'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ServiceImageGallery({ images, title, badge }) {
  let imageList = []

  // استخراج عکس‌های پاس داده شده (بدون عکس لوکال پیش‌فرض)
  if (Array.isArray(images) && images.length > 0) {
    imageList = images.filter(Boolean)
  } else if (typeof images === 'string' && images.trim() !== '') {
    imageList = [images]
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)
  const [touchDeltaX, setTouchDeltaX] = useState(0)

  const hasMultipleImages = imageList.length > 1

  // اگر کلاً عکسی وجود نداشت، چیزی رندر نمی‌شود (یا می‌توانید یک Fallback ساده بگذارید)
  if (imageList.length === 0) return null

  const nextSlide = () => {
    if (!hasMultipleImages) return
    setCurrentIndex((prev) => (prev + 1) % imageList.length)
    setTouchDeltaX(0)
  }

  const prevSlide = () => {
    if (!hasMultipleImages) return
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length)
    setTouchDeltaX(0)
  }

  const handleTouchStart = (e) => {
    if (!hasMultipleImages) return
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e) => {
    if (touchStartX === null || !hasMultipleImages) return
    const delta = e.touches[0].clientX - touchStartX
    setTouchDeltaX(delta)
  }

  const handleTouchEnd = () => {
    if (!hasMultipleImages) return
    if (touchDeltaX < -40) nextSlide()
    else if (touchDeltaX > 40) prevSlide()
    else setTouchDeltaX(0)
    setTouchStartX(null)
  }

  return (
    <div className="lg:col-span-5 relative w-full h-72 sm:h-88 flex flex-col items-center justify-center select-none py-2 px-4">
      {/* بج (Badge) */}
      {badge && (
        <span className="absolute top-0 right-4 bg-clinic-coffee-dark/90 backdrop-blur-md text-white text-xs font-medium px-3.5 py-1.5 rounded-full shadow-lg z-50 pointer-events-none border border-white/10">
          {badge}
        </span>
      )}

      {/* کانتینر کارت‌ها */}
      <div
        className="relative w-full max-w-[250px] sm:max-w-[300px] h-full touch-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {imageList.map((img, idx) => {
          const offset = (idx - currentIndex + imageList.length) % imageList.length
          if (offset > 2) return null

          let transformStyle = ''
          let zIndex = 30 - offset * 10
          let opacity = 1 - offset * 0.2

          if (offset === 0) {
            transformStyle = hasMultipleImages
              ? `translateX(${touchDeltaX}px) rotate(${touchDeltaX * 0.03}deg) scale(1)`
              : 'none'
          } else if (offset === 1) {
            transformStyle = 'rotate(4deg) translate(6px, -4px) scale(0.95)'
          } else if (offset === 2) {
            transformStyle = 'rotate(-4deg) translate(-6px, -8px) scale(0.90)'
          }

          return (
            <div
              key={idx}
              style={{
                transform: transformStyle,
                zIndex: zIndex,
                opacity: opacity,
                transition: touchStartX !== null && offset === 0 ? 'none' : 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
              }}
              className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-xl border-2 border-white/80 bg-clinic-cream-light origin-bottom cursor-default"
            >
              <Image
                src={typeof img === 'string' ? img : img.src || img}
                alt={`${title || 'خدمت'} - تصویر ${idx + 1}`}
                fill
                className="object-cover pointer-events-none"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority={offset === 0}
              />
              
              {offset > 0 && (
                <div className="absolute inset-0 bg-clinic-coffee-dark/20 backdrop-blur-[1px]" />
              )}
            </div>
          )
        })}

        {/* دکمه‌های فلش دسکتاپ (فقط اگر بیش از ۱ عکس باشد) */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevSlide}
              className="hidden lg:flex absolute right-[-15px] top-1/2 -translate-y-1/2 z-40 w-9 h-9 items-center justify-center rounded-full bg-white/90 text-clinic-coffee-dark shadow-md border border-clinic-border hover:bg-clinic-coffee-dark hover:text-white transition-all duration-300"
              aria-label="عکس قبلی"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="hidden lg:flex absolute left-[-15px] top-1/2 -translate-y-1/2 z-40 w-9 h-9 items-center justify-center rounded-full bg-white/90 text-clinic-coffee-dark shadow-md border border-clinic-border hover:bg-clinic-coffee-dark hover:text-white transition-all duration-300"
              aria-label="عکس بعدی"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* نقطه‌های راهنما Dots (فقط اگر بیش از ۱ عکس باشد) */}
      {hasMultipleImages && (
        <div className="mt-3 flex items-center gap-1.5 z-40">
          {imageList.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === dotIdx
                  ? 'w-5 bg-clinic-coffee-dark'
                  : 'w-1.5 bg-clinic-border hover:bg-clinic-coffee-light'
              }`}
              aria-label={`عکس ${dotIdx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}