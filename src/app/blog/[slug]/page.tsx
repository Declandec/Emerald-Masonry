import { getPostBySlug, getPostHtml, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Emerald Masonry LLC`,
    description: post.excerpt,
    keywords: post.keywords,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const contentHtml = await getPostHtml(post.content);

  return (
    <>
      <Navigation />
      <main className="px-6 pt-40 pb-24 md:px-12 lg:px-20">
        {/* Back link */}
        <Link
          href="/blog"
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12 inline-block"
        >
          ← All Posts
        </Link>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-emerald)] mb-4">
            {post.service} · {post.location}
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            {post.title}
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            {post.excerpt}
          </p>
          <p className="text-xs text-muted-foreground/40">{post.date}</p>
        </div>

        {/* Hero image */}
        {post.image && (
          <div className="relative aspect-[16/7] w-full overflow-hidden mb-16">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div
          className="max-w-3xl prose prose-invert prose-sm md:prose-base
            prose-headings:font-semibold prose-headings:tracking-tight
            prose-p:text-muted-foreground prose-p:leading-[1.9]
            prose-a:text-[var(--color-emerald)] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* CTA */}
        <div className="max-w-3xl mt-16 border-t border-border pt-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Work with us
          </p>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Have a similar project? Let&apos;s talk.
          </h2>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-emerald)] text-background text-sm font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
          >
            Request a Free Estimate
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
