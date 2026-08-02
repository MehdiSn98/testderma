'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(threshold = 0.05) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentRef = ref.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        // هر وقت توی دید بود true بشه، هر وقت خارج شد false (تا همیشه زنده بمونه)
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: threshold,
        rootMargin: '50px 0px 50px 0px', // کمی مارجین مثبت تا قبل از رسیدن هم فعال بشه
      }
    )

    if (currentRef) {
      observer.observe(currentRef)
      
      // بررسی فوری در لحظه لود: اگه همین الان هم توی دید هست، بی‌معطلی نشونش بده!
      const rect = currentRef.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true)
      }
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return [ref, isVisible]
}
