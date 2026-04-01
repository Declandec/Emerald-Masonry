"use client";

import { useState, useRef } from "react";

const inputClass =
  "w-full bg-transparent border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors duration-300";
const labelClass = "block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2";

type Props = {
  serviceTitle: string;
  serviceSlug: string;
};

type FilePreview = {
  name: string;
  url: string;
};

export default function ServiceContactForm({ serviceTitle, serviceSlug }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [previews, setPreviews] = useState<FilePreview[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handleFiles(files: FileList | null) {
    if (!files) return;
    const newPreviews: FilePreview[] = Array.from(files).map((f) => ({
      name: f.name,
      url: URL.createObjectURL(f),
    }));
    setPreviews((prev) => [...prev, ...newPreviews].slice(0, 8));
  }

  function removePreview(index: number) {
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      service: serviceTitle,
      timeline: (form.elements.namedItem("timeline") as HTMLSelectElement).value,
      insurance: (form.elements.namedItem("insurance") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      imageCount: previews.length,
      clientType: "",
      damageLevel: "",
      referral: "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      formRef.current?.reset();
      setPreviews([]);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    const emailSubject = encodeURIComponent(`Quote Request — ${serviceTitle}`);
    const emailBody = encodeURIComponent(
      `Hi Emerald Masonry,\n\nI just submitted a quote request for ${serviceTitle} on your website. I'm attaching my diagnostic photos to this email.\n\nThank you.`
    );

    return (
      <div className="border border-border p-10 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-emerald)] mb-4">
          Request Received
        </p>
        <h3 className="text-xl font-semibold text-foreground mb-3">
          We&apos;ll be in touch today.
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          Your estimate request has been submitted. A member of our team will follow up with you
          the same business day.
        </p>
        {previews.length > 0 && (
          <div className="border-t border-border pt-6">
            <p className="text-xs text-muted-foreground mb-3">
              Send your {previews.length} diagnostic photo{previews.length > 1 ? "s" : ""} to us
              directly:
            </p>
            <a
              href={`mailto:emeraldmasonryil@gmail.com?subject=${emailSubject}&body=${emailBody}`}
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[var(--color-emerald)] border border-[var(--color-emerald)] px-5 py-3 hover:bg-[var(--color-emerald)] hover:text-black transition-all duration-300"
            >
              Email Photos →
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {/* Name + Phone */}
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

      {/* Email + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
          <label className={labelClass}>Company / Property</label>
          <input
            type="text"
            name="company"
            className={inputClass}
            placeholder="Property name or company"
          />
        </div>
      </div>

      {/* Timeline + Insurance */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Project Timeline</label>
          <select
            name="timeline"
            className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-300 appearance-none"
          >
            <option value="">Select one...</option>
            <option value="asap">Urgent — as soon as possible</option>
            <option value="1-3-months">Within 1–3 months</option>
            <option value="seasonal">Planning for this season</option>
            <option value="budgeting">Budgeting / planning ahead</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Insurance Claim?</label>
          <select
            name="insurance"
            className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-300 appearance-none"
          >
            <option value="">Select one...</option>
            <option value="yes-active">Yes — active claim in progress</option>
            <option value="yes-pending">Yes — claim not yet filed</option>
            <option value="no">No — standard project</option>
            <option value="unsure">Not sure</option>
          </select>
        </div>
      </div>

      {/* Project description */}
      <div>
        <label className={labelClass}>
          Describe the Issue{" "}
          <span className="normal-case text-muted-foreground/50">(optional)</span>
        </label>
        <textarea
          name="message"
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder={`Describe what you're seeing with your ${serviceTitle.toLowerCase()} — location, severity, how long it's been an issue...`}
        />
      </div>

      {/* Image upload */}
      <div>
        <label className={labelClass}>
          Diagnostic Photos{" "}
          <span className="normal-case text-muted-foreground/50">(optional, up to 8)</span>
        </label>
        <div
          className="border border-dashed border-border p-6 text-center cursor-pointer hover:border-foreground/40 transition-colors duration-300"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
          <p className="text-xs text-muted-foreground/60 mb-1">
            Drop photos here or click to browse
          </p>
          <p className="text-[10px] text-muted-foreground/40 uppercase tracking-[0.15em]">
            JPG, PNG, HEIC — up to 8 images
          </p>
        </div>

        {previews.length > 0 && (
          <div className="mt-3 grid grid-cols-4 gap-2">
            {previews.map((p, i) => (
              <div key={i} className="relative group aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.url}
                  alt={p.name}
                  className="w-full h-full object-cover border border-border"
                />
                <button
                  type="button"
                  onClick={() => removePreview(i)}
                  className="absolute top-1 right-1 w-5 h-5 bg-black/80 text-white text-[10px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {status === "error" && (
        <p className="text-xs text-red-400 text-center">
          Something went wrong. Please try again or call us directly at (309) 323-9959.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 bg-[var(--color-emerald)] text-black text-xs font-semibold tracking-[0.3em] uppercase hover:opacity-90 transition-opacity duration-300 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : `Request Free ${serviceTitle} Estimate`}
      </button>

      <p className="text-xs text-muted-foreground/50 text-center">
        Licensed, bonded &amp; insured · Same-day response · $5,000 project minimum
      </p>
    </form>
  );
}
