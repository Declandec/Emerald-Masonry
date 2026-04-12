import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import projects from "@/data/projects";

const BASE_URL = "https://emeraldmasonryil.com";

export const metadata = {
  title: "Gallery | Emerald Masonry LLC",
  description:
    "Browse completed masonry projects from Emerald Masonry LLC — tuckpointing, brick repair, chimney rebuilds, commercial restoration, and more across Chicagoland.",
  alternates: {
    canonical: `${BASE_URL}/gallery`,
  },
  openGraph: {
    title: "Project Gallery | Emerald Masonry LLC",
    description:
      "Completed commercial masonry projects across Chicagoland — tuckpointing, brick repair, chimney rebuilds, and façade restoration.",
    url: `${BASE_URL}/gallery`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/work-tuckpointing.jpg`,
        width: 1200,
        height: 630,
        alt: "Emerald Masonry LLC — Commercial Masonry Projects",
      },
    ],
  },
};

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main className="px-6 pt-28 md:pt-40 pb-24 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-12 border-b border-border pb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Our Work
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Project Gallery
          </h1>
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed mb-4">
            A selection of completed commercial and residential masonry projects across Chicagoland. Every job shown was performed by Emerald Masonry LLC — tuckpointing, brick restoration, chimney repair, façade work, and waterproofing for property managers, HOAs, churches, and commercial building owners.
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Chicago&apos;s freeze-thaw climate demands masonry work done right the first time. We grind out deteriorated mortar fully, match mortar color and composition to the original, and document every project with before-and-after photos. These are the results.
          </p>
        </div>

        {/* Service categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          {["All Projects", "Tuckpointing", "Brick Repair", "Chimney", "Commercial", "Restoration"].map((label) => (
            <span
              key={label}
              className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground border border-border px-4 py-2"
            >
              {label}
            </span>
          ))}
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

        {/* About our work */}
        <div className="mt-20 border-t border-border pt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              How We Work
            </p>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground mb-4">
              Every project documented start to finish
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We provide before-and-after photo documentation on every project. For property managers, HOA boards, and insurance carriers, this documentation supports capital planning reports, board presentations, and claims files.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Emerald Masonry LLC serves commercial properties, multi-unit residential buildings, churches, schools, and institutional facilities across Cook, DuPage, Will, Lake, Kane, and McHenry counties.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Services Shown
            </p>
            <ul className="space-y-3">
              {[
                "Tuckpointing & mortar joint restoration",
                "Brick repair and replacement",
                "Chimney repair, crowns, and rebuilds",
                "Parapet wall and façade restoration",
                "Efflorescence removal and waterproofing",
                "Commercial and institutional masonry",
                "Insurance restoration documentation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-emerald)] flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 border-t border-border pt-12 text-center">
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
