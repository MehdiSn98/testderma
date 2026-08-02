'use client'

import HeroSlider from '@/components/HeroSlider'
import CallToAction from '@/components/CallToAction'
import FeaturesGrid from '@/components/FeaturesGrid'
import AboutSection from '@/components/AboutSection'

export default function HomePage() {
  return (
    <div className="space-y-3 sm:space-y-12 pb-12">
      
      {/* ۱. اسلایدر اصلی */}
      <div className="mx-auto mt-5">
        <HeroSlider />
      </div>

      {/*سکشن رزرو و تماس   */}
        <CallToAction />
      
      {/* ۲. سکشن ویژگی‌های کلینیک */}
      <FeaturesGrid />

      {/* ۳. سکشن معرفی پزشک و آمار */}
      <AboutSection />

    </div>
  )
}
