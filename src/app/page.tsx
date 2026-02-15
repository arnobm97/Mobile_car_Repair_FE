'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { HeroSlider } from '@/components/Hero/hero-slider'
import { SolutionSection } from '@/components/Solution/solution'
import { ServicesSection } from '@/components/service/service'
import { ContactSection } from '@/components/contact/ContactSection'
import { FAQSection } from '@/components/FAQ/FAQ'
import { brandsSection, contactSection, heroSlides, servicesSection, solutionSection, testimonialsSection, faqSection } from '@/data/data'
import { TestimonialsSection } from '@/components/Testimonial/testimonial'
import { BrandsSection } from '@/components/brands/Brand'

// Dynamic import to avoid SSR issues with Leaflet
const MapSection = dynamic(() => import('@/components/Map/Map').then(mod => ({ default: mod.MapSection })), {
  ssr: false,
  loading: () => <div style={{ height: '300px', width: '100%', background: '#f0f0f0' }} />
})

const page = () => {
  return (
    <div className='bg-secondary'>
      <HeroSlider slides={heroSlides} />
      <SolutionSection {...solutionSection} />
      <ServicesSection {...servicesSection} />
      <TestimonialsSection {...testimonialsSection} />
      <BrandsSection {...brandsSection} />
      <ContactSection {...contactSection} />
      <FAQSection {...faqSection} />
      <MapSection />
    </div>
  )
}

export default page