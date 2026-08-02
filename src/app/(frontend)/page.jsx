'use client'

import HeroSlider from '@/components/HeroSlider'
import CallToAction from '@/components/CallToAction'
import FeaturesGrid from '@/components/FeaturesGrid'
import AboutSection from '@/components/AboutSection'
import MedicalBackground from '@/components/MedicalBackground'

export default function HomePage() {
  return (
    // تمام marginها و paddingهای اضافه حذف شدند تا بک‌گراند چسبیده به هدر و فوتر باشه
    <div className="relative w-full overflow-hidden space-y-3 sm:space-y-12 m-0 p-0">
      
      {/* بکگراند لبه به لبه کل ارتفاع و عرض رو کاور می‌کنه */}
      <MedicalBackground />

      {/* ۱. اسلایدر اصلی */}
      <div className="mx-auto pt-10">
        <HeroSlider />
      </div>

      {/* ۲. سکشن رزرو و تماس */}
      <CallToAction />
      
      {/* ۳. سکشن ویژگی‌های کلینیک */}
      <FeaturesGrid />

      {/* ۴. سکشن معرفی پزشک و آمار */}
      <AboutSection />

    </div>
  )
}
