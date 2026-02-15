import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface Brand {
  name: string;
  logo: StaticImageData;
}

interface BrandsSectionProps {
  heading: string;
  description: string;
  brands: Brand[];
}

export const BrandsSection = ({ heading, description, brands }: BrandsSectionProps) => {
  return (
    <section className="py-16 bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-text">{heading}</h2>
          <p className="text-muted-foreground font-semibold max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="relative w-full overflow-hidden mask-gradient-to-r from-transparent via-black to-transparent">
          <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
            {/* Original Brands */}
            {brands.map((brand, index) => (
              <div
                key={`brand-${index}`}
                className="flex items-center justify-center w-[200px] h-[120px] bg-background rounded-lg p-4 transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={150}
                  height={150}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}

            {/* Duplicated Brands for seamless loop */}
            {brands.map((brand, index) => (
              <div
                key={`brand-dup-${index}`}
                className="flex items-center justify-center w-[200px] h-[120px] bg-background rounded-lg p-4 transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={150}
                  height={150}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
