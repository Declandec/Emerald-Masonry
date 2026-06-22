"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

const PAGE_SIZE = 12;

// PLM-style colored category chip, keyed loosely off the service name so the
// many Emerald service labels all resolve to a sensible tone (emerald default).
function chipClass(service: string): string {
  const s = service.toLowerCase();
  if (s.includes("chimney")) return "bg-gray-100 text-gray-700";
  if (s.includes("brick")) return "bg-red-100 text-red-700";
  if (s.includes("waterproof") || s.includes("sealing") || s.includes("efflorescence") || s.includes("caulk"))
    return "bg-blue-100 text-blue-700";
  if (s.includes("restoration") || s.includes("historic")) return "bg-amber-100 text-amber-700";
  if (s.includes("commercial") || s.includes("parapet") || s.includes("lintel") || s.includes("cmu"))
    return "bg-slate-100 text-slate-700";
  if (s.includes("power") || s.includes("wash")) return "bg-cyan-100 text-cyan-700";
  return "bg-emerald-100 text-emerald-700";
}

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
      <div className="mb-10">
        <input
          type="text"
          placeholder="Search by service, location, or keyword..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setVisible(PAGE_SIZE);
          }}
          className="w-full md:w-96 bg-white border border-gray-300 px-4 py-3 text-sm text-[var(--color-charcoal)] placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-emerald)] transition-colors duration-300"
        />
      </div>

      {/* Results count */}
      {query && (
        <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mb-8">
          {filtered.length} {filtered.length === 1 ? "post" : "posts"} found
        </p>
      )}

      {/* Grid */}
      {shown.length === 0 ? (
        <p className="text-sm text-gray-500">No posts match your search.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shown.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="border border-gray-200 hover:border-[var(--color-emerald)] hover:shadow-md transition-all duration-300 group overflow-hidden flex flex-col"
            >
              {/* Image */}
              {post.image && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[var(--color-emerald)]/0 group-hover:bg-[var(--color-emerald)]/15 transition-colors duration-500" />
                </div>
              )}
              <div className="h-[3px] bg-[var(--color-emerald)]" />
              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${chipClass(post.service)}`}>
                    {post.service}
                  </span>
                  <span className="text-[11px] text-gray-400">{post.date}</span>
                </div>
                <h2 className="text-[16px] font-bold text-[var(--color-charcoal)] mb-3 leading-snug group-hover:text-[var(--color-emerald)] transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-[13px] text-gray-500 leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <span className="text-[12px] font-bold uppercase tracking-wide text-[var(--color-emerald)] group-hover:underline">
                    Read More →
                  </span>
                </div>
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
            className="text-[12px] tracking-[0.2em] uppercase text-[var(--color-charcoal)] border border-gray-300 px-8 py-4 hover:border-[var(--color-emerald)] hover:text-[var(--color-emerald)] transition-colors duration-300"
          >
            Load More ({filtered.length - visible} remaining)
          </button>
        </div>
      )}
    </>
  );
}
