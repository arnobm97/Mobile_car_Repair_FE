import { LucideIcon, Phone } from "lucide-react";


export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description}: ServiceCardProps) => {
  return (
    <div className="group flex flex-col items-center p-6 bg-white border border-brand">
      <div className="mb-4 p-4 bg-service-iconBg rounded-lg">
        <Icon className="w-12 h-12 text-accent" strokeWidth={1.5} />
      </div>
      
      <h3 className="text-lg font-bold text-card-foreground mb-3 text-center">
        {title}
      </h3>
      
      <p className="text-md text-muted-foreground text-center mb-6 flex-grow font-semibold">
        {description}
      </p>
      
      <button 
        className="flex gap-1 justify-center items-center text-accent hover:text-brand/90 font-semibold transition-transform duration-300 group-hover:scale-105"
      >
        <Phone className="w-4 h-4 mr-2 text-brand font-bold" />
        <p className="text-brand font-bold">Call Now</p>
      </button>
    </div>
  );
};
