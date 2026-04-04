"use client";

import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Commercial Tuckpointing & Repointing",
    body: "Deteriorating mortar joints are the leading cause of water intrusion and structural damage in commercial buildings. We grind out failed mortar and repoint with matched material — restoring the envelope and protecting the structure.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Insurance Restoration",
    body: "We work directly with insurance companies and adjusters on masonry restoration claims. Our team provides thorough scope-of-work documentation, accurate damage assessments, and clean execution from approval to completion.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Masonry Façade Restoration",
    body: "Aging brick façades on commercial buildings, churches, and multi-unit properties require more than a patch job. We assess the full envelope, identify root causes, and restore the façade to structural and aesthetic integrity.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Brick Repair & Replacement",
    body: "Spalled, cracked, or failing brick on a commercial property is a liability. We remove damaged units, source matching brick where possible, and tooth-in replacements so the repair holds structurally and the building looks right.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Efflorescence Removal & Waterproofing",
    body: "White staining on brick is a symptom of water moving through the masonry. We remove the efflorescence, address the source, and apply professional-grade waterproofing sealers — stopping the cycle before it causes deeper damage.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: "Chimney Repair & Lintel Restoration",
    body: "Church steeples, commercial chimneys, and aging lintels require experienced hands and proper staging. We handle crown repairs, full chimney rebuilds, and lintel replacement for commercial and institutional properties across Chicagoland.",
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="bg-white py-20 px-6 md:px-12 lg:px-20">
      {/* Section header */}
      <div
        ref={ref}
        className={`text-center mb-14 fade-up ${inView ? "in-view" : ""}`}
      >
        <p className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-emerald)] font-semibold mb-3">
          Masonry &amp; Tuckpointing Service List
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
          Emerald Masonry LLC Service List
        </h2>
        <p className="text-[13px] text-gray-400 uppercase tracking-wide mb-4 font-medium">
          Masonry Restoration · Construction · Repair · Waterproofing
        </p>
        <p className="text-base text-gray-500 max-w-xl mx-auto mb-4">
          Emerald Masonry offers a full range of commercial masonry services — from restoration
          and construction to repair and waterproofing. Built for property managers, HOAs,
          churches, and insurance companies.
        </p>
        <div className="mx-auto w-16 h-1 bg-[var(--color-emerald)]" />
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} delay={i * 0.08} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-[14px] text-gray-500 max-w-xl mx-auto mb-6">
          At Emerald Masonry LLC, we think it&apos;s important to do quality masonry work that lasts.
          When you choose our masonry services, you&apos;re choosing a team that cares about excellence,
          honesty, and making sure you&apos;re completely satisfied.
        </p>
        <a
          href="/#contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-emerald)] text-white text-[13px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity duration-200 shadow-md"
        >
          Request a Free On-Site Estimate
        </a>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`border-2 border-gray-200 hover:border-[var(--color-emerald)] hover:shadow-lg transition-all duration-300 group cursor-default fade-up ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="p-8">
        {/* Icon */}
        <div className="mb-4 text-[var(--color-emerald)] group-hover:scale-110 transition-transform duration-300 inline-block">
          {service.icon}
        </div>
        <h3 className="text-[14px] font-bold text-[var(--color-charcoal)] mb-3 uppercase tracking-wide group-hover:text-[var(--color-emerald)] transition-colors duration-200 leading-tight">
          {service.title}
        </h3>
        <p className="text-[14px] leading-[1.75] text-gray-500">{service.body}</p>
      </div>
    </div>
  );
}
