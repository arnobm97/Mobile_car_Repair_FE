import { PageHero } from '@/components/shared/PageHero'
import React from 'react'
import contactHero from "@/images/MobileCarRepairService.png";
import { ContactSection } from '@/components/contact/ContactSection';
import { contactSection } from '@/data/data';
const page = () => {
  return (
    <div>
        <PageHero 
        title="Contact Us" 
        backgroundImage={contactHero}
        breadcrumbs={[{ label: "Contact Us" }]}
      />
      <ContactSection {...contactSection}/>
    </div>
  )
}

export default page