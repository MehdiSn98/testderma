'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function AboutSection() {
  const [aboutRef, isVisible] = useScrollReveal(0.2)

  return (
    <section ref={aboutRef} className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24 mb-12">
      <div 
        className={`bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="absolute top-0 left-0 w-32 h-32 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative shrink-0">
          <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-tr from-teal-500 to-teal-100 p-1 shadow-lg">
            <div className="w-full h-full bg-slate-100 rounded-[14px] overflow-hidden flex items-center justify-center relative">
              <span className="text-6xl sm:text-7xl select-none">👩‍⚕️</span>
            </div>
          </div>
          <div className="absolute -bottom-3 -right-3 bg-teal-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md border-2 border-white">
            متخصص پوست و مو
          </div>
        </div>

        <div className="flex-1 text-right">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-lg mb-2">
            آشنایی با پزشک
          </span>
          <h2 className="text-xl sm:text-3xl font-bold text-slate-800 mb-4 leading-tight">
            درباره پزشک متخصص
          </h2>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-light mb-6 text-justify">
            دارای بورد تخصصی پوست، مو، زیبایی و لیزر با سال‌ها تجربه در درمان بیماری‌های پوستی و اجرای متدهای نوین جوانسازی. هدف ما ارائه خدمات تشخیصی و درمانی مبتنی بر مدرن‌ترین استانداردهای پزشکی روز دنیا، در محیطی کاملاً ایمن، استریل و آرام برای شما عزیزان است.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-slate-100 text-center">
            <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-100">
              <span className="block font-bold text-teal-600 text-sm sm:text-lg">+۱۰</span>
              <span className="text-[10px] sm:text-xs text-slate-500">سال تجربه</span>
            </div>
            <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-100">
              <span className="block font-bold text-teal-600 text-sm sm:text-lg">+۵۰۰۰</span>
              <span className="text-[10px] sm:text-xs text-slate-500">مراجعین رضایتمند</span>
            </div>
            <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-100">
              <span className="block font-bold text-teal-600 text-sm sm:text-lg">۱۰۰٪</span>
              <span className="text-[10px] sm:text-xs text-slate-500">تجهیزات اورجینال</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
