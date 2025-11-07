import { notFound } from "next/navigation";
import { blogPosts } from "@/data/data";
import CommentForm, { CommentFormData } from "@/components/blog/CommentForm";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import React from "react";
import BlogHero from "@/images/Best-Car-Repair-Service-in-Dubai.jpg";
import { PageHero } from "@/components/shared/PageHero";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: BlogPostProps) {
  const BlogParams = (await params).slug;

  const post = blogPosts.find((b) => b.slug === BlogParams);

  if (!post) return notFound();

  const handleCommentSubmit = (data: CommentFormData) => {
    console.log("Comment submitted:", data);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto">
        <PageHero
          title={
            <h1 className="text-xl font-semibold capitalize">{post.title}</h1>
          }
          backgroundImage={BlogHero}
          breadcrumbs={[{ label: post.title }]}
        />
        <div className="container mx-auto  max-w-4xl py-8">
          <BlogPostHeader
            title={post.title}
            author={post.author}
            date={post.date}
            category={post.category}
          />

          <article className="prose prose-lg max-w-none mb-12">
            <div className="text-foreground leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </article>

          <CommentForm onSubmit={handleCommentSubmit} />
        </div>
      </div>
    </div>
  );
}
