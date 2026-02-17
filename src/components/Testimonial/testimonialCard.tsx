import { BadgeCheck, Star } from "lucide-react";
import Image from "next/image";

export interface TestimonialCardProps {
  name: string;
  date: string;
  rating: number;
  review: string;
  avatar?: string;
  initial?: string;
  link?: string;
}

export const TestimonialCard = ({
  name,
  date,
  rating,
  review,
  avatar,
  initial,
  link,
}: TestimonialCardProps) => {
  const CardContent = (
    <div className="bg-white rounded-xl p-6 h-full flex flex-col shadow-md border border-gray-100 min-h-[300px]">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-testimonial-avatar flex items-center justify-center text-white font-semibold overflow-hidden">
            {avatar ? (
              <Image
                src={avatar}
                alt={name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-purple-600 text-white text-lg">
                {initial || name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{name}</h4>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span>{date}</span>
              {/* Checkmark icon next to name/date if needed, but Google usually has it elsewhere. 
                    The image shows a blue checkmark next to stars maybe? or just part of the design.
                    Code had BadgeCheck, keeping it near stars or name.
                */}
            </div>
          </div>
        </div>

        {/* Google G Logo */}
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
      </div>

      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
              }`}
          />
        ))}
        <BadgeCheck className="w-5 h-5 fill-blue-500 text-white ml-2" />
      </div>

      <p className="text-gray-600 leading-relaxed text-sm flex-grow line-clamp-4">{review}</p>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full no-underline hover:no-underline">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};
