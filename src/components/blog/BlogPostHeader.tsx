import defaultAvatar from "@/images/avatar.jpg";
import Image from "next/image";
interface BlogPostHeaderProps {
  title: string;
  author: string;
  date: string;
  category: string;
  authorAvatar?: string;
}

const BlogPostHeader = ({
  title,
  author,
  date,
  category,
  authorAvatar,
}: BlogPostHeaderProps) => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl text-foreground mb-6">{title}</h1>

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
        <time dateTime={date}>{date}</time>
        <span>/</span>
        <span className="uppercase">{category}</span>
      </div>
    </header>
  );
};

export default BlogPostHeader;
