"use client";

import { useInView } from "@/hooks/useInView";

const clients = [
  "Property Managers",
  "HOAs & Condo Associations",
  "Churches & Schools",
  "General Contractors",
  "Insurance Carriers",
  "Building Owners",
];

export default function AboutIntro() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center fade-up ${inView ? "in-view" : ""}`}
      >
        <p className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-emerald)] font-semibold mb-4">
          Who We Work With
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-charcoal)] leading-tight mb-4">
          Masonry Built for Buildings People Depend On
        </h2>
        <div className="mx-auto w-16 h-1 bg-[var(--color-emerald)] mb-6" />
        <p className="text-base text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
          Emerald Masonry LLC restores commercial and institutional brick across
          Chicagoland — tuckpointing, façade and parapet repair, lintel replacement,
          and structural brick work. We bid clean, document the scope, and work around
          your tenants and your calendar.
        </p>

        <ul className="flex flex-wrap justify-center gap-2.5">
          {clients.map((c) => (
            <li
              key={c}
              className="px-4 py-2 border border-gray-200 text-[12px] font-semibold uppercase tracking-wide text-[var(--color-charcoal)]"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
