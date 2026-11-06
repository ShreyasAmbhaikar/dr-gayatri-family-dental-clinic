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
    <section className="py-14 lg:py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-[13px] font-bold tracking-[0.18em] text-[#009eb8] uppercase block mb-2.5">
            YOUR SMILE JOURNEY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-bold text-[#1d174e]">
            Simple Steps to a Healthier Smile
          </h2>
        </div>

        {/* 4 Steps Roadmap */}
        <div className="relative">
          {/* Subtle Connecting Line behind circles on Desktop */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[1px] border-t border-dashed border-cyan-200 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 relative z-10">
            {JOURNEY_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Icon in Cyan Ring with Step Number */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-full bg-white border border-cyan-200 shadow-2xs group-hover:border-[#009eb8] flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                      <div className="w-14 h-14 rounded-full bg-[#e1f7fa] flex items-center justify-center text-[#009eb8] group-hover:text-[#38247b] transition-colors">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                    </div>

                    {/* Step Number Tag below circle matching Reference 1 */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#009eb8] group-hover:bg-[#38247b] text-white text-[10.5px] font-bold px-2.5 py-0.5 rounded-full shadow-xs transition-colors">
                      {step.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#1d174e] mb-1.5 group-hover:text-[#009eb8] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed max-w-[200px]">
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
