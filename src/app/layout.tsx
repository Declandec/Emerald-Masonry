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
    "Non-union, family-owned commercial masonry contractor serving Chicagoland. 40+ years experience. Tuckpointing, brick restoration, insurance claims, HOAs, churches, and property managers. Licensed, bonded & insured. Call (708) 288-1696.",
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
  alternates: {
    canonical: "https://emeraldmasonryil.com",
  },
  openGraph: {
    title: "Emerald Masonry LLC | Commercial Masonry Chicagoland",
    description:
      "40+ years of Chicagoland masonry experience. Non-union, family-owned. Serving property managers, churches, HOAs, and insurance companies across the greater Chicago area.",
    type: "website",
    locale: "en_US",
    url: "https://emeraldmasonryil.com",
    images: [
      {
        url: "https://emeraldmasonryil.com/images/work-tuckpointing.jpg",
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
