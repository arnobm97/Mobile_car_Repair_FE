import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

export interface WhyChooseFeature {
  title: string;
  description: string;
}

interface WhyChooseSectionProps {
  sectionTitle: string;
  mainHeading: string;
  introText: string;
  features: { title: string; description: string }[];
  image: string | StaticImageData;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
}

export const WhyChooseSection = ({
  sectionTitle,
  mainHeading,
  introText,
  features,
  image,
  imageAlt,
  buttonText,
  buttonLink,
}: WhyChooseSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="order-1 lg:order-1">
            <Image 
              src={image} 
              alt={imageAlt}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-brand font-semibold mb-3">
              {sectionTitle}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {mainHeading}
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {introText}
            </p>

            {/* Features List */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-primary rounded flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            {buttonText && (
              <button 
                className="bg-brand hover:bg-brand/90 px-6 py-2 font-bold text-primary tracking-wider"
              >
                {buttonLink ? (
                  <a href={buttonLink}>{buttonText}</a>
                ) : (
                  <button>{buttonText}</button>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
