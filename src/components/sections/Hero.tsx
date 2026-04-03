export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden">
      {/* Landscape hero — 1536×1024, logo centered in image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-landscape.png')" }}
      />

      {/* Slight tint across full image + dark band at bottom for text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.78) 72%, rgba(0,0,0,0.93) 100%)",
        }}
      />

      {/* Text — horizontally centered, pinned to bottom of the hero */}
      <div className="relative z-10 w-full text-center px-6 pb-16 pt-8">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[var(--color-emerald)] font-semibold mb-4">
          Chicagoland Commercial Masonry
        </p>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-5"
          style={{ fontFamily: "var(--font-uncial)" }}
        >
          We don&apos;t cut corners —<br />
          <span className="text-[var(--color-emerald)]">We lay them. Brick by Brick.</span>
        </h1>

        <p className="text-lg text-white/70 mb-2 leading-relaxed">
          Non-union. Family-owned. 40+ years of Chicagoland masonry experience.
        </p>
        <p className="text-sm text-white/45 mb-8 leading-relaxed">
          Serving property managers, HOAs, churches, and insurance companies across greater Chicago.
          Licensed, bonded &amp; insured.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-emerald)] text-white text-[13px] font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity duration-300 shadow-lg"
          >
            Request a Free Estimate
          </a>
          <a
            href="tel:3093239959"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white text-[13px] font-semibold tracking-widest uppercase hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Call (309) 323-9959
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 text-white/40 text-[10px] uppercase tracking-widest">
          <span>Licensed &amp; Bonded</span>
          <span className="text-[var(--color-emerald)]/50">·</span>
          <span>40+ Years Experience</span>
          <span className="text-[var(--color-emerald)]/50">·</span>
          <span>Free On-Site Estimates</span>
          <span className="text-[var(--color-emerald)]/50">·</span>
          <span>Family Owned</span>
        </div>
      </div>
    </section>
  );
}
