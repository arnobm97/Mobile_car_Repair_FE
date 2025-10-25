import Link from "next/link";

export interface BlogCardProps {
  title: string;
  content: string;
  date: string;
  commentsCount: number;
  slug: string;
}

const BlogCard = ({
  title,
  content,
  date,
  commentsCount,
  slug,
}: BlogCardProps) => {
  const excerptLength = 150;
  const excerpt =
    content.length > excerptLength
      ? content.slice(0, content.lastIndexOf(" ", excerptLength)) + "..."
      : content;
  return (
    <article className="bg-primary border border-brand/20">
      <div className="flex flex-col h-full justify-between">
        <div className="py-6 px-4">
          <Link
            href={`/${slug}`}
            className="text-md font-semibold mb-4 cursor-pointer"
          >
            {title}
          </Link>

          <p className="text-sm my-2 flex-grow leading-relaxed">
            {excerpt}
          </p>

          <Link
            href={`/${slug}`}
            className="text-brand text-sm hover:text-brand/80 transition-colors inline-flex items-center gap-1"
          >
            Read More »
          </Link>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground py-2 px-4 border-t border-black/10">
          <time dateTime={date}>{date}</time>
          <span>•</span>
          <span>
            {commentsCount === 0
              ? "No Comments"
              : `${commentsCount} Comment${commentsCount > 1 ? "s" : ""}`}
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
