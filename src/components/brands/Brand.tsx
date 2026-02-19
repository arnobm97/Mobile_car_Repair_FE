
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
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-4">{heading}</h2>
          <p className="text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden mask-gradient-to-r from-transparent via-black to-transparent">
          <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused] items-center">
            {/* Original Brands */}
            {brands.map((brand, index) => (
              <div
                key={`brand-${index}`}
                className="flex items-center justify-center w-[150px] h-[150px] bg-gray-100 rounded-lg p-4 transition-transform duration-300 hover:scale-110"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}


            {brands.map((brand, index) => (
              <div
                key={`brand-dup-${index}`}
                className="flex items-center justify-center w-[150px] h-[150px] bg-gray-100 rounded-lg p-4 transition-transform duration-300 hover:scale-110"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
