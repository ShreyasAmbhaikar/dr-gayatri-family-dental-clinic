"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ClipboardCheck, ShieldCheck, Sparkles, Smile } from "lucide-react";

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  return (
    <section id="about" className="py-14 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Soft Ambient Cyan Wave in Background */}
      <div className="absolute top-10 left-0 w-80 sm:w-96 h-[500px] pointer-events-none -z-0 overflow-hidden">
        <svg
          viewBox="0 0 380 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-left"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 C140 40, 220 160, 200 320 C180 440, 90 490, 0 500 Z"
            fill="#e2f7fb"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Doctor Portrait in Organic Shaped Frame with Cursive Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[420px] sm:max-w-[440px]">
              {/* Layered Cyan Organic Background Blob */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#9fe4f1] via-[#cbf2f8] to-[#edfcfd] rounded-[55px_75px_60px_85px]/[70px_60px_85px_65px] transform -rotate-2 -z-10 shadow-lg shadow-cyan-900/5" />

              {/* Doctor High-Resolution Photo Container with Organic Curve Flow */}
              <div className="relative rounded-[45px_70px_50px_75px]/[60px_50px_75px_55px] overflow-hidden border-4 border-white shadow-xl shadow-cyan-950/10 aspect-[4/4.5] bg-slate-100">
                <Image
                  src="/images/dr-gayatri.jpg"
                  alt="Dr. Gayatri - Chief Dental Surgeon & Family Dentist in Pune"
                  fill
                  priority
                  className="object-cover object-[center_top] hover:scale-103 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 440px"
                />
              </div>

              {/* Pure CSS/HTML Cursive Badge (Not a Screenshot) floating on the left */}
              <div className="absolute top-6 -left-4 sm:-left-8 z-20 transform -rotate-6 select-none bg-white/95 backdrop-blur-md rounded-[24px] px-5 py-3.5 shadow-xl border border-white/90">
                <span className="font-script text-2xl sm:text-[28px] text-[#1d174e] font-bold leading-tight block">
                  Care <br />
                  Compassion <br />
                  <span className="text-[#009eb8]">Confidence ♡</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, CTA & 4 Clean Vector Badges */}
          <div className="lg:col-span-7 flex flex-col items-start pt-2">
            {/* Eyebrow */}
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#009eb8] uppercase block mb-3">
              ABOUT US
            </span>

            {/* Heading: Line 1 Navy, Line 2 Cyan */}
            <h2 className="font-serif text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.14] font-bold mb-4">
              <span className="text-[#1d174e] block">Your Partner in</span>
              <span className="text-[#009eb8] block">Lifelong Oral Health</span>
            </h2>

            {/* 3-segment color accent bar */}
            <div className="h-[3.5px] w-14 rounded-full mb-6 flex overflow-hidden">
              <div className="w-1/3 bg-[#38247b]" />
              <div className="w-1/3 bg-[#f43f5e]" />
              <div className="w-1/3 bg-[#00b4d8]" />
            </div>

            {/* Narrative text */}
            <p className="text-[#556070] text-[13.5px] sm:text-[14.5px] leading-relaxed mb-6 max-w-xl font-normal">
              At Dr. Gayatri&apos;s Family Dental Clinic, we combine advanced technology with a compassionate approach to provide high-quality and painless dental care for you and your family. Our focus is on building long-term relationships and helping you achieve healthy, confident smiles at every stage of life.
            </p>

            {/* CTA Button */}
            <div className="mb-8">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-2 bg-[#38247b] hover:bg-[#2c1a63] text-white text-[13px] font-semibold px-7 py-3 rounded-full shadow-md shadow-indigo-950/20 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* 4 Clean Vector Badges in Row (Lucide Vector Icons, Not Screenshots) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-3 border-t border-slate-100 w-full">
              {/* Feature 1 */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-cyan-50/80 text-[#009eb8] flex items-center justify-center mb-2 shadow-2xs">
                  <ClipboardCheck className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-[12px] font-bold text-[#1d174e] leading-snug">
                  Personalized <br /> Care Plans
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-cyan-50/80 text-[#009eb8] flex items-center justify-center mb-2 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-[12px] font-bold text-[#1d174e] leading-snug">
                  Hygienic &amp; Safe <br /> Environment
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-cyan-50/80 text-[#009eb8] flex items-center justify-center mb-2 shadow-2xs">
                  <Sparkles className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-[12px] font-bold text-[#1d174e] leading-snug">
                  Modern <br /> Technology
                </span>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-cyan-50/80 text-[#009eb8] flex items-center justify-center mb-2 shadow-2xs">
                  <Smile className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-[12px] font-bold text-[#1d174e] leading-snug">
                  Comfortable <br /> Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
