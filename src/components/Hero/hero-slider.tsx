"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

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
  if (!slides || slides.length === 0) return null

  return (
    <div className="relative h-screen w-full overflow-hidden pt-16">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-screen">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-full items-center justify-center px-4">
                  <div className="max-w-5xl text-center">
                    <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl uppercase">
                      {slide.title}
                    </h1>
                    <p className="mb-8 text-lg text-white md:text-xl lg:text-2xl">
                      {slide.description}
                    </p>
                    <Button
                      size="lg"
                      className="bg-red-600 px-8 py-6 text-lg font-semibold text-white hover:bg-red-700"
                      asChild
                    >
                      <a href={slide.buttonLink}>{slide.buttonText}</a>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm hover:bg-white/30 z-20">
          <ChevronLeft className="h-6 w-6" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm hover:bg-white/30 z-20">
          <ChevronRight className="h-6 w-6" />
        </CarouselNext>
      </Carousel>
    </div>
  )
}
