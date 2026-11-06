"use client";

import React from "react";
import { Calendar, UserCheck, ClipboardList } from "lucide-react";

// Clean custom vector tooth icon for Step 4
function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 3C4.24 3 2 5.24 2 8c0 4.42 2.5 7.5 3.5 11 .5 1.75 2 2 3.5 2 1.3 0 2.2-.8 3-2 .8 1.2 1.7 2 3 2 1.5 0 3-.25 3.5-2 1-3.5 3.5-6.58 3.5-11 0-2.76-2.24-5-5-5-2.2 0-3.5 1.5-4.5 3-1-1.5-2.3-3-4.5-3z" />
    </svg>
  );
}

const JOURNEY_STEPS = [
  {
    number: "01",
    title: "Book Appointment",
    description: "Choose a convenient time for your visit.",
    icon: Calendar,
  },
  {
    number: "02",
    title: "Consultation",
    description: "We understand your needs and examine your oral health.",
    icon: UserCheck,
  },
  {
    number: "03",
    title: "Treatment Plan",
    description: "Get a personalized plan tailored to your smile goals.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Enjoy Your Smile",
    description: "Experience gentle, effective care and lasting results.",
    icon: ToothIcon,
  },
];

export default function PatientJourneySection() {
  return (
    <section id="journey" className="py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-[#eaf6f9] via-[#f2fafc] to-[#e8f5f8] border-y border-[#d8eef3] relative overflow-hidden">
      {/* Decorative Background Waves */}
      <div className="absolute top-0 right-0 w-80 h-40 pointer-events-none -z-0 opacity-40">
        <svg viewBox="0 0 320 160" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 0 C120 40, 220 20, 320 80 L320 0 L0 0 Z" fill="#bcebf5" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Centered Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#009eb8] uppercase block mb-2.5">
            YOUR SMILE JOURNEY
          </span>
          <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[40px] leading-tight font-bold text-[#1d174e] mb-3">
            Simple Steps to a Healthier Smile
          </h2>
          {/* 3-segment color accent bar */}
          <div className="h-[3.5px] w-14 rounded-full mx-auto mb-2 flex overflow-hidden">
            <div className="w-1/3 bg-[#38247b]" />
            <div className="w-1/3 bg-[#f43f5e]" />
            <div className="w-1/3 bg-[#00b4d8]" />
          </div>
        </div>

        {/* 4 Steps Flow with Smooth Curved Dotted Connecting Wave */}
        <div className="relative">
          {/* Gentle Curved Dotted Wave Line behind circles on Desktop */}
          <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-12 pointer-events-none -z-0">
            <svg
              viewBox="0 0 1000 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M50 30 Q170 5 290 30 T530 30 T770 30 T950 30"
                stroke="#9ce1ef"
                strokeWidth="1.5"
                strokeDasharray="4 5"
                fill="none"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 relative z-10">
            {JOURNEY_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Icon in Cyan Glow Halo Circle (Vector SVG, Not Screenshot) */}
                  <div className="w-18 h-18 sm:w-[76px] sm:h-[76px] rounded-full bg-gradient-to-tr from-[#dff7fc] via-[#ebfbfc] to-white border-2 border-[#b2eaf5] shadow-md shadow-cyan-900/10 flex items-center justify-center transition-all duration-300 group-hover:scale-108 group-hover:border-[#009eb8]">
                    <div className="w-12 h-12 rounded-full bg-white shadow-2xs flex items-center justify-center text-[#009eb8] group-hover:text-[#38247b] transition-colors">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>

                  {/* Step Number in Bold Navy Text below Circle matching Reference */}
                  <div className="text-[13px] sm:text-[14px] font-bold text-[#1d174e] mt-3.5 mb-1 tracking-wide">
                    {step.number}
                  </div>

                  {/* Title in Bold Sans-serif Navy */}
                  <h3 className="font-sans text-[14.5px] sm:text-[15px] font-bold text-[#1d174e] mb-1.5 group-hover:text-[#009eb8] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#64748b] text-[11px] sm:text-[11.5px] leading-relaxed max-w-[195px] font-normal">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
