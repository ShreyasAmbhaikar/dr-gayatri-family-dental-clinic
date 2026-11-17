import React from "react";

/** Three separated dashes (navy, coral, cyan) used under some headings. */
export function AccentBar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`} aria-hidden="true">
      <span className="h-[3px] w-9 rounded-full bg-purple" />
      <span className="h-[3px] w-5 rounded-full bg-coral" />
      <span className="h-[3px] w-9 rounded-full bg-teal-bright/80" />
    </div>
  );
}

/** Wrap part of a heading to colour it teal. */
export function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-teal">{children}</span>;
}

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  accent?: boolean;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  accent = false,
  align = "left",
  className = "",
  titleClassName = "text-[30px] sm:text-[36px] lg:text-[40px]",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`flex flex-col ${centered ? "items-center text-center" : "items-start"} ${className}`}>
      <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] text-teal uppercase mb-3">
        {eyebrow}
      </span>
      <h2 className={`font-serif font-bold text-navy leading-[1.12] tracking-[-0.01em] ${titleClassName}`}>
        {title}
      </h2>
      {accent && <AccentBar className="mt-5" />}
    </div>
  );
}
