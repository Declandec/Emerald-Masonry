#!/usr/bin/env node
/**
 * Ping IndexNow (Bing, Yandex, Seznam, Naver) with newly published URLs.
 *
 * IndexNow needs the key echoed back from a file on the site itself — that is
 * how it proves we own the host — so KEY must match public/<KEY>.txt, and that
 * file must already be deployed before submitting or Bing rejects the batch.
 *
 * Usage:
 *   node scripts/indexnow.mjs /locations/foo /blog/bar     # explicit paths
 *   node scripts/indexnow.mjs --since 2026-07-12           # everything published on/after a date
 *
 * Google is deliberately not covered here: its Indexing API only accepts
 * JobPosting/BroadcastEvent pages, so requesting indexing for these URLs stays
 * a manual step in Search Console.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const HOST = "emeraldmasonryil.com";
const KEY = "d57bddff3750c113b14fd5c937b858f9";
const ORIGIN = `https://${HOST}`;

const args = process.argv.slice(2);

function publishedSince(dateStr) {
  const cutoff = new Date(dateStr);
  const urls = [];
  for (const [dir, prefix] of [
    ["content/SEO-BLOG/seo-pages", "/locations"],
    ["content/SEO-BLOG/blog", "/blog"],
  ]) {
    for (const file of readdirSync(dir)) {
      if (!file.endsWith(".md")) continue;
      const text = readFileSync(join(dir, file), "utf8");
      const m = text.match(/^date:\s*"?([\d-]+)"?/m);
      if (m && new Date(m[1]) >= cutoff) {
        urls.push(`${ORIGIN}${prefix}/${file.replace(/\.md$/, "")}`);
      }
    }
  }
  return urls;
}

let urlList;
if (args[0] === "--since") {
  urlList = publishedSince(args[1]);
} else if (args.length) {
  urlList = args.map((p) => (p.startsWith("http") ? p : `${ORIGIN}${p}`));
} else {
  console.error("usage: indexnow.mjs <path…> | --since YYYY-MM-DD");
  process.exit(1);
}

if (!urlList.length) {
  console.error("No URLs to submit.");
  process.exit(1);
}

// Verify the key file is actually live first — submitting before the deploy
// lands is the most common way this silently fails.
const keyUrl = `${ORIGIN}/${KEY}.txt`;
const keyRes = await fetch(keyUrl);
const keyBody = keyRes.ok ? (await keyRes.text()).trim() : "";
if (keyBody !== KEY) {
  console.error(`Key file not live yet at ${keyUrl} (got ${keyRes.status}). Deploy first.`);
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: keyUrl, urlList }),
});

// IndexNow returns 200 or 202 on success, and both mean accepted.
console.log(`IndexNow: HTTP ${res.status} ${res.statusText}`);
for (const u of urlList) console.log(`  ${u}`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
console.log(`Submitted ${urlList.length} URL(s).`);
