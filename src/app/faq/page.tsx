import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Emerald Masonry LLC — Commercial Masonry Chicagoland",
  description:
    "Common questions about commercial masonry, tuckpointing, brick repair, and working with Emerald Masonry LLC across Chicagoland. Get answers before you call.",
};

const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        q: "How do I know if my building actually needs masonry work?",
        a: "The clearest signs are mortar joints that have receded or crumbled, white mineral deposits (efflorescence) on brick faces, visible cracks in the mortar or brick, or interior moisture near exterior masonry walls. If you're unsure, an on-site assessment is the right first step — we walk the building, document what we find, and give you a straight answer. No pressure, no obligation.",
      },
      {
        q: "What does a free estimate actually include?",
        a: "We walk all elevations of the property, identify failure points, and document what we're seeing. You receive a written fixed-price estimate that covers the full scope — what needs to be done, where, and why. For larger buildings, we can also provide a phased breakdown so you can plan work around your budget cycle. Nothing is vague, and there are no hidden line items.",
      },
      {
        q: "How quickly can you get on-site for an assessment?",
        a: "For most properties in the Chicago southwest and south suburbs, we can schedule an on-site assessment within a few business days. Urgent situations — active water infiltration, loose masonry near pedestrian areas — are prioritized. Call us directly at (309) 323-9959 to discuss your timeline.",
      },
      {
        q: "What is your minimum project size?",
        a: "Our minimum is $5,000. We focus on commercial, institutional, and large-scale residential projects where a complete and durable repair is achievable. We don't take small patch jobs — not because we can't do them, but because the right repair for most masonry problems requires more than a spot fix.",
      },
    ],
  },
  {
    category: "About Our Work",
    items: [
      {
        q: "What types of properties do you work on?",
        a: "We work with property management companies, HOAs, churches, schools, commercial building owners, and insurance companies. Our focus is commercial, institutional, and large-scale residential masonry — multi-family buildings, office properties, retail centers, warehouses, and historic structures across Chicagoland.",
      },
      {
        q: "Are you licensed, bonded, and insured?",
        a: "Yes. Emerald Masonry LLC is fully licensed, bonded, and insured for commercial masonry work in Illinois. We carry general liability and workers' compensation coverage. Certificate of insurance is available on request — we provide it routinely for property managers and insurance-related projects.",
      },
      {
        q: "Do you work on occupied buildings?",
        a: "Yes — most commercial masonry work happens on buildings that are in active use. We develop a project-specific plan before work begins that accounts for tenant access, noise windows, staging, and debris management. For HOAs and multi-family properties, we coordinate resident notification as part of the process.",
      },
      {
        q: "Can masonry work be done in winter?",
        a: "Fresh mortar requires temperatures above 40°F for a minimum curing window. We schedule the majority of tuckpointing and repointing work between April and November. When urgent repairs are needed in colder months, we use cold-weather protection measures — but we're transparent about the limitations and additional requirements involved.",
      },
      {
        q: "How long does tuckpointing last?",
        a: "Quality tuckpointing with properly removed joints and correctly specified mortar lasts 20–30 years in Chicago's climate. Patching over deteriorated mortar without proper joint removal — a common shortcut — typically lasts 1–3 years before failing again. The difference is in the preparation, not just the material.",
      },
      {
        q: "Do you match the existing mortar and brick on repairs?",
        a: "Yes. Mortar color and composition matching is part of every job we do. On older buildings, we also assess the original mortar hardness — using mortar that's harder than the existing brick or surrounding material causes spalling and accelerates deterioration. For brick replacement, we source from multiple suppliers and work with salvage materials when needed to get as close a match as possible.",
      },
    ],
  },
  {
    category: "For Property Managers & HOAs",
    items: [
      {
        q: "Do you provide documentation for ownership reports or board presentations?",
        a: "Yes. We provide written scopes, before-and-after photo documentation, and certificates of completion. For HOA boards and property managers presenting to ownership or building owners, we can structure our assessment report to support a capital planning or reserve fund conversation.",
      },
      {
        q: "Can large projects be phased across multiple budget cycles?",
        a: "Yes, and for larger buildings this is often the most practical approach. We help prioritize — addressing active water infiltration and structural concerns in the first phase, then completing remaining elevations in subsequent phases. The phased plan is developed before work begins so there are no surprises and your budget planning is accurate.",
      },
      {
        q: "Do you work across multiple properties for the same management company?",
        a: "Yes. We maintain ongoing relationships with property management companies that manage multiple buildings. Portfolio-level maintenance coordination — consistent documentation, sequenced scheduling, and priority assessment across properties — is part of how we work with these clients.",
      },
      {
        q: "What should I look for when walking my property for masonry issues?",
        a: "Walk the building perimeter and look for: mortar joints that appear recessed or have visible gaps; white powdery deposits on brick faces; cracks along mortar lines, especially diagonal patterns near corners or above openings; any bricks that look displaced or sound hollow when tapped; and rust staining near window or door frames. If you're seeing two or more of these, schedule an assessment before winter.",
      },
    ],
  },
  {
    category: "Insurance & Claims",
    items: [
      {
        q: "Do you work with insurance companies on masonry damage claims?",
        a: "Yes. We work directly with insurance carriers, TPAs, and adjusters on storm, hail, and freeze-thaw damage claims. We provide damage documentation, written scopes, and before-and-after photo records in formats that support the claims process. We understand what adjusters need and we build our estimates and documentation accordingly.",
      },
      {
        q: "Can you assess hail damage to masonry?",
        a: "Yes. Hail damage to masonry is often underestimated or misidentified. We conduct thorough on-site assessments, document the damage across all elevations, and provide written reports that accurately represent the scope for carrier review. We've completed insurance restoration work on commercial properties across Chicagoland and northwest Indiana.",
      },
    ],
  },
  {
    category: "Service Area",
    items: [
      {
        q: "Where do you work?",
        a: "We serve the greater Chicagoland area — Cook, DuPage, Lake, Will, Kane, and McHenry counties. This includes Chicago and the southwest, south, west, and northwest suburbs. We also work in northwest Indiana for commercial clients. If you're unsure whether your location is in our service area, call us and we'll let you know.",
      },
      {
        q: "Are you local to the Chicagoland area?",
        a: "Yes. Emerald Masonry LLC is based in Palos Heights, IL — in the heart of the southwest suburbs. We're not a national franchise or out-of-state contractor. We're a family-owned business with 40+ years of experience in this specific market, with the relationships and knowledge that come with that.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <Navigation />
      <main className="px-6 pt-28 md:pt-40 pb-24 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-16 border-b border-border pb-6">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            FAQ
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground max-w-2xl">
            Common Questions
          </h1>
          <p className="text-sm text-muted-foreground mt-4 max-w-xl leading-relaxed">
            Answers to what property managers, HOA boards, building owners, and insurance professionals most commonly ask before working with us.
          </p>
        </div>

        {/* FAQ sections */}
        <div className="max-w-3xl space-y-16">
          {faqs.map((section) => (
            <div key={section.category}>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-emerald)] mb-8">
                {section.category}
              </p>
              <div className="space-y-px">
                {section.items.map((item, i) => (
                  <div key={i} className="border border-border">
                    <div className="px-6 py-5 md:px-8 md:py-6">
                      <h2 className="text-sm font-semibold text-foreground mb-3 leading-snug">
                        {item.q}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-[1.85]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mt-20 pt-12 border-t border-border flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">
              Still have a question?
            </p>
            <p className="text-sm text-muted-foreground">
              Call us directly or submit a request — we respond the same day.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:3093239959"
              className="px-6 py-3 border border-border text-xs font-semibold tracking-[0.2em] uppercase text-foreground hover:border-[var(--color-emerald)] hover:text-[var(--color-emerald)] transition-colors duration-300"
            >
              (309) 323-9959
            </a>
            <a
              href="/#contact"
              className="px-6 py-3 bg-[var(--color-emerald)] text-black text-xs font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-300"
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
