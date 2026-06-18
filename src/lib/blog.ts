import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content/SEO-BLOG/blog");

export type BlogFaq = { question: string; answer: string };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  service: string;
  location: string;
  image: string;
  keywords: string[];
  content: string;
  // GEO / answer-engine fields (optional, backward-compatible)
  aiSummary: string;
  intent: string; // "informational" | "commercial" | "transactional"
  faqs: BlogFaq[];
};

function normalizeBlogFaqs(raw: unknown): BlogFaq[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((f) => {
      const obj = (f ?? {}) as Record<string, string>;
      return {
        question: obj.question || obj.q || "",
        answer: obj.answer || obj.a || "",
      };
    })
    .filter((f) => f.question && f.answer);
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(BLOG_DIR, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      date: data.date || "",
      excerpt: data.excerpt || "",
      service: data.service || "",
      location: data.location || "",
      image: data.image || "",
      keywords: data.keywords || [],
      content,
      aiSummary: data.aiSummary || data.excerpt || "",
      intent: data.intent || "informational",
      faqs: normalizeBlogFaqs(data.faqs),
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    excerpt: data.excerpt || "",
    service: data.service || "",
    location: data.location || "",
    image: data.image || "",
    keywords: data.keywords || [],
    content,
    aiSummary: data.aiSummary || data.excerpt || "",
    intent: data.intent || "informational",
    faqs: normalizeBlogFaqs(data.faqs),
  };
}

export async function getPostHtml(content: string): Promise<string> {
  const result = await remark().use(html).process(content);
  return result.toString();
}
