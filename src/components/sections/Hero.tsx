export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center pt-[120px] pb-20">
      {/* Hero background */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-logo-reveal.png')" }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(24,35,51,0.92) 0%, rgba(24,35,51,0.75) 100%)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="inline-block text-[11px] tracking-[0.5em] uppercase text-[var(--color-emerald)] font-semibold mb-6 border border-[var(--color-emerald)]/40 px-4 py-2">
          Chicagoland Commercial Masonry
        </p>

        <h1
          className="text-3xl md:text-5xl lg:text-6xl leading-tight text-white mb-6"
          style={{ fontFamily: "var(--font-uncial)" }}
        >
          We don&apos;t cut corners —<br />
          <span className="text-[var(--color-emerald)]">We lay them. Brick by Brick.</span>
        </h1>

        <p className="text-base md:text-lg text-white/75 mb-3 max-w-2xl mx-auto leading-relaxed">
          Non-union. Family-owned. 40+ years of Chicagoland masonry experience.
        </p>
        <p className="text-sm text-white/50 mb-10 max-w-xl mx-auto">
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
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/60 text-white text-[13px] font-semibold tracking-widest uppercase hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Call (309) 323-9959
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/50 text-[12px] uppercase tracking-widest">
          <span>Licensed &amp; Bonded</span>
          <span className="text-[var(--color-emerald)]/60">·</span>
          <span>40+ Years Experience</span>
          <span className="text-[var(--color-emerald)]/60">·</span>
          <span>Free On-Site Estimates</span>
          <span className="text-[var(--color-emerald)]/60">·</span>
          <span>Family Owned</span>
        </div>
      </div>
    </section>
  );
}
