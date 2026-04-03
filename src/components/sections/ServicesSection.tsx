const services = [
  {
    icon: "🧱",
    title: "Commercial Tuckpointing & Repointing",
    body: "Deteriorating mortar joints are the leading cause of water intrusion and structural damage in commercial buildings. We grind out failed mortar and repoint with matched material — restoring the envelope, protecting the structure, and meeting the documentation standards insurance companies and property managers require.",
  },
  {
    icon: "📋",
    title: "Insurance Restoration",
    body: "We work directly with insurance companies and adjusters on masonry restoration claims. Our team provides thorough scope-of-work documentation, accurate damage assessments, and clean execution from approval to completion. We understand the process and make it easy on your end.",
  },
  {
    icon: "🏛️",
    title: "Masonry Façade Restoration",
    body: "Aging brick façades on commercial buildings, churches, and multi-unit properties require more than a patch job. We assess the full envelope, identify root causes, and restore the façade to structural and aesthetic integrity — with a dedicated schedule and clear milestones built for your property.",
  },
  {
    icon: "🔧",
    title: "Brick Repair & Replacement",
    body: "Spalled, cracked, or failing brick on a commercial property is a liability. We remove damaged units, source matching brick where possible, and tooth-in replacements so the repair holds structurally and the building looks right. No shortcuts.",
  },
  {
    icon: "💧",
    title: "Efflorescence Removal & Waterproofing",
    body: "White staining on brick is a symptom of water moving through the masonry. We remove the efflorescence, address the source, and apply professional-grade waterproofing sealers — stopping the cycle before it leads to deeper structural damage.",
  },
  {
    icon: "🏗️",
    title: "Chimney Repair & Lintel Restoration",
    body: "Church steeples, commercial chimneys, and aging lintels require experienced hands and proper staging. We handle crown repairs, full chimney rebuilds, and lintel replacement for commercial and institutional properties across Chicagoland.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 py-20 md:px-12 lg:px-20 bg-gray-50">
      {/* Section header */}
      <div className="text-center mb-14">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[var(--color-emerald)] font-semibold mb-3">
          What We Do
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
          Our Services
        </h2>
        <p className="text-base text-gray-500 max-w-2xl mx-auto">
          Commercial masonry done right — built for property managers, HOAs, churches, and insurance companies.
        </p>
        <div className="mt-4 mx-auto w-16 h-1 bg-[var(--color-emerald)]" />
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 group"
          >
            {/* Emerald top border (like All State gold top borders) */}
            <div className="h-[4px] w-full bg-[var(--color-emerald)]" />
            <div className="p-8">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-[16px] font-bold text-[var(--color-charcoal)] mb-3 group-hover:text-[var(--color-emerald)] transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-[14px] leading-[1.75] text-gray-500">{service.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-emerald)] text-white text-[13px] font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity duration-200 shadow-sm"
        >
          Request a Free On-Site Estimate
        </a>
      </div>
    </section>
  );
}
