'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { features } from '@/data/features'

export default function FeaturesGrid() {
  // کاهش threshold به 0.05 برای شروع سریع‌تر انیمیشن موقع اسکرول
  const [featuresRef, isVisible] = useScrollReveal(0.05)

  return (
    <section
      ref={featuresRef}
      className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 mb-12"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            /* کاهش delay از 100ms به 50ms برای هماهنگی بیشتر کارت‌های 3 و 4 */
            style={{ transitionDelay: isVisible ? `${index * 50}ms` : '0ms' }}
            className={`bg-clinic-cream-light rounded-2xl p-4 sm:p-6 border border-clinic-border/40 shadow-clinic-card hover:shadow-clinic-card-hover hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col items-center text-center group transform-gpu ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12 pointer-events-none'
            }`}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-clinic-cream-card group-hover:bg-clinic-coffee-dark text-clinic-coffee-dark group-hover:text-clinic-cream-light flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 transition-colors duration-300 shadow-inner">
              {feature.icon}
            </div>

            <h3 className="text-sm sm:text-lg font-bold text-clinic-coffee-dark mb-1.5 sm:mb-2 group-hover:text-clinic-coffee-medium transition-colors">
              {feature.title}
            </h3>

            <p className="text-[11px] sm:text-sm text-clinic-coffee-light leading-relaxed font-light">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
