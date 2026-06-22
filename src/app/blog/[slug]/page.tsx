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
      <main className="bg-white">
        {/* Hero */}
        <section className="bg-[var(--color-charcoal)] pt-[110px] pb-14 px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="text-[11px] tracking-[0.3em] uppercase text-white/40 hover:text-white/70 transition-colors duration-300"
            >
              ← All Posts
            </Link>
            <p className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-emerald)] font-semibold mt-6 mb-3">
              {post.service}{post.location ? ` · ${post.location}` : ""}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-white/60 text-base leading-relaxed mb-3">{post.excerpt}</p>
            {post.date && <p className="text-white/30 text-xs">{post.date}</p>}
          </div>
        </section>

        {/* Body */}
        <section className="py-14 px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto">
            {/* Answer-first block — written to be quoted by AI answer engines */}
            {post.aiSummary && post.aiSummary !== post.excerpt && (
              <div className="border-l-4 border-[var(--color-emerald)] bg-gray-50 p-6 mb-10">
                <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-emerald)] font-semibold mb-2">
                  Quick Answer
                </p>
                <p className="text-[15px] text-[var(--color-charcoal)] leading-relaxed">{post.aiSummary}</p>
              </div>
            )}

            {/* Hero image */}
            {post.image && (
              <div className="relative aspect-video w-full overflow-hidden mb-10">
                <Image src={post.image} alt={post.title} fill className="object-cover" priority />
              </div>
            )}

            {/* Content */}
            <div
              className="text-[15px] leading-[1.85] text-gray-600
                [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[var(--color-charcoal)] [&_h2]:mt-10 [&_h2]:mb-4
                [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[var(--color-charcoal)] [&_h3]:mt-6 [&_h3]:mb-3
                [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
                [&_li]:mb-1.5 [&_strong]:text-[var(--color-charcoal)] [&_strong]:font-semibold
                [&_a]:text-[var(--color-emerald)] [&_a]:font-medium hover:[&_a]:underline
                [&_table]:w-full [&_table]:my-6 [&_th]:text-left [&_th]:border-b [&_th]:border-gray-300 [&_th]:py-2 [&_th]:font-bold [&_th]:text-[var(--color-charcoal)]
                [&_td]:border-b [&_td]:border-gray-100 [&_td]:py-2 [&_td]:pr-4 [&_td]:align-top"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* FAQ — visible Q&A mirrored as FAQPage schema */}
            {post.faqs.length > 0 && (
              <div className="mt-14 pt-10 border-t border-gray-200">
                <p className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-emerald)] font-semibold mb-6">
                  Frequently Asked Questions
                </p>
                <div className="flex flex-col gap-4">
                  {post.faqs.map((faq, i) => (
                    <div key={i} className="border border-gray-200 bg-white p-6">
                      <h2 className="text-[15px] font-bold text-[var(--color-charcoal)] mb-3 leading-snug">
                        {faq.question}
                      </h2>
                      <p className="text-[14px] leading-[1.75] text-gray-500">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12">
              <a
                href="/#contact"
                className="inline-block px-6 py-3 bg-[var(--color-emerald)] text-white text-[12px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Get a Free Estimate → (708) 288-1696
              </a>
            </div>
          </div>
        </section>

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
