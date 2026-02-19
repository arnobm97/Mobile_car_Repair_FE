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
  const [api, setApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!api) return

    const autoplay = setInterval(() => {
      api.scrollNext()
    }, 5000)

    setCurrentSlide(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap())
    })

    return () => clearInterval(autoplay)
  }, [api])

  const handleCTAClick = (slideId: number, buttonText: string) => {
    console.log(`CTA Clicked - Slide ${slideId}: ${buttonText}`)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        'event_category': 'hero_slider',
        'event_label': `slide_${slideId}_${buttonText}`,
      })
    }
  }

  if (!slides || slides.length === 0) return null

  return (
    <div className="relative h-[300px] md:h-screen w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="w-full h-full"
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[300px] md:h-screen w-full">
                {/* Background Image using IMG tag for better control */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="100vw"
                    priority
                    className="object-fill"
                    style={{ objectPosition: 'center' }}
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Persistent Content */}
        <div className="absolute inset-0 z-10 flex h-full items-center justify-center px-4 md:px-8 lg:px-16 pointer-events-none">
          <div className="max-w-3xl w-full text-center animate-fadeIn pointer-events-auto">
            <h1
              className="text-xl sm:text-2xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 tracking-wide drop-shadow-lg max-w-4xl mx-auto leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              {slides[0].title}
            </h1>
            <p
              className="text-xs sm:text-sm md:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md px-2"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
            >
              {slides[0].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              {slides[0].buttonLink.startsWith('tel:') ? (
                <a
                  href={slides[0].buttonLink}
                  className="font-semibold bg-brand py-2 px-6 text-white hover:bg-brand/90 transition-all duration-300 transform hover:scale-105 inline-block text-center"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  onClick={() => handleCTAClick(slides[0].id, slides[0].buttonText)}
                >
                  {slides[0].buttonText}
                </a>
              ) : (
                <Link
                  href={slides[0].buttonLink}
                  className="font-semibold bg-brand py-2 px-6 text-white hover:bg-brand/90 transition-all duration-300 transform hover:scale-105 inline-block text-center"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  onClick={() => handleCTAClick(slides[0].id, slides[0].buttonText)}
                >
                  {slides[0].buttonText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}