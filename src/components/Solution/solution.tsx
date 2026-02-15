"use client"
import Image from "next/image";
import Link from "next/link";
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

  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      // Default action for primary button - call phone
      window.location.href = "tel:+971557767041";
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      // Navigate to services page
      router.push("/services");
    }
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-2 text-center">
            <p className="text-destructive font-semibold text-sm uppercase tracking-wider text-brand">
              {label}
            </p>

            <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-foreground leading-tight">
              {heading}
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center justify-center">
              {/* Primary Button - Call Now */}
              <button
                className="font-semibold bg-brand py-2 px-6 text-white hover:bg-brand/90 transition-all duration-300 transform hover:scale-105"
                onClick={handlePrimaryClick}
              >
                {primaryButtonText}
              </button>

              {/* Secondary Button - Our Services - Navigates to /services */}
              <button
                className="font-semibold bg-brand py-2 px-6 text-white hover:bg-brand/90 transition-all duration-300 transform hover:scale-105"
                onClick={handleSecondaryClick}
              >
                {secondaryButtonText}
              </button>
            </div>
          </div>

          {/* Right Image with Overlay */}
          <div className="rounded-lg overflow-hidden group">
            <Image
              width={1920}
              height={400}
              src={imageUrl}
              alt="Service showcase"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};