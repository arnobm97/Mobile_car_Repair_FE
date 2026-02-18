"use client";
import { Menu, X, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button"; // Make sure this path is correct
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
    <nav className="w-full sticky top-0 z-50  shadow-lg font-montserrat"
      style={{ fontFamily: 'Montserrat, sans-serif' }}>

      <div className="bg-brand">
        {/* Top Bar - Desktop Only */}
        <div className="hidden md:block bg-brand text-white mx-0 font-montserrat">
          <div className="px-4 py-2 flex justify-between items-center text-sm font-montserrat">
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

        {/* Main Navigation */}
        <div className="w-full h-20 bg-primary font-montserrat">
          <div className="px-6 md:px-12">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={logo}
                  alt="Mobile Car Repairs"
                  className="h-12 w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8 font-montserrat">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`text-md font-bold transition-colors hover:text-brand ${isActive(link.path) ? "text-brand" : "text-foreground"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Desktop Book Now Button - Using shadcn Button */}
              <Button
                size="lg"
                className="hidden font-montserrat font-montserrat md:flex group relative bg-red-600 px-8 py-6 text-lg font-semibold text-white hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                asChild
              >
                <Link href="/contact-us" className="flex items-center gap-2 font-montserrat">
                  <Calendar className="h-5 w-5 transition-transform group-hover:rotate-12" />
                  <span>Book Now</span>
                  <span className="absolute right-0 top-0 h-full w-2 bg-white/20 transform skew-x-12 group-hover:w-full transition-all duration-500 -z-10"></span>
                </Link>
              </Button>

              {/* Mobile Menu Controls */}
              <div className="flex md:hidden items-center gap-3">
                <Button
                  size="sm"
                  className="bg-red-600 px-4 py-2 text-white font-bold hover:bg-red-700 transition-colors font-montserrat"
                  asChild
                >
                  <Link href="/contact-us">
                    Book Now
                  </Link>
                </Button>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white p-2 bg-brand font-bold"
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
        {isMobileMenuOpen && (
          <div className="md:hidden font-montserrat z-100 absolute top-20 left-0 w-full bg-black/95 backdrop-blur-sm text-white flex flex-col items-start py-4 shadow-xl border-t border-white/10 h-screen transition-all duration-300 ease-in-out">
            <div className="w-full flex flex-col font-montserrat">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`w-full text-xl font-bold py-4 px-8 border-b border-white/5 transition-all duration-300
                  ${isActive(link.path)
                      ? "bg-red-600 text-white"
                      : "text-white hover:bg-red-600 hover:text-white hover:pl-10"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="w-full px-8 mt-8">
              <Button
                variant="default"
                className="w-full font-montserrat bg-red-600 hover:bg-red-700 text-white font-bold py-6 rounded-lg shadow-lg flex items-center justify-center gap-2 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                asChild
              >
                <Link href="/contact-us font-montserrat">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};