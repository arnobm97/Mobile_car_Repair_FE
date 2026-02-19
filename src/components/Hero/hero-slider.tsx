"use client"

import Link from "next/link"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel"
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
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
            <Image
              src={isMobile && slide.imageSmall ? slide.imageSmall : slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
          </div>
        ))}
      </div>

      {/* Persistent Content */}
      <div className="absolute inset-0 z-10 flex h-full items-center justify-center px-4 md:px-8 lg:px-16 pointer-events-none">
        <div className="max-w-4xl w-full text-center animate-fadeIn pointer-events-auto">
          {/* Title - Specifically optimized for 320px screens */}
          <h1
            className="text-[32px] sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-white mb-6 tracking-tight drop-shadow-2xl leading-[1.1] font-extrabold uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {slides[0].title}
          </h1>

          {/* Description */}
          <p
            className="text-sm sm:text-base md:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg px-2 font-medium"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {slides[0].description}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={slides[0].buttonLink}
              className="font-bold bg-brand py-3 px-10 text-white hover:bg-brand/90 transition-all duration-300 transform hover:scale-105 inline-block text-center text-lg rounded-sm shadow-xl"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              onClick={() => handleCTAClick(slides[0].id, slides[0].buttonText)}
            >
              {slides[0].buttonText}
            </a>
          </div>
        </div>
      </div>


    </div>
  )
}
