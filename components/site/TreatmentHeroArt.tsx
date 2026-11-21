import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import type { IconKey } from "@/lib/treatments/summary";

/**
 * Hero art for inner pages: creative photo/banner presentation with glowing ambient aura,
 * modern rounded container, and floating frosted glass fact chips.
 */
export default function TreatmentHeroArt({
  icon,
  image,
  photo,
  facts,
}: {
  icon: IconKey;
  image?: string;
  photo?: string;
  facts: [string, string][];
}) {
  const displayPhoto = photo || "/images/rct/generated-patient-smiling.jpg";

  return (
    <div className="relative w-full max-w-[420px] mx-auto aspect-[1.05]">
      {/* Ambient layered glowing aura */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-teal/25 via-cyan-400/20 to-purple/20 blur-2xl opacity-75 -z-10 pointer-events-none"
      />

      {/* Main framed photo card with modern rounded shape */}
      <div className="relative w-full h-full rounded-[30px] sm:rounded-[34px] overflow-hidden border-2 border-white/95 shadow-[0_20px_50px_-15px_rgba(14,154,167,0.32)] ring-4 ring-teal/10">
        <Image
          src={displayPhoto}
          alt="Dental treatment at Dr. Gayatri's Family Dental Clinic Hadapsar"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 420px"
          className="object-cover object-center"
        />

        {/* Subtle protective vignette overlay */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent pointer-events-none" />

        {/* Top-Right Floating Pill Badge */}
        {facts[0] && (
          <div className="absolute top-3.5 right-3.5 glass-card rounded-full px-3.5 py-1.5 border border-white/95 shadow-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11.5px] sm:text-[12px] font-bold text-navy">{facts[0][1]}</span>
          </div>
        )}

        {/* Bottom-Left Floating Frosted Glass Card */}
        {facts[1] && (
          <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:right-auto glass-card rounded-2xl p-3 border border-white/95 shadow-lg flex items-center gap-3 backdrop-blur-md">
            <span className="w-9 h-9 rounded-xl bg-teal text-white flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(14,154,167,0.4)]">
              <Sparkles className="w-4.5 h-4.5 stroke-[2.2]" />
            </span>
            <div>
              <p className="text-[12.5px] sm:text-[13px] font-bold text-navy leading-tight">{facts[1][1]}</p>
              <p className="text-[11px] text-slate-600 mt-0.5">{facts[1][0]}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
