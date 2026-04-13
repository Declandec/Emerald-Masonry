import { getSeoPage, getSeoPageHtml, getAllSeoSlugs } from "@/lib/seo-pages";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

const BASE_URL = "https://emeraldmasonryil.com";

function buildTitle(metaTitle: string): string {
  if (metaTitle.length <= 60) return metaTitle;
  // truncate at last word boundary under 57 chars, then add ellipsis
  const trimmed = metaTitle.substring(0, 57).replace(/\s+\S*$/, "");
  return `${trimmed}…`;
}

export async function generateStaticParams() {
  return getAllSeoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) return {};
  return {
    title: buildTitle(page.metaTitle),
    description: page.metaDescription,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    alternates: {
      canonical: `${BASE_URL}/locations/${slug}`,
    },
    openGraph: {
      title: buildTitle(page.metaTitle),
      description: page.metaDescription,
      url: `${BASE_URL}/locations/${slug}`,
      type: "article",
      images: page.image
        ? [{ url: `${BASE_URL}${page.image}`, width: 1200, height: 630, alt: page.imageAlt }]
        : [{ url: `${BASE_URL}/images/work-tuckpointing.jpg`, width: 1200, height: 630, alt: "Emerald Masonry LLC — Commercial Masonry Chicagoland" }],
    },
  };
}

export default async function LocationLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) notFound();

  const contentHtml = await getSeoPageHtml(page.content);

  return (
    <>
      <Navigation />
      <main className="px-6 pt-28 md:pt-40 pb-24 md:px-12 lg:px-20">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-emerald)] mb-4">
            {page.service} · {page.city}
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            {page.title}
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            {page.excerpt}
          </p>
        </div>

        {/* Hero image */}
        {page.image && (
          <div className="relative aspect-video md:aspect-[16/7] w-full overflow-hidden mb-10 md:mb-16">
            <Image
              src={page.image}
              alt={page.imageAlt}
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
        <div className="max-w-3xl mt-16 pt-10 border-t border-border flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">
              Ready to get started?
            </p>
            <p className="text-sm text-foreground font-medium">
              Free on-site estimates for commercial and large-scale projects.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:7082881696"
              className="px-6 py-3 border border-border text-xs font-semibold tracking-[0.2em] uppercase text-foreground hover:border-[var(--color-emerald)] hover:text-[var(--color-emerald)] transition-colors duration-300"
            >
              (708) 288-1696
            </a>
            <a
              href="/#contact"
              className="px-6 py-3 bg-[var(--color-emerald)] text-black text-xs font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-300"
            >
              Request Free Estimate
            </a>
          </div>
        </div>

        {/* Service links */}
        <div className="max-w-3xl mt-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Our Services
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Tuckpointing", href: "/services/tuckpointing" },
              { label: "Brick Repair", href: "/services/brick-repair" },
              { label: "Chimney Repair", href: "/services/chimney-repair" },
              { label: "Masonry Restoration", href: "/services/masonry-restoration" },
              { label: "Waterproofing", href: "/services/waterproofing" },
              { label: "Commercial", href: "/services/commercial" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-xs tracking-[0.15em] uppercase text-muted-foreground border border-border px-4 py-2 hover:text-[var(--color-emerald)] hover:border-[var(--color-emerald)] transition-colors duration-300"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* JSON-LD per page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: buildTitle(page.metaTitle),
              description: page.metaDescription,
              url: `${BASE_URL}/locations/${slug}`,
              about: {
                "@type": "Service",
                name: page.service,
                areaServed: {
                  "@type": "City",
                  name: page.city,
                },
                provider: {
                  "@type": "LocalBusiness",
                  name: "Emerald Masonry LLC",
                  telephone: "+17082881696",
                  url: BASE_URL,
                },
              },
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
