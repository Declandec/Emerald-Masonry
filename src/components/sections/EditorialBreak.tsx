const steps = [
  {
    num: "01",
    title: "Contact Us",
    desc: "Call or submit your project details online. We respond the same business day.",
  },
  {
    num: "02",
    title: "Free On-Site Estimate",
    desc: "We come to your property, assess the full scope, and provide a detailed written estimate at no charge.",
  },
  {
    num: "03",
    title: "Work Completed Right",
    desc: "Our crew shows up on schedule, communicates throughout, and finishes the job to a commercial standard.",
  },
];

export default function EditorialBreak() {
  return (
    <section className="bg-[var(--color-charcoal)] px-6 py-20 md:px-12 lg:px-20">
      {/* Section header */}
      <div className="text-center mb-14">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[var(--color-emerald)] font-semibold mb-3">
          How It Works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Simple Process
        </h2>
        <p className="text-base text-white/60 max-w-xl mx-auto">
          Getting your masonry repaired shouldn&apos;t be complicated. Here&apos;s how we work.
        </p>
        <div className="mt-4 mx-auto w-16 h-1 bg-[var(--color-emerald)]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <div key={step.num} className="relative">
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-[calc(100%+0px)] w-full h-px bg-[var(--color-emerald)]/30 z-0" />
            )}
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-[var(--color-emerald)] flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">{step.num}</span>
              </div>
              <h3 className="text-[17px] font-bold text-white mb-3">{step.title}</h3>
              <p className="text-[14px] leading-relaxed text-white/60">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <blockquote className="text-lg md:text-xl font-light text-white/80 italic max-w-2xl mx-auto mb-4">
          &ldquo;We don&apos;t patch problems — we fix them the right way, so you don&apos;t have to call someone else in two years.&rdquo;
        </blockquote>
        <cite className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-emerald)] not-italic">
          — Emerald Masonry, LLC &nbsp;·&nbsp; Chicagoland, Illinois
        </cite>
      </div>
    </section>
  );
}
