import Image from "next/image";

const projects = [
  {
    num: "01",
    title: "Chimney Repair",
    tag: "Chimney Repair",
    location: "Peoria, IL",
    image: "/images/work-chimney-new.jpg",
  },
  {
    num: "02",
    title: "Brick Wall Repair",
    tag: "Brick Repair",
    location: "Tazewell County, IL",
    image: "/images/work-brick-repair.jpg",
  },
  {
    num: "03",
    title: "Walkway Restoration & Front Entrance Repair",
    tag: "Masonry Restoration",
    location: "Central Illinois",
    image: "/images/hero-walkway.jpg",
  },
  {
    num: "04",
    title: "Lintel Repair",
    tag: "Tuckpointing",
    location: "Peoria County, IL",
    image: "/images/work-tuckpointing.jpg",
  },
  {
    num: "05",
    title: "Efflorescence Removal & Waterproofing",
    tag: "Waterproofing",
    location: "Central Illinois",
    image: "/images/work-efflorescence.jpg",
  },
  {
    num: "06",
    title: "Commercial & Industrial Restoration",
    tag: "Commercial",
    location: "Central Illinois",
    image: "/images/work-commercial.jpg",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="px-6 py-24 md:px-12 lg:px-20">
      <div className="flex items-end justify-between mb-12 border-b border-border pb-6">
        <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Selected Work
        </h2>
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50">
          {projects.length} Services &amp; Specialties
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {projects.map((project) => (
          <div key={project.num} className="bg-background group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="px-6 py-6 flex items-start justify-between border-t border-border">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">
                  {project.tag}
                </p>
                <h3 className="text-base font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground/60 mt-1">{project.location}</p>
              </div>
              <span className="text-xs tracking-[0.2em] text-muted-foreground/40 font-light">
                {project.num}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
