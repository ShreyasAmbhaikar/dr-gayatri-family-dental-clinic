import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TreatmentIcon from "@/components/site/TreatmentIcon";
import { treatmentPath, type TreatmentSummary } from "@/lib/treatments/summary";

/** Treatment card: white glass card with a single teal accent, matching the homepage cards. */
export default function TreatmentCard({ t }: { t: TreatmentSummary }) {
  return (
    <Link
      href={treatmentPath(t.slug)}
      className="group glass-card rounded-[24px] p-5 sm:p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_44px_-20px_rgba(14,154,167,0.4)] focus-visible:outline-2 focus-visible:outline-teal"
    >
      <span className="w-12 h-12 rounded-2xl grid place-items-center text-white bg-gradient-to-br from-[#1ab3c2] to-[#0e9aa7] shadow-[0_10px_20px_-8px_rgba(14,154,167,0.6)]">
        <TreatmentIcon icon={t.icon} className="w-6 h-6" />
      </span>
      <h3 className="font-serif font-bold text-navy text-[19px] sm:text-[20px] leading-tight">{t.name}</h3>
      <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-body flex-1">{t.short}</p>
      <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-teal group-hover:gap-2.5 transition-all">
        Learn more <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </span>
    </Link>
  );
}
