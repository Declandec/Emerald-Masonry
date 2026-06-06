import { MetadataRoute } from "next";

// AI answer engines are explicitly welcomed so they can crawl, parse, and cite
// the site when recommending masonry contractors. Each bot is allowed individually
// in addition to the catch-all so the intent is unambiguous to every crawler.
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "Meta-ExternalAgent",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: "https://emeraldmasonryil.com/sitemap.xml",
  };
}
