
import { LucideIcon, Phone } from "lucide-react";

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group flex flex-col items-center p-8 bg-white border border-gray-100 rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:border-brand/20 relative overflow-hidden">
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="mb-6 p-4 bg-gray-50 rounded-full group-hover:bg-white group-hover:shadow-md transition-all duration-300">
        <Icon className="w-12 h-12 text-brand transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-brand transition-colors duration-300">
        {title}
      </h3>

      <p className="text-sm text-gray-600 text-center mb-8 flex-grow leading-relaxed">
        {description}
      </p>

      <a
        href="tel:+971557767041"
        className="flex gap-2 justify-center items-center text-red-600 font-bold transition-all duration-300 group-hover:gap-3"
      >
        <Phone className="w-4 h-4 fill-current" />
        <span>Call Now</span>
      </a>
    </div>
  );
};
