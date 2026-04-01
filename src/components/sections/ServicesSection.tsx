const services = [
  {
    num: "01",
    title: "Commercial Tuckpointing & Repointing",
    body: "Deteriorating mortar joints are the leading cause of water intrusion and structural damage in commercial buildings. We grind out failed mortar and repoint with matched material — restoring the envelope, protecting the structure, and meeting the documentation standards insurance companies and property managers require.",
  },
  {
    num: "02",
    title: "Insurance Restoration",
    body: "We work directly with insurance companies and adjusters on masonry restoration claims. Our team provides thorough scope-of-work documentation, accurate damage assessments, and clean execution from approval to completion. We understand the process and make it easy on your end.",
  },
  {
    num: "03",
    title: "Masonry Façade Restoration",
    body: "Aging brick façades on commercial buildings, churches, and multi-unit properties require more than a patch job. We assess the full envelope, identify root causes, and restore the façade to structural and aesthetic integrity — with a dedicated schedule and clear milestones built for your property.",
  },
  {
    num: "04",
    title: "Brick Repair & Replacement",
    body: "Spalled, cracked, or failing brick on a commercial property is a liability. We remove damaged units, source matching brick where possible, and tooth-in replacements so the repair holds structurally and the building looks right. No shortcuts.",
  },
  {
    num: "05",
    title: "Efflorescence Removal & Waterproofing",
    body: "White staining on brick is a symptom of water moving through the masonry. We remove the efflorescence, address the source, and apply professional-grade waterproofing sealers — stopping the cycle before it leads to deeper structural damage.",
  },
  {
    num: "06",
    title: "Chimney Repair & Lintel Restoration",
    body: "Church steeples, commercial chimneys, and aging lintels require experienced hands and proper staging. We handle crown repairs, full chimney rebuilds, and lintel replacement for commercial and institutional properties across Chicagoland.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24 md:px-12 lg:px-20 border-t border-border">
      <div className="flex items-end justify-between mb-16">
        <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Services
        </h2>
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50">
          Commercial &amp; Institutional
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {services.map((service) => (
          <div key={service.num} className="bg-background px-6 py-8 md:px-8 md:py-10">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              <span className="text-xs tracking-[0.2em] text-muted-foreground/40 ml-4 shrink-0">
                {service.num}
              </span>
            </div>
            <p className="text-sm leading-[1.8] text-muted-foreground">{service.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#contact"
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground border-b border-muted-foreground pb-1 hover:text-foreground hover:border-foreground transition-colors duration-300"
        >
          Request a Free On-Site Estimate
        </a>
      </div>
    </section>
  );
}
