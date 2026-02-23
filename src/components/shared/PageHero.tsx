import { ChevronsRight, Home } from "lucide-react";
import NextImage, { StaticImageData } from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string | React.ReactNode;
  backgroundImage: string | StaticImageData;
  breadcrumbs?: { label: string; path?: string }[];
  titleClassName?: string;
}

export const PageHero = ({
  title,
  backgroundImage,
  breadcrumbs = [],
  titleClassName,
}: PageHeroProps) => {
  return (
    <div className="relative h-[200px] md:h-[300px] lg:h-[350px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <NextImage
          src={typeof backgroundImage === "string" ? backgroundImage : backgroundImage.src}
          alt={typeof title === "string" ? title : "Hero Background"}
          fill
          priority={false}
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <h1
          className={`mb-4 font-bold text-white uppercase tracking-wider ${titleClassName || "text-2xl md:text-4xl"
            }`}
        >
          {title}
        </h1>

        {/* Custom Breadcrumb */}
        <nav className="flex items-center text-white text-sm space-x-2">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-accent transition-colors"
          >
            <Home className="w-5 h-5" />
            Home
          </Link>

          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-white">
                <ChevronsRight className="w-4 h-4" />
              </span>
              {crumb.path ? (
                <Link
                  href={crumb.path}
                  className="hover:text-accent transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
