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
    <nav className="w-full">
      <div className="bg-brand">
        {/* Top Bar - Desktop Only */}
        <div className="hidden md:block bg-brand text-white mx-0">
          <div className="px-4 py-2 flex justify-between items-center text-sm">
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
        <div className="w-full h-20 bg-primary border-b border-gray">
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
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`text-md font-bold transition-colors hover:text-brand ${
                      isActive(link.path) ? "text-brand" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Desktop Book Now Button */}
              <button className="hidden md:flex bg-brand px-6 py-2 text-white font-bold">
                Book Now
              </button>
              {/* Mobile: Phone + Book Now + Menu Toggle */}
              <div className="flex md:hidden items-center gap-3">
                <button className="bg-brand px-6 py-2 text-white font-bold">
                  Book Now
                </button>
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
          <div className="md:hidden bg-black text-white font-bold">
            <div className="mx-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-4 hover:bg-brand transition-colors ${
                    isActive(link.path) ? "bg-brand text-white" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
