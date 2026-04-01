const stats = [
  { value: "40+", label: "Years of Experience" },
  { value: "100%", label: "Family Owned & Operated" },
  { value: "LBI", label: "Licensed, Bonded & Insured" },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 md:px-12 lg:px-20 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8">
        {/* Label */}
        <div className="md:col-span-2">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            About
          </p>
        </div>

        {/* Main content */}
        <div className="md:col-span-6 md:col-start-3">
          <h2 className="text-2xl md:text-4xl font-semibold leading-snug tracking-tight text-foreground mb-8">
            Built by family. Backed by four decades of Chicagoland masonry.
          </h2>
          <p className="text-base leading-[1.8] text-muted-foreground">
            Emerald Masonry LLC is a non-union, family-owned commercial masonry contractor
            serving the greater Chicago area. With over 40 years of hands-on experience in
            Chicagoland masonry, we bring the expertise, work ethic, and integrity that
            large-scale restoration projects demand.
          </p>
          <p className="text-base leading-[1.8] text-muted-foreground mt-4">
            We work exclusively with property managers, HOAs, churches, and insurance
            companies on projects with the scope and complexity that our team is built for.
            Every client gets a dedicated project schedule, clear communication from start
            to finish, and a crew that shows up and delivers.
          </p>
          <p className="text-base leading-[1.8] text-muted-foreground mt-4">
            Non-union means we move faster, price fairly, and answer directly to you — not a
            union hall. Family-owned means our reputation is on the line every single job.
            That&apos;s not a tagline. That&apos;s how we operate.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "Licensed, Bonded & Insured",
              "Non-Union",
              "Family Owned & Operated",
              "Free On-Site Estimates",
              "Dedicated Project Schedule",
              "$5,000 Project Minimum",
            ].map((badge) => (
              <span
                key={badge}
                className="text-xs tracking-[0.15em] uppercase border border-border px-3 py-2 text-muted-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
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
