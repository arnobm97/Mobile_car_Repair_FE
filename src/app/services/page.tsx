import { ServicesSection } from '@/components/service/service';
import { PageHero } from '@/components/shared/PageHero'
import { servicesSection } from '@/data/data';
import serviceHero from "@/images/MobileCarRepairService.png";
import React from 'react'

const page = () => {
  return (
    <div>
        <PageHero 
        title="Services" 
        backgroundImage={serviceHero}
        breadcrumbs={[{ label: "Services" }]}
      />
      <ServicesSection {...servicesSection}/>
    </div>
  )
}

export default page