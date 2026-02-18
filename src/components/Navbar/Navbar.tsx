"use client";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/images/MobileCarRepairService.png";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact-us" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full sticky top-0 z-50 shadow-lg font-montserrat"
      style={{ fontFamily: 'Montserrat, sans-serif' }}>

      <div className="bg-brand">
        {/* Top Bar - Desktop Only */}
        <div className="hidden md:block bg-brand text-white mx-0 font-montserrat">
          <div className="px-4 py-2 flex justify-between items-center text-sm font-montserrat 
                        md:px-12 
                        lg:px-16 
                        xl:px-24 
                        2xl:px-72 
                        min-[1751px]:px-72">
            <a
              href="tel:+971557767041"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              +971557767041
            </a>
            <a
              href="mailto:Eunosmohammed85@gmail.com"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Eunosmohammed85@gmail.com
            </a>
          </div>
        </div>

        {/* Top Bar - Mobile & Tablet Only */}
        <div className="md:hidden bg-brand text-white">
          <div className="py-2 flex justify-center items-center">
            <a
              href="tel:+971557767041"
              className="flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <Phone className="w-4 h-4" />
              +971557767041
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="w-full h-[57px] md:h-20 bg-primary font-montserrat">
          <div className="px-3 md:px-12 lg:px-16 xl:px-24 2xl:px-72 min-[1751px]:px-72">
            <div className="flex items-center justify-between h-[57px] md:h-20">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={logo}
                  alt="Mobile Car Repairs"
                  width={120}
                  height={34}
                  className="w-[120px] h-[34px] 
                             min-[799px]:h-9 
                             md:w-auto 
                             min-[1351px]:h-12 
                             min-[1751px]:h-14"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center 
                            min-[799px]:gap-4 
                            lg:gap-6 
                            xl:gap-10
                            min-[1351px]:gap-12 
                            min-[1751px]:gap-16 
                            font-montserrat">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`font-bold transition-colors hover:text-brand 
                              ${isActive(link.path) ? "text-brand" : "text-foreground"}
                              min-[799px]:text-base 
                              min-[1351px]:text-lg 
                              min-[1751px]:text-lg
                              hover:scale-105 transition-transform duration-200`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Desktop Book Now Button */}
              <Link
                href="/contact-us"
                className="hidden md:inline-block font-semibold bg-brand text-white 
                          hover:bg-brand/90 transition-all duration-300 transform hover:scale-105
                          min-[799px]:p-2 min-[799px]:px-4 min-[799px]:text-sm
                          min-[1351px]:text-lg min-[1351px]:py-2 min-[1351px]:px-6
                          min-[1751px]:text-lg min-[1751px]:py-2 min-[1751px]:px-6
                          rounded-md shadow-md hover:shadow-lg"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Book Now
              </Link>

              {/* Mobile Menu Controls */}
              <div className="flex md:hidden items-center gap-2">

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white p-2 bg-brand font-bold rounded-md"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className="md:hidden font-montserrat z-100 absolute top-[90px] left-0 w-full 
                     bg-black/95 backdrop-blur-sm text-white flex flex-col items-start 
                     overflow-hidden shadow-xl"
          style={{
            maxHeight: isMobileMenuOpen ? "400px" : "0px",
            transform: isMobileMenuOpen ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "top",
            transition: "max-height 0.4s ease, transform 0.4s ease, opacity 0.3s ease",
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
        >
          <div className="w-full flex flex-col font-montserrat">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`w-full font-bold py-4 px-6 transition-all duration-300
                          border-b border-white/10 last:border-b-0
                          ${isActive(link.path)
                    ? "bg-brand text-white"
                    : "text-white hover:bg-brand hover:text-white hover:pl-10"
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};