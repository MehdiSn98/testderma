'use client'

import { useState, useEffect, useRef } from 'react'
import { features } from '@/data/features'

export default function FeaturesGrid() {
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
      className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 mb-12"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            style={{ transitionDelay: `${index * 100}ms` }}
            className={`bg-[#faf6f0] rounded-2xl p-4 sm:p-6 border border-[#dfd1b8]/40 shadow-[0_25px_70px_rgba(59,39,26,0.22)] hover:shadow-[0_35px_90px_rgba(59,39,26,0.32)] hover:-translate-y-1.5 transition-all duration-700 ease-out flex flex-col items-center text-center group transform-gpu ${
              shouldAnimate
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12 pointer-events-none'
            }`}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#ebdcc9] group-hover:bg-[#3b271a] text-[#3b271a] group-hover:text-[#faf6f0] flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 transition-colors duration-300 shadow-inner">
              {feature.icon}
            </div>

            <h3 className="text-sm sm:text-lg font-bold text-[#3b271a] mb-1.5 sm:mb-2 group-hover:text-[#6b4a32] transition-colors">
              {feature.title}
            </h3>

            <p className="text-[11px] sm:text-sm text-[#8c7462] leading-relaxed font-light">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}