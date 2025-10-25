import audiLogo from "@/images/brands/Audi.webp"
import bentleyLogo from "@/images/brands/Bentley.webp"
import bmwLogo from "@/images/brands/BMW-Logo.webp"
import chevroletLogo from "@/images/brands/Chevrolet.webp"
import fordLogo from "@/images/brands/Ford.webp"
import gmcLogo from "@/images/brands/GMC.webp"
import hondaLogo from "@/images/brands/Honda.webp"
import hyundaiLogo from "@/images/brands/Hyundai.webp"
import infinitiLogo from "@/images/brands/Infiniti.webp"
import jaguarLogo from "@/images/brands/Jaguar.webp"
import jeepLogo from "@/images/brands/Jeep.webp"
import kiaLogo from "@/images/brands/Kia.webp"
import landroverLogo from "@/images/brands/Land-Rover.webp"
import lexusLogo from "@/images/brands/Lexux.webp"
import mazdaLogo from "@/images/brands/mazda.webp"
import mercedesLogo from "@/images/brands/Mercedes.webp"
import mitsubishiLogo from "@/images/brands/Mitsubishi.webp"
import nissanLogo from "@/images/brands/Nissan.webp"
import porscheLogo from "@/images/brands/Porsche.webp"
import suzukiLogo from "@/images/brands/Suzuki.webp"
import toyotaLogo from "@/images/brands/Toyota.webp"
import volkswagenLogo from "@/images/brands/Volkswagen.webp"
import Solutionshowcare from "@/images/Best-Car-Repair-Service-in-Dubai.jpg"
import WhyChoose from "@/images/WhyChoose.jpg";

import { Car, Settings, Zap, CircleDotDashed, Droplet, Battery, Cpu, Fuel, Thermometer} from "lucide-react";



export const heroSlides = [
  {
    id: 1,
    image: "/images/hero1.jpg",
    title: "vehicle repair service in dubai",
    description: "Service, maintenance, and repair by certified experts in Dubai, UAE. Mobile Car Repairs Service offers complete car repair, maintenance, and service solutions at your convenience.",
    buttonText: "Book Now",
    buttonLink: "#contact",
  },
  {
    id: 2,
    image: "/images/hero1.jpg",
    title: "vehicle repair service in dubai",
    description: "Service, maintenance, and repair by certified experts in Dubai, UAE. Mobile Car Repairs Service offers complete car repair, maintenance, and service solutions at your convenience.",
    buttonText: "Book Now",
    buttonLink: "#contact",
  },
];

export const solutionSection = {
  label: "best fair-price car repair",
  heading: "Your One-Stop Car Repair Solution",
  description:
    "Our experienced team of technicians is dedicated to delivering top-quality services to keep your vehicle running smoothly. Whether it’s transmission repair, air conditioning servicing, or auto electrical solutions, we’ve got you covered. We specialize in battery replacement and car diagnostics, ensuring that your vehicle is always in its prime condition.",
  primaryButtonText: "Call Us Now",
  secondaryButtonText: "Our Services",
  imageUrl: Solutionshowcare.src, 
};

export const servicesSection = {
  label: "What We Do",
  heading: "Best Car Repair Service In Dubai",
  services: [
    { title: "Mobile Car Package", description: "Convenient mobile car services at your doorstep.", icon: Car },
    { title: "Car Painting", description: "Professional car painting for a fresh, new look.", icon: Settings },
    { title: "Car Diagnosis", description: "Advanced diagnostics to detect and fix issues.", icon: Zap },
    { title: "Tyres & Wheels Care", description: "Expert tyre and wheel services for safety and performance.", icon: CircleDotDashed },
    { title: "Refuel Car", description: "On-demand fuel delivery for your convenience.", icon: Droplet },
    { title: "Mechanical Service", description: "Comprehensive mechanical repairs and maintenance.", icon: Settings },
    { title: "Battery Replacement", description: "Quick and reliable battery replacement.", icon: Battery },
    { title: "Computer Diagnosis", description: "Accurate computer diagnostics.", icon: Cpu },
    { title: "Oil Change", description: "Premium oil change for engine performance.", icon: Fuel },
    { title: "AC Repair", description: "Efficient AC repair to keep your car cool.", icon: Thermometer },
  ],
};

export const testimonialsSection = {
  heading: "See What Our Clients Say",
  description:
    "We take pride in delivering exceptional services and ensuring the best experience for our valued customers. Their trust and satisfaction fuel our commitment to excellence.",
  overallRating: 5,
  totalReviews: 33,
  testimonials: [
    { name: "Haleem Khan", date: "2024-12-17", rating: 5, review: "Very nice and experienced staff", initial: "H" },
    { name: "Taqi Usmani", date: "2024-12-16", rating: 5, review: "On time coming and repair my car thanks", initial: "T" },
    { name: "Marwan Jan", date: "2024-12-15", rating: 5, review: "I am Very satisfied with their service thanks", initial: "M" },
  ],
};

export const brandsSection = {
  heading: "Auto Brands We Serve",
  description:
    "Our experienced team of technicians is committed to providing top-quality car repair and maintenance services to keep your vehicle running at its best. From transmission repair and AC servicing to auto electrical solutions, we've got you covered. We specialize in battery replacement, car diagnostics, and complete vehicle care, ensuring your car stays in peak condition for a safe and smooth ride.",
  brands: [
    { name: "Audi", logo: audiLogo },
    { name: "Volkswagen", logo: volkswagenLogo },
    { name: "Bentley", logo: bentleyLogo },
    { name: "BMW", logo: bmwLogo},
    { name: "Ford", logo: fordLogo},
    { name: "Chevrolet", logo: chevroletLogo },
    { name: "GMC", logo: gmcLogo },
    { name: "Honda", logo: hondaLogo },
    { name: "Hyundai", logo: hyundaiLogo },
    { name: "Infiniti", logo: infinitiLogo },
    { name: "Jaguar", logo: jaguarLogo },
    { name: "Jeep", logo: jeepLogo },
    { name: "Kia", logo: kiaLogo },
    { name: "Land Rover", logo: landroverLogo },
    { name: "Lexus", logo: lexusLogo },
    { name: "Mazda", logo: mazdaLogo },
    { name: "Mercedes", logo: mercedesLogo },
    { name: "Mitsubishi", logo: mitsubishiLogo },
    { name: "Nissan", logo: nissanLogo },
    { name: "Porsche", logo: porscheLogo },
    { name: "Suzuki", logo: suzukiLogo },
    { name: "Toyota", logo: toyotaLogo },
  ],
};

export const contactSection = {
  heading: "Book A Free Car Inspection Now!",
  contactInfo: {
    location: {
      title: "Dubai (Head Office)",
      address: "Near New Big Mosque, Al-Satwa, Dubai",
    },
    email: "Eunosmohammed85@gmail.com",
    phone: "+971557767041",
  },
};

export const whyChooseData = {
  sectionTitle: "Why Choose Us ?",
  mainHeading: "Best Car Repair Service In Dubai",
  introText:
    "At Car Repair Service, we don't just fix cars, we build trust and lasting relationships with our valued customers. Here's why we stand out from the competition:",
  features: [
    {
      title: "Unparalleled Expertise – Car Repair Service Dubai",
      description:
        "We are your go-to destination for comprehensive car repair services in Dubai, catering to various vehicle models and brands.",
    },
    {
      title: "Dubai Car Repair",
      description:
        "Our commitment to excellence has made us a trusted name in Dubai for high-quality car repair solutions.",
    },
    {
      title: "Auto Repair Dubai",
      description:
        "From routine maintenance to complex repairs, we offer a wide range of auto repair services to keep your vehicle in top condition.",
    },
    {
      title: "Car Garage Dubai",
      description:
        "Our state-of-the-art garage is equipped with the latest technology and tools, ensuring precision in every repair.",
    },
    {
      title: "Car Mechanic Dubai",
      description:
        "Our certified mechanics specialize in diagnosing and resolving even the most challenging car issues efficiently.",
    },
    {
      title: "Dubai Car Workshop",
      description:
        "At our workshop, we focus on the smallest details to ensure your vehicle performs at its peak.",
    },
    {
      title: "Car Fixing Service",
      description:
        "We're not just fixing cars—we're enhancing your driving experience for safety, reliability, and comfort.",
    },
  ],
  image: WhyChoose,
  imageAlt: "Professional mechanic working on a car",
  buttonText: "Call Us Now",
  buttonLink: "#contact",
};

export const blogPosts= [
  {
    title:"Expert Tyre Puncture Repair Nearby Dubai",
    content: "Need a quick fix for a tyre puncture? Look no further! Find reliable tyre repair services near you in Dubai. Get back on the road in no time.",
    date: "August 23, 2023",
    commentsCount: 0,
    slug: "expert-tyre-puncture-repair-nearby-dubai",
    author: "Monirul Islam",
    category:"Uncategorized",
    authorAvatar:""
  },
  {
    title: "Better Car Fix Near Me In Dubai",
    content: "Looking for a reliable and efficient car fix near you in Dubai? Look no further! Our expert team provides top-notch service to get you back on the road in no time.",
    date: "August 22, 2023",
    commentsCount: 0,
    slug: "better-car-fix-near-me-in-dubai",
    author: "Monirul Islam",
    category:"Uncategorized",
    authorAvatar:""
  },
  {
    title: "Find The Best Car Mechanic In Dubai",
    content: "Looking for reliable car mechanics in Dubai? Look no further! Discover the best car repair services in town and get your vehicle running smoothly again.",
    date: "August 21, 2023",
    commentsCount: 0,
    slug: "find-the-best-car-mechanic-in-dubai",
    author: "Monirul Islam",
    category:"Uncategorized",
    authorAvatar:""
  },
  {
    title: "Best Car Repair And Service Center, UAE",
    content: "Looking for the best car repair and service center in UAE? Look no further! Our team of experts will get your car running smoothly in no time.",
    date: "August 20, 2023",
    commentsCount: 0,
    slug: "best-car-repair-and-service-center-uae",
    author: "Monirul Islam",
    category:"Uncategorized",
    authorAvatar:""
  },
  {
    title: "Best Car Battery Replacement Near Me",
    content: "Find the best car battery replacement near you at an affordable cost. Trust our expert technicians for reliable and efficient service.",
    date: "August 19, 2023",
    commentsCount: 0,
    slug: "best-car-battery-replacement-near-me",
    author: "Monirul Islam",
    category:"Uncategorized",
    authorAvatar:""
  },
];