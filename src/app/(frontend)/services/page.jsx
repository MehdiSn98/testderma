'use client'

import { servicesSlides } from '@/data/services'
import ServiceImageGallery from '@/components/ServiceImageGallery'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// کامپوننت تکی برای هر کارت خدمات جهت اعمال انیمیشن Scroll Reveal
function ServiceCard({ service, index }) {
  const [cardRef, isVisible] = useScrollReveal(0.15)

  return (
    <section
      ref={cardRef}
      id={service.slug}
      className={`scroll-mt-24 bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-clinic-border shadow-clinic-card hover:shadow-clinic-card-hover transition-all duration-1000 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
          index % 2 === 1 ? 'lg:[&>*:first-child]:order-last' : ''
        }`}
      >
        {/* آلبوم عکس لایه‌ای سه‌بعدی با قابلیت سوایپ */}
        <ServiceImageGallery
          images={service.images || service.image}
          title={service.title}
          badge={service.badge}
        />

        {/* کل بخش متون: موبایل تماماً وسط‌چین | دسکتاپ راست‌چین */}
        <div className="lg:col-span-7 space-y-4 text-center lg:text-right">
          <h2 className="text-2xl sm:text-3xl font-bold text-clinic-coffee-dark">
            {service.title}
          </h2>
          <p className="text-clinic-coffee-light text-base leading-relaxed">
            {service.description}
          </p>

          {/* جزییات کامل: حالا اینم توی موبایل می‌ره وسط! */}
          <div className="p-4 sm:p-5 bg-clinic-cream-light/80 rounded-2xl border border-clinic-border/40 text-xs sm:text-sm text-clinic-coffee leading-loose whitespace-pre-line shadow-inner">
            {service.fullDetails}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-clinic-cream-dark/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* هدر صفحه */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-clinic-coffee-dark">
            خدمات تخصصی کلینیک
          </h1>
          <p className="text-sm sm:text-base text-clinic-coffee-light max-w-2xl mx-auto">
            ارائه برترین خدمات زیبایی و درمانی با پیشرفته‌ترین تجهیزات روز دنیا
          </p>
        </div>

        {/* لیست کامل خدمات */}
        <div className="space-y-16">
          {servicesSlides.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </main>
  )
}
