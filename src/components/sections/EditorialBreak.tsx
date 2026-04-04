"use client";

import { useInView } from "@/hooks/useInView";

export default function EditorialBreak() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-[var(--color-charcoal)] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left panel: What to Expect */}
        <LeftPanel />

        {/* Right panel: Don't Hesitate */}
        <RightPanel />
      </div>

      {/* Quote */}
      <div
        ref={ref}
        className={`mt-14 text-center max-w-2xl mx-auto fade-up ${inView ? "in-view" : ""}`}
      >
        <blockquote className="text-lg md:text-xl font-light text-white/80 italic mb-4">
          &ldquo;We don&apos;t patch problems — we fix them the right way, so you don&apos;t have to call
          someone else in two years.&rdquo;
        </blockquote>
        <cite className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-emerald)] not-italic">
          — Emerald Masonry, LLC &nbsp;·&nbsp; Chicagoland, Illinois
        </cite>
      </div>
    </section>
  );
}

function LeftPanel() {
  const { ref, inView } = useInView();

  const points = [
    "Dedicated project schedule — no surprises",
    "Competitive, transparent pricing",
    "Same-day response to estimate requests",
    "Your complete satisfaction, guaranteed",
  ];

  return (
    <div
      ref={ref}
      className={`slide-left ${inView ? "in-view" : ""}`}
    >
      <p className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-emerald)] font-semibold mb-3">
        Working With Emerald Masonry
      </p>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
        What You Should Expect From Our Masonry Contractors Nearby Chicago
      </h3>
      <ul className="flex flex-col gap-4">
        {points.map((pt) => (
          <li key={pt} className="flex items-start gap-3">
            <span className="mt-1 w-5 h-5 rounded-full bg-[var(--color-emerald)] flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-[15px] text-white/80 font-semibold">{pt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RightPanel() {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`slide-right ${inView ? "in-view" : ""}`}
    >
      <p className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-emerald)] font-semibold mb-3">
        Don&apos;t Hesitate
      </p>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
        Hire the Best Masonry Contractors Nearby Chicago Services
      </h3>
      <p className="text-[15px] leading-[1.85] text-white/65 mb-4">
        When you choose Emerald Masonry LLC in Chicago, you can expect the best
        tuckpointing and masonry services at an affordable price. We are the company
        that delivers quality work, thorough documentation, and clean results.
      </p>
      <p className="text-[15px] leading-[1.85] text-white/65 mb-8">
        When you hire our masonry contractors in Chicago, we will go beyond your
        expectations to ensure the job is done right. We take care of everything —
        from brick repair to full façade restoration — so you can focus on running
        your property. We only use the highest quality materials to make sure our
        masonry work lasts.
      </p>
      <a
        href="/#contact"
        className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-emerald)] text-white text-[13px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity duration-300 shadow-lg"
      >
        Contact Us Today
      </a>
    </div>
  );
}
