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
  { label: "FAQ", href: "/faq" },
];

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  const isAnchor = href.startsWith("#");
  const cls =
    "relative text-[11px] tracking-[0.25em] uppercase text-white/60 hover:text-white transition-colors duration-300 group";
  const underline = (
    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-emerald)] transition-all duration-300 group-hover:w-full" />
  );
  return isAnchor ? (
    <a href={href} className={cls} onClick={onClick}>
      {children}
      {underline}
    </a>
  ) : (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
      {underline}
    </Link>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function openServices() {
    clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  }

  function closeServices() {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 120);
  }

  function closeMobile() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 transition-all duration-500 ${
          scrolled || mobileOpen
            ? "py-3 bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "py-4 bg-gradient-to-b from-black/60 to-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMobile}>
            <Image
              src="/logo.png"
              alt="Emerald Masonry LLC"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {anchorLinks.map(({ label, href }) => (
              <NavLink key={label} href={href}>{label}</NavLink>
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
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-emerald)] transition-all duration-300 group-hover:w-full" />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-5 w-64 bg-black/95 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-200 origin-top ${
                  servicesOpen
                    ? "opacity-100 scale-y-100 pointer-events-auto"
                    : "opacity-0 scale-y-95 pointer-events-none"
                }`}
              >
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
              <NavLink key={label} href={href}>{label}</NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:3093239959"
            className="hidden md:inline-flex text-[11px] tracking-[0.25em] uppercase font-semibold px-5 py-2.5 border border-[var(--color-emerald)] text-[var(--color-emerald)] hover:bg-[var(--color-emerald)] hover:text-black transition-all duration-300"
          >
            (309) 323-9959
          </a>

          {/* Mobile: call + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:3093239959"
              className="text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-2 border border-[var(--color-emerald)] text-[var(--color-emerald)]"
            >
              Call Now
            </a>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-px bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`block w-6 h-px bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-px bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={closeMobile}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-black/98 border-l border-white/10 flex flex-col transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Spacer for header height */}
          <div className="h-20" />

          <nav className="flex flex-col px-6 py-6 flex-1 overflow-y-auto">
            {/* Anchor links */}
            {anchorLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={closeMobile}
                className="py-4 text-sm tracking-[0.2em] uppercase text-white/70 hover:text-white border-b border-white/5 transition-colors duration-200"
              >
                {label}
              </a>
            ))}

            {/* Services accordion */}
            <div className="border-b border-white/5">
              <button
                onClick={() => setMobileServicesOpen((o) => !o)}
                className="w-full flex items-center justify-between py-4 text-sm tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors duration-200"
              >
                Services
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-96" : "max-h-0"}`}>
                {services.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMobile}
                    className="block pl-4 py-3 text-xs tracking-[0.15em] uppercase text-white/45 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                ))}
                <div className="pb-2" />
              </div>
            </div>

            {/* Page links */}
            {pageLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={closeMobile}
                className="py-4 text-sm tracking-[0.2em] uppercase text-white/70 hover:text-white border-b border-white/5 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="mt-auto pt-8">
              <a
                href="tel:3093239959"
                onClick={closeMobile}
                className="block w-full py-4 text-center text-xs tracking-[0.3em] uppercase font-semibold bg-[var(--color-emerald)] text-black hover:opacity-90 transition-opacity duration-300"
              >
                (309) 323-9959
              </a>
              <a
                href="#contact"
                onClick={closeMobile}
                className="block w-full py-4 text-center text-xs tracking-[0.3em] uppercase font-medium border border-white/20 text-white/60 hover:text-white hover:border-white/40 mt-3 transition-colors duration-300"
              >
                Request Free Estimate
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
