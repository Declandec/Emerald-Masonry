const stats = [
  { value: "40+", label: "Years of Experience" },
  { value: "100%", label: "Family Owned & Operated" },
  { value: "LBI", label: "Licensed, Bonded & Insured" },
];

const badges = [
  "Licensed, Bonded & Insured",
  "Non-Union",
  "Family Owned & Operated",
  "Free On-Site Estimates",
  "Dedicated Project Schedule",
  "$5,000 Project Minimum",
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-20 md:px-12 lg:px-20 bg-white">
      {/* Section header */}
      <div className="text-center mb-14">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[var(--color-emerald)] font-semibold mb-3">
          Who We Are
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
          Built by Family. Backed by Four Decades.
        </h2>
        <div className="mt-4 mx-auto w-16 h-1 bg-[var(--color-emerald)]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
        {/* Stats column */}
        <div className="lg:col-span-3 grid grid-cols-3 lg:grid-cols-1 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[var(--color-charcoal)] text-white p-6 text-center"
            >
              <p className="text-3xl lg:text-4xl font-bold text-[var(--color-emerald)] mb-2">
                {stat.value}
              </p>
              <p className="text-[11px] tracking-widest uppercase text-white/70 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="lg:col-span-9">
          <p className="text-base leading-[1.85] text-gray-600 mb-4">
            Emerald Masonry LLC is a non-union, family-owned commercial masonry contractor
            serving the greater Chicago area. With over 40 years of hands-on experience in
            Chicagoland masonry, we bring the expertise, work ethic, and integrity that
            large-scale restoration projects demand.
          </p>
          <p className="text-base leading-[1.85] text-gray-600 mb-4">
            We work exclusively with property managers, HOAs, churches, and insurance
            companies on projects with the scope and complexity that our team is built for.
            Every client gets a dedicated project schedule, clear communication from start
            to finish, and a crew that shows up and delivers.
          </p>
          <p className="text-base leading-[1.85] text-gray-600 mb-8">
            Non-union means we move faster, price fairly, and answer directly to you — not a
            union hall. Family-owned means our reputation is on the line every single job.
            That&apos;s not a tagline. That&apos;s how we operate.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="text-[12px] tracking-wide uppercase font-semibold border-2 border-[var(--color-emerald)] text-[var(--color-emerald)] px-4 py-2"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-charcoal)] text-white text-[13px] font-semibold uppercase tracking-wide hover:bg-[var(--color-emerald)] transition-colors duration-200"
            >
              Talk To Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
