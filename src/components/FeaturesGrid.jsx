'use client'

import { features } from '@/data/features'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function FeaturesGrid() {
  const [featuresRef, isVisible] = useScrollReveal(0.15)

  return (
    <section ref={featuresRef} className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 mb-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`bg-white rounded-2xl p-4 sm:p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-700 ease-out flex flex-col items-start text-right group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal-50 group-hover:bg-teal-500 text-teal-600 group-hover:text-white flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 transition-colors duration-300 shadow-inner">
              {feature.icon}
            </div>
            <h3 className="text-sm sm:text-lg font-bold text-slate-800 mb-1.5 sm:mb-2 group-hover:text-teal-600 transition-colors">
              {feature.title}
            </h3>
            <p className="text-[11px] sm:text-sm text-slate-500 leading-relaxed font-light">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
