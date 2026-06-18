import { getPostBySlug, getPostHtml, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { BASE_URL, BUSINESS, breadcrumbNode, faqPageNode, jsonLd } from "@/lib/schema";

const SUFFIX = " | Emerald Masonry";

function buildTitle(title: string): string {
  const full = `${title}${SUFFIX}`;
  if (full.length <= 60) return full;
  const maxLen = 60 - SUFFIX.length - 1;
  const trimmed = title.substring(0, maxLen).replace(/\s+\S*$/, "");
  return `${trimmed}${SUFFIX}`;
}

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
    title: buildTitle(post.title),
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: buildTitle(post.title),
      description: post.excerpt,
      url: `${BASE_URL}/blog/${slug}`,
      type: "article",
      images: post.image
        ? [{ url: `${BASE_URL}${post.image}`, width: 1200, height: 630, alt: post.title }]
        : [{ url: `${BASE_URL}/images/work-tuckpointing.jpg`, width: 1200, height: 630, alt: "Emerald Masonry LLC" }],
    },
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
      <main className="px-6 pt-28 md:pt-40 pb-24 md:px-12 lg:px-20">
        {/* Back link */}
        <Link
          href="/blog"
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 md:mb-12 inline-block"
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

        {/* Answer-first block — written to be quoted by AI answer engines */}
        {post.aiSummary && post.aiSummary !== post.excerpt && (
          <div className="max-w-3xl mb-12 border-l-2 border-[var(--color-emerald)] pl-5">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-emerald)] mb-3">
              Quick Answer
            </p>
            <p className="text-base text-foreground leading-relaxed">{post.aiSummary}</p>
          </div>
        )}

        {/* Hero image */}
        {post.image && (
          <div className="relative aspect-video md:aspect-[16/7] w-full overflow-hidden mb-10 md:mb-16">
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

        {/* FAQ — visible Q&A mirrored as FAQPage schema */}
        {post.faqs.length > 0 && (
          <div className="max-w-3xl mt-16 pt-10 border-t border-border">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
              Frequently Asked Questions
            </p>
            <div className="divide-y divide-border">
              {post.faqs.map((faq, i) => (
                <div key={i} className="py-6 first:pt-0">
                  <h2 className="text-base font-semibold text-foreground mb-3">{faq.question}</h2>
                  <p className="text-sm text-muted-foreground leading-[1.8]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="max-w-3xl mt-16 pt-10 flex justify-start">
          <a
            href="/#contact"
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground border-b border-muted-foreground pb-1 hover:text-foreground hover:border-foreground transition-colors duration-300"
          >
            Book a Free Quote →
          </a>
        </div>

        {/* JSON-LD: Article + FAQPage + BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(
              {
                "@context": "https://schema.org",
                "@type": "Article",
                headline: post.title,
                description: post.excerpt,
                datePublished: post.date,
                dateModified: post.date,
                image: post.image ? `${BASE_URL}${post.image}` : BUSINESS.image,
                author: { "@type": "Organization", name: BUSINESS.name, url: BASE_URL },
                publisher: { "@id": `${BASE_URL}/#business` },
                mainEntityOfPage: `${BASE_URL}/blog/${slug}`,
              },
              faqPageNode(post.faqs),
              breadcrumbNode([
                { name: "Home", url: BASE_URL },
                { name: "Blog", url: `${BASE_URL}/blog` },
                { name: post.title, url: `${BASE_URL}/blog/${slug}` },
              ]),
            ),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
