"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Tuckpointing & Repointing", href: "/services/tuckpointing" },
  { label: "Brick Repair & Replacement", href: "/services/brick-repair" },
  { label: "Chimney Repair & Rebuilds", href: "/services/chimney-repair" },
  { label: "Masonry Restoration", href: "/services/masonry-restoration" },
  { label: "Efflorescence & Waterproofing", href: "/services/waterproofing" },
  { label: "Commercial & Industrial", href: "/services/commercial" },
];

const anchorLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const pageLinks = [
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
];

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isAnchor = href.startsWith("#");
  const cls =
    "relative text-[11px] tracking-[0.25em] uppercase text-white/60 hover:text-white transition-colors duration-300 group";
  const underline = (
    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-emerald)] transition-all duration-300 group-hover:w-full" />
  );
  return isAnchor ? (
    <a href={href} className={cls}>
      {children}
      {underline}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
      {underline}
    </Link>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openServices() {
    clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  }

  function closeServices() {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 120);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "py-4 bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Emerald Masonry LLC"
            width={60}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-9">
          {anchorLinks.map(({ label, href }) => (
            <NavLink key={label} href={href}>
              {label}
            </NavLink>
          ))}

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <button className="relative text-[11px] tracking-[0.25em] uppercase text-white/60 hover:text-white transition-colors duration-300 group flex items-center gap-1.5 cursor-default">
              Services
              <svg
                className={`w-2.5 h-2.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  d="M1 1l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-emerald)] transition-all duration-300 group-hover:w-full" />
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-5 w-64 bg-black/95 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-200 origin-top ${
                servicesOpen
                  ? "opacity-100 scale-y-100 pointer-events-auto"
                  : "opacity-0 scale-y-95 pointer-events-none"
              }`}
            >
              {/* top accent line */}
              <div className="h-px w-full bg-[var(--color-emerald)]" />
              {services.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-5 py-3 text-[10px] tracking-[0.2em] uppercase text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200 border-b border-white/5 last:border-0"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {pageLinks.map(({ label, href }) => (
            <NavLink key={label} href={href}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:3093239959"
          className="hidden md:inline-flex text-[11px] tracking-[0.25em] uppercase font-semibold px-5 py-2.5 border border-[var(--color-emerald)] text-[var(--color-emerald)] hover:bg-[var(--color-emerald)] hover:text-black transition-all duration-300"
        >
          (309) 323-9959
        </a>
      </div>
    </header>
  );
}
