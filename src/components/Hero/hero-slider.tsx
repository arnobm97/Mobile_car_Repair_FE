"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      eventParams?: Record<string, unknown>
    ) => void
  }
}

export interface Slide {
  id: number
  image: string
  imageSmall?: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

interface HeroSliderProps {
  slides: Slide[]
}

export function HeroSlider({ slides }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!slides || slides.length === 0) return

    const autoplay = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(autoplay)
  }, [slides.length])

  const handleCTAClick = (slideId: number, buttonText: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        'event_category': 'hero_slider',
        'event_label': `slide_${slideId}_${buttonText}`,
      })
    }
  }

  if (!slides || slides.length === 0) return null

  return (
    <div className="relative h-[500px] md:h-screen w-full overflow-hidden bg-black">
      {/* Background Slides with Cross-fade */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 1 : 0,
            }}
          >
            {/* Single Image Approach - More Reliable */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              className="object-cover md:object-cover"
              style={{
                objectPosition: "center",
                // Force image to show on all screens
                display: 'block'
              }}
              quality={90}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
          </div>
        ))}
      </div>

      {/* Persistent Content */}
      <div className="absolute inset-0 z-10 flex h-full items-center justify-center px-4 md:px-8 lg:px-16 pointer-events-none">
        <div
          key={currentSlide}
          className="max-w-4xl w-full text-center animate-fadeIn pointer-events-auto"
        >
          {/* Title */}
          <h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-white mb-6 tracking-tight drop-shadow-2xl leading-[1.1] font-extrabold uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {slides[currentSlide].title}
          </h1>

          {/* Description */}
          <p
            className="text-sm sm:text-base md:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg px-2 font-medium"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {slides[currentSlide].description}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {slides[currentSlide].buttonLink.startsWith('tel:') ? (
              <a
                href={slides[currentSlide].buttonLink}
                className="font-bold bg-brand py-3 px-10 text-white hover:bg-brand/90 transition-all duration-300 transform hover:scale-105 inline-block text-center text-lg rounded-sm shadow-xl"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                onClick={() => handleCTAClick(slides[currentSlide].id, slides[currentSlide].buttonText)}
              >
                {slides[currentSlide].buttonText}
              </a>
            ) : (
              <a
                href={slides[currentSlide].buttonLink}
                className="font-bold bg-brand py-3 px-10 text-white hover:bg-brand/90 transition-all duration-300 transform hover:scale-105 inline-block text-center text-lg rounded-sm shadow-xl"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                onClick={() => handleCTAClick(slides[currentSlide].id, slides[currentSlide].buttonText)}
              >
                {slides[currentSlide].buttonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}