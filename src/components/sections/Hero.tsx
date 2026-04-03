export default function Hero() {
  return (
    <section className="relative min-h-screen flex overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#0c1018]" />

      {/* Right panel: logo image — bg-center keeps logo centered within the right half */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[55%]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-landscape.png')" }}
        />
        {/* Tint over image */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Fade left edge into dark background so panels blend */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0c1018 0%, rgba(12,16,24,0.6) 25%, rgba(12,16,24,0) 55%)",
          }}
        />
      </div>

      {/* Left panel: text content */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-14 lg:px-20 py-36 w-full md:w-[50%]">
        <p className="text-[11px] tracking-[0.5em] uppercase text-[var(--color-emerald)] font-semibold mb-5">
          Chicagoland Commercial Masonry
        </p>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6"
          style={{
            fontFamily: "var(--font-uncial)",
            color: "#F2D472",
            textShadow: "0 2px 16px rgba(0,0,0,0.6)",
          }}
        >
          We don&apos;t cut<br />corners — We<br />
          <span style={{ color: "var(--color-emerald)" }}>lay them.</span>
        </h1>

        <p className="text-lg font-semibold text-white mb-2 leading-relaxed max-w-sm">
          Non-union. Family-owned. 40+ years of Chicagoland masonry.
        </p>
        <p className="text-sm text-white/55 mb-10 leading-relaxed max-w-sm">
          Serving property managers, HOAs, churches, and insurance companies
          across greater Chicago. Licensed, bonded &amp; insured.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-emerald)] text-white text-[13px] font-bold tracking-widest uppercase hover:opacity-90 transition-opacity duration-300 shadow-lg"
          >
            Request a Free Estimate
          </a>
          <a
            href="tel:3093239959"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white text-[13px] font-semibold tracking-widest uppercase hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            (309) 323-9959
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-5 text-white/40 text-[10px] uppercase tracking-widest">
          <span>Licensed &amp; Bonded</span>
          <span className="text-[var(--color-emerald)]/50">·</span>
          <span>40+ Years Experience</span>
          <span className="text-[var(--color-emerald)]/50">·</span>
          <span>Free Estimates</span>
          <span className="text-[var(--color-emerald)]/50">·</span>
          <span>Family Owned</span>
        </div>
      </div>
    </section>
  );
}
