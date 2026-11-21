"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * Accordion styled exactly like the homepage FAQ (glass cards, teal ring when open, rotating chevron badge).
 * Answers stay in the DOM (hidden) so crawlers and screen readers can always read them.
 */
export default function FaqAccordion({ faqs, idPrefix = "faq" }: { faqs: FaqItem[]; idPrefix?: string }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="w-full space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const buttonId = `${idPrefix}-button-${i}`;
        return (
          <div key={faq.q} className={`glass-card rounded-[18px] transition-all duration-200 ${isOpen ? "ring-1 ring-teal/30" : ""}`}>
            <h3>
              <button
                type="button"
                id={buttonId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full text-left py-4 px-5 sm:px-6 flex items-center justify-between gap-4 font-sans font-bold text-[14px] sm:text-[15px] focus:outline-hidden cursor-pointer"
              >
                <span className={`${isOpen ? "text-teal" : "text-navy"} transition-colors`}>{faq.q}</span>
                <span
                  className={`w-7 h-7 rounded-full border-[1.5px] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen ? "border-teal bg-teal text-white rotate-180" : "border-teal/50 text-teal"
                  }`}
                >
                  <ChevronDown className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 sm:px-6 pb-5 text-body text-[13.5px] sm:text-[14px] leading-relaxed"
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
