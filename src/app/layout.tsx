import type { Metadata } from "next";
import { Inter, Uncial_Antiqua } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const uncialAntiqua = Uncial_Antiqua({
  variable: "--font-uncial",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Emerald Masonry LLC | Commercial Masonry Contractor — Chicagoland",
  description:
    "Non-union, family-owned commercial masonry contractor serving Chicagoland. 40+ years experience. Tuckpointing, brick restoration, insurance claims, HOAs, churches, and property managers. Licensed, bonded & insured. Call (309) 323-9959.",
  keywords: [
    "commercial masonry contractor Chicago",
    "tuckpointing Chicago IL",
    "insurance restoration masonry Chicago",
    "brick restoration Chicagoland",
    "masonry contractor Cook County",
    "church masonry repair Chicago",
    "HOA masonry contractor Illinois",
    "property management masonry Chicago",
    "commercial tuckpointing Chicagoland",
    "non-union masonry contractor Chicago",
    "family owned masonry Chicago",
    "brick repair Chicago suburbs",
    "masonry restoration DuPage County",
    "commercial brick contractor Lake County IL",
    "industrial masonry restoration Chicago",
  ],
  openGraph: {
    title: "Emerald Masonry LLC | Commercial Masonry — Chicagoland",
    description:
      "40+ years of Chicagoland masonry experience. Non-union, family-owned. Serving property managers, churches, HOAs, and insurance companies across the greater Chicago area.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${uncialAntiqua.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        {/* Fixed brick wall background across entire page */}
        <div
          className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-brick-wall.png')" }}
        />
        <div className="fixed inset-0 -z-10 bg-black/80" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://emeraldmasonryil.com",
              name: "Emerald Masonry LLC",
              description:
                "Non-union, family-owned commercial masonry contractor with 40+ years of Chicagoland experience. Specializing in tuckpointing, brick restoration, insurance claim restoration, façade repair, chimney repair, efflorescence removal, waterproofing, and large-scale masonry projects for property managers, HOAs, churches, and insurance companies.",
              url: "https://emeraldmasonryil.com",
              telephone: "+13093239959",
              email: "emeraldmasonryil@gmail.com",
              logo: "https://emeraldmasonryil.com/logo.png",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7156 W. 126th St. Suite 136",
                addressLocality: "Palos Heights",
                addressRegion: "IL",
                postalCode: "60464",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.6631,
                longitude: -87.7957,
              },
              areaServed: [
                { "@type": "AdministrativeArea", name: "Cook County, Illinois" },
                { "@type": "AdministrativeArea", name: "DuPage County, Illinois" },
                { "@type": "AdministrativeArea", name: "Lake County, Illinois" },
                { "@type": "AdministrativeArea", name: "Will County, Illinois" },
                { "@type": "AdministrativeArea", name: "Kane County, Illinois" },
                { "@type": "AdministrativeArea", name: "McHenry County, Illinois" },
                { "@type": "AdministrativeArea", name: "Chicagoland, Illinois" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Commercial Masonry Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Tuckpointing & Repointing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Insurance Restoration" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Masonry Façade Restoration" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chimney Repair & Rebuilds" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Efflorescence Removal & Waterproofing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Brick Repair & Replacement" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lintel Repair" } },
                ],
              },
              sameAs: [
                "https://www.facebook.com/people/Emerald-Masonry-LLC/61577959298549/",
                "https://www.instagram.com/emeraldmasonryil/",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
