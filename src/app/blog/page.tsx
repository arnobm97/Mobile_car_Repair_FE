import { PageHero } from "@/components/shared/PageHero";
import React from "react";
import blogHero from "@/images/Best-Car-Repair-Service-in-Dubai.jpg";

import { blogPosts } from "@/data/data";
import BlogCard, { BlogCardProps } from "@/components/blog/BlogCard";
// import BlogCard, { BlogCardProps } from "@/components/blog/blogCard";

const page = () => {
  return (
    <div>
      <PageHero
        title="Blog"
        backgroundImage={blogHero}
        breadcrumbs={[{ label: "Blog" }]}
      />
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post:BlogCardProps) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
