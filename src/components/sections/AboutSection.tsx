"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function AboutSection() {
  const { ref: leftRef, inView: leftIn } = useInView();
  const { ref: rightRef, inView: rightIn } = useInView();

  return (
    <section id="about" className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: image */}
        <div
          ref={leftRef}
          className={`relative aspect-[4/3] overflow-hidden shadow-xl slide-left ${leftIn ? "in-view" : ""}`}
        >
          <Image
            src="/images/work/commercial-warehouse-tuckpointing.webp"
            alt="Commercial warehouse brick wall after full-height tuckpointing by Emerald Masonry LLC"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[var(--color-emerald)]" />
        </div>

        {/* Right: text */}
        <div
          ref={rightRef}
          className={`slide-right ${rightIn ? "in-view" : ""}`}
        >
          <p className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-emerald)] font-semibold mb-3">
            Commercial Masonry Contractor · Chicagoland
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-charcoal)] mb-3 leading-tight">
            Commercial Masonry Restoration Across Chicagoland
          </h2>
          <p className="text-[14px] font-bold text-[var(--color-charcoal)] mb-5 uppercase tracking-wide">
            Tuckpointing · Façade Restoration · Parapet &amp; Lintel Repair
          </p>
          <div className="w-12 h-1 bg-[var(--color-emerald)] mb-6" />

          <p className="text-[15px] leading-[1.85] text-gray-600 mb-4">
            Emerald Masonry LLC is a family-owned commercial masonry contractor serving
            the greater Chicago area. The company was established in 2024 and is led by
            career masons with decades of hands-on Chicagoland experience — the crew has
            been on these walls far longer than the sign has been on the truck.
          </p>
          <p className="text-[15px] leading-[1.85] text-gray-600 mb-4">
            Our work is commercial and institutional: property managers, HOAs and condo
            associations, churches, schools, general contractors, insurance carriers, and
            building owners. Every project gets a written scope, a dedicated schedule,
            progress documentation, and a crew that shows up and delivers.
          </p>
          <p className="text-[15px] leading-[1.85] text-gray-600 mb-8">
            We&apos;re non-union, which means we move faster and price fairly. We&apos;re
            family-owned, which means our reputation is on the line every single job.
            That is not a tagline — that is how we operate.
          </p>

          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-emerald)] text-white text-[13px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity duration-300 shadow-md"
          >
            Request a Bid
          </a>
        </div>
      </div>
    </section>
  );
}
