import { getAllPosts } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Blog | Emerald Masonry LLC — Commercial Masonry Chicagoland",
  description:
    "Project updates, masonry tips, and restoration insights from Emerald Masonry LLC — Chicagoland's commercial masonry specialists.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navigation />
      <main className="px-6 pt-40 pb-24 md:px-12 lg:px-20">
        <div className="mb-16 border-b border-border pb-6">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Field Notes
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            Project Updates &amp; Insights
          </h1>
        </div>

        {posts.length === 0 ? (
          <p className="text-muted-foreground text-sm">Posts coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-background group block"
              >
                {post.image && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className="px-6 py-6 border-t border-border">
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    {post.service} · {post.location}
                  </p>
                  <h2 className="text-base font-semibold text-foreground mb-2 group-hover:text-[var(--color-emerald)] transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-muted-foreground/40 mt-4">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
