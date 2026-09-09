import type { Metadata } from "next";
import { Poppins, Uncial_Antiqua } from "next/font/google";
import "./globals.css";
import { localBusinessNode } from "@/lib/schema";

const poppins = Poppins({
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
  title: "Emerald Masonry LLC | Commercial Masonry Chicagoland",
  description:
    "Commercial masonry contractor serving Chicagoland. Tuckpointing, façade and parapet restoration, lintel replacement, and structural brick repair for property managers, HOAs, churches, schools, general contractors, and insurance carriers. Family-owned, established 2024, led by career masons. Licensed, bonded & insured. Call (708) 288-1696.",
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
    "parapet wall repair Chicago",
    "lintel replacement commercial building Chicago",
    "facade inspection and repair Chicago",
    "Chicago facade ordinance masonry repair",
    "condo association tuckpointing Chicago",
    "apartment building brick repair Chicago",
    "school masonry repair Chicago",
    "CMU block repair Chicago",
    "commercial masonry waterproofing Chicago",
    "masonry contractor for property managers Chicago",
    "brick repair Chicago suburbs",
    "masonry restoration DuPage County",
    "industrial masonry restoration Chicago",
  ],
  alternates: {
    canonical: "https://emeraldmasonryil.com",
  },
  openGraph: {
    title: "Emerald Masonry LLC | Commercial Masonry Chicagoland",
    description:
      "Commercial masonry restoration across Chicagoland — tuckpointing, façade and parapet repair, lintel replacement, and structural brick work for property managers, HOAs, churches, schools, and insurance carriers.",
    type: "website",
    locale: "en_US",
    url: "https://emeraldmasonryil.com",
    images: [
      {
        url: "https://emeraldmasonryil.com/images/work/commercial-warehouse-tuckpointing.webp",
        width: 1200,
        height: 630,
        alt: "Emerald Masonry LLC — Commercial Masonry Contractor Chicagoland",
      },
    ],
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
      className={`${poppins.variable} ${uncialAntiqua.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        {/* JSON-LD Structured Data — canonical LocalBusiness entity (see src/lib/schema.ts) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              ...localBusinessNode(),
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
