"use client";

import { useState } from "react";

export default function Hero() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative min-h-screen flex overflow-hidden pt-[64px]">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#0c1018]" />

      {/* Background masonry image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-landscape.png')" }}
        />
        <div className="absolute inset-0 bg-black/55" />
        {/* Left fade for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(12,16,24,0.97) 0%, rgba(12,16,24,0.80) 40%, rgba(12,16,24,0.30) 70%, rgba(12,16,24,0.15) 100%)",
          }}
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 lg:py-24 gap-10 max-w-[1400px] mx-auto">

        {/* LEFT: headline + copy + CTAs */}
        <div className="flex flex-col justify-center w-full lg:w-[55%]">
          <p className="text-[11px] tracking-[0.5em] uppercase text-[var(--color-emerald)] font-semibold mb-5">
            Chicagoland Commercial Masonry
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-7xl leading-[1.08] mb-6"
            style={{
              fontFamily: "var(--font-uncial)",
              color: "#F2D472",
              textShadow: "0 2px 20px rgba(0,0,0,0.7)",
            }}
          >
            We don&apos;t cut<br className="hidden sm:block" /> corners —{" "}
            <span style={{ color: "var(--color-emerald)" }}>We lay them.</span>
          </h1>

          <p className="text-lg font-semibold text-white mb-2 leading-relaxed max-w-lg">
            Non-union. Family-owned. 40+ years of Chicagoland masonry.
          </p>
          <p className="text-sm text-white/55 mb-10 leading-relaxed max-w-md">
            Serving property managers, HOAs, churches, and insurance companies
            across greater Chicago. Licensed, bonded &amp; insured.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-emerald)] text-white text-[13px] font-bold tracking-widest uppercase hover:opacity-90 transition-opacity duration-300 shadow-lg"
            >
              Request a Free Estimate
            </a>
            <a
              href="tel:7082881696"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white text-[13px] font-semibold tracking-widest uppercase hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              (708) 288-1696
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-white/40 text-[10px] uppercase tracking-widest">
            <span>Licensed &amp; Bonded</span>
            <span className="text-[var(--color-emerald)]/50">·</span>
            <span>40+ Years Experience</span>
            <span className="text-[var(--color-emerald)]/50">·</span>
            <span>Free Estimates</span>
            <span className="text-[var(--color-emerald)]/50">·</span>
            <span>Family Owned</span>
          </div>
        </div>

        {/* RIGHT: floating quote form */}
        <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0">
          <div className="bg-white shadow-2xl">
            {/* Green header */}
            <div className="bg-[var(--color-emerald)] px-6 py-4">
              <h2 className="text-[15px] font-bold text-white uppercase tracking-wider text-center">
                Get a Free Quote
              </h2>
            </div>

            <div className="px-6 py-6">
              {status === "success" ? (
                <div className="py-8 text-center">
                  <div className="w-14 h-14 bg-[var(--color-emerald)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-bold text-[var(--color-charcoal)] text-[15px] mb-2">Request Received!</p>
                  <p className="text-[13px] text-gray-500">We&apos;ll follow up same business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    className="w-full border border-gray-300 px-4 py-3 text-[14px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-emerald)] transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 px-4 py-3 text-[14px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-emerald)] transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 px-4 py-3 text-[14px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-emerald)] transition-colors"
                  />
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Message"
                    className="w-full border border-gray-300 px-4 py-3 text-[14px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-emerald)] transition-colors resize-none"
                  />
                  {status === "error" && (
                    <p className="text-xs text-red-500 text-center">Something went wrong. Please try again.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 bg-[var(--color-charcoal)] text-white text-[13px] font-bold tracking-widest uppercase hover:bg-[var(--color-emerald)] transition-colors duration-300 disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending..." : "SEND"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
