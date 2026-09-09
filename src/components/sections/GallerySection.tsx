"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import photos from "@/data/gallery";

export default function GallerySection() {
  const { ref, inView } = useInView();

  return (
    <section id="gallery" className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 fade-up ${inView ? "in-view" : ""}`}
        >
          <p className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-emerald)] font-semibold mb-3">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
            Past Projects
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Commercial and institutional masonry across Chicagoland — tuckpointing,
            façade restoration, parapet and lintel repair, and structural brick work.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 bg-[var(--color-emerald)]" />
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <GalleryPhoto key={photo.src} photo={photo} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] text-[13px] font-bold uppercase tracking-wide hover:bg-[var(--color-charcoal)] hover:text-white transition-colors duration-200"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryPhoto({ photo, index }: { photo: { src: string; alt: string }; index: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`relative aspect-square overflow-hidden group cursor-pointer fade-up ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: `${(index % 4) * 0.07}s` }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-[var(--color-emerald)]/0 group-hover:bg-[var(--color-emerald)]/30 transition-colors duration-500" />
    </div>
  );
}
