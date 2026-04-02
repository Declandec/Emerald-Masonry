export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex flex-col justify-end pb-20 px-6 md:px-12 lg:px-20">
      {/* Hero image only — crumbling brick + logo reveal */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-logo-reveal.png')",
          backgroundSize: "80%",
        }}
      />
      {/* Gradient: transparent at center so logo shows, dark at bottom for text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.72) 68%, rgba(0,0,0,0.93) 100%)",
        }}
      />

      {/* "Chicagoland Commercial Masonry" — centered at top */}
      <div className="absolute top-28 left-0 right-0 flex justify-center z-10">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[var(--color-emerald)]">
          Chicagoland Commercial Masonry
        </p>
      </div>

      {/* Bottom-left content */}
      <div className="relative z-10 max-w-xl">
        <h1
          className="text-2xl md:text-4xl leading-snug text-[#F2D472] mb-4"
          style={{ fontFamily: "var(--font-uncial)" }}
        >
          We don&apos;t cut corners —<br />
          We lay them.{" "}
          <span className="text-[var(--color-emerald)]">Brick by Brick.</span>
        </h1>

        <p className="text-sm text-white/60 mb-2 max-w-md leading-relaxed">
          Non-union. Family-owned. 40+ years of Chicagoland masonry experience.
        </p>
        <p className="text-xs text-white/35 mb-8 max-w-md leading-relaxed">
          Serving property managers, HOAs, churches, and insurance companies across greater
          Chicago. Licensed, bonded &amp; insured.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[var(--color-emerald)] text-black text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
          >
            Request a Free Estimate
          </a>
          <a
            href="tel:3093239959"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white/80 text-xs font-medium tracking-widest uppercase hover:border-white hover:text-white transition-colors duration-300"
          >
            Call (309) 323-9959
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-20 z-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/25">Scroll to explore</p>
      </div>
    </section>
  );
}
