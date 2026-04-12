import { getAllPosts } from "@/lib/blog";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import BlogClient from "@/components/blog/BlogClient";

export const metadata = {
  title: "Blog | Emerald Masonry LLC",
  description:
    "Project updates, masonry tips, and restoration insights from Emerald Masonry LLC — Chicagoland's commercial masonry specialists.",
  keywords: [
    "masonry blog Chicago",
    "tuckpointing tips Chicagoland",
    "commercial masonry articles Illinois",
    "brick repair guide Chicago",
    "masonry restoration insights",
  ],
  alternates: {
    canonical: "https://emeraldmasonryil.com/blog",
  },
  openGraph: {
    title: "Blog | Emerald Masonry LLC",
    description:
      "Project updates, masonry tips, and restoration insights from Emerald Masonry LLC — Chicagoland's commercial masonry specialists.",
    url: "https://emeraldmasonryil.com/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navigation />
      <main className="px-6 pt-28 md:pt-40 pb-24 md:px-12 lg:px-20">
        <div className="mb-16 border-b border-border pb-6">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Blog
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            Project Updates &amp; Insights
          </h1>
        </div>

        {posts.length === 0 ? (
          <p className="text-muted-foreground text-sm">Posts coming soon.</p>
        ) : (
          <BlogClient posts={posts} />
        )}
      </main>
      <Footer />
    </>
  );
}
