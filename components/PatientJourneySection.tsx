"use client";

import React from "react";
import { Calendar, UserCheck, ClipboardList, Sparkles } from "lucide-react";

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
    icon: Sparkles,
  },
];

export default function PatientJourneySection() {
  return (
    <section className="py-20 lg:py-28 bg-[#fbfdfd] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-96 bg-cyan-100/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold tracking-[0.18em] text-[#009eb8] uppercase block mb-3">
            YOUR SMILE JOURNEY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-tight font-bold text-[#1d174e]">
            Simple Steps to a Healthier Smile
          </h2>
        </div>

        {/* 4 Steps Roadmap */}
        <div className="relative">
          {/* Subtle Connecting Line behind circles on Desktop */}
          <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-cyan-200 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 relative z-10">
            {JOURNEY_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Icon in Cyan Ring with Step Number */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-white border-2 border-cyan-200/80 group-hover:border-[#00a4c4] shadow-md shadow-cyan-900/5 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                      <div className="w-18 h-18 rounded-full bg-gradient-to-b from-[#eaf8fb] to-[#d8f4fa] flex items-center justify-center text-[#009eb8] group-hover:text-[#372379] transition-colors">
                        <Icon className="w-8 h-8 stroke-[1.8]" />
                      </div>
                    </div>

                    {/* Step Number Tag */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#00a4c4] group-hover:bg-[#372379] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs transition-colors">
                      {step.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1c1549] mb-2 group-hover:text-[#009eb8] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-[220px]">
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
