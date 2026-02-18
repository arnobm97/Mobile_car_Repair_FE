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
              <Image src={logo} alt={companyName} className="h-16 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-brand">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3 pt-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="font-medium text-gray-400 hover:text-brand transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand/50"></span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-brand">
              Contact Info
            </h3>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 text-gray-400 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-brand group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Address</p>
                  <p className="text-sm">Near New Big Mosque, Al-Satwa, Dubai</p>
                </div>
              </div>

              <a
                href={`tel:${phone}`}
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors duration-300">
                  <Phone className="w-5 h-5 text-brand group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Call Us</p>
                  <p className="text-sm group-hover:text-brand transition-colors">{phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors duration-300">
                  <Mail className="w-5 h-5 text-brand group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Email Us</p>
                  <p className="text-sm break-all group-hover:text-brand transition-colors">{email}</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 bg-black -mx-4 px-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} <span className="text-white font-medium">{companyName}</span>. All rights reserved.
            </p>

            {showSocialLinks && (
              <div className="flex items-center gap-4">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-brand hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-brand hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};