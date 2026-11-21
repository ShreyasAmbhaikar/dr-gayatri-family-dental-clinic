import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import Breadcrumbs, { type Crumb } from "@/components/site/Breadcrumbs";

/**
 * Hero for inner pages.
 * Supports:
 * - banner mode (full-width panoramic photo banner with matching overlay, heading, and simple buttons)
 * - standard/compact mode (clean aqua wash with breadcrumbs, eyebrow, H1, and optional art)
 */
export interface TrustStripItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  sub,
  actions,
  checks,
  trustStrip,
  art,
  compact = false,
  bannerImage,
  bannerAlt = "",
  bannerPosition = "50% 40%",
}: {
  breadcrumbs: Crumb[];
  eyebrow?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  actions?: React.ReactNode;
  checks?: React.ReactNode[];
  trustStrip?: TrustStripItem[];
  art?: React.ReactNode;
  compact?: boolean;
  bannerImage?: string;
  /** Alt text for the banner photo. Leave empty when the photo is purely decorative. */
  bannerAlt?: string;
  /** CSS object-position that keeps the photo's subject in frame. */
  bannerPosition?: string;
}) {
  if (bannerImage) {
    return (
      <div className="relative w-full">
        {/* Full-width Panoramic Hero Image Banner */}
        <section className="relative w-full min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] overflow-hidden flex items-center bg-[linear-gradient(100deg,#06242c_0%,#093c47_60%,#0b4a58_100%)]">
          {/*
            Banner photo. On phones and tablets it fills the banner behind a dark overlay; from lg up it sits in the
            right two-thirds and fades into the teal on the left, so any landscape photo works with the headline.
            Sized to what is displayed (about 68vw on desktop), which keeps the largest image request small.
          */}
          <div className="absolute inset-0 lg:left-auto lg:w-[68%] lg:max-w-[1180px] lg:[mask-image:linear-gradient(to_right,transparent_0%,#000_42%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_42%)]">
            <Image
              src={bannerImage}
              alt={bannerAlt}
              fill
              priority
              className="object-cover"
              style={{ objectPosition: bannerPosition }}
              sizes="(min-width: 1024px) 68vw, 100vw"
            />
          </div>

          {/* Teal gradient: strong behind the text on small screens, light on desktop where the mask does the fading */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#06242c]/95 via-[#093c47]/85 to-[#093c47]/55 lg:from-[#06242c]/90 lg:via-[#06242c]/60 lg:via-42% lg:to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#06242c]/50 to-transparent pointer-events-none"
          />

          {/* Hero Content Container */}
          <div className="page-container relative z-10 pt-[110px] sm:pt-[120px] lg:pt-[130px] pb-14 sm:pb-16 lg:pb-18 w-full">
            <div className="max-w-[720px] flex flex-col items-start">
              {/* Breadcrumb with light text on dark banner */}
              <div className="mb-4 sm:mb-5">
                <Breadcrumbs items={breadcrumbs} light />
              </div>

              {/* Eyebrow */}
              {eyebrow && (
                <span className="text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.22em] text-[#38d8e8] uppercase mb-2.5 inline-block">
                  {eyebrow}
                </span>
              )}

              {/* Main Heading H1 */}
              <h1 className="font-serif font-bold text-white text-[36px] sm:text-[46px] lg:text-[52px] xl:text-[56px] leading-[1.1] tracking-tight">
                {title}
              </h1>

              {/* Supporting line under the H1 (keyword-rich summary of the page) */}
              {sub && (
                <p className="mt-4 sm:mt-5 max-w-[600px] text-white/90 text-[15px] sm:text-[16.5px] leading-relaxed">{sub}</p>
              )}

              {/* Simple Action Buttons */}
              {actions && (
                <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
                  {actions}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Floating Trust Strip Bar directly below the banner */}
        {trustStrip && trustStrip.length > 0 && (
          <div className="page-container relative z-20 -mt-6 sm:-mt-8">
            <div className="rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-[0_12px_32px_-8px_rgba(14,154,167,0.18)] p-4 sm:p-5 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 sm:gap-2">
              {trustStrip.map((item, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="hidden sm:block w-px h-8 bg-slate-200 shrink-0" aria-hidden="true" />}
                  <div className="flex items-center gap-3 sm:gap-3.5 px-2">
                    <span className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
                      {item.icon}
                    </span>
                    <div className="flex flex-col leading-tight">
                      <span className="font-bold text-navy text-[13.5px] sm:text-[14px] tracking-tight whitespace-nowrap">
                        {item.title}
                      </span>
                      <span className="text-[12px] text-slate-600 font-medium whitespace-nowrap">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

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
            {eyebrow && (
              <span className="text-[11.5px] sm:text-[12.5px] font-semibold tracking-[0.24em] text-teal uppercase mb-2.5 inline-block">
                {eyebrow}
              </span>
            )}
            <h1 className="font-serif font-bold text-navy text-[34px] sm:text-[44px] lg:text-[48px] xl:text-[52px] leading-[1.1] tracking-[-0.015em]">
              {title}
            </h1>
            {sub && <p className="mt-4 text-[16px] sm:text-[17.5px] leading-relaxed text-body max-w-[600px]">{sub}</p>}
            {actions && <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">{actions}</div>}
            {trustStrip && trustStrip.length > 0 ? (
              <div className="mt-8 pt-5 border-t border-slate-200/80 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 sm:gap-2 max-w-[580px] w-full">
                {trustStrip.map((item, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <div className="hidden sm:block w-px h-7 bg-slate-300/80 shrink-0" aria-hidden="true" />}
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
                        {item.icon}
                      </span>
                      <div className="flex flex-col leading-tight">
                        <span className="font-bold text-navy text-[13px] sm:text-[13.5px] tracking-tight whitespace-nowrap">
                          {item.title}
                        </span>
                        <span className="text-[11.5px] sm:text-[12px] text-slate-600 font-medium whitespace-nowrap">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            ) : checks && checks.length > 0 ? (
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-x-5 lg:gap-x-6 gap-y-2 text-[12.5px] sm:text-[13px] font-medium text-body">
                {checks.map((c, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-teal stroke-[2.5]" aria-hidden="true" />
                    <span>{c}</span>
                  </span>
                ))}
              </div>
            ) : null}
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
