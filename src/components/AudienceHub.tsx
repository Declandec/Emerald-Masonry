import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import ContactSection from "@/components/sections/ContactSection";
import audiences, { type Audience } from "@/data/audiences";
import {
  BASE_URL,
  BUSINESS,
  breadcrumbNode,
  faqPageNode,
  graph,
  localBusinessNode,
  serviceNode,
  webPageNode,
  webSiteNode,
} from "@/lib/schema";

export default function AudienceHub({ audience }: { audience: Audience }) {
  const url = `${BASE_URL}/${audience.slug}`;
  const others = audiences.filter((a) => a.slug !== audience.slug);

  const ld = graph(
    localBusinessNode(),
    webSiteNode(),
    webPageNode({
      url,
      name: audience.h1,
      description: audience.metaDescription,
      breadcrumbUrl: url,
    }),
    breadcrumbNode(
      [
        { name: "Home", url: BASE_URL },
        { name: audience.navLabel, url },
      ],
      url,
    ),
    serviceNode({
      name: audience.h1,
      description: audience.aiSummary,
      url,
      serviceType: "Commercial Masonry Restoration",
    }),
    faqPageNode(audience.faqs),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld }} />
      <Navigation />

      {/* Hero */}
      <div className="relative pt-[110px] pb-14">
        <Image
          src={audience.image}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[rgba(16,22,32,0.82)]" />
        <div className="relative z-10 px-6 md:px-12 lg:px-20 text-center">
          <p className="text-[11px] tracking-[0.5em] uppercase text-[var(--color-emerald)] font-semibold mb-3">
            {audience.eyebrow}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto leading-tight">
            {audience.h1}
          </h1>
        </div>
      </div>

      <main className="bg-gray-50 px-6 py-16 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">

          {/* Quick Answer — the block AI engines quote */}
          <div className="bg-white border border-gray-200 shadow-sm mb-14">
            <div className="h-[4px] w-full bg-[var(--color-emerald)]" />
            <div className="px-6 py-6 md:px-8">
              <p className="text-[11px] tracking-[0.4em] uppercase text-[var(--color-emerald)] font-semibold mb-3">
                Quick Answer
              </p>
              <p className="text-[15px] leading-[1.85] text-gray-600">{audience.aiSummary}</p>
            </div>
          </div>

          {/* Body sections */}
          {audience.sections.map((section) => (
            <section key={section.heading} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-charcoal)] mb-3 leading-tight">
                {section.heading}
              </h2>
              <div className="w-12 h-1 bg-[var(--color-emerald)] mb-5" />
              {section.body.map((p, i) => (
                <p key={i} className="text-[15px] leading-[1.85] text-gray-600 mb-4">
                  {p}
                </p>
              ))}
            </section>
          ))}

          {/* Project photo */}
          <div className="relative aspect-[16/9] overflow-hidden shadow-xl mb-14">
            <Image
              src={audience.image}
              alt={audience.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[var(--color-emerald)]" />
          </div>

          {/* FAQs */}
          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-charcoal)] mb-3">
              Common Questions
            </h2>
            <div className="w-12 h-1 bg-[var(--color-emerald)] mb-6" />
            <div className="bg-white border border-gray-200 shadow-sm px-6 py-5 md:px-8 flex flex-col gap-6">
              {audience.faqs.map((f, i) => (
                <div
                  key={f.question}
                  className={i < audience.faqs.length - 1 ? "pb-6 border-b border-gray-100" : ""}
                >
                  <h3 className="text-[15px] font-semibold text-[var(--color-charcoal)] mb-2 leading-snug">
                    {f.question}
                  </h3>
                  <p className="text-[14px] leading-[1.8] text-gray-500">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-[var(--color-charcoal)] px-6 py-10 md:px-10 text-center mb-14">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
              Have a building that needs masonry work scoped?
            </h2>
            <p className="text-[14px] text-white/60 mb-6 max-w-xl mx-auto">
              We&apos;ll walk it, tell you what&apos;s structural and what can wait, and put it in
              writing before you get a price.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-emerald)] text-white text-[13px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                Request a Bid
              </a>
              <a
                href={`tel:${BUSINESS.telephone}`}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white text-[13px] font-semibold uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Cross-links to the other buyer hubs */}
          <section>
            <p className="text-[11px] tracking-[0.4em] uppercase text-[var(--color-emerald)] font-semibold mb-4">
              We Also Work With
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {others.map((a) => (
                <Link
                  key={a.slug}
                  href={`/${a.slug}`}
                  className="block bg-white border border-gray-200 px-5 py-4 hover:border-[var(--color-emerald)] transition-colors"
                >
                  <span className="text-[14px] font-semibold text-[var(--color-charcoal)]">
                    {a.navLabel}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <ContactSection />
      <Footer />
    </>
  );
}
