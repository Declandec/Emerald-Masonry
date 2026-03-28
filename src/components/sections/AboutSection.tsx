const stats = [
  { value: "4", label: "Core Services" },
  { value: "100%", label: "Locally Owned" },
  { value: "5★", label: "Customer Satisfaction" },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 md:px-12 lg:px-20 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* Label */}
        <div className="md:col-span-2">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            About
          </p>
        </div>

        {/* Main content */}
        <div className="md:col-span-6 md:col-start-3">
          <h2 className="text-2xl md:text-4xl font-semibold leading-snug tracking-tight text-foreground mb-8">
            We believe masonry is only as good as the hands behind it.
          </h2>
          <p className="text-base leading-[1.8] text-muted-foreground">
            Emerald Masonry is a locally owned masonry contractor serving Peoria and Central
            Illinois. We got into this trade because we care about doing things right — not
            cutting corners, not overselling, and not disappearing after the job. Every project
            gets the owner&apos;s attention. We show up, we communicate, and we stand behind our work.
          </p>
          <p className="text-base leading-[1.8] text-muted-foreground mt-4">
            Our focus is simple: protect your property, restore your brickwork, and give you
            honest answers about what needs to be done — and what doesn&apos;t.
          </p>
        </div>

        {/* Stats */}
        <div className="md:col-span-3 md:col-start-10 flex flex-col justify-center gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="border-t border-border pt-6">
              <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
