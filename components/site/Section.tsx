import React from "react";
import { Check } from "lucide-react";
import { AccentBar, Highlight } from "@/components/ui/SectionHeading";

export { AccentBar, Highlight };

/** Body copy: identical scale to the homepage and root canal page. */
export const BODY = "text-body text-[15px] sm:text-[16px] xl:text-[16.5px] leading-relaxed";

/** Small uppercase teal label above a heading. */
export function Eyebrow({ children, light = false, className = "" }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <span
      className={`inline-block text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] uppercase mb-2 ${
        light ? "text-teal-bright" : "text-teal"
      } ${className}`}
    >
      {children}
    </span>
  );
}

/** Section heading block: eyebrow, serif title, and the three-color accent bar from the homepage. */
export function SectionTitle({
  eyebrow,
  title,
  id,
  accent = true,
  align = "left",
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  id?: string;
  accent?: boolean;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  const center = align === "center";
  return (
    <div className={`flex flex-col ${center ? "items-center text-center" : "items-start"} ${className}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={`font-serif font-bold leading-[1.15] tracking-[-0.01em] text-[28px] sm:text-[34px] lg:text-[36px] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {accent && <AccentBar className="mt-3.5 mb-2" />}
    </div>
  );
}

/** Teal tick used in every checklist (same as the root canal page). */
export function CheckItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <li className={`flex items-start gap-3 text-body text-[14.5px] sm:text-[15.5px] leading-snug ${className}`}>
      <span className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Check className="w-3.5 h-3.5 text-teal stroke-[2.8]" aria-hidden="true" />
      </span>
      <span>{children}</span>
    </li>
  );
}

type Tone = "plain" | "tint" | "aqua";

const TONES: Record<Tone, string> = {
  plain: "",
  tint: "bg-slate-50/50",
  aqua: "bg-slate-50/50",
};

/** Standard section: homepage rhythm (py-14 / sm:py-16 / lg:py-18) with optional tinted background. */
export function Band({
  children,
  tone = "plain",
  id,
  labelledBy,
  className = "",
}: {
  children: React.ReactNode;
  tone?: Tone;
  id?: string;
  labelledBy?: string;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative scroll-mt-20 py-14 sm:py-16 lg:py-18 ${TONES[tone]} ${className}`}>
      <div className="page-container">{children}</div>
    </section>
  );
}
