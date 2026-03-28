const services = [
  {
    num: "01",
    title: "Tuckpointing",
    body: "Deteriorating mortar joints let water in and weaken your structure. We grind out the old mortar and repoint with fresh material — restoring structural integrity and keeping moisture out for years to come.",
  },
  {
    num: "02",
    title: "Brick Repair & Replacement",
    body: "Cracked, spalled, or missing bricks aren't just an eyesore — they're a liability. We remove damaged brick and tooth-in matching replacements so the repair is solid and the finished look is clean.",
  },
  {
    num: "03",
    title: "Chimney Repair & Rebuilds",
    body: "Chimneys take a beating year-round. From crown repairs and tuckpointing to full chimney rebuilds, we handle it all safely and correctly — no shortcuts.",
  },
  {
    num: "04",
    title: "Masonry Restoration",
    body: "General brick maintenance, structural repairs, and preventative restoration work. If your brickwork is aging, we'll assess what it needs and give you a straightforward recommendation.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24 md:px-12 lg:px-20 border-t border-border">
      <div className="flex items-end justify-between mb-16">
        <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {services.map((service) => (
          <div key={service.num} className="bg-background px-8 py-10">
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
          Get a Free Quote
        </a>
      </div>
    </section>
  );
}
