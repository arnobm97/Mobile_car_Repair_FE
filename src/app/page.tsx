import React from 'react'
import { HeroSlider} from '@/components/Hero/hero-slider'
import { Navbar } from '@/components/Navbar/Navbar'
import { SolutionSection } from '@/components/Solution/solution'
import { ServicesSection } from '@/components/service/service'
import { brandsSection, contactSection, heroSlides, servicesSection, solutionSection, testimonialsSection } from '@/data/data'
import { TestimonialsSection } from '@/components/Testimonial/testimonial'
import { BrandsSection } from '@/components/brands/Brand'
import { ContactSection } from '@/components/contact/ContactSection'
import { Footer } from '@/components/footer/footer'


const page = () => {
  return (
    <div className='bg-secondary'>
      <Navbar/>
      <HeroSlider slides={heroSlides}/>
      <SolutionSection {...solutionSection}/>
      <ServicesSection {...servicesSection}/>
      <TestimonialsSection {...testimonialsSection}/>
      <BrandsSection {...brandsSection}/>
      <ContactSection {...contactSection}/>
      <Footer/>
    </div>
  )
}

export default page