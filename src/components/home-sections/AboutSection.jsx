'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function AboutSection() {
  const [aboutRef, isVisible] = useScrollReveal(0.2)

  return (
    <section
      ref={aboutRef}
      className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24 mb-12"
    >
      <div
        className={`bg-[#faf6f0] rounded-3xl p-6 sm:p-10 md:p-12 border border-[#dfd1b8]/40 shadow-[0_25px_70px_rgba(59,39,26,0.22)] hover:shadow-[0_35px_90px_rgba(59,39,26,0.32)] flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden transition-all duration-1000 ease-out transform ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-16'
        }`}
      >
        {/* دکور پس زمینه */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#ebdcc9]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative shrink-0">
          <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-tr from-[#3b271a] to-[#ebdcc9] p-1 shadow-lg">
            <div className="w-full h-full bg-[#f3ece0] rounded-[14px] overflow-hidden flex items-center justify-center relative">
              <span className="text-6xl sm:text-7xl select-none">
                👩‍⚕️
              </span>
            </div>
          </div>

          <div className="absolute -bottom-3 -right-3 bg-[#3b271a] text-[#faf6f0] text-[11px] font-bold px-3 py-1 rounded-full shadow-md border-2 border-[#faf6f0]">
            متخصص پوست و مو
          </div>
        </div>

        <div className="flex-1 text-right relative z-10">
          <span className="inline-block bg-[#ebdcc9] text-[#3b271a] text-xs font-semibold px-3 py-1 rounded-lg mb-2">
            آشنایی با پزشک
          </span>

          <h2 className="text-xl sm:text-3xl font-bold text-[#3b271a] mb-4 leading-tight">
            درباره پزشک متخصص
          </h2>

          <p className="text-xs sm:text-base text-[#8c7462] leading-relaxed font-light mb-6 text-justify">
            دارای بورد تخصصی پوست، مو، زیبایی و لیزر با سال‌ها تجربه در درمان بیماری‌های پوستی و اجرای متدهای نوین جوانسازی. هدف ما ارائه خدمات تشخیصی و درمانی مبتنی بر مدرن‌ترین استانداردهای پزشکی روز دنیا، در محیطی کاملاً ایمن، استریل و آرام برای شما عزیزان است.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-[#dfd1b8]/50 text-center">
            <div className="bg-[#f3ece0] p-2.5 sm:p-3 rounded-xl border border-[#dfd1b8]/40">
              <span className="block font-bold text-[#3b271a] text-sm sm:text-lg">
                +۱۰
              </span>
              <span className="text-[10px] sm:text-xs text-[#8c7462]">
                سال تجربه
              </span>
            </div>

            <div className="bg-[#f3ece0] p-2.5 sm:p-3 rounded-xl border border-[#dfd1b8]/40">
              <span className="block font-bold text-[#3b271a] text-sm sm:text-lg">
                +۵۰۰۰
              </span>
              <span className="text-[10px] sm:text-xs text-[#8c7462]">
                مراجعین رضایتمند
              </span>
            </div>

            <div className="bg-[#f3ece0] p-2.5 sm:p-3 rounded-xl border border-[#dfd1b8]/40">
              <span className="block font-bold text-[#3b271a] text-sm sm:text-lg">
                ۱۰۰٪
              </span>
              <span className="text-[10px] sm:text-xs text-[#8c7462]">
                تجهیزات اورجینال
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}