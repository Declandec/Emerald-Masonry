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

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const linkCls =
    "text-[13px] font-semibold uppercase tracking-wide text-[var(--color-charcoal)] hover:text-[var(--color-emerald)] transition-colors duration-200";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        {/* Top bar */}
        <div className="bg-[var(--color-charcoal)] text-white text-[12px] px-6 md:px-12 lg:px-20 py-2 hidden md:flex items-center justify-end gap-6">
          <span>Licensed · Bonded · Insured</span>
          <span>·</span>
          <a href="mailto:emeraldmasonryil@gmail.com" className="hover:text-[var(--color-emerald)] transition-colors">
            emeraldmasonryil@gmail.com
          </a>
          <span>·</span>
          <a href="tel:3093239959" className="hover:text-[var(--color-emerald)] transition-colors font-semibold">
            (309) 323-9959
          </a>
        </div>

        {/* Main nav row */}
        <div className="px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" onClick={closeMobile}>
            <Image
              src="/logo.png"
              alt="Emerald Masonry LLC"
              width={52}
              height={52}
              className="object-contain"
              priority
            />
            <div className="hidden sm:block">
              <p className="text-[15px] font-bold tracking-wide text-[var(--color-charcoal)] leading-tight">
                Emerald Masonry
              </p>
              <p className="text-[11px] text-[var(--color-emerald)] font-semibold tracking-widest uppercase">
                LLC
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <Link key={label} href={href} className={linkCls}>
                {label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
            >
              <button className={`${linkCls} flex items-center gap-1.5 cursor-default`}>
                Services
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-68 bg-white border border-gray-200 shadow-xl transition-all duration-200 origin-top ${
                  servicesOpen
                    ? "opacity-100 scale-y-100 pointer-events-auto"
                    : "opacity-0 scale-y-95 pointer-events-none"
                }`}
              >
                <div className="h-[3px] w-full bg-[var(--color-emerald)]" />
                {services.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-5 py-3 text-[13px] font-medium text-[var(--color-charcoal)] hover:text-[var(--color-emerald)] hover:bg-gray-50 transition-all duration-150 border-b border-gray-100 last:border-0"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <a
            href="/#contact"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-emerald)] text-white text-[13px] font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity duration-200 shadow-sm"
          >
            Free Estimate
          </a>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[var(--color-charcoal)] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-charcoal)] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-charcoal)] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={closeMobile}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-[72px]" />
          <nav className="flex flex-col px-6 py-4 flex-1 overflow-y-auto">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={closeMobile}
                className="py-4 text-[13px] font-semibold uppercase tracking-wide text-[var(--color-charcoal)] hover:text-[var(--color-emerald)] border-b border-gray-100 transition-colors"
              >
                {label}
              </Link>
            ))}

            {/* Services accordion */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setMobileServicesOpen((o) => !o)}
                className="w-full flex items-center justify-between py-4 text-[13px] font-semibold uppercase tracking-wide text-[var(--color-charcoal)] hover:text-[var(--color-emerald)] transition-colors"
              >
                Services
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-96" : "max-h-0"}`}>
                {services.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMobile}
                    className="block pl-4 py-3 text-[13px] font-medium text-gray-500 hover:text-[var(--color-emerald)] transition-colors"
                  >
                    {label}
                  </Link>
                ))}
                <div className="pb-2" />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:3093239959"
                onClick={closeMobile}
                className="block w-full py-3 text-center text-[13px] font-semibold uppercase tracking-wide border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-white transition-colors"
              >
                (309) 323-9959
              </a>
              <a
                href="/#contact"
                onClick={closeMobile}
                className="block w-full py-3 text-center text-[13px] font-semibold uppercase tracking-wide bg-[var(--color-emerald)] text-white hover:opacity-90 transition-opacity"
              >
                Free Estimate
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
