"use client";

import { useInView } from "@/hooks/useInView";

const reasons = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "40+ Years of Experience",
    body: "We have worked in Chicagoland masonry for over four decades. Our experience means we can handle any job — no matter the complexity, scale, or condition of the structure. Trusted by property managers, HOAs, churches, and insurers.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Free On-Site Estimate",
    body: "We offer free on-site estimates for all commercial, institutional, and large-scale projects across Chicagoland. No pressure. No obligation. Just an honest, detailed assessment and a clear written quote from an experienced crew.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Non-Union & Family Owned",
    body: "Being non-union and family-owned means faster project timelines, fair and competitive pricing, and personal accountability on every single job. Our reputation is on the line — that&apos;s not a tagline, that&apos;s how we operate.",
  },
];

export default function WhyChooseSection() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 fade-up ${inView ? "in-view" : ""}`}
        >
          <p className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-emerald)] font-semibold mb-3">
            Choose Us If You Need Masonry Services Nearby Chicago
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
            Why You Should Choose Emerald Masonry
          </h2>
          <div className="mx-auto w-16 h-1 bg-[var(--color-emerald)]" />
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({
  reason,
  delay,
}: {
  reason: typeof reasons[0];
  delay: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`text-center px-6 py-8 border border-gray-100 hover:border-[var(--color-emerald)] hover:shadow-md transition-all duration-300 group fade-up ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex justify-center mb-5">
        <div className="w-20 h-20 rounded-full border-2 border-[var(--color-emerald)] flex items-center justify-center text-[var(--color-emerald)] group-hover:bg-[var(--color-emerald)] group-hover:text-white transition-all duration-300">
          {reason.icon}
        </div>
      </div>
      <h3 className="text-[16px] font-bold text-[var(--color-charcoal)] mb-3 group-hover:text-[var(--color-emerald)] transition-colors duration-200">
        {reason.title}
      </h3>
      <p className="text-[14px] leading-[1.75] text-gray-500">{reason.body}</p>
    </div>
  );
}
