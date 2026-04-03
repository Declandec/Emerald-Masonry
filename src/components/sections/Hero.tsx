export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Landscape hero image — 1536×1024, bg-cover keeps full logo visible */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-landscape.png')" }}
      />

      {/* Gradient: subtle dark overall, heavier at bottom for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.65) 72%, rgba(0,0,0,0.88) 100%)",
        }}
      />

      {/* Centered text — pushed to lower half so it sits below the logo */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-[45vh]">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[var(--color-emerald)] font-semibold mb-4">
          Chicagoland Commercial Masonry
        </p>

        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-5"
          style={{ fontFamily: "var(--font-uncial)" }}
        >
          We don&apos;t cut corners —<br />
          <span className="text-[var(--color-emerald)]">We lay them. Brick by Brick.</span>
        </h1>

        <p className="text-sm text-white/70 mb-2 max-w-xl mx-auto leading-relaxed">
          Non-union. Family-owned. 40+ years of Chicagoland masonry experience.
        </p>
        <p className="text-xs text-white/45 mb-8 max-w-lg mx-auto leading-relaxed">
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

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-white/40 text-[10px] uppercase tracking-widest pb-10">
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
