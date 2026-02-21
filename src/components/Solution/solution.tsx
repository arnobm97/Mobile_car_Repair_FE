"use client"
import Image from "next/image";

import { useRouter } from "next/navigation";

export interface SolutionSectionProps {
  label: string;
  heading: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  imageUrl: string;
}

export const SolutionSection = ({
  label,
  heading,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  imageUrl,
}: SolutionSectionProps) => {
  const router = useRouter();



  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      // Navigate to services page
      router.push("/services");
    }
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16  bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 min-[760px]:grid-cols-2   lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 text-center lg:text-left order-1 lg:order-1">
            <p className="text-destructive min-[767px]:text-xs font-semibold text-sm uppercase tracking-wider text-brand">
              {label}
            </p>

            <h2 className="text-2xl min-[767px]:text-2xl  lg:text-5xl font-bold text-foreground leading-tight">
              {heading}
            </h2>

            <p className="text-muted-foreground min-[767px]:text-base text-sm leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {description}
            </p>

            <div className="flex flex-row gap-4 pt-6 items-center justify-center lg:justify-start flex-wrap">
              {/* Primary Button - Call Now */}
              <a
                href="tel:+971557767041"
                className="font-semibold min-[767px]:px-3  bg-brand py-2 px-6 text-white hover:bg-brand/90 transition-all duration-300 transform hover:scale-105 inline-block text-center"
              >
                {primaryButtonText}
              </a>

              {/* Secondary Button - Our Services - Navigates to /services */}
              <button
                className="font-semibold bg-brand min-[767px]:px-3 py-2 px-5 text-white hover:bg-brand/90 transition-all duration-300 transform hover:scale-105"
                onClick={handleSecondaryClick}
              >
                {secondaryButtonText}
              </button>
            </div>
          </div>

          {/* Right Image with Overlay */}
          <div className=" overflow-hidden   group order-2 lg:order-2 shadow-2xl">
            <Image
              width={1920}
              height={400}
              src={imageUrl}
              alt="Service showcase"
              className="object-cover w-full  h-[300px] max-[760px]:h-[460px]  lg:h-[400px] transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};