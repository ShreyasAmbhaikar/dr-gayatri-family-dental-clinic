"use client";

import React from "react";
import { Trophy, Star, Users, ShieldCheck } from "lucide-react";

export default function StatsBanner() {
  return (
    <section className="py-7 sm:py-9 bg-white relative overflow-visible">
      {/* Prominent Organic Turquoise Fluid Wave on the Left Edge flowing down to About */}
      <div className="absolute -top-24 -left-16 w-80 sm:w-[420px] h-96 sm:h-[480px] pointer-events-none -z-0">
        <svg
          viewBox="0 0 500 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-left"
        >
          <path
            d="M0 60 C180 30 340 140 380 280 C420 420 320 540 200 600 L0 600 Z"
            fill="#c0f0f8"
            opacity="0.8"
          />
          <path
            d="M0 120 C120 90 260 180 290 320 C320 440 220 540 100 580 L0 580 Z"
            fill="#9ee6f3"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Soft Cyan Pill Banner matching Reference 1 */}
        <div className="bg-gradient-to-r from-[#dcf6fa] via-[#e8f8fb] to-[#dcf6fa] rounded-2xl sm:rounded-full py-5 sm:py-5 px-6 sm:px-10 border border-[#b8edf5] shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-cyan-200/80">
            {/* Stat 1: 10+ Years of Care */}
            <div className="flex items-center gap-3.5 sm:px-4 pt-3 sm:pt-0 first:pt-0">
              <div className="w-11 h-11 rounded-2xl bg-white/95 shadow-2xs border border-cyan-100 flex items-center justify-center flex-shrink-0 text-[#009eb8]">
                <Trophy className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="font-serif text-[28px] sm:text-[30px] font-extrabold text-[#1d174e] leading-none mb-1">
                  10+
                </div>
                <div className="text-[12px] font-bold text-[#1d174e] leading-tight">
                  Years of Care
                </div>
                <div className="text-[10.5px] text-slate-500 font-medium leading-tight">
                  Trusted by families in Viman Nagar
                </div>
              </div>
            </div>

            {/* Stat 2: 4.9/5 Patient Rating */}
            <div className="flex items-center gap-3.5 sm:px-4 pt-3 sm:pt-0">
              <div className="w-11 h-11 rounded-2xl bg-white/95 shadow-2xs border border-amber-100 flex items-center justify-center flex-shrink-0 text-amber-400">
                <Star className="w-6 h-6 fill-amber-400 stroke-amber-400" />
              </div>
              <div>
                <div className="font-serif text-[28px] sm:text-[30px] font-extrabold text-[#1d174e] leading-none mb-1">
                  4.9/5
                </div>
                <div className="text-[12px] font-bold text-[#1d174e] leading-tight">
                  Patient Rating
                </div>
                <div className="text-[10.5px] text-slate-500 font-medium leading-tight">
                  Based on 350+ Google reviews
                </div>
              </div>
            </div>

            {/* Stat 3: 1000+ Happy Smiles */}
            <div className="flex items-center gap-3.5 sm:px-4 pt-3 sm:pt-0">
              <div className="w-11 h-11 rounded-2xl bg-white/95 shadow-2xs border border-cyan-100 flex items-center justify-center flex-shrink-0 text-[#009eb8]">
                <Users className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="font-serif text-[28px] sm:text-[30px] font-extrabold text-[#1d174e] leading-none mb-1">
                  1000+
                </div>
                <div className="text-[12px] font-bold text-[#1d174e] leading-tight">
                  Happy Smiles
                </div>
                <div className="text-[10.5px] text-slate-500 font-medium leading-tight">
                  Across all age groups
                </div>
              </div>
            </div>

            {/* Stat 4: Patient-First Approach */}
            <div className="flex items-center gap-3.5 sm:px-4 pt-3 sm:pt-0">
              <div className="w-11 h-11 rounded-2xl bg-white/95 shadow-2xs border border-cyan-100 flex items-center justify-center flex-shrink-0 text-[#009eb8]">
                <ShieldCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-[14px] sm:text-[15px] font-bold text-[#1d174e] leading-tight mb-0.5">
                  Patient-First <br className="hidden lg:inline" /> Approach
                </div>
                <div className="text-[10.5px] text-slate-500 font-medium leading-tight">
                  Safe, hygienic &amp; compassionate care
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
