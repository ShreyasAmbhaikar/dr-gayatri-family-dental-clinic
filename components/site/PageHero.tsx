import React from "react";
import { Check } from "lucide-react";
import Breadcrumbs, { type Crumb } from "@/components/site/Breadcrumbs";

/**
 * Hero for inner pages. Mirrors the root canal page hero: aqua wash and wave edge, breadcrumb,
 * eyebrow, serif H1 with a teal highlight, intro, actions, a short check row and art on the right.
 */
export default function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  sub,
  actions,
  checks,
  art,
  compact = false,
}: {
  breadcrumbs: Crumb[];
  eyebrow: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  actions?: React.ReactNode;
  checks?: React.ReactNode[];
  art?: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <section className="relative isolate">
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#eef9fc_0%,#f7fcfe_55%,#fdfeff_100%)]" />
        <div className="absolute -right-[8%] top-[4%] w-[62%] h-[92%] rounded-full bg-[radial-gradient(closest-side,rgba(190,234,243,0.55),rgba(190,234,243,0)_100%)]" />
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-[55px] sm:h-[75px] lg:h-[95px]">
          <path d="M0,78 C260,108 470,70 760,84 C1040,98 1240,56 1440,26 L1440,120 L0,120 Z" fill="#ffffff" opacity="0.55" />
          <path d="M0,96 C300,118 540,92 820,100 C1080,108 1260,78 1440,60 L1440,120 L0,120 Z" fill="#fdfeff" />
        </svg>
      </div>

      <div className={`page-container relative pt-[86px] sm:pt-[94px] lg:pt-[100px] ${compact ? "pb-12 lg:pb-14" : "pb-12 sm:pb-14 lg:pb-16"}`}>
        <div className="mb-5 sm:mb-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className={`${art ? "lg:col-span-7 max-w-[690px]" : "lg:col-span-9 max-w-[820px]"} flex flex-col items-start`}>
            <span className="text-[11.5px] sm:text-[12.5px] font-semibold tracking-[0.24em] text-teal uppercase mb-2.5 inline-block">
              {eyebrow}
            </span>
            <h1 className="font-serif font-bold text-navy text-[34px] sm:text-[44px] lg:text-[48px] xl:text-[52px] leading-[1.1] tracking-[-0.015em]">
              {title}
            </h1>
            {sub && <p className="mt-4 text-[16px] sm:text-[17.5px] leading-relaxed text-body max-w-[600px]">{sub}</p>}
            {actions && <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">{actions}</div>}
            {checks && checks.length > 0 && (
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-x-5 lg:gap-x-6 gap-y-2 text-[12.5px] sm:text-[13px] font-medium text-body">
                {checks.map((c, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-teal stroke-[2.5]" aria-hidden="true" />
                    <span>{c}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          {art && (
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-[85%] max-w-[390px] lg:w-full lg:max-w-[430px]">{art}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
