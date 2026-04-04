"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const benefits = [
  {
    num: "1",
    title: "Protecting Your Property's Value",
    body: "The artistic and historical value of a building can be preserved by fixing and restoring its masonry. By maintaining the original structure, we preserve the property's character and keep the building looking its best for years to come.",
  },
  {
    num: "2",
    title: "Reinforcing Structural Integrity",
    body: "When you fix and restore masonry, you make the structure stronger and more resistant to weather and water. It stops existing damage from spreading, prevents future problems, and keeps the building structurally sound.",
  },
  {
    num: "3",
    title: "Protecting Your Investment",
    body: "Addressing masonry damage on a regular basis stops small issues from becoming costly structural failures. It's a cost-effective way to protect your property, which can preserve or increase its value over time and save you money in the long run.",
  },
];

export default function BenefitsSection() {
  const { ref, inView } = useInView();
  const { ref: imgRef, inView: imgInView } = useInView();

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 fade-up ${inView ? "in-view" : ""}`}
        >
          <p className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-emerald)] font-semibold mb-3">
            Why It Matters
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
            Three Main Benefits of Masonry Repair &amp; Restoration
          </h2>
          <p className="text-[13px] text-gray-400 uppercase tracking-wide mb-4 font-medium">
            Benefits of Working With Emerald Masonry LLC
          </p>
          <div className="mx-auto w-16 h-1 bg-[var(--color-emerald)]" />
        </div>

        {/* Two-column: benefits + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits list */}
          <div className="flex flex-col gap-7">
            {benefits.map((b, i) => {
              return (
                <BenefitItem key={b.num} benefit={b} delay={i * 0.12} />
              );
            })}
          </div>

          {/* Image */}
          <div
            ref={imgRef}
            className={`relative aspect-[4/3] overflow-hidden shadow-xl slide-right ${imgInView ? "in-view" : ""}`}
          >
            <Image
              src="/images/restoration-facade.jpg"
              alt="Masonry restoration work — Emerald Masonry LLC"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Green overlay accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[var(--color-emerald)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitItem({ benefit, delay }: { benefit: typeof benefits[0]; delay: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`flex gap-5 items-start slide-left ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Number circle */}
      <div className="shrink-0 w-14 h-14 rounded-full border-2 border-[var(--color-emerald)] flex items-center justify-center">
        <span className="text-[22px] font-bold text-[var(--color-emerald)]">{benefit.num}</span>
      </div>
      <div>
        <h3 className="text-[16px] font-bold text-[var(--color-emerald)] mb-2">{benefit.title}</h3>
        <p className="text-[14px] leading-[1.75] text-gray-500">{benefit.body}</p>
      </div>
    </div>
  );
}
