"use client";

import React from "react";
import { Trophy, Star, Users, ShieldCheck } from "lucide-react";

export default function StatsBanner() {
  return (
    <section className="pt-6 pb-8 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-14 bg-gradient-to-b from-[#f3f9fc] via-[#eaf7fa] to-[#f4fafc] relative overflow-hidden">
      {/* Decorative Organic Wave Layers in Background */}
      <div className="absolute top-0 left-0 w-96 h-48 pointer-events-none -z-0 overflow-hidden opacity-70">
        <svg
          viewBox="0 0 380 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 C110 50, 220 20, 380 120 L380 0 L0 0 Z"
            fill="#d2f2fa"
          />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-80 h-44 pointer-events-none -z-0 overflow-hidden opacity-50">
        <svg
          viewBox="0 0 320 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M320 0 C220 40, 140 10, 0 80 L0 0 L320 0 Z"
            fill="#d8f4fa"
          />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* White Floating Pill Card matching Reference Image */}
        <div className="bg-white rounded-[26px] sm:rounded-[36px] py-6 sm:py-7 px-6 sm:px-10 border border-[#e2f1f6] shadow-[0_8px_32px_rgba(0,120,180,0.06)] hover:shadow-[0_12px_40px_rgba(0,120,180,0.09)] transition-shadow duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-0 lg:divide-x divide-slate-100">
            {/* Stat 1: 10+ Years of Care */}
            <div className="flex items-center gap-4 lg:px-6 xl:px-8">
              <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center text-[#009eb8]">
                <Trophy className="w-9 h-9 stroke-[1.8]" />
              </div>
              <div className="flex flex-col">
                <div className="font-serif text-[26px] sm:text-[28px] font-extrabold text-[#1d174e] leading-none mb-1">
                  10+
                </div>
                <div className="text-[12.5px] font-bold text-[#1d174e] leading-tight">
                  Years of Care
                </div>
                <div className="text-[10.5px] text-slate-500 font-medium leading-tight mt-0.5">
                  Trusted by families in Viman Nagar
                </div>
              </div>
            </div>

            {/* Stat 2: 4.9/5 Patient Rating */}
            <div className="flex items-center gap-4 lg:px-6 xl:px-8">
              <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center text-amber-400">
                <Star className="w-9 h-9 fill-amber-400 stroke-amber-400" />
              </div>
              <div className="flex flex-col">
                <div className="font-serif text-[26px] sm:text-[28px] font-extrabold text-[#1d174e] leading-none mb-1">
                  4.9/5
                </div>
                <div className="text-[12.5px] font-bold text-[#1d174e] leading-tight">
                  Patient Rating
                </div>
                <div className="text-[10.5px] text-slate-500 font-medium leading-tight mt-0.5">
                  Based on 200+ Google reviews
                </div>
              </div>
            </div>

            {/* Stat 3: 1000+ Happy Smiles */}
            <div className="flex items-center gap-4 lg:px-6 xl:px-8">
              <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center text-[#009eb8]">
                <Users className="w-9 h-9 stroke-[1.8]" />
              </div>
              <div className="flex flex-col">
                <div className="font-serif text-[26px] sm:text-[28px] font-extrabold text-[#1d174e] leading-none mb-1">
                  1000+
                </div>
                <div className="text-[12.5px] font-bold text-[#1d174e] leading-tight">
                  Happy Smiles
                </div>
                <div className="text-[10.5px] text-slate-500 font-medium leading-tight mt-0.5">
                  Across all age groups
                </div>
              </div>
            </div>

            {/* Stat 4: Patient-First Approach */}
            <div className="flex items-center gap-4 lg:px-6 xl:px-8">
              <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center text-[#009eb8]">
                <ShieldCheck className="w-9 h-9 stroke-[1.8]" />
              </div>
              <div className="flex flex-col">
                <div className="text-[13.5px] font-bold text-[#1d174e] leading-tight mb-0.5">
                  Patient-First <br className="hidden sm:inline" /> Approach
                </div>
                <div className="text-[10.5px] text-slate-500 font-medium leading-tight mt-0.5">
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
