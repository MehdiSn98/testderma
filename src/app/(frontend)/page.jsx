'use client'

import HeroSlider from '@/components/home-sections/HeroSlider'
import CallToAction from '@/components/home-sections/CallToAction'
import FeaturesGrid from '@/components/home-sections/FeaturesGrid'
import AboutSection from '@/components/home-sections/AboutSection'
import MedicalBackground from '@/components/home-sections/MedicalBackground'

export default function HomePage() {
  return (
    
    <div className="relative w-full overflow-hidden space-y-3 sm:space-y-12 m-0 p-0">
      
      {/* بکگراند لبه به لبه کل ارتفاع و عرض رو کاور می‌کنه */}
      <MedicalBackground />

      {/* ۱. اسلایدر اصلی */}
      <div className="mx-auto pt-10 mb-20">
        <HeroSlider />
      </div>
      
      {/* ۳. سکشن ویژگی‌های کلینیک */}
      <FeaturesGrid />

      
      {/* ۲. سکشن رزرو و تماس */}
      <CallToAction />

      {/* ۴. سکشن معرفی پزشک و آمار */}
      <AboutSection />

    </div>
  )
}
