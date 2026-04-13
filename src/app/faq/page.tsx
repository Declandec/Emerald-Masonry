import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Emerald Masonry LLC",
  description:
    "Common questions about commercial masonry, tuckpointing, brick repair, and working with Emerald Masonry LLC across Chicagoland. Get answers before you call.",
  keywords: [
    "masonry contractor FAQ",
    "tuckpointing questions Chicago",
    "commercial masonry estimate Chicagoland",
    "how long does tuckpointing last",
    "masonry contractor licensed bonded insured Illinois",
    "HOA masonry questions",
    "property manager masonry FAQ",
    "insurance masonry claim Chicago",
  ],
  alternates: {
    canonical: "https://emeraldmasonryil.com/faq",
  },
  openGraph: {
    title: "FAQ | Emerald Masonry LLC",
    description:
      "Common questions about commercial masonry, tuckpointing, brick repair, and working with Emerald Masonry LLC across Chicagoland.",
    url: "https://emeraldmasonryil.com/faq",
    type: "website",
  },
};

const gettingStarted = {
  category: "Getting Started",
  icon: "🚀",
  items: [
    {
      q: "How do I know if my building actually needs masonry work?",
      a: "The clearest signs are mortar joints that have receded or crumbled, white mineral deposits (efflorescence) on brick faces, visible cracks in the mortar or brick, or interior moisture near exterior masonry walls. If you're unsure, an on-site assessment is the right first step — we walk the building, document what we find, and give you a straight answer.",
    },
    {
      q: "What does a free estimate actually include?",
      a: "We walk all elevations of the property, identify failure points, and document what we're seeing. You receive a written fixed-price estimate covering the full scope — what needs to be done, where, and why. For larger buildings, we can also provide a phased breakdown to help plan around your budget cycle.",
    },
    {
      q: "How quickly can you get on-site for an assessment?",
      a: "For most properties in the Chicago southwest and south suburbs, we can schedule within a few business days. Urgent situations — active water infiltration, loose masonry near pedestrian areas — are prioritized. Call us directly at (708) 288-1696 to discuss your timeline.",
    },
    {
      q: "What is your minimum project size?",
      a: "Our minimum is $5,000. We focus on commercial, institutional, and large-scale residential projects where a complete and durable repair is achievable. We don't take small patch jobs — not because we can't, but because the right repair usually requires more than a spot fix.",
    },
  ],
};

const aboutWork = {
  category: "About Our Work",
  icon: "🧱",
  items: [
    {
      q: "What types of properties do you work on?",
      a: "We work with property management companies, HOAs, churches, schools, commercial building owners, and insurance companies. Our focus is commercial, institutional, and large-scale residential masonry across Chicagoland.",
    },
    {
      q: "Are you licensed, bonded, and insured?",
      a: "Yes. Emerald Masonry LLC is fully licensed, bonded, and insured for commercial masonry work in Illinois. We carry general liability and workers' compensation coverage. Certificate of insurance is available on request.",
    },
    {
      q: "Do you work on occupied buildings?",
      a: "Yes — most commercial masonry work happens on buildings in active use. We develop a project-specific plan that accounts for tenant access, noise windows, staging, and debris management.",
    },
    {
      q: "Can masonry work be done in winter?",
      a: "Fresh mortar requires temperatures above 40°F for a minimum curing window. We schedule the majority of tuckpointing work between April and November. Urgent repairs in colder months use cold-weather protection measures.",
    },
    {
      q: "How long does tuckpointing last?",
      a: "Quality tuckpointing with properly removed joints and correctly specified mortar lasts 20–30 years in Chicago's climate. Patching over deteriorated mortar without proper joint removal typically lasts 1–3 years before failing again.",
    },
    {
      q: "Do you match the existing mortar and brick on repairs?",
      a: "Yes. Mortar color and composition matching is part of every job we do. For brick replacement, we source from multiple suppliers and work with salvage materials when needed to get as close a match as possible.",
    },
  ],
};

const serviceArea = {
  category: "Service Areas",
  icon: "📍",
  items: [
    {
      q: "Where do you work?",
      a: "We serve the greater Chicagoland area — Cook, DuPage, Lake, Will, Kane, and McHenry counties. This includes Chicago and the southwest, south, west, and northwest suburbs. We also work in northwest Indiana for commercial clients.",
    },
    {
      q: "Are you local to the Chicagoland area?",
      a: "Yes. Emerald Masonry LLC is based in Palos Heights, IL — in the heart of the southwest suburbs. We're a family-owned business with 40+ years of experience in this specific market.",
    },
  ],
};

const propertyManagers = {
  category: "For Property Managers & HOAs",
  icon: "🏢",
  items: [
    {
      q: "Do you provide documentation for ownership reports or board presentations?",
      a: "Yes. We provide written scopes, before-and-after photo documentation, and certificates of completion. For HOA boards and property managers, we can structure our assessment report to support a capital planning or reserve fund conversation.",
    },
    {
      q: "Can large projects be phased across multiple budget cycles?",
      a: "Yes, and for larger buildings this is often the most practical approach. We help prioritize — addressing active water infiltration and structural concerns first, then completing remaining elevations in subsequent phases.",
    },
    {
      q: "Do you work across multiple properties for the same management company?",
      a: "Yes. We maintain ongoing relationships with property management companies that manage multiple buildings. Portfolio-level maintenance coordination — consistent documentation, sequenced scheduling, and priority assessment — is part of how we work.",
    },
    {
      q: "What should I look for when walking my property for masonry issues?",
      a: "Walk the perimeter and look for: mortar joints that appear recessed or have gaps; white powdery deposits on brick faces; cracks along mortar lines, especially diagonal patterns near corners; bricks that sound hollow when tapped; and rust staining near window or door frames.",
    },
  ],
};

const insurance = {
  category: "Insurance & Claims",
  icon: "📋",
  items: [
    {
      q: "Do you work with insurance companies on masonry damage claims?",
      a: "Yes. We work directly with insurance carriers, TPAs, and adjusters on storm, hail, and freeze-thaw damage claims. We provide damage documentation, written scopes, and before-and-after photo records in formats that support the claims process.",
    },
    {
      q: "Can you assess hail damage to masonry?",
      a: "Yes. Hail damage to masonry is often underestimated or misidentified. We conduct thorough on-site assessments, document the damage across all elevations, and provide written reports that accurately represent the scope for carrier review.",
    },
  ],
};

function FaqCard({ category, icon, items }: {
  category: string;
  icon: string;
  items: { q: string; a: string }[];
}) {
  return (
    <div className="bg-white border border-gray-200 shadow-sm h-full flex flex-col">
      {/* Card header with emerald top border */}
      <div className="h-[4px] w-full bg-[var(--color-emerald)]" />
      <div className="px-6 py-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <h2 className="text-[15px] font-bold text-[var(--color-charcoal)] uppercase tracking-wide">
            {category}
          </h2>
        </div>
      </div>
      <div className="px-6 py-5 flex flex-col gap-6 flex-1">
        {items.map((item, i) => (
          <div key={i} className={i < items.length - 1 ? "pb-6 border-b border-gray-100" : ""}>
            <h3 className="text-[14px] font-semibold text-[var(--color-charcoal)] mb-2 leading-snug">
              {item.q}
            </h3>
            <p className="text-[13px] leading-[1.8] text-gray-500">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <Navigation />

      {/* Page hero banner */}
      <div
        className="relative pt-[110px] pb-14 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-brick-wall.png')" }}
      >
        <div className="absolute inset-0 bg-[rgba(16,22,32,0.80)]" />
        <div className="relative z-10 px-6 md:px-12 lg:px-20 text-center">
          <p className="text-[11px] tracking-[0.5em] uppercase text-[var(--color-emerald)] font-semibold mb-3">
            Frequently Asked Questions
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Common Questions
          </h1>
          <p className="text-base text-white/60 max-w-xl mx-auto">
            Answers to what property managers, HOA boards, building owners, and insurance professionals most commonly ask before working with us.
          </p>
        </div>
      </div>

      <main className="bg-gray-50 px-6 py-16 md:px-12 lg:px-20">

        {/* Row 1: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <FaqCard {...gettingStarted} />
          <FaqCard {...aboutWork} />
          <FaqCard {...serviceArea} />
        </div>

        {/* Row 2: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FaqCard {...propertyManagers} />
          <FaqCard {...insurance} />
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[var(--color-charcoal)] px-8 py-10 flex flex-col sm:flex-row gap-6 items-center justify-between">
          <div>
            <p className="text-[17px] font-bold text-white mb-1">
              Still have a question?
            </p>
            <p className="text-[14px] text-white/60">
              Call us directly or submit a request — we respond the same business day.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:7082881696"
              className="px-7 py-3.5 border-2 border-white/30 text-[13px] font-semibold tracking-wide uppercase text-white hover:border-[var(--color-emerald)] hover:text-[var(--color-emerald)] transition-colors duration-200"
            >
              (708) 288-1696
            </a>
            <a
              href="/#contact"
              className="px-7 py-3.5 bg-[var(--color-emerald)] text-white text-[13px] font-semibold tracking-wide uppercase hover:opacity-90 transition-opacity duration-200"
            >
              Request Free Estimate
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
