import { ServiceCard, ServiceCardProps } from "./serviceCard";

export interface ServicesSectionProps {
    label?: string;
    heading: string;
    services: ServiceCardProps[]; // This now matches the updated ServiceCardProps
    onCallNow?: (serviceName: string) => void;
}

export const ServicesSection = ({
    label = "What We Do",
    heading,
    services,
}: ServicesSectionProps) => {
    return (
        <section className="w-full py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12">
                    <p className="text-lg tracking-wider mb-2 text-brand">
                        {label}
                    </p>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-section-heading">
                        {heading}
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};