import fs from "fs";
import path from "path";

// Pages listed in content/SEO-BLOG/prune-plan.json (zero Search Console
// impressions after 90+ days) are kept live and linked but marked noindex and
// left out of the sitemap, so crawl budget and quality signals go to the pages
// that actually earn impressions. Remove a path from the list to restore it.
let cache: Set<string> | null = null;

function noindexSet(): Set<string> {
  if (cache) return cache;
  const file = path.join(process.cwd(), "content/SEO-BLOG/prune-plan.json");
  try {
    const plan = JSON.parse(fs.readFileSync(file, "utf8")) as { noindex?: string[] };
    cache = new Set(plan.noindex ?? []);
  } catch {
    cache = new Set();
  }
  return cache;
}

export function isNoindexed(urlPath: string): boolean {
  return noindexSet().has(urlPath);
}
