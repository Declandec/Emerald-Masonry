import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";

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
        {projects.map((project) => {
          const card = (
            <div className="bg-background group">
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
                  <h3 className="text-base font-semibold text-foreground group-hover:text-[var(--color-emerald)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground/60 mt-1">{project.location}</p>
                </div>
                <span className="text-xs tracking-[0.2em] text-muted-foreground/40 font-light">
                  {project.num}
                </span>
              </div>
            </div>
          );

          return project.slug ? (
            <Link key={project.num} href={`/blog/${project.slug}`}>
              {card}
            </Link>
          ) : (
            <div key={project.num}>{card}</div>
          );
        })}
      </div>

      <div className="mt-12 flex justify-center gap-8">
        <Link
          href="/blog"
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground border-b border-muted-foreground pb-1 hover:text-foreground hover:border-foreground transition-colors duration-300"
        >
          Read the Blog
        </Link>
        <a
          href="#contact"
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground border-b border-muted-foreground pb-1 hover:text-foreground hover:border-foreground transition-colors duration-300"
        >
          Request a Free Estimate
        </a>
      </div>
    </section>
  );
}
