import { notFound } from "next/navigation";
import { blogPosts } from "@/data/data";
import CommentForm, { CommentFormData } from "./CommentForm";
import BlogPostHeader from "./BlogPostHeader";

interface BlogPostProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostProps) {
  const post = blogPosts.find((b) => b.slug === params.slug);

  if (!post) return notFound();

  const handleCommentSubmit = (data: CommentFormData) => {
    console.log("Comment submitted:", data);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <BlogPostHeader
          title={post.title}
          author={post.author}
          date={post.date}
          category={post.category}
          authorAvatar={post.authorAvatar}
        />

        <article className="prose prose-lg max-w-none mb-12">
          <div className="text-foreground leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </article>

        <CommentForm onSubmit={handleCommentSubmit} />
      </div>
    </div>
  );
}
