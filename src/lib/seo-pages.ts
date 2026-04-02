import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const SEO_DIR = path.join(process.cwd(), "content/SEO-BLOG/seo-pages");

export type SeoPage = {
  slug: string;
  title: string;
  date: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  city: string;
  service: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  content: string;
};

export function getAllSeoPages(): SeoPage[] {
  if (!fs.existsSync(SEO_DIR)) return [];

  const files = fs.readdirSync(SEO_DIR).filter((f) => f.endsWith(".md"));

  return files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(SEO_DIR, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      date: data.date || "",
      primaryKeyword: data.primaryKeyword || "",
      secondaryKeywords: data.secondaryKeywords || [],
      city: data.city || "",
      service: data.service || "",
      metaTitle: data.metaTitle || data.title || "",
      metaDescription: data.metaDescription || "",
      excerpt: data.excerpt || "",
      image: data.image || "",
      imageAlt: data.imageAlt || data.title || "",
      content,
    };
  });
}

export function getSeoPage(slug: string): SeoPage | null {
  const fullPath = path.join(SEO_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    primaryKeyword: data.primaryKeyword || "",
    secondaryKeywords: data.secondaryKeywords || [],
    city: data.city || "",
    service: data.service || "",
    metaTitle: data.metaTitle || data.title || "",
    metaDescription: data.metaDescription || "",
    excerpt: data.excerpt || "",
    image: data.image || "",
    imageAlt: data.imageAlt || data.title || "",
    content,
  };
}

export async function getSeoPageHtml(content: string): Promise<string> {
  const result = await remark().use(html).process(content);
  return result.toString();
}

export function getAllSeoSlugs(): string[] {
  if (!fs.existsSync(SEO_DIR)) return [];
  return fs
    .readdirSync(SEO_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
