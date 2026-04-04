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
            src="/images/about.png"
            alt="Emerald Masonry LLC — Commercial Masonry Chicagoland"
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
            Masonry &amp; Tuckpointing Near Chicago
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-charcoal)] mb-3 leading-tight">
            Emerald Masonry LLC &amp; Commercial Masonry Services
          </h2>
          <p className="text-[14px] font-bold text-[var(--color-charcoal)] mb-5 uppercase tracking-wide">
            Trust Us With Your Masonry Restoration &amp; Tuckpointing
          </p>
          <div className="w-12 h-1 bg-[var(--color-emerald)] mb-6" />

          <p className="text-[15px] leading-[1.85] text-gray-600 mb-4">
            Emerald Masonry LLC is a non-union, family-owned commercial masonry contractor
            serving the greater Chicago area. With over 40 years of hands-on experience in
            Chicagoland masonry, we bring the expertise, work ethic, and integrity that
            large-scale restoration projects demand.
          </p>
          <p className="text-[15px] leading-[1.85] text-gray-600 mb-4">
            We work exclusively with property managers, HOAs, churches, and insurance companies
            on projects with the scope and complexity that our team is built for.
            Every client gets a dedicated project schedule, clear communication from start to
            finish, and a crew that shows up and delivers.
          </p>
          <p className="text-[15px] leading-[1.85] text-gray-600 mb-8">
            Non-union means we move faster, price fairly, and answer directly to you.
            Family-owned means our reputation is on the line every single job.
            That&apos;s not a tagline — that&apos;s how we operate.
          </p>

          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-emerald)] text-white text-[13px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity duration-300 shadow-md"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
