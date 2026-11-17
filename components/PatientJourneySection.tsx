"use client";

import React from "react";
import { CalendarDays, Stethoscope, ClipboardList } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { ToothIcon } from "@/components/ui/icons";

const JOURNEY_STEPS = [
  {
    number: "01",
    title: "Book Appointment",
    description: "Choose a convenient time online or by calling our friendly desk.",
    icon: CalendarDays,
    gradient: "from-[#38bdf8] via-[#22d3ee] to-[#06b6d4]",
    halo: "rgba(34, 211, 238, 0.35)",
    badgeBg: "bg-gradient-to-r from-[#0284c7] to-[#06b6d4] text-white",
  },
  {
    number: "02",
    title: "Consultation",
    description: "We understand your concerns with digital oral screening.",
    icon: Stethoscope,
    gradient: "from-[#a78bfa] via-[#818cf8] to-[#6366f1]",
    halo: "rgba(167, 139, 250, 0.35)",
    badgeBg: "bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white",
  },
  {
    number: "03",
    title: "Treatment Plan",
    description: "Get a clear, transparent roadmap tailored to your comfort.",
    icon: ClipboardList,
    gradient: "from-[#f472b6] via-[#fb7185] to-[#f87171]",
    halo: "rgba(251, 113, 133, 0.35)",
    badgeBg: "bg-gradient-to-r from-[#e11d48] to-[#f43f5e] text-white",
  },
  {
    number: "04",
    title: "Enjoy Your Smile",
    description: "Experience gentle care and long-lasting dental confidence.",
    icon: ToothIcon,
    gradient: "from-[#34d399] via-[#2dd4bf] to-[#14b8a6]",
    halo: "rgba(45, 212, 191, 0.35)",
    badgeBg: "bg-gradient-to-r from-[#059669] to-[#0d9488] text-white",
  },
];

export default function PatientJourneySection() {
  return (
    <section id="journey" className="relative scroll-mt-20 pt-12 pb-28 sm:pt-16 sm:pb-32">
      <div className="page-container relative z-10">
        <SectionHeading
          eyebrow="Your Smile Journey"
          align="center"
          titleClassName="text-[26px] sm:text-[32px] lg:text-[34px]"
          title="Simple Steps to a Healthier Smile"
          className="mb-14 sm:mb-16"
        />

        <div className="relative">
          {/* Dashed sine-wave connector through the circle centres */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
            className="hidden lg:block absolute top-[12px] left-[12.5%] right-[12.5%] w-[75%] h-[80px] pointer-events-none"
          >
            <path
              d="M0,40 C55,8 110,72 166,40 S277,8 333,40 S444,72 500,40 S611,8 666,40 S777,72 833,40 S944,8 1000,40"
              stroke="#0e9aa7"
              strokeWidth="2"
              strokeDasharray="4 6"
              strokeLinecap="round"
              fill="none"
              opacity="0.4"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 relative">
            {JOURNEY_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <li key={step.number} className="flex flex-col items-center text-center group">
                  {/* Distinct, colorful circle that never blends into background */}
                  <div className="relative mb-6">
                    {/* Glowing outer soft ring */}
                    <div
                      className="w-[96px] h-[96px] rounded-full flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: `radial-gradient(circle, ${step.halo} 0%, transparent 72%)`,
                      }}
                    >
                      {/* Vibrant Gradient Circle with thick white border */}
                      <div
                        className={`w-[78px] h-[78px] rounded-full bg-gradient-to-br ${step.gradient} border-4 border-white shadow-[0_12px_24px_-6px_rgba(0,0,0,0.25)] flex items-center justify-center text-white`}
                      >
                        <Icon className="w-8 h-8 stroke-[2.2]" />
                      </div>
                    </div>

                    {/* Step Number Badge - single line guarantee */}
                    <span
                      className={`absolute -bottom-2 left-1/2 -translate-x-1/2 ${step.badgeBg} text-[11px] font-bold tracking-wider px-3.5 py-0.5 rounded-full shadow-md border-2 border-white uppercase whitespace-nowrap inline-flex items-center justify-center min-w-[76px]`}
                    >
                      Step {step.number}
                    </span>
                  </div>

                  <h3 className="font-sans text-[16px] font-bold text-navy mt-1 mb-1.5">{step.title}</h3>
                  <p className="text-body text-[13px] leading-relaxed max-w-[210px]">{step.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
