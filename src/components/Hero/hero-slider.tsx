"use client"

import { ChevronLeft, ChevronRight, Phone, Calendar } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      eventParams?: Record<string, any>
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
  const [currentSlide, setCurrentSlide] = useState(0)

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
    <div className="relative h-screen w-full overflow-hidden pt-24">
      <Carousel
        opts={{ loop: true }}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-screen">
                {/* Background Image with Overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-full items-center px-4 md:px-8 lg:px-16">
                  <div className="max-w-3xl text-left animate-fadeIn">
                    {/* Slide Indicator */}
                    <span className="mb-4 inline-block rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                      {slide.id === 1 && "Complete Car Care"}
                      {slide.id === 2 && "Expert Repairs"}
                      {slide.id === 3 && "Premium Painting"}
                    </span>

                    <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl xl:text-7xl uppercase leading-tight">
                      {slide.title}
                    </h1>

                    <p className="mb-8 text-base text-white/90 md:text-lg lg:text-xl max-w-2xl">
                      {slide.description}
                    </p>

                    {/* CTA Button Group */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Primary CTA - Book Now */}
                      <Button
                        size="lg"
                        className="group relative bg-red-600 px-8 py-6 text-lg font-semibold text-white hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                        asChild
                        onClick={() => handleCTAClick(slide.id, slide.buttonText)}
                      >
                        <a href={slide.buttonLink} className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 transition-transform group-hover:rotate-12" />
                          <span>{slide.buttonText}</span>
                          <span className="absolute right-0 top-0 h-full w-2 bg-white/20 transform skew-x-12 group-hover:w-full transition-all duration-500 -z-10"></span>
                        </a>
                      </Button>


                    </div>

                    {/* Trust Badges */}
                    <div className="mt-8 flex items-center gap-6 text-white/80">
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
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-4 text-white backdrop-blur-sm hover:bg-white/30 hover:scale-110 transition-all duration-300 z-20">
          <ChevronLeft className="h-6 w-6" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-4 text-white backdrop-blur-sm hover:bg-white/30 hover:scale-110 transition-all duration-300 z-20">
          <ChevronRight className="h-6 w-6" />
        </CarouselNext>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index: number) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index
                ? 'w-8 bg-red-600'
                : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
              onClick={() => {/* Navigate to slide */ }}
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