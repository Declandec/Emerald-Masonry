"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const inputClass =
  "w-full bg-white border border-gray-300 px-4 py-3 text-[14px] text-[var(--color-charcoal)] placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-emerald)] transition-colors duration-200";

const selectClass =
  "w-full bg-white border border-gray-300 px-4 py-3 text-[14px] text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-emerald)] transition-colors duration-200 appearance-none";

const labelClass = "block text-[11px] font-bold tracking-[0.1em] uppercase text-gray-600 mb-2";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { ref, inView } = useInView();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      clientType: (form.elements.namedItem("client_type") as HTMLSelectElement).value,
      damageLevel: (form.elements.namedItem("damage_level") as HTMLSelectElement).value,
      timeline: (form.elements.namedItem("timeline") as HTMLSelectElement).value,
      insurance: (form.elements.namedItem("insurance_claim") as HTMLSelectElement).value,
      referral: (form.elements.namedItem("referral_source") as HTMLSelectElement).value,
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
    <section id="contact" className="bg-white py-20 px-6 md:px-12 lg:px-20">
      {/* Section header */}
      <div
        ref={ref}
        className={`text-center mb-14 fade-up ${inView ? "in-view" : ""}`}
      >
        <p className="text-[11px] tracking-[0.45em] uppercase text-[var(--color-emerald)] font-semibold mb-3">
          Get In Touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
          Get in Touch With Us &amp; Send Us a Message Today
        </h2>
        <p className="text-base text-gray-500 max-w-xl mx-auto">
          If you are looking for quality masonry and tuckpointing services in Chicago, we are the
          ones you can rely on and trust. Free on-site estimates — same-day response.
        </p>
        <div className="mt-4 mx-auto w-16 h-1 bg-[var(--color-emerald)]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto">
        {/* Left: contact info panel */}
        <div className="lg:col-span-4">
          <ContactInfo />
        </div>

        {/* Right: form */}
        <div className="lg:col-span-8">
          {status === "success" ? (
            <div className="border-4 border-[var(--color-emerald)] p-10 text-center">
              <div className="w-16 h-16 bg-[var(--color-emerald)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-charcoal)] mb-3">
                Request Received!
              </h3>
              <p className="text-gray-500">
                Your estimate request has been submitted. A member of our team will follow
                up with you the same business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input type="text" name="name" required className={inputClass} placeholder="John Smith" />
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input type="tel" name="phone" className={inputClass} placeholder="Your phone number" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input type="email" name="email" className={inputClass} placeholder="you@company.com" />
                </div>
                <div>
                  <label className={labelClass}>Company / Organization</label>
                  <input type="text" name="company" className={inputClass} placeholder="Property name or company" />
                </div>
              </div>

              <div>
                <label className={labelClass}>1. How would you describe your organization?</label>
                <select name="client_type" className={selectClass}>
                  <option value="">Select one...</option>
                  <option value="property-manager">Property Management Company</option>
                  <option value="hoa">HOA / Condo Association</option>
                  <option value="church">Church / Religious Institution</option>
                  <option value="insurance">Insurance Company / Adjuster</option>
                  <option value="large-residential">Large Residential Property Owner</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>2. How would you describe the scope of damage?</label>
                <select name="damage_level" className={selectClass}>
                  <option value="">Select one...</option>
                  <option value="moderate">Moderate — localized damage or deterioration</option>
                  <option value="significant">Significant — multiple areas or systems affected</option>
                  <option value="severe">Severe — structural concern or active water intrusion</option>
                  <option value="unsure">Not sure — need an assessment</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>3. What is your project timeline?</label>
                <select name="timeline" className={selectClass}>
                  <option value="">Select one...</option>
                  <option value="asap">Urgent — as soon as possible</option>
                  <option value="1-3-months">Within 1–3 months</option>
                  <option value="seasonal">Planning for this season</option>
                  <option value="budgeting">Budgeting / planning ahead</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>4. Is this project related to an insurance claim?</label>
                <select name="insurance_claim" className={selectClass}>
                  <option value="">Select one...</option>
                  <option value="yes-active">Yes — active claim in progress</option>
                  <option value="yes-pending">Yes — claim not yet filed</option>
                  <option value="no">No — standard restoration project</option>
                  <option value="unsure">Not sure</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>5. How did you hear about us?</label>
                <select name="referral_source" className={selectClass}>
                  <option value="">Select one...</option>
                  <option value="google">Google Search</option>
                  <option value="social">Facebook / Instagram</option>
                  <option value="referral">Referral from a colleague or partner</option>
                  <option value="insurance">Insurance company referral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>
                  Project Details{" "}
                  <span className="normal-case font-normal text-gray-400">(optional)</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Describe the property, location, and what you're seeing..."
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500 text-center">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 bg-[var(--color-emerald)] text-white text-[13px] font-bold tracking-widest uppercase hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 shadow-md"
              >
                {status === "submitting" ? "Sending..." : "Send Message →"}
              </button>

              <p className="text-[12px] text-gray-400 text-center">
                Licensed, bonded &amp; insured · Same-day response · No obligation
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`bg-[var(--color-charcoal)] p-8 h-full slide-left ${inView ? "in-view" : ""}`}
    >
      <h3 className="text-[18px] font-bold text-white mb-2">
        Get in touch with us &amp; send us a message today!
      </h3>
      <div className="w-10 h-1 bg-[var(--color-emerald)] mb-6" />
      <p className="text-[14px] text-white/60 leading-relaxed mb-8">
        If you are looking for quality tuckpointing and masonry services in Chicago, we are the
        ones you can rely on and trust. We only provide the best services — don&apos;t hesitate to
        give us a call!
      </p>

      <div className="space-y-5">
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-[var(--color-emerald)] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] tracking-widest uppercase text-white/40 mb-1">Phone</p>
            <a href="tel:3093239959" className="text-white font-semibold hover:text-[var(--color-emerald)] transition-colors">
              (309) 323-9959
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 bg-[var(--color-emerald)] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] tracking-widest uppercase text-white/40 mb-1">Email</p>
            <a href="mailto:emeraldmasonryil@gmail.com" className="text-white font-semibold hover:text-[var(--color-emerald)] transition-colors text-[13px] break-all">
              emeraldmasonryil@gmail.com
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 bg-[var(--color-emerald)] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] tracking-widest uppercase text-white/40 mb-1">Office</p>
            <p className="text-white text-[13px] leading-relaxed">
              7156 W. 126th St. Suite 136<br />Palos Heights, IL 60464
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 bg-[var(--color-emerald)] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] tracking-widest uppercase text-white/40 mb-1">Service Area</p>
            <p className="text-white text-[13px] leading-relaxed">
              Cook · DuPage · Lake · Will<br />Kane · McHenry Counties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
