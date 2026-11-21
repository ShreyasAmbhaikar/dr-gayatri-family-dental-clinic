import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TreatmentIcon from "@/components/site/TreatmentIcon";
import { treatmentPath, type TreatmentSummary, type Category } from "@/lib/treatments/summary";

interface CategoryStyle {
  iconGradient: string;
  ambientGlow: string;
}

const CATEGORY_STYLES: Record<Category, CategoryStyle> = {
  Restorative: {
    iconGradient: "from-[#0e9aa7] to-[#1ab3c2]",
    ambientGlow: "from-teal/20 via-cyan-400/10 to-transparent",
  },
  Orthodontic: {
    iconGradient: "from-[#3a1f8f] to-[#6366f1]",
    ambientGlow: "from-purple/20 via-indigo-400/10 to-transparent",
  },
  Preventive: {
    iconGradient: "from-[#059669] to-[#10b981]",
    ambientGlow: "from-emerald-500/20 via-teal/10 to-transparent",
  },
  Surgical: {
    iconGradient: "from-[#0284c7] to-[#38bdf8]",
    ambientGlow: "from-sky-500/20 via-cyan-400/10 to-transparent",
  },
  Cosmetic: {
    iconGradient: "from-[#7c3aed] to-[#ec4899]",
    ambientGlow: "from-violet-500/20 via-pink-400/10 to-transparent",
  },
  Pediatric: {
    iconGradient: "from-[#d97706] to-[#f59e0b]",
    ambientGlow: "from-amber-500/20 via-yellow-400/10 to-transparent",
  },
  Emergency: {
    iconGradient: "from-[#e11d48] to-[#f43f5e]",
    ambientGlow: "from-rose-500/20 via-red-400/10 to-transparent",
  },
};

/**
 * Creative, interactive treatment card with category theming, 
 * clean non-repetitive badges, and fluid 3D micro-interactions.
 */
export default function TreatmentCard({ t }: { t: TreatmentSummary }) {
  const style = CATEGORY_STYLES[t.category] || CATEGORY_STYLES.Restorative;

  return (
    <Link
      href={treatmentPath(t.slug)}
      className="group relative overflow-hidden rounded-[24px] bg-white/95 backdrop-blur-md p-5 sm:p-5.5 border border-slate-200/80 shadow-[0_4px_18px_-4px_rgba(20,24,40,0.05)] hover:border-teal/40 hover:ring-1 hover:ring-teal/25 hover:shadow-[0_22px_44px_-12px_rgba(14,154,167,0.2),0_4px_16px_rgba(15,23,42,0.04)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-teal"
    >
      {/* Ambient background hover glow originating from bottom-right */}
      <div
        className={`absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-gradient-to-br ${style.ambientGlow} blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none scale-75 group-hover:scale-125`}
        aria-hidden="true"
      />

      <div>
        {/* Top Header: Themed Icon Box */}
        <div className="flex items-center justify-between gap-3">
          <span
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl grid place-items-center text-white bg-gradient-to-br ${style.iconGradient} shadow-[0_6px_16px_-3px_rgba(0,0,0,0.18)] ring-4 ring-transparent group-hover:ring-teal/15 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_10px_22px_-3px_rgba(14,154,167,0.4)] transition-all duration-300`}
          >
            <TreatmentIcon icon={t.icon} className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="font-serif font-bold text-navy text-[18px] sm:text-[19px] leading-snug mt-4 group-hover:text-teal transition-colors tracking-tight line-clamp-2">
          {t.name}
        </h3>

        <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-slate-600 mt-2 flex-1">
          {t.short}
        </p>
      </div>

      {/* Footer Row: Action link and interactive circular arrow button */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[12.5px] sm:text-[13px] font-bold text-slate-700 group-hover:text-teal transition-colors">
          Explore Treatment
        </span>
        <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 group-hover:bg-gradient-to-r group-hover:from-teal group-hover:to-[#1ab3c2] group-hover:text-white grid place-items-center transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-[0_4px_12px_rgba(14,154,167,0.35)] shadow-2xs">
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
