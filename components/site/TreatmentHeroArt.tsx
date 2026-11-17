import React from "react";
import Image from "next/image";
import TreatmentIcon from "@/components/site/TreatmentIcon";
import { ToothIcon } from "@/components/ui/icons";
import type { IconKey } from "@/lib/treatments/summary";

function Chip({ label, value, className = "" }: { label: string; value: string; className?: string }) {
  return (
    <div className={`glass-card rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 ${className}`}>
      <p className="text-[10.5px] uppercase tracking-[0.1em] font-semibold text-body/80">{label}</p>
      <p className="text-[13px] sm:text-[14px] font-bold text-navy leading-tight">{value}</p>
    </div>
  );
}

/**
 * Hero art for inner pages: layered aqua circles, a purple orbit, a glass tile holding either the
 * homepage's 3D treatment art or a line icon, and three floating fact chips (a tidy row on phones).
 */
export default function TreatmentHeroArt({
  icon,
  image,
  facts,
}: {
  icon: IconKey;
  image?: string;
  facts: [string, string][];
}) {
  return (
    <div>
      <div className="relative aspect-square w-full" role="presentation">
        <div className="absolute inset-0 rounded-full border border-[#bfeaf2]/80 bg-[radial-gradient(closest-side,rgba(214,244,249,0.6),rgba(214,244,249,0))]" />
        <div className="absolute inset-[7%] rounded-full bg-[radial-gradient(circle_at_32%_28%,#e6f9fc_0%,#c4eff5_58%,#a9e4ee_100%)]" />
        <div className="absolute inset-[7%] rounded-full ring-2 ring-white/50" />
        {/* purple orbit with a coral dot */}
        <div className="absolute inset-[1%] rounded-full border border-dashed border-purple/25" />
        <span className="absolute right-[10%] bottom-[22%] w-5 h-5 rounded-full bg-[linear-gradient(135deg,#6a47d6,#3a1f8f)] shadow-[0_8px_16px_-6px_rgba(75,43,181,0.7)]" />

        <div className="absolute inset-[24%] rounded-[36px] glass-card grid place-items-center animate-float-subtle bg-[linear-gradient(145deg,rgba(255,255,255,0.95),rgba(230,248,251,0.9))]">
          {image ? (
            <div className="relative w-[82%] h-[82%]">
              <Image src={image} alt="" fill sizes="220px" className="object-contain drop-shadow-[0_14px_18px_rgba(14,154,167,0.25)]" />
            </div>
          ) : (
            <div className="relative">
              <TreatmentIcon icon={icon} className="w-[72px] h-[72px] sm:w-[96px] sm:h-[96px] text-teal" strokeWidth={1.35} />
              <ToothIcon className="absolute -right-4 -bottom-3 w-8 h-8 sm:w-9 sm:h-9 text-purple-light bg-white rounded-full p-1.5 shadow-md" />
            </div>
          )}
        </div>

        <div className="hidden sm:block">
          <Chip label={facts[0][0]} value={facts[0][1]} className="absolute left-[-3%] top-[9%]" />
          <Chip label={facts[1][0]} value={facts[1][1]} className="absolute right-[-4%] top-[58%]" />
          <Chip label={facts[2][0]} value={facts[2][1]} className="absolute left-[2%] bottom-[5%]" />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2.5 sm:hidden">
        {facts.map(([label, value]) => (
          <Chip key={label} label={label} value={value} />
        ))}
      </div>
    </div>
  );
}
