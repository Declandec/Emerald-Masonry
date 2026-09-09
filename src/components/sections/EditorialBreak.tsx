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
    "A written scope you can put out to bid",
    "Dedicated project schedule — phased around your tenants",
    "Matched mortar and brick — repairs that disappear into the wall",
    "Photo documentation from pre-bid through punch list",
    "Same-day response to bid and assessment requests",
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
        What to Expect on a Commercial Masonry Project
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
        Before You Bid It Out
      </p>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
        Get a Real Scope Before You Get a Number
      </h3>
      <p className="text-[15px] leading-[1.85] text-white/65 mb-4">
        Most masonry bids are a number and a sentence. Ours starts with a walk of the
        building — what&apos;s failing, what&apos;s cosmetic, what can wait a season, and what
        will cost you more if it does. You get that in writing before you get a price.
      </p>
      <p className="text-[15px] leading-[1.85] text-white/65 mb-8">
        From spot tuckpointing to full façade and parapet restoration, we handle the
        permits, the staging, the protection, and the cleanup — matched mortar, matched
        brick, and materials specified to outlast the repair cycle. You run the property;
        we run the wall.
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
