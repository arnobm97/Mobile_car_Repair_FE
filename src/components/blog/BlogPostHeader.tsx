import defaultAvatar from "@/images/avatar.jpg";
import Image from "next/image";
import Link from "next/link";

interface BlogPostHeaderProps {
  title: string;
  author: string;
  date: string;
  category: string;
  authorAvatar?: string;
}

const LinkifyService = ({ text }: { text: string }) => {
  const parts = text.split(/(service)/gi);
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === "service" ? (
          <Link
            key={i}
            href="/services"
            className="text-[#BD1B1B] underline hover:text-[#BD1B1B]/80 transition-colors"
          >
            {part}
          </Link>
        ) : (
          part
        )
      )}
    </>
  );
};

const BlogPostHeader = ({
  title,
  author,
  date,
  category,
  authorAvatar,
}: BlogPostHeaderProps) => {
  return (
    <header className="mb-8 font-montserrat">
      <h1 className="text-3xl text-foreground mb-6">
        <LinkifyService text={title} />
      </h1>

      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <Image
          src={
            authorAvatar && authorAvatar.trim() !== ""
              ? authorAvatar
              : defaultAvatar
          }
          alt={author}
          className="w-10 h-10 rounded-full"
        />
        <span className="font-medium text-foreground">{author}</span>
        <span>/</span>
        <time className="font-medium text-foreground" dateTime={date}>{date}</time>
        <span>/</span>
        <span className="uppercase font-medium text-foreground">{category}</span>
      </div>
    </header>
  );
};

export default BlogPostHeader;
