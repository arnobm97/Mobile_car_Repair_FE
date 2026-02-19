import { Phone } from "lucide-react";
import Image from "next/image";

export interface ServiceCardProps {
  icon: {
    src: string;
    width: number;
    height: number;
    blurWidth?: number;
    blurHeight?: number;
  }; // Now we know it's an image object
  title: string;
  description: string;
}

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div
      className="group flex flex-col items-center p-8 bg-white border  shadow-sm transition-all duration-300 ease-in-out  relative overflow-hidden"
      style={{ borderColor: 'rgba(189, 27, 27, 0.32)' }}
    >
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand/5 opacity-0  transition-opacity duration-300 pointer-events-none" />

      <div className="mb-6 p-4 bg-gray-50 rounded-full  transition-all duration-300">
        <Image
          src={icon.src}
          alt={title}
          width={72}
          height={72}
          className="w-16 h-16 transition-transform duration-300 "
          style={{ objectFit: 'contain' }}
        />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center  transition-colors duration-300">
        {title}
      </h3>

      <p className="text-sm text-gray-600 text-center mb-8 flex-grow leading-relaxed">
        {description}
      </p>

    </div>
  );
};