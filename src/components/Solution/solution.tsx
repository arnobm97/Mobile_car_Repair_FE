import Image from "next/image";

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
              <button
                className="font-semibold bg-brand py-2 px-6 text-white hover:bg-brand/90"
                onClick={onPrimaryClick}
              >
                {primaryButtonText}
              </button>

              <button
                className="font-semibold bg-brand py-2 px-6 text-white hover:bg-brand/90"
                onClick={onSecondaryClick}
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
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
