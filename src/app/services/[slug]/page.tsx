import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import ServiceFaqAccordion from "@/components/sections/ServiceFaqAccordion";
import ServiceContactForm from "@/components/sections/ServiceContactForm";
import services, { getService, getAllServiceSlugs } from "@/data/services";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Emerald Masonry LLC — Chicagoland`,
    description: service.tagline,
    keywords: service.keywords,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[480px] flex flex-col justify-end pb-16 px-6 md:px-12 lg:px-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${service.heroImage}')` }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)",
            }}
          />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Link
                href="/#services"
                className="text-[10px] tracking-[0.3em] uppercase text-white/40 hover:text-white/70 transition-colors"
              >
                Services
              </Link>
              <span className="text-white/20">›</span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-emerald)]">
                {service.subtitle}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
              {service.title}
            </h1>
            <p className="text-sm md:text-base text-white/60 max-w-xl leading-relaxed">
              {service.tagline}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="px-6 py-20 md:px-12 lg:px-20 border-b border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Overview
              </p>
              {service.description.split("\n\n").map((para, i) => (
                <p key={i} className="text-sm leading-[1.9] text-muted-foreground mb-5 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="border border-border p-6 md:p-8">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
                  Scope of Work
                </p>
                <ul className="space-y-3">
                  {service.scope.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 w-1 h-1 rounded-full bg-[var(--color-emerald)] flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-border">
                  <a
                    href="#quote"
                    className="block w-full py-3 bg-[var(--color-emerald)] text-black text-xs font-semibold tracking-[0.25em] uppercase text-center hover:opacity-90 transition-opacity duration-300"
                  >
                    Request Free Estimate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic Signs */}
        <section className="px-6 py-20 md:px-12 lg:px-20 border-b border-border">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Warning Signs
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-12">
            When to Call Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {service.diagnostics.map((d, i) => (
              <div key={i} className="bg-background p-8">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-emerald)] mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-sm font-semibold text-foreground mb-3">{d.title}</h3>
                <p className="text-xs text-muted-foreground leading-[1.8]">{d.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="px-6 py-20 md:px-12 lg:px-20 border-b border-border">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Past Work
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                Project Gallery
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground border-b border-muted-foreground pb-1 hover:text-foreground hover:border-foreground transition-colors duration-300"
            >
              View All Work
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {service.gallery.map((item, i) => (
              <div key={i} className="bg-background group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="px-5 py-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 md:px-12 lg:px-20 border-b border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                FAQ
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                Common Questions
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ServiceFaqAccordion faqs={service.faqs} />
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section id="quote" className="px-6 py-20 md:px-12 lg:px-20 border-b border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Get Started
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-6">
                Request a Free{" "}
                <span className="text-[var(--color-emerald)]">{service.title}</span> Estimate
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Free on-site estimates for commercial and large-scale residential projects across
                Chicagoland. Upload diagnostic photos and we&apos;ll get back to you the same day.
              </p>
              <div className="space-y-5">
                <div className="border-t border-border pt-5">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:3093239959"
                    className="text-sm font-medium text-foreground hover:text-[var(--color-emerald)] transition-colors"
                  >
                    (309) 323-9959
                  </a>
                </div>
                <div className="border-t border-border pt-5">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:emeraldmasonryil@gmail.com"
                    className="text-sm font-medium text-foreground hover:text-[var(--color-emerald)] transition-colors"
                  >
                    emeraldmasonryil@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ServiceContactForm serviceTitle={service.title} serviceSlug={service.slug} />
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="px-6 py-20 md:px-12 lg:px-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
            Other Services
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="bg-background group p-6 md:p-8 block hover:bg-white/[0.02] transition-colors duration-300">
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  Service
                </p>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-[var(--color-emerald)] transition-colors duration-300 mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-muted-foreground/60 leading-relaxed">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
