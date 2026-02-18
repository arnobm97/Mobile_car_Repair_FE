"use client"

import Link from "next/link"

import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"

import { useState, useEffect } from "react"

// Extend Window interface to include gtag
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
    if (!api) {
      return
    }


    setCurrentSlide(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap())
    })
  }, [api])

  const handleCTAClick = (slideId: number, buttonText: string) => {
    // Track CTA clicks (you can send this to analytics)
    console.log(`CTA Clicked - Slide ${slideId}: ${buttonText}`)

    // You can also track with Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        'event_category': 'hero_slider',
        'event_label': `slide_${slideId}_${buttonText}`,
      })
    }
  }

  if (!slides || slides.length === 0) return null

  return (
    <div className="relative h-[60vh] md:h-screen w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="w-full h-full"
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[60vh] md:h-screen">
                {/* Background Image with Overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-full items-center justify-center px-4 md:px-8 lg:px-16">
                  <div className="max-w-3xl w-full text-center animate-fadeIn">
                    {/* Slide Indicator */}
                    <span className="mb-4 inline-block rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                      {slide.id === 1 && "Complete Car Care"}
                      {slide.id === 2 && "Expert Repairs"}
                      {slide.id === 3 && "Premium Painting"}
                    </span>

                    <h1
                      className="text-3xl md:text-5xl lg:text-6xl text-white mb-6 tracking-wide drop-shadow-lg max-w-4xl mx-auto leading-tight"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                    >
                      {slide.title}
                    </h1>
                    <p
                      className="text-base md:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md px-4"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                    >
                      {slide.description}
                    </p>
                    {/* CTA Button Group */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                      {/* Primary CTA - Call Us Now */}
                      {slide.buttonLink.startsWith('tel:') ? (
                        <a
                          href={slide.buttonLink}
                          className="font-semibold bg-brand py-2 px-6 text-white hover:bg-brand/90 transition-all duration-300 transform hover:scale-105 inline-block text-center"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                          onClick={() => handleCTAClick(slide.id, slide.buttonText)}
                        >
                          {slide.buttonText}
                        </a>
                      ) : (
                        <Link
                          href={slide.buttonLink}
                          className="font-semibold bg-brand py-2 px-6 text-white hover:bg-brand/90 transition-all duration-300 transform hover:scale-105 inline-block text-center"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                          onClick={() => handleCTAClick(slide.id, slide.buttonText)}
                        >
                          {slide.buttonText}
                        </Link>
                      )}
                    </div>

                    {/* Trust Badges */}
                    {/* <div className="mt-8 flex items-center justify-center gap-6 text-white/80">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-sm">24/7 Service</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        <span className="text-sm">Certified Experts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                        <span className="text-sm">Free Inspection</span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows - Hidden on Mobile */}
        <CarouselPrevious className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-4 text-white backdrop-blur-sm hover:bg-white/30 hover:scale-110 transition-all duration-300 z-20">
          <ChevronLeft className="h-6 w-6" />
        </CarouselPrevious>
        <CarouselNext className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-4 text-white backdrop-blur-sm hover:bg-white/30 hover:scale-110 transition-all duration-300 z-20">
          <ChevronRight className="h-6 w-6" />
        </CarouselNext>

        {/* Slide Indicators - Mobile Only (md:hidden) */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20 md:hidden">
          {slides.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 shadow-md ${currentSlide === index
                ? "w-8 bg-red-600"
                : "w-2 bg-white/70 hover:bg-white"
                }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}