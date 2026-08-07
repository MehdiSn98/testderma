'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function AboutSection() {
  const [aboutRef, isVisible] = useScrollReveal(0.15)

  return (
    <section
      ref={aboutRef}
      className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24 mb-12"
    >
      <div
        className={`bg-clinic-cream-light rounded-3xl p-6 sm:p-10 md:p-12 border border-clinic-border/40 shadow-clinic-card hover:shadow-clinic-card-hover flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden transition-all duration-1000 ease-out transform ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
      >
        {/* دکور پس زمینه */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-clinic-cream-card/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative shrink-0">
          <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-tr from-clinic-coffee-dark to-clinic-cream-card p-1 shadow-lg">
            <div className="w-full h-full bg-clinic-cream-dark rounded-[14px] overflow-hidden flex items-center justify-center relative">
              <span className="text-6xl sm:text-7xl select-none">
                👩‍⚕️
              </span>
            </div>
          </div>

          <div className="absolute -bottom-3 -right-3 bg-clinic-coffee-dark text-clinic-cream-light text-[11px] font-bold px-3 py-1 rounded-full shadow-md border-2 border-clinic-cream-light">
            متخصص پوست و مو
          </div>
        </div>

        <div className="flex-1 text-right relative z-10">
          <span className="inline-block bg-clinic-cream-card text-clinic-coffee-dark text-xs font-semibold px-3 py-1 rounded-lg mb-2">
            آشنایی با پزشک
          </span>

          <h2 className="text-xl sm:text-3xl font-bold text-clinic-coffee-dark mb-4 leading-tight">
            درباره پزشک متخصص
          </h2>

          <p className="text-xs sm:text-base text-clinic-coffee-light leading-relaxed font-light mb-6 text-justify">
            دارای بورد تخصصی پوست، مو، زیبایی و لیزر با سال‌ها تجربه در درمان بیماری‌های پوستی و اجرای متدهای نوین جوانسازی. هدف ما ارائه خدمات تشخیصی و درمانی مبتنی بر مدرن‌ترین استانداردهای پزشکی روز دنیا، در محیطی کاملاً ایمن، استریل و آرام برای شما عزیزان است.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-clinic-border/50 text-center">
            <div className="bg-clinic-cream-dark p-2.5 sm:p-3 rounded-xl border border-clinic-border/40">
              <span className="block font-bold text-clinic-coffee-dark text-sm sm:text-lg">
                +۱۰
              </span>
              <span className="text-[10px] sm:text-xs text-clinic-coffee-light">
                سال تجربه
              </span>
            </div>

            <div className="bg-clinic-cream-dark p-2.5 sm:p-3 rounded-xl border border-clinic-border/40">
              <span className="block font-bold text-clinic-coffee-dark text-sm sm:text-lg">
                +۵۰۰۰
              </span>
              <span className="text-[10px] sm:text-xs text-clinic-coffee-light">
                مراجعین رضایتمند
              </span>
            </div>

            <div className="bg-clinic-cream-dark p-2.5 sm:p-3 rounded-xl border border-clinic-border/40">
              <span className="block font-bold text-clinic-coffee-dark text-sm sm:text-lg">
                ۱۰۰٪
              </span>
              <span className="text-[10px] sm:text-xs text-clinic-coffee-light">
                تجهیزات اورجینال
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
