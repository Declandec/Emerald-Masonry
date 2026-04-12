import { redirect } from "next/navigation";
import { getAllSeoSlugs } from "@/lib/seo-pages";

// 301 redirects handled in next.config.ts — this component catches any
// server-side hits that bypass the redirect header.
export async function generateStaticParams() {
  return getAllSeoSlugs().map((slug) => ({ slug }));
}

export default async function SeoLandingPageRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/locations/${slug}`);
}
