"use client";

import { useState } from "react";


const selectClass =
  "w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-300 appearance-none";

const inputClass =
  "w-full bg-transparent border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors duration-300";

const labelClass = "block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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
    <section id="contact" className="px-6 py-24 md:px-12 lg:px-20 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* Left: heading + contact info */}
        <div className="md:col-span-5">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Contact
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold leading-snug tracking-tight text-foreground mb-8">
            Let&apos;s talk about your project.
          </h2>
          <p className="text-sm leading-[1.8] text-muted-foreground mb-10">
            We offer free on-site estimates for commercial, institutional, and large-scale
            residential projects across Chicagoland. Answer a few quick questions and
            we&apos;ll get back to you the same day.
          </p>

          <div className="space-y-6">
            <div className="border-t border-border pt-6">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                Phone
              </p>
              <a
                href="tel:3093239959"
                className="text-base font-medium text-foreground hover:text-[var(--color-emerald)] transition-colors duration-300"
              >
                (309) 323-9959
              </a>
            </div>
            <div className="border-t border-border pt-6">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                Email
              </p>
              <a
                href="mailto:emeraldmasonryil@gmail.com"
                className="text-base font-medium text-foreground hover:text-[var(--color-emerald)] transition-colors duration-300"
              >
                emeraldmasonryil@gmail.com
              </a>
            </div>
            <div className="border-t border-border pt-6">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                Office
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                7156 W. 126th St. Suite 136<br />
                Palos Heights, IL 60464
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                Service Area
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cook · DuPage · Lake · Will<br />
                Kane · McHenry Counties<br />
                Greater Chicagoland
              </p>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="md:col-span-6 md:col-start-7">
          {status === "success" ? (
            <div className="border border-border p-12 text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-emerald)] mb-4">
                Request Received
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                We&apos;ll be in touch today.
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your estimate request has been submitted. A member of our team will follow
                up with you the same business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className={inputClass}
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className={inputClass}
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              {/* Email + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className={labelClass}>Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    className={inputClass}
                    placeholder="Property name or company"
                  />
                </div>
              </div>

              {/* Q1: Client type */}
              <div>
                <label className={labelClass}>
                  1. How would you describe your organization?
                </label>
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

              {/* Q2: Damage level */}
              <div>
                <label className={labelClass}>
                  2. How would you describe the scope of damage?
                </label>
                <select name="damage_level" className={selectClass}>
                  <option value="">Select one...</option>
                  <option value="moderate">Moderate — localized damage or deterioration</option>
                  <option value="significant">Significant — multiple areas or systems affected</option>
                  <option value="severe">Severe — structural concern or active water intrusion</option>
                  <option value="unsure">Not sure — need an assessment</option>
                </select>
              </div>

              {/* Q3: Timeline */}
              <div>
                <label className={labelClass}>
                  3. What is your project timeline?
                </label>
                <select name="timeline" className={selectClass}>
                  <option value="">Select one...</option>
                  <option value="asap">Urgent — as soon as possible</option>
                  <option value="1-3-months">Within 1–3 months</option>
                  <option value="seasonal">Planning for this season</option>
                  <option value="budgeting">Budgeting / planning ahead</option>
                </select>
              </div>

              {/* Q4: Insurance claim */}
              <div>
                <label className={labelClass}>
                  4. Is this project related to an insurance claim?
                </label>
                <select name="insurance_claim" className={selectClass}>
                  <option value="">Select one...</option>
                  <option value="yes-active">Yes — active claim in progress</option>
                  <option value="yes-pending">Yes — claim not yet filed</option>
                  <option value="no">No — standard restoration project</option>
                  <option value="unsure">Not sure</option>
                </select>
              </div>

              {/* Q5: How they heard */}
              <div>
                <label className={labelClass}>
                  5. How did you hear about us?
                </label>
                <select name="referral_source" className={selectClass}>
                  <option value="">Select one...</option>
                  <option value="google">Google Search</option>
                  <option value="social">Facebook / Instagram</option>
                  <option value="referral">Referral from a colleague or partner</option>
                  <option value="insurance">Insurance company referral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Optional description */}
              <div>
                <label className={labelClass}>
                  Project details{" "}
                  <span className="normal-case text-muted-foreground/50">(optional)</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Describe the property, location, and what you're seeing..."
                />
              </div>

              {status === "error" && (
                <p className="text-xs text-red-400 text-center">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 bg-[var(--color-emerald)] text-background text-xs font-semibold tracking-[0.3em] uppercase hover:opacity-90 transition-opacity duration-300 disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Request Free Estimate"}
              </button>

              <p className="text-xs text-muted-foreground/50 text-center">
                Licensed, bonded &amp; insured · Same-day response
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
