import Link from "next/link";
import type { Metadata } from "next";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { getAllSeoPages } from "@/lib/seo-pages";
import {
  BASE_URL,
  BUSINESS,
  SERVICE_AREA_COUNTIES,
  localBusinessNode,
  webSiteNode,
  webPageNode,
  breadcrumbNode,
  graph,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Service Areas — Commercial Masonry Across Chicagoland | Emerald Masonry LLC",
  description:
    "Tuckpointing, brick restoration, chimney repair, and commercial masonry across Chicago and the Chicagoland suburbs. Find your town and the masonry services we offer there.",
  alternates: { canonical: `${BASE_URL}/locations` },
};

type CityGroup = { city: string; pages: { slug: string; service: string }[] };

function groupByCity(): CityGroup[] {
  const pages = getAllSeoPages().filter((p) => p.pageType === "location" && p.city);
  const map = new Map<string, { slug: string; service: string }[]>();
  for (const p of pages) {
    const arr = map.get(p.city) || [];
    arr.push({ slug: p.slug, service: p.service || "Masonry" });
    map.set(p.city, arr);
  }
  return [...map.entries()]
    .map(([city, ps]) => ({ city, pages: ps.sort((a, b) => a.service.localeCompare(b.service)) }))
    .sort((a, b) => a.city.localeCompare(b.city));
}

export default function ServiceAreasPage() {
  const groups = groupByCity();
  const totalPages = groups.reduce((n, g) => n + g.pages.length, 0);

  return (
    <>
      <Navigation />
      <main className="px-6 pt-28 md:pt-40 pb-24 md:px-12 lg:px-20">
        <div className="max-w-4xl mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-emerald)] mb-4">
            Service Areas
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Commercial Masonry Across Chicago &amp; the Chicagoland Suburbs
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Emerald Masonry LLC brings 40+ years of Chicagoland experience to tuckpointing, brick
            restoration, chimney repair, and large-scale commercial masonry. Find your town below —
            free on-site estimates for commercial and large-scale projects. Serving{" "}
            {SERVICE_AREA_COUNTIES.map((c) => c.replace(", Illinois", "")).join(", ")}.
          </p>
        </div>

        {groups.length === 0 ? (
          <p className="max-w-3xl text-muted-foreground">
            Service area pages are being added. Call (708) 288-1696 — we serve all of Chicagoland.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((g) => (
              <div key={g.city} className="border border-border p-6">
                <h2 className="text-lg font-semibold tracking-tight text-foreground mb-3">{g.city}</h2>
                <ul className="flex flex-col gap-1.5">
                  {g.pages.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/locations/${p.slug}`} className="text-sm text-[var(--color-emerald)] hover:underline">
                        {p.service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <div className="max-w-3xl mt-16 pt-10 border-t border-border flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
          <p className="text-sm text-foreground font-medium">
            Don&apos;t see your town? We serve all of Chicagoland.
          </p>
          <a
            href="/#contact"
            className="px-6 py-3 bg-[var(--color-emerald)] text-black text-xs font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-300 shrink-0"
          >
            Request Free Estimate
          </a>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: graph(
              localBusinessNode(),
              webSiteNode(),
              webPageNode({
                url: `${BASE_URL}/locations`,
                name: metadata.title as string,
                description: BUSINESS.name + " service areas across Chicagoland.",
                breadcrumbUrl: `${BASE_URL}/locations`,
              }),
              {
                "@type": "CollectionPage",
                "@id": `${BASE_URL}/locations#collection`,
                url: `${BASE_URL}/locations`,
                name: "Service Areas",
                about: { "@id": `${BASE_URL}/#business` },
                mainEntity: {
                  "@type": "ItemList",
                  numberOfItems: totalPages,
                  itemListElement: groups
                    .flatMap((g) => g.pages)
                    .map((p, i) => ({
                      "@type": "ListItem",
                      position: i + 1,
                      url: `${BASE_URL}/locations/${p.slug}`,
                    })),
                },
              },
              breadcrumbNode(
                [
                  { name: "Home", url: BASE_URL },
                  { name: "Service Areas", url: `${BASE_URL}/locations` },
                ],
                `${BASE_URL}/locations`,
              ),
            ),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
