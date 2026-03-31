"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

const PAGE_SIZE = 12;

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    if (!query.trim()) return posts;
    const q = query.toLowerCase();
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.service.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q)
    );
  }, [posts, query]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <>
      {/* Search */}
      <div className="mb-12">
        <input
          type="text"
          placeholder="Search by service, location, or keyword..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setVisible(PAGE_SIZE);
          }}
          className="w-full md:w-96 bg-transparent border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[var(--color-emerald)] transition-colors duration-300"
        />
      </div>

      {/* Results count */}
      {query && (
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50 mb-8">
          {filtered.length} {filtered.length === 1 ? "post" : "posts"} found
        </p>
      )}

      {/* Grid */}
      {shown.length === 0 ? (
        <p className="text-sm text-muted-foreground">No posts match your search.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {shown.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-background group block"
            >
              {post.image && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
              <div className="px-6 py-6 border-t border-border">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  {post.service} · {post.location}
                </p>
                <h2 className="text-base font-semibold text-foreground mb-2 group-hover:text-[var(--color-emerald)] transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <p className="text-xs text-muted-foreground/40 mt-4">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Load more */}
      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground border border-border px-8 py-4 hover:text-foreground hover:border-foreground transition-colors duration-300"
          >
            Load More ({filtered.length - visible} remaining)
          </button>
        </div>
      )}
    </>
  );
}
