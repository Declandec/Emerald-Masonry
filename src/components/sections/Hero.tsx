export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col justify-end pb-16 px-6 md:px-12 lg:px-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-mailbox.jpg')" }}
      />
      {/* Dark overlay — heavier to ensure text contrast over the light brick */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-emerald)] mb-6">
          Peoria &amp; Central Illinois
        </p>

        {/* Irish / Celtic cursive headline */}
        <h1
          className="text-5xl md:text-7xl leading-tight text-[#F2D472] mb-6"
          style={{ fontFamily: "var(--font-uncial)" }}
        >
          We don&apos;t cut corners —<br className="hidden md:block" />
          We lay them.{" "}
          <span className="text-[var(--color-emerald)]">Brick by Brick.</span>
        </h1>

        <p className="text-base md:text-lg text-foreground/70 mb-10 max-w-lg leading-relaxed">
          Tuckpointing, brick repair, chimney rebuilds, and masonry restoration for homeowners
          and property owners across Central Illinois.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-emerald)] text-background text-sm font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:3093239959"
            className="inline-flex items-center justify-center px-8 py-4 border border-foreground/40 text-foreground text-sm font-medium tracking-widest uppercase hover:border-foreground transition-colors duration-300"
          >
            Call (309) 323-9959
          </a>
        </div>
      </div>

      {/* Scroll label */}
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-20 z-10">
        <p className="text-xs tracking-[0.3em] uppercase text-foreground/40">
          Scroll to explore
        </p>
      </div>
    </section>
  );
}
