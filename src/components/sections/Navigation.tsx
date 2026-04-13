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
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/#contact" },
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
    "text-[13px] font-semibold uppercase tracking-wide text-white/80 hover:text-[var(--color-emerald)] transition-colors duration-200";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[var(--color-charcoal)] transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-black/40" : "shadow-md shadow-black/20"
        }`}
      >
        <div className="px-6 md:px-12 lg:px-20 py-3 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" onClick={closeMobile}>
            <Image
              src="/logo.png"
              alt="Emerald Masonry LLC"
              width={46}
              height={46}
              className="object-contain"
              priority
            />
            <div className="hidden sm:block">
              <p className="text-[15px] font-bold tracking-wide text-white leading-tight">
                Emerald Masonry
              </p>
              <p className="text-[10px] text-[var(--color-emerald)] font-semibold tracking-[0.3em] uppercase">
                LLC
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-68 bg-[var(--color-charcoal)] border border-white/10 shadow-2xl transition-all duration-200 origin-top ${
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
                    className="block px-5 py-3 text-[13px] font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-150 border-b border-white/5 last:border-0"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop: phone + CTA */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="tel:7082881696"
              className="text-[13px] font-bold text-white/80 hover:text-[var(--color-emerald)] transition-colors duration-200 tracking-wide"
            >
              (708) 288-1696
            </a>
            <a
              href="/#contact"
              className="px-5 py-2.5 bg-[var(--color-emerald)] text-white text-[12px] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity duration-200 shadow-sm"
            >
              Free Estimate
            </a>
          </div>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
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
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={closeMobile}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[var(--color-charcoal)] shadow-2xl flex flex-col transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-[64px]" />
          <div className="h-[3px] bg-[var(--color-emerald)]" />
          <nav className="flex flex-col px-6 py-4 flex-1 overflow-y-auto">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={closeMobile}
                className="py-4 text-[13px] font-semibold uppercase tracking-wide text-white/80 hover:text-[var(--color-emerald)] border-b border-white/10 transition-colors"
              >
                {label}
              </Link>
            ))}

            {/* Services accordion */}
            <div className="border-b border-white/10">
              <button
                onClick={() => setMobileServicesOpen((o) => !o)}
                className="w-full flex items-center justify-between py-4 text-[13px] font-semibold uppercase tracking-wide text-white/80 hover:text-[var(--color-emerald)] transition-colors"
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
                    className="block pl-4 py-3 text-[13px] font-medium text-white/50 hover:text-[var(--color-emerald)] transition-colors"
                  >
                    {label}
                  </Link>
                ))}
                <div className="pb-2" />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:7082881696"
                onClick={closeMobile}
                className="block w-full py-3 text-center text-[13px] font-bold uppercase tracking-wide border-2 border-white/20 text-white hover:border-[var(--color-emerald)] hover:text-[var(--color-emerald)] transition-colors"
              >
                (708) 288-1696
              </a>
              <a
                href="/#contact"
                onClick={closeMobile}
                className="block w-full py-3 text-center text-[13px] font-bold uppercase tracking-wide bg-[var(--color-emerald)] text-white hover:opacity-90 transition-opacity"
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
