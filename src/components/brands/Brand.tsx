import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

        <div className="relative max-w-6xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {brands.map((brand, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                  <div className="flex items-center justify-center h-32 bg-background rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={250}
                      height={250}
                      className="max-w-full max-h-full object-contain transition-all"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
