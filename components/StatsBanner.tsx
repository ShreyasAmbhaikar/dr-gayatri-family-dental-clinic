"use client";

import React from "react";
import { Trophy, Star, Users, ShieldCheck } from "lucide-react";

export default function StatsBanner() {
  return (
    <section className="py-6 sm:py-8 bg-white relative -mt-4 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#dff5f8] via-[#e8f8fb] to-[#dff5f8] rounded-3xl sm:rounded-full py-8 sm:py-6 px-6 sm:px-10 border border-[#bcebf4]/80 shadow-lg shadow-cyan-950/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-cyan-200/60">
            {/* Stat 1: 10+ Years of Care */}
            <div className="flex items-center gap-4 sm:px-4 pt-4 sm:pt-0 first:pt-0">
              <div className="w-13 h-13 rounded-2xl bg-white/90 shadow-sm border border-cyan-100 flex items-center justify-center flex-shrink-0 text-[#00a4c4]">
                <Trophy className="w-7 h-7 stroke-[1.8]" />
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1c1549] leading-none mb-1">
                  10+
                </div>
                <div className="text-xs font-bold text-[#1c1549] leading-tight">
                  Years of Care
                </div>
                <div className="text-[11px] text-slate-500 font-medium leading-tight">
                  Trusted by families in Viman Nagar
                </div>
              </div>
            </div>

            {/* Stat 2: 4.9/5 Patient Rating */}
            <div className="flex items-center gap-4 sm:px-4 pt-4 sm:pt-0">
              <div className="w-13 h-13 rounded-2xl bg-white/90 shadow-sm border border-amber-100 flex items-center justify-center flex-shrink-0 text-amber-400">
                <Star className="w-7 h-7 fill-amber-400 stroke-amber-400" />
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1c1549] leading-none mb-1">
                  4.9/5
                </div>
                <div className="text-xs font-bold text-[#1c1549] leading-tight">
                  Patient Rating
                </div>
                <div className="text-[11px] text-slate-500 font-medium leading-tight">
                  Based on 350+ Google reviews
                </div>
              </div>
            </div>

            {/* Stat 3: 1000+ Happy Smiles */}
            <div className="flex items-center gap-4 sm:px-4 pt-4 sm:pt-0">
              <div className="w-13 h-13 rounded-2xl bg-white/90 shadow-sm border border-cyan-100 flex items-center justify-center flex-shrink-0 text-[#00a4c4]">
                <Users className="w-7 h-7 stroke-[1.8]" />
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1c1549] leading-none mb-1">
                  1000+
                </div>
                <div className="text-xs font-bold text-[#1c1549] leading-tight">
                  Happy Smiles
                </div>
                <div className="text-[11px] text-slate-500 font-medium leading-tight">
                  Across all age groups
                </div>
              </div>
            </div>

            {/* Stat 4: Patient-First Approach */}
            <div className="flex items-center gap-4 sm:px-4 pt-4 sm:pt-0">
              <div className="w-13 h-13 rounded-2xl bg-white/90 shadow-sm border border-cyan-100 flex items-center justify-center flex-shrink-0 text-[#00a4c4]">
                <ShieldCheck className="w-7 h-7 stroke-[1.8]" />
              </div>
              <div>
                <div className="text-[15px] sm:text-base font-bold text-[#1c1549] leading-tight mb-0.5">
                  Patient-First <br className="hidden lg:inline" /> Approach
                </div>
                <div className="text-[11px] text-slate-500 font-medium leading-tight">
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
