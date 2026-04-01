import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import projects from "@/data/projects";

export const metadata = {
  title: "Gallery | Emerald Masonry LLC — Commercial Masonry Chicagoland",
  description:
    "Browse completed masonry projects from Emerald Masonry LLC — tuckpointing, brick repair, chimney rebuilds, commercial restoration, and more across Chicagoland.",
};

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main className="px-6 pt-28 md:pt-40 pb-24 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-16 border-b border-border pb-6">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Our Work
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            Project Gallery
          </h1>
          <p className="text-sm text-muted-foreground mt-4 max-w-xl leading-relaxed">
            A selection of completed commercial and residential masonry projects across Chicagoland.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {projects.map((project) => {
            const card = (
              <div className="bg-background group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="px-5 py-5 border-t border-border">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">
                    {project.tag}
                  </p>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-[var(--color-emerald)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground/60 mt-1">{project.location}</p>
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

        {/* CTA */}
        <div className="mt-20 border-t border-border pt-16 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Ready to get started?
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-emerald)] text-black text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
          >
            Request a Free Estimate
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
