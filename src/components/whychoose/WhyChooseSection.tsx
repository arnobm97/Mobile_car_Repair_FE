import { Check } from "lucide-react";
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
      <div className=" mx-auto md:mx-0 lg:mx-auto md:w-full md:px-0 lg:w-[1200px] md:px-4 px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="order-1 lg:order-1">
            <Image
              src={image}
              alt={imageAlt}
              className="w-full h-auto lg:h-[90%] lg:mt-10    object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-[#C82A2A] lg:text-lg font-semibold mb-2 font-montserrat tracking-tight">
              {sectionTitle}
            </p>
            <h2 className="lg:text-[42px] md:text-[36px] sm:text-[28px] min-[320px]:text-[28px] leading-[1.1] font-bold mb-6 font-montserrat ">
              {mainHeading}
            </h2>
            <p
              className="text-[#333333] mb-8 leading-relaxed font-poppins md:text-[18px]  lg:text-[17px] text-[15px]"
              dangerouslySetInnerHTML={{ __html: introText }}
            />

            {/* Features List */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col ">
                  <div className="flex items-center gap-2.5">
                    <div className="flex-shrink-0">
                      <div className="w-[18px] h-[18px] bg-[#32CD32] border border-black rounded-[1px] flex items-center justify-center">
                        <Check className="w-3 h-3 text-white stroke-[4px]" />
                      </div>
                    </div>
                    <h3 className="font-bold font-poppins text-[17px] md:text-[18px] lg:text-[17px] leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                  <p className=" text-[15px] lg:text-[17px] md:text-[18px] md:font-[20px] leading-relaxed font-poppins font-sans">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            {buttonText && (
              <a
                href="tel:+971557767041"
                className="bg-brand hover:bg-brand/90 px-6 py-2 font-bold text-primary tracking-wider"
              >
                {buttonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
