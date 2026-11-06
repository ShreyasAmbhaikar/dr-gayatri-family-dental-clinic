"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall, Sparkles } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS_DATA: FaqItem[] = [
  {
    id: "first-visit",
    question: "What can I expect during my first dental visit?",
    answer:
      "During your initial visit, Dr. Gayatri conducts a comprehensive digital oral examination, gentle ultrasonic screening, and low-radiation radiographs if needed. We discuss your oral health goals, answer all your questions, and outline a transparent, personalized care plan tailored to your lifestyle.",
  },
  {
    id: "painless-care",
    question: "Are treatments at your clinic truly painless?",
    answer:
      "Yes, 100%. We specialize in gentle, anxiety-free dentistry utilizing computerized local anesthesia delivery, micro-invasive rotary tools, and compassionate patient-first protocols so you feel zero discomfort from start to finish.",
  },
  {
    id: "checkup-frequency",
    question: "How often should my family visit for routine checkups?",
    answer:
      "We recommend preventive checkups and ultrasonic cleanings every 6 months. Regular maintenance catches early decay before it causes pain, removes hardened tartar, and protects your natural tooth structure for life.",
  },
  {
    id: "pediatric-care",
    question: "Do you treat infants and young children?",
    answer:
      "Absolutely! Our practice is designed to be warm, friendly, and non-intimidating for children of all ages. We provide cavity-preventive fluoride applications, molar pit sealants, space maintainers, and gentle habit guidance with zero fear.",
  },
  {
    id: "emergencies",
    question: "What should I do in case of a sudden dental emergency?",
    answer:
      "If you experience severe toothache, dental trauma, a broken tooth, or facial swelling, call our emergency line immediately. We accommodate same-day emergency appointments in Amanora Park Town, Hadapsar to provide fast, effective pain relief.",
  },
  {
    id: "implants-vs-bridges",
    question: "What are the advantages of dental implants over bridges?",
    answer:
      "Dental implants replace the missing tooth root permanently with medical-grade titanium and zirconia, preventing jawbone loss without filing down adjacent healthy teeth. They look, feel, and function just like your natural teeth.",
  },
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<string>("first-visit");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? "" : id);
  };

  return (
    <section
      id="faqs"
      className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 bg-gradient-to-b from-white via-[#f7fcfe] to-[#eef9fb] relative overflow-hidden"
    >
      {/* Soft Ambient Cyan Glow behind FAQ */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-50/60 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Heading, Intro & Trust Card */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-[#009eb8] uppercase block mb-3">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2 className="font-serif text-[32px] sm:text-[38px] lg:text-[44px] leading-[1.14] font-bold text-[#1d174e] mb-4">
              Everything You Need to Know <br />
              <span className="text-[#009eb8]">About Your Care</span>
            </h2>

            {/* 3-segment color accent bar */}
            <div className="h-[3.5px] w-14 rounded-full mb-6 flex overflow-hidden">
              <div className="w-1/3 bg-[#38247b]" />
              <div className="w-1/3 bg-[#f43f5e]" />
              <div className="w-1/3 bg-[#00b4d8]" />
            </div>

            <p className="text-[#556070] text-sm sm:text-[15px] leading-relaxed mb-8 max-w-md">
              Have questions about treatments, pain management, or clinic procedures? We believe in transparent communication so you always feel confident and comfortable in our care.
            </p>

            {/* Quick Assistance Trust Card */}
            <div className="w-full bg-white/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-cyan-100 shadow-lg shadow-cyan-950/5 flex flex-col gap-3.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-[#009eb8] flex-shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1d174e] text-sm sm:text-[15px]">Still have questions?</h4>
                  <p className="text-xs text-[#556070]">Our friendly team is always here to help.</p>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#1d174e]">Call our desk:</span>
                <a
                  href="tel:+919876543210"
                  className="text-xs sm:text-[13px] font-bold text-[#009eb8] hover:text-[#38247b] transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion FAQs */}
          <div className="lg:col-span-7 w-full space-y-3 sm:space-y-3.5 pt-2">
            {FAQS_DATA.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen
                      ? "bg-white border-cyan-300 shadow-md shadow-cyan-900/5 ring-1 ring-cyan-200"
                      : "bg-white/85 hover:bg-white border-slate-200/80 shadow-2xs"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left py-4 sm:py-4.5 px-5 sm:px-6 flex items-center justify-between gap-4 font-sans font-bold text-[14px] sm:text-[15.5px] text-[#1d174e] focus:outline-hidden cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className={`${isOpen ? "text-[#009eb8]" : "text-[#1d174e]"} transition-colors`}>
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#38247b] text-white rotate-180"
                          : "bg-cyan-50 text-[#009eb8]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-4 sm:pb-5 text-[#556070] text-[13px] sm:text-[14px] leading-relaxed border-t border-slate-100/90 pt-3 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Subtle organic bottom wave leading seamlessly into AppointmentCtaSection */}
      <div className="w-full leading-none -mb-1 mt-10 pointer-events-none select-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 30 C 240 50, 480 10, 720 35 C 960 60, 1200 20, 1440 40 L 1440 60 L 0 60 Z"
            fill="#eef9fb"
          />
        </svg>
      </div>
    </section>
  );
}
