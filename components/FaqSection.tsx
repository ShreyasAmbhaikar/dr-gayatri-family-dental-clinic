"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS_DATA: FAQItem[] = [
  {
    question: "What dental treatments are available at Dr. Gayatri's clinic?",
    answer:
      "We provide comprehensive family dental care under one roof, including painless rotary root canal treatments, laser teeth whitening, titanium dental implants, clear aligners & braces, pediatric dentistry, tooth-colored composite restorations, digital radiography, and preventive scaling and polishing.",
  },
  {
    question: "Is root canal treatment really painless?",
    answer:
      "Yes! Modern root canal therapy at our clinic is virtually painless. Dr. Gayatri utilizes computerized apex locators, rotary endodontics, and gentle local anesthesia techniques that numb the area completely, ensuring maximum comfort before, during, and after the procedure.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can book instantly online through our website's 'Book Appointment' button, choosing your preferred date and time slot. You can also reach our clinic reception directly by phone at +91 98765 43210. Walk-ins are welcomed, though prior booking helps minimize any wait time.",
  },
  {
    question: "How long do professional teeth whitening results last?",
    answer:
      "Our clinical laser teeth whitening delivers immediate results, lifting tooth shade by up to 6–8 shades. Depending on your dietary habits (tea, coffee, wine intake) and oral hygiene maintenance, the radiant whitening results typically last from 1 to 3 years.",
  },
  {
    question: "At what age should my child first visit the dentist?",
    answer:
      "The Indian Dental Association and American Academy of Pediatric Dentistry recommend a first dental visit by the emergence of the first tooth or by age 1. Early visits ensure healthy jaw development and create a fear-free relationship with dental visits.",
  },
  {
    question: "What safety and sterilization protocols are followed?",
    answer:
      "We follow strict hospital-grade sterilization protocols conforming to OSHA and CDC guidelines. All instruments undergo multi-stage ultrasonic cleaning and vacuum Class-B autoclaving in sealed sterile pouches opened right in front of you.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.18em] text-[#009eb8] uppercase block mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-tight font-bold text-[#1d174e] mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Have questions about our treatments, safety, or scheduling? Here are answers to our most common patient inquiries.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-[#f5fbfe] border-cyan-200 shadow-sm"
                    : "bg-white border-slate-200/80 hover:border-cyan-200"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-[#1c1549] text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#372379] text-white"
                        : "bg-cyan-50 text-[#009eb8] hover:bg-cyan-100"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-slate-600 text-sm sm:text-[15px] leading-relaxed border-t border-cyan-100/50 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
