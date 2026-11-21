"use client";

import React, { useState } from "react";
import { ChevronDown, PhoneCall } from "lucide-react";
import SectionHeading, { Highlight } from "@/components/ui/SectionHeading";
import WaveDivider from "@/components/ui/WaveDivider";
import { HOME_FAQS } from "@/lib/home-faqs";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<string>("first-visit");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? "" : id);
  };

  return (
    <section id="faqs" className="relative scroll-mt-20 pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
      <WaveDivider position="top" className="h-20 sm:h-24 opacity-80" />

      <div className="page-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              titleClassName="text-[28px] sm:text-[34px] lg:text-[29px] xl:text-[32px]"
              title={
                <>
                  Everything You Need to Know <br className="hidden sm:inline" />
                  <Highlight>About Your Care</Highlight>
                </>
              }
            />

            <p className="text-body text-[14.5px] sm:text-[15.5px] leading-relaxed mt-5 mb-8 max-w-md">
              Have questions about treatments, pain management, or clinic procedures? We believe in transparent communication so you always feel confident and comfortable in our care.
            </p>

            <div className="w-full max-w-md glass-card rounded-[20px] p-5 sm:p-6 flex flex-col gap-3.5">
              <div className="flex items-center gap-3">
                <PhoneCall className="w-7 h-7 text-teal stroke-[1.6] flex-shrink-0" />
                <div>
                  <p className="font-bold text-navy text-[15px]">Still have questions?</p>
                  <p className="text-[12.5px] text-body">Our friendly team is always here to help.</p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between">
                <span className="text-[12.5px] font-semibold text-navy">Call our desk:</span>
                <a href="tel:+917841930325" className="text-[13.5px] font-bold text-teal hover:text-purple transition-colors">
                  +91 78419 30325
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 w-full space-y-3">
            {HOME_FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              const panelId = `faq-panel-${faq.id}`;
              return (
                <div
                  key={faq.id}
                  className={`glass-card rounded-[18px] transition-all duration-200 ${isOpen ? "ring-1 ring-teal/30" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left py-4 px-5 sm:px-6 flex items-center justify-between gap-4 font-sans font-bold text-[14px] sm:text-[15px] focus:outline-hidden cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className={`${isOpen ? "text-teal" : "text-navy"} transition-colors`}>{faq.question}</span>
                    <span
                      className={`w-7 h-7 rounded-full border-[1.5px] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen ? "border-teal bg-teal text-white rotate-180" : "border-teal/50 text-teal"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </span>
                  </button>

                  {/* Answers stay in the DOM (hidden when closed) so crawlers and screen readers can read them. */}
                  <div
                    id={panelId}
                    role="region"
                    hidden={!isOpen}
                    className="px-5 sm:px-6 pb-5 text-body text-[13.5px] sm:text-[14px] leading-relaxed"
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
