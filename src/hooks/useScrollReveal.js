'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(threshold = 0.05) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.scrollY
        const isScrollingDown = currentScrollY >= lastScrollY.current

        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          if (!isScrollingDown) {
            setIsVisible(false)
          }
        }

        lastScrollY.current = currentScrollY
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px 40px 0px',
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return [ref, isVisible]
}
