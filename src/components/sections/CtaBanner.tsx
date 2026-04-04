"use client";

import { useInView } from "@/hooks/useInView";

export default function CtaBanner() {
  const { ref, inView } = useInView(0.2);

  return (
    <section className="bg-[var(--color-emerald)] py-14 px-6 md:px-12 lg:px-20">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 fade-up ${inView ? "in-view" : ""}`}
      >
        <p className="text-white text-lg md:text-xl font-bold leading-snug max-w-2xl text-center md:text-left">
          If You&apos;re Looking For the Best Commercial Masonry Contractor in Chicagoland,
          Look No Further — Emerald Masonry LLC Is Here For You!
        </p>
        <a
          href="/#contact"
          className="shrink-0 px-8 py-4 bg-white text-[var(--color-emerald)] text-[13px] font-bold uppercase tracking-widest hover:bg-[var(--color-charcoal)] hover:text-white transition-colors duration-300 shadow-lg"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
