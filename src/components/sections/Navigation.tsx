"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Emerald Masonry LLC"
          width={72}
          height={72}
          className="object-contain"
          priority
        />
      </Link>

      <nav className="hidden md:flex items-center gap-10">
        {["Work", "Services", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </nav>

      <a
        href="tel:3093239959"
        className="text-xs tracking-[0.2em] uppercase font-semibold px-5 py-3 bg-[var(--color-emerald)] text-background hover:opacity-90 transition-opacity duration-300"
      >
        (309) 323-9959
      </a>
    </header>
  );
}
