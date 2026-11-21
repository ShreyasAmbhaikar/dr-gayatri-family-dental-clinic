"use client";

import React from "react";
import { CalendarCheck } from "lucide-react";
import { ShieldCheckFilledIcon, UsersFilledIcon } from "@/components/ui/icons";

// Only facts the clinic can stand behind (no review counts, ratings or patient totals until they are verified).
const STATS = [
  {
    icon: <CalendarCheck className="w-10 h-10 text-teal stroke-[2.2]" />,
    value: "7 Days",
    label: "Open Every Week",
  },
  {
    icon: <UsersFilledIcon className="w-11 h-10 text-teal-bright" />,
    value: null,
    label: "Written Estimates",
  },
  {
    icon: <ShieldCheckFilledIcon className="w-9 h-10 text-teal-bright" />,
    value: null,
    label: "Patient-First Approach",
  },
];

export default function StatsBanner() {
  return (
    <section aria-label="Clinic highlights" className="relative pb-16 sm:pb-32">
      {/* Aqua band: flat top (matches the treatments wave), wavy bottom */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 1440 300" preserveAspectRatio="none" className="w-full h-full block">
          <defs>
            <linearGradient id="statsBand" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d6f1f7" />
              <stop offset="100%" stopColor="#e9f7fb" />
            </linearGradient>
          </defs>
          <path d="M0,0 L1440,0 L1440,232 C1220,272 940,214 660,246 C400,276 180,236 0,256 Z" fill="url(#statsBand)" />
          <path d="M0,232 C180,212 400,252 660,224 C940,194 1220,250 1440,212 L1440,232 C1220,272 940,214 660,246 C400,276 180,236 0,256 Z" fill="#ffffff" opacity="0.6" />
        </svg>
      </div>

      <div className="page-container relative z-10">
        <div className="glass-card rounded-[26px] sm:rounded-[30px] py-6 sm:py-7 px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200/80">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4 lg:justify-center lg:px-5 xl:px-8">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">{stat.icon}</div>
                <div className="flex flex-col">
                  {stat.value && (
                    <span className="font-serif text-[30px] sm:text-[32px] font-bold text-navy leading-none mb-1.5">
                      {stat.value}
                    </span>
                  )}
                  <span className={`font-bold text-navy leading-tight ${stat.value ? "text-[14px]" : "text-[16px] max-w-[130px]"}`}>
                    {stat.label}
                  </span>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
