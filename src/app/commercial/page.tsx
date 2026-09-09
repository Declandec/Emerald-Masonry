import type { Metadata } from "next";
import AudienceHub from "@/components/AudienceHub";
import { getAudience } from "@/data/audiences";
import { BASE_URL } from "@/lib/schema";

const audience = getAudience("commercial")!;

export const metadata: Metadata = {
  title: audience.title,
  description: audience.metaDescription,
  keywords: audience.keywords,
  alternates: { canonical: `${BASE_URL}/commercial` },
  openGraph: {
    title: audience.title,
    description: audience.metaDescription,
    type: "website",
    locale: "en_US",
    url: `${BASE_URL}/commercial`,
    images: [{ url: `${BASE_URL}${audience.image}`, alt: audience.imageAlt }],
  },
};

export default function Page() {
  return <AudienceHub audience={audience} />;
}
