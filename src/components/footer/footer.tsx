import { Phone, Mail, Facebook, Instagram, FacebookIcon } from "lucide-react";
import logo from "@/images/MobileCarRepairService.png";
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
  email = "Eurosmohammed85@gmail.com",
  quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
    { label: "Contact Us", href: "#contact" },
  ],
  showSocialLinks = true,
  facebookUrl = "https://facebook.com",
  instagramUrl = "https://instagram.com",
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text">
      <div className="container mx-auto px-4 pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-12 py-6">
          {/* Company Info */}
          <div className="space-y-4">
            <Image src={logo} alt={companyName} className="h-12 w-auto" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm text-primary">
              {description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="font-bold text-primary hover:text-brand transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg text-primary font-semibold text-foreground ">
              Contact Info
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground text-primary">
                    Call / Whatsapp
                  </p>
                  <p className="text-sm text-primary">{phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground text-primary">
                    Email
                  </p>
                  <p className="text-sm break-all text-primary">{email}</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-2 py-4 border-t border-gray-600 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-primary">
            © {companyName} {currentYear}.
          </p>

          {showSocialLinks && (
            <div className="flex items-center gap-4">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground "
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5 text-primary" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground "
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
