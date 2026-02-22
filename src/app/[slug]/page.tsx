"use client"
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/data";
import CommentForm, { CommentFormData } from "@/components/blog/CommentForm";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import React, { use } from "react";
import BlogHero from "@/images/hero1.webp";
import { PageHero } from "@/components/shared/PageHero";
import Link from "next/link";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
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

export default function Page({ params }: BlogPostProps) {
  const { slug: BlogParams } = use(params);

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
            <LinkifyService text={post.title} />
          }
          backgroundImage={BlogHero}
          breadcrumbs={[{ label: post.title }]}
        />
        <div className="container mx-auto max-w-4xl py-8 md:px-20 max-[750px]:px-10 font-montserrat text-text">
          <BlogPostHeader
            title={post.title}
            author={post.author}
            date={post.date}
            category={post.category}
          />

          <article className="prose prose-lg max-w-none mb-12">
            <div className="text-foreground leading-relaxed whitespace-pre-line">
              <LinkifyService text={post.content} />
            </div>
          </article>

          <CommentForm onSubmit={handleCommentSubmit} />
        </div>
      </div>
    </div>
  );
}
