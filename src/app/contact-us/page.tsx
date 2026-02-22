"use client"
import { PageHero } from '@/components/shared/PageHero'
import React from 'react'
import contactHero from "@/images/hero1.webp";
import { ContactSection } from '@/components/contact/ContactSection';
import { contactSection } from '@/data/data';
import dynamic from 'next/dynamic';

const MapSection = dynamic(() => import('@/components/Map/Map').then((mod) => mod.MapSection), {
  ssr: false,
});

const page = () => {
  return (
    <div>
      <PageHero
        title="Contact Us"
        backgroundImage={contactHero}
        breadcrumbs={[{ label: "Contact Us" }]}
      />
      <ContactSection {...contactSection} />
      <MapSection />
    </div>
  )
}

export default page