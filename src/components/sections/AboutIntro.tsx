"use client";

import { useInView } from "@/hooks/useInView";

export default function AboutIntro() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center fade-up ${inView ? "in-view" : ""}`}
      >
        <p className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-emerald)] font-semibold mb-4">
          Masonry and Tuckpointing Near Chicago
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-charcoal)] leading-tight mb-4">
          Looking For a Commercial Masonry Contractor in Chicagoland?
        </h2>
        <div className="mx-auto w-16 h-1 bg-[var(--color-emerald)] mb-6" />
        <p className="text-base text-gray-500 leading-relaxed">
          Emerald Masonry LLC is your reliable source for all kinds of commercial and institutional brick work.
          With a long history built on traditional skills and an eye on quality, we offer the experience,
          work ethic, and integrity that demanding projects require. Whether it&apos;s tuckpointing, restoration,
          or a full façade repair — our team delivers. Contact our masonry contractors in Chicagoland today.
        </p>
      </div>
    </section>
  );
}
