import { getAllPosts } from "@/lib/blog";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import BlogClient from "@/components/blog/BlogClient";
import Link from "next/link";

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
      <main>
        {/* Hero */}
        <section className="bg-[var(--color-charcoal)] pt-[110px] pb-14 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-emerald)] font-semibold mb-4">
              Masonry Knowledge
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              The Emerald Masonry Blog
            </h1>
            <p className="text-white/60 text-base max-w-xl leading-relaxed">
              Project updates, maintenance guides, warning signs to watch for, and straight talk about
              masonry repair from a family-owned team with 40+ years of experience across Chicagoland.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {posts.length === 0 ? (
              <p className="text-gray-500 text-sm">Posts coming soon.</p>
            ) : (
              <BlogClient posts={posts} />
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[var(--color-emerald)] py-14 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white text-lg md:text-xl font-bold leading-snug max-w-2xl text-center md:text-left">
              Ready to Talk About Your Masonry Project? We&apos;re Here.
            </p>
            <Link
              href="/#contact"
              className="shrink-0 px-8 py-4 bg-white text-[var(--color-emerald)] text-[13px] font-bold uppercase tracking-widest hover:bg-[var(--color-charcoal)] hover:text-white transition-colors duration-300 shadow-lg"
            >
              Get a Free Estimate
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
