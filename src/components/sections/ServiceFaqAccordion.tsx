"use client";

import { useState } from "react";
import type { ServiceFaq } from "@/data/services";

export default function ServiceFaqAccordion({ faqs }: { faqs: ServiceFaq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-6 py-6 text-left group"
          >
            <span className="text-sm font-medium text-foreground group-hover:text-[var(--color-emerald)] transition-colors duration-200">
              {faq.question}
            </span>
            <span className="flex-shrink-0 mt-0.5">
              <svg
                className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 3v10M3 8h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-96 pb-6" : "max-h-0"
            }`}
          >
            <p className="text-sm text-muted-foreground leading-[1.8]">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
