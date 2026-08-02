import SocialLinks from './SocialLinks'
import { FOOTER_QUICK_LINKS } from '@/constants/navigation'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#3b271a] via-[#26180f] to-[#160d08] text-[#dfd1b8] pt-12 pb-8 px-4 border-t border-[#ebdcc9]/20 m-0 relative overflow-hidden">

      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ebdcc9]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#8c7462]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-right relative z-10">

        {/* ستون ۱ */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-[#faf6f0] text-lg font-bold mb-3 flex items-center gap-2 justify-center md:justify-start">
            <span className="animate-bounce">🩺</span>
            مطب تخصصی پوست و مو
          </h3>

          <p className="text-xs sm:text-sm text-[#dfd1b8]/80 leading-relaxed mb-4 max-w-sm md:max-w-none">
            ارائه جدیدترین خدمات درمانی و زیبایی پوست، مو و لیزر با بهره‌گیری از پیشرفته‌ترین تجهیزات روز دنیا و کادر مجرب.
          </p>

          <SocialLinks />
        </div>


        {/* ستون ۲ */}
        <div className="md:pr-8">
          <h4 className="text-[#faf6f0] text-base font-bold mb-3">
            دسترسی سریع
          </h4>

          <ul className="space-y-2.5 text-xs sm:text-sm text-[#dfd1b8]/80">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className="inline-block hover:text-[#ebdcc9] transition-all duration-300 hover:-translate-x-1.5"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>


        {/* ستون ۳ */}
        <div className="flex flex-col items-center md:items-start">

          <h4 className="text-[#faf6f0] text-base font-bold mb-3">
            ارتباط با مطب
          </h4>

          <ul className="space-y-2.5 text-xs sm:text-sm text-[#dfd1b8]/80 text-center md:text-right">

            <li className="flex items-center justify-center md:justify-start gap-2 group">
              <span className="text-[#ebdcc9] shrink-0 group-hover:scale-125 transition-transform">
                📍
              </span>
              <span>
                آبادان - خیابان امیری - خیابان پرویزی - مجتمع دهکده سلامت - طبقه اول
              </span>
            </li>

            <li className="flex items-center justify-center md:justify-start gap-2 group">
              <span className="text-[#ebdcc9] shrink-0 group-hover:scale-125 transition-transform">
                📞
              </span>

              <a
                href="tel:06153230035"
                className="hover:text-[#ebdcc9] font-mono text-sm transition-colors"
              >
                061-53230035
              </a>
            </li>

            <li className="flex items-center justify-center md:justify-start gap-2 group">
              <span className="text-[#ebdcc9] shrink-0 group-hover:scale-125 transition-transform">
                🕒
              </span>

              <span>
                شنبه تا پنجشنبه: ۱۵:۰۰ الی ۲۰:۰۰
              </span>
            </li>

          </ul>
        </div>

      </div>


      <div className="pt-6 border-t border-[#ebdcc9]/20 text-center text-[11px] sm:text-xs text-[#dfd1b8]/60 relative z-10">
        <p>
          © {new Date().getFullYear()} تمامی حقوق مادی و معنوی این وب‌سایت متعلق به مطب تخصصی پوست و مو می‌باشد.
        </p>
      </div>

    </footer>
  )
}