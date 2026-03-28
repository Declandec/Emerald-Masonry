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
  title: "Emerald Masonry LLC | Masonry Repair in Peoria, IL",
  description:
    "Trusted local masonry contractor serving Peoria and Central Illinois. Tuckpointing, brick repair, chimney repair, and masonry restoration. Call (309) 323-9959.",
  keywords: [
    "masonry contractor Peoria IL",
    "tuckpointing Peoria Illinois",
    "chimney repair Peoria IL",
    "brick repair Peoria",
    "masonry restoration Central Illinois",
    "tuckpointing near me",
    "chimney rebuild Tazewell County",
    "brick contractor Woodford County",
    "efflorescence removal Illinois",
    "lintel repair Peoria",
    "masonry repair Marshall County",
    "local masonry contractor Illinois",
  ],
  openGraph: {
    title: "Emerald Masonry LLC | Peoria, IL",
    description:
      "We don't cut corners — we lay them. Trusted masonry repair and restoration serving Peoria and Central Illinois.",
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
                "Locally owned masonry contractor serving Peoria and Central Illinois. Specializing in tuckpointing, brick repair, chimney repair, masonry restoration, lintel repair, efflorescence removal, and waterproofing.",
              url: "https://emeraldmasonryil.com",
              telephone: "+13093239959",
              email: "emeraldmasonryil@gmail.com",
              logo: "https://emeraldmasonryil.com/logo.png",
              image: "https://emeraldmasonryil.com/images/hero-mailbox.jpg",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Peoria",
                addressRegion: "IL",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.6936,
                longitude: -89.589,
              },
              areaServed: [
                { "@type": "AdministrativeArea", name: "Peoria County, Illinois" },
                { "@type": "AdministrativeArea", name: "Tazewell County, Illinois" },
                { "@type": "AdministrativeArea", name: "Woodford County, Illinois" },
                { "@type": "AdministrativeArea", name: "Marshall County, Illinois" },
                { "@type": "AdministrativeArea", name: "Central Illinois" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Masonry Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tuckpointing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brick Repair & Replacement" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chimney Repair & Rebuilds" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Masonry Restoration" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lintel Repair" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Efflorescence Removal & Waterproofing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Walkway Restoration" } },
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
