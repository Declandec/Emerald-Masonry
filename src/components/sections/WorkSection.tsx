"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import projects from "@/data/projects";

export default function WorkSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView();

  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  }

  return (
    <section id="work" className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      {/* Section header */}
      <div
        ref={ref}
        className={`text-center mb-12 fade-up ${inView ? "in-view" : ""}`}
      >
        <p className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-emerald)] font-semibold mb-3">
          Our Masonry Contractors Near Chicago
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
          Check Out Our Latest Projects
        </h2>
        <p className="text-[13px] text-gray-400 uppercase tracking-wide mb-2 font-medium">
          Our Best Commercial Masonry &amp; Tuckpointing Projects
        </p>
        <div className="mt-4 mx-auto w-16 h-1 bg-[var(--color-emerald)]" />
      </div>

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto">
        {/* Prev button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-[var(--color-charcoal)] text-white flex items-center justify-center hover:bg-[var(--color-emerald)] transition-colors duration-200 shadow-lg"
          aria-label="Previous"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project) => {
            const card = (
              <div className="snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[360px] bg-white border border-gray-200 hover:border-[var(--color-emerald)] hover:shadow-md transition-all duration-300 group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="360px"
                  />
                </div>
                <div className="h-[3px] w-full bg-[var(--color-emerald)]" />
                <div className="px-5 py-4">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-emerald)] font-semibold mb-1">
                    {project.tag}
                  </p>
                  <h3 className="text-[14px] font-bold text-[var(--color-charcoal)] group-hover:text-[var(--color-emerald)] transition-colors duration-200 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[12px] text-gray-400 mt-1">{project.location}</p>
                </div>
              </div>
            );

            return project.slug ? (
              <Link key={project.num} href={`/blog/${project.slug}`}>
                {card}
              </Link>
            ) : (
              <div key={project.num}>{card}</div>
            );
          })}
        </div>

        {/* Next button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-[var(--color-charcoal)] text-white flex items-center justify-center hover:bg-[var(--color-emerald)] transition-colors duration-200 shadow-lg"
          aria-label="Next"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-emerald)] text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90 transition-opacity duration-200 shadow-md"
        >
          View All Projects
        </Link>
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] text-[13px] font-semibold uppercase tracking-wide hover:bg-[var(--color-charcoal)] hover:text-white transition-colors duration-200"
        >
          Request a Free Estimate
        </a>
      </div>
    </section>
  );
}
