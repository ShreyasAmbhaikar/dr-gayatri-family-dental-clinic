"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, Check, Users } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative pt-24 pb-10 lg:pt-32 lg:pb-14 overflow-hidden bg-white"
    >
      {/* Massive Organic Fluid Turquoise/Cyan Wave in the Background (Top-Right) */}
      <div className="absolute top-0 right-0 w-[55vw] max-w-[800px] h-[95%] pointer-events-none -z-0 overflow-hidden">
        <svg
          viewBox="0 0 700 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-right-top"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Soft Cyan Glow */}
          <path
            d="M260 0 C460 0 700 100 700 340 C700 580 520 780 340 800 C200 760 100 560 140 380 C180 200 160 0 260 0 Z"
            fill="#e1f7fb"
            opacity="0.85"
          />
          {/* Layer 2: Vibrant Turquoise Accent Sweep */}
          <path
            d="M380 0 C540 40 700 180 700 400 C700 620 560 760 400 780 C280 740 240 580 280 400 C310 220 280 0 380 0 Z"
            fill="#bdeff7"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy, Action Buttons, Trust Chips */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start pt-2 sm:pt-4">
            {/* Eyebrow */}
            <div className="inline-block mb-3">
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.18em] text-[#009eb8] uppercase">
                GENTLE CARE, CONFIDENT SMILES.
              </span>
            </div>

            {/* Main Headline matching Reference 1 typography */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] xl:text-[60px] leading-[1.08] tracking-tight font-bold text-[#1d174e] mb-5">
              Healthy <br />
              Smiles for <br />
              <span className="text-[#009eb8] font-normal italic">
                a Brighter <br className="hidden sm:inline" />
                Tomorrow
              </span>
            </h1>

            {/* Description Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base max-w-md mb-7 leading-relaxed font-normal">
              Modern, painless and personalized dental care for you and your family.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-2 bg-[#38247b] hover:bg-[#2c1a63] text-white text-[13.5px] font-semibold px-6 sm:px-7 py-3 rounded-full shadow-md shadow-indigo-950/20 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#271a5f] text-[13.5px] font-semibold px-5 sm:px-6 py-3 rounded-full border border-slate-300 shadow-2xs transition-all duration-200 hover:border-cyan-400"
              >
                <Phone className="w-3.5 h-3.5 text-[#009eb8]" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Trust Indicators matching Reference 1 */}
            <div className="pt-3 w-full grid grid-cols-3 gap-2 sm:gap-4 max-w-lg">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-50/90 text-[#009eb8] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                    <path d="M7 3C4.24 3 2 5.24 2 8c0 4.42 2.5 7.5 3.5 11 .5 1.75 2 2 3.5 2 1.3 0 2.2-.8 3-2 .8 1.2 1.7 2 3 2 1.5 0 3-.25 3.5-2 1-3.5 3.5-6.58 3.5-11 0-2.76-2.24-5-5-5-2.2 0-3.5 1.5-4.5 3-1-1.5-2.3-3-4.5-3z" />
                  </svg>
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#1d174e] leading-snug">
                  Painless <br /> Treatments
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-50/90 text-[#009eb8] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#1d174e] leading-snug">
                  Modern <br /> Technology
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-50/90 text-[#009eb8] flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#1d174e] leading-snug">
                  All-Age Groups <br /> Welcome
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Patient, Floating Glass Badge, and Cursive Text */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] sm:max-w-[490px]">
              {/* Organic Soft Turquoise Glow framing the arch */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#a6eaf4] via-[#cbf2f8] to-[#edfcfd] rounded-t-[200px] rounded-b-[50px] transform -rotate-1 -z-10 shadow-sm" />

              {/* Main Patient Photo Arch Container */}
              <div className="relative overflow-hidden rounded-t-[190px] rounded-b-[44px] shadow-xl shadow-cyan-950/10 border-4 border-white aspect-[4/4.7] bg-slate-100">
                <Image
                  src="/images/hero-patient.jpg"
                  alt="Happy patient smiling comfortably in treatment chair at Dr. Gayatri's Family Dental Clinic"
                  fill
                  priority
                  className="object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 490px"
                />

                {/* Subtle soft bottom aqua fade */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none" />
              </div>

              {/* Handwritten Script Accent Overlaid on Top-Left */}
              <div className="absolute top-6 -left-3 sm:-left-6 z-20 transform -rotate-6 select-none pointer-events-none">
                <span className="font-script text-2xl sm:text-[32px] text-[#007b92] drop-shadow-xs font-bold tracking-wide">
                  Your Smile <br />
                  <span className="text-[#1d174e] ml-2 font-normal text-xl sm:text-2xl">Our Priority ♡</span>
                </span>
              </div>

              {/* Floating Badge Card on Top-Right matching Reference 1 */}
              <div className="absolute top-6 right-2 sm:right-3 z-30 max-w-[200px] sm:max-w-[215px] bg-white/98 border border-cyan-100/90 p-3.5 sm:p-4 rounded-2xl shadow-xl shadow-cyan-950/15 animate-float-subtle">
                <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-cyan-100">
                  <div className="w-7 h-7 rounded-lg bg-[#e3f7fa] text-[#009eb8] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path d="M7 3C4.24 3 2 5.24 2 8c0 4.42 2.5 7.5 3.5 11 .5 1.75 2 2 3.5 2 1.3 0 2.2-.8 3-2 .8 1.2 1.7 2 3 2 1.5 0 3-.25 3.5-2 1-3.5 3.5-6.58 3.5-11 0-2.76-2.24-5-5-5-2.2 0-3.5 1.5-4.5 3-1-1.5-2.3-3-4.5-3z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-[12px] font-extrabold text-[#1d174e] leading-tight">
                      Experience
                    </h2>
                    <span className="text-[10px] font-bold text-[#009eb8]">
                      Painless Care
                    </span>
                  </div>
                </div>

                <ul className="space-y-1.5 text-[10.5px] text-slate-700 font-semibold">
                  <li className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#009eb8] text-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Relieves Pain</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#009eb8] text-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Restores Function</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#009eb8] text-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Improves Oral Health</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#009eb8] text-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Long-Lasting Results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
