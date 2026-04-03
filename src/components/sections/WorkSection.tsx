import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";

export default function WorkSection() {
  return (
    <section id="work" className="px-6 py-20 md:px-12 lg:px-20 bg-white">
      {/* Section header */}
      <div className="text-center mb-14">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[var(--color-emerald)] font-semibold mb-3">
          Our Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
          Selected Projects
        </h2>
        <p className="text-base text-gray-500 max-w-xl mx-auto">
          Real commercial masonry work across Chicagoland — tuckpointing, restoration, repairs, and more.
        </p>
        <div className="mt-4 mx-auto w-16 h-1 bg-[var(--color-emerald)]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => {
          const card = (
            <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="h-[4px] w-full bg-[var(--color-emerald)]" />
              <div className="px-6 py-5 flex items-start justify-between">
                <div>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-emerald)] font-semibold mb-1">
                    {project.tag}
                  </p>
                  <h3 className="text-[15px] font-bold text-[var(--color-charcoal)] group-hover:text-[var(--color-emerald)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-gray-400 mt-1">{project.location}</p>
                </div>
                <span className="text-[11px] tracking-wide text-gray-300 font-light">
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

      <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] text-[13px] font-semibold uppercase tracking-wide hover:bg-[var(--color-charcoal)] hover:text-white transition-colors duration-200"
        >
          Read the Blog
        </Link>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-emerald)] text-white text-[13px] font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity duration-200"
        >
          Request a Free Estimate
        </a>
      </div>
    </section>
  );
}
