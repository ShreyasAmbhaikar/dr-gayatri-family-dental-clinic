"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

type Variant = "primary" | "teal" | "white" | "outline";

const VARIANTS: Record<Variant, string> = {
  primary: "btn-primary-grad text-white shadow-[0_12px_24px_-10px_rgba(75,43,181,0.65)]",
  teal: "bg-[#0e9aa7] hover:bg-[#11b5c4] text-white shadow-[0_12px_24px_-6px_rgba(14,154,167,0.65)]",
  white: "bg-white text-navy shadow-[0_14px_30px_-12px_rgba(0,20,70,0.55)]",
  outline: "bg-white/90 text-navy border-[1.5px] border-purple/60 hover:bg-white hover:border-purple",
};

/** Navigates directly to the Contact Us page. Safe to use in both Server and Client Components. */
export default function BookButton({
  treatment,
  variant = "primary",
  children = "Book Appointment",
  className = "",
  icon = true,
}: {
  treatment?: string;
  variant?: Variant;
  children?: React.ReactNode;
  className?: string;
  icon?: boolean;
}) {
  const href = treatment ? `/contact?treatment=${encodeURIComponent(treatment)}` : "/contact";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-7 sm:px-8 h-[50px] text-[14.5px] sm:text-[15px] font-semibold whitespace-nowrap hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer ${VARIANTS[variant]} ${className}`}
    >
      {icon && <CalendarDays className={`w-[18px] h-[18px] ${variant === "primary" ? "" : "text-purple"}`} aria-hidden="true" />}
      <span>{children}</span>
      <ArrowRight
        className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${variant === "primary" ? "" : "text-purple"}`}
        aria-hidden="true"
      />
    </Link>
  );
}
