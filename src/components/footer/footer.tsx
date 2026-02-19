import { Phone, Mail, Facebook, Instagram, MapPin } from "lucide-react";
import logo from "@/images/Auto-Repair-3.png";
import Link from "next/link";
import Image from "next/image";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  companyName?: string;
  description?: string;
  phone?: string;
  email?: string;
  quickLinks?: FooterLink[];
  showSocialLinks?: boolean;
  facebookUrl?: string;
  instagramUrl?: string;
}

export const Footer = ({
  companyName = "Mobile Car Repairs Service",
  description = "Your trusted partner for all your car repair and maintenance needs in Dubai! We take pride in being the top destination for automotive solutions in the city.",
  phone = "+971557767041",
  email = "Eunosmohammed85@gmail.com",
  quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  showSocialLinks = true,
  facebookUrl = "https://facebook.com",
  instagramUrl = "https://instagram.com",
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      <div className="container mx-auto px-4 pt-16 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-12 pb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image src={logo} alt={companyName} className="lg:h-16 md:h-12 sm:h-10 h-10 w-auto" />
            </Link>
            <p className="text-white text-sm max-[799px]:text-xs leading-relaxed max-w-sm">
              {description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl max-[799px]:text-lg font-bold text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-brand">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3 pt-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="font-medium text-white hover:text-brand transition-colors text-sm max-[799px]:text-xs flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand/50"></span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl max-[799px]:text-lg font-bold text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-brand">
              Contact Info
            </h3>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 text-white group">
                <div className="flex-shrink-0 w-12 h-12 max-[799px]:w-10 max-[799px]:h-10 bg-brand flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="w-7 h-7 max-[799px]:w-5 max-[799px]:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm max-[799px]:text-xs font-semibold text-white mb-1">Address</p>
                  <p className="text-sm max-[799px]:text-xs">Near New Big Mosque, Al-Satwa, Dubai</p>
                </div>
              </div>

              <a
                href={`tel:${phone}`}
                className="flex items-center gap-4 text-white hover:text-white transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 max-[799px]:w-10 max-[799px]:h-10 bg-brand flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Phone className="w-7 h-7 max-[799px]:w-5 max-[799px]:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm max-[799px]:text-xs font-semibold text-white mb-1">Call Us</p>
                  <p className="text-sm max-[799px]:text-xs group-hover:text-brand transition-colors underline">{phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 text-white hover:text-white transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 max-[799px]:w-10 max-[799px]:h-10 bg-brand flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Mail className="w-7 h-7 max-[799px]:w-5 max-[799px]:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm max-[799px]:text-xs font-semibold text-white mb-1">Email Us</p>
                  <p className="text-sm max-[799px]:text-xs break-all group-hover:text-brand transition-colors underline">{email}</p>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar - Moved outside the main container to be truly full width */}
      <div className="py-2 border-t border-gray-800 bg-black w-full px-4">
        <div className="container mx-auto flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
          {/* Mobile & Desktop Social Links */}
          {showSocialLinks && (
            <div className="flex items-center gap-2">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-7 h-7 md:w-4 md:h-4" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 md:w-4 md:h-4" />
              </a>
            </div>
          )}

          <p className="text-[16px] sm:text-[10px] text-white text-left font-montserrat tracking-tight">
            © <span className="text-white">Mobilecarrepairsservice.com {currentYear}.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};