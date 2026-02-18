import { Star } from "lucide-react";
import Image from "next/image";

export interface TestimonialCardProps {
  name: string;
  date: string;
  fullDate?: string; // For tooltip (kept for backward compatibility but not used)
  rating: number;
  review: string;
  avatar?: string;
  initial?: string;
  link?: string;
  platform?: string;
  platformIcon?: string;
  verified?: boolean;
}

export const TestimonialCard = ({
  name,
  date,
  review,
  avatar,
  initial,
  link,
  platform = "Google",
  platformIcon = "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
  verified = true,
}: TestimonialCardProps) => {
  const CardContent = (
    <div className="bg-white rounded-xl p-6 h-full flex flex-col shadow-sm border border-gray-100 min-h-[180px]">
      {/* Top row: Profile Image + Name/Date + G Logo */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-testimonial-avatar">
            {avatar ? (
              <Image
                src={avatar}
                alt={`${name} profile picture`}
                width={40}
                height={40}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-purple-600 text-white text-base font-bold">
                {initial || name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-gray-900 text-[15px] leading-tight">{name}</h4>
            <span className="text-[11px] text-gray-500">{date}</span>
          </div>
        </div>

        {/* Google G Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
            alt="Google"
            className="w-5 h-5"
            loading="lazy"
          />
        </div>
      </div>

      {/* Middle row: Stars + Blue Checkmark */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
            alt="Star"
            className="w-[14px] h-[14px]"
            loading="lazy"
          />
        ))}
        {verified && (
          <div className="ml-1">
            <svg
              className="w-4 h-4 text-[#4285F4]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
        )}
      </div>

      {/* Bottom row: Review Text */}
      <div className="text-gray-700 text-[13.5px] leading-relaxed line-clamp-3">
        {review}
      </div>
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full no-underline hover:no-underline transition-transform duration-300 hover:scale-[1.02]"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
};