export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex flex-col justify-end pb-20 px-6 md:px-12 lg:px-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-logo-reveal.png')" }}
      />
      {/* Gradient overlay — light at center/top for logo visibility, dark at bottom for text */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.75) 75%, rgba(0,0,0,0.92) 100%)"
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--color-emerald)] mb-5">
          Chicagoland Commercial Masonry
        </p>

        <h1
          className="text-3xl md:text-5xl leading-tight text-[#F2D472] mb-5"
          style={{ fontFamily: "var(--font-uncial)" }}
        >
          We don&apos;t cut corners —<br className="hidden md:block" />
          We lay them.{" "}
          <span className="text-[var(--color-emerald)]">Brick by Brick.</span>
        </h1>

        <p className="text-sm md:text-base text-white/65 mb-3 max-w-lg leading-relaxed">
          Non-union. Family-owned. 40+ years of Chicagoland masonry experience.
        </p>
        <p className="text-xs text-white/40 mb-10 max-w-lg leading-relaxed">
          Serving property managers, HOAs, churches, and insurance companies across the greater Chicago area. Licensed, bonded &amp; insured.
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

      {/* Scroll label */}
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-20 z-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/30">
          Scroll to explore
        </p>
      </div>
    </section>
  );
}
