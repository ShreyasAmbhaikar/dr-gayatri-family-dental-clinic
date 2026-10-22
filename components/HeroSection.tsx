"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, Sparkles, Check, Heart } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#f0fbfd] via-[#f7fdfe] to-white"
    >
      {/* Decorative Organic Background Curves */}
      <div className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-bl from-cyan-100/60 via-teal-50/40 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-50/50 blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs sm:text-sm font-bold tracking-[0.18em] text-[#009eb8] uppercase">
                GENTLE CARE, CONFIDENT SMILES.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] leading-[1.12] tracking-tight font-bold text-[#1d174e] mb-6">
              Healthy Smiles for <br className="hidden sm:inline" />
              <span className="text-[#009eb8] italic font-normal">
                a Brighter Tomorrow
              </span>
            </h1>

            {/* Description Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mb-8 leading-relaxed font-normal">
              Modern, painless and personalized dental care for you and your family in Viman Nagar, Pune.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-2.5 bg-[#372379] hover:bg-[#2c1a63] text-white text-[15px] font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-indigo-950/20 transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#372379]"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2.5 bg-white/90 hover:bg-white text-[#2c1a63] text-[15px] font-semibold px-6 py-3.5 rounded-full border border-slate-200/90 shadow-sm transition-all duration-200 hover:shadow-md hover:border-cyan-400 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                <Phone className="w-4 h-4 text-[#009eb8]" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Trust Mini-Indicators */}
            <div className="pt-6 border-t border-cyan-100/80 w-full grid grid-cols-3 gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center flex-shrink-0 text-[#009eb8]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-[12px] sm:text-xs font-semibold text-[#1c1549] leading-tight">
                  Painless <br /> Treatments
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center flex-shrink-0 text-[#009eb8]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-[12px] sm:text-xs font-semibold text-[#1c1549] leading-tight">
                  Modern <br /> Technology
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center flex-shrink-0 text-[#009eb8]">
                  <Heart className="w-4 h-4" />
                </div>
                <div className="text-[12px] sm:text-xs font-semibold text-[#1c1549] leading-tight">
                  All-Age Groups <br /> Welcome
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Patient, Floating Glass Badge, and Cursive Text */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end">
            {/* Visual Container */}
            <div className="relative w-full max-w-[500px]">
              {/* Organic Soft Teal Backdrop Behind Image */}
              <div className="absolute inset-0 -top-4 -right-4 bg-gradient-to-tr from-[#9be5f1] via-[#c4f2f9] to-[#ebfbfd] rounded-t-[140px] rounded-b-[40px] transform rotate-1 scale-[1.03] -z-10 shadow-inner" />

              {/* Main Image Frame with Smooth Arch Mask */}
              <div className="relative overflow-hidden rounded-t-[140px] rounded-b-[36px] shadow-2xl shadow-cyan-900/10 border-4 border-white aspect-[4/5] bg-slate-100">
                <Image
                  src="/images/hero-patient.jpg"
                  alt="Radiant patient smiling during comfortable dental checkup at Dr. Gayatri's Family Dental Clinic"
                  fill
                  priority
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                />

                {/* Subtle soft gradient overlay at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Handwritten Script Accent Overlaid */}
              <div className="absolute top-10 -left-6 sm:-left-10 z-20 transform -rotate-6 select-none pointer-events-none">
                <span className="font-script text-3xl sm:text-4xl text-[#007b92] drop-shadow-sm font-bold tracking-wide">
                  Your Smile <br />
                  <span className="text-[#1c1549] ml-4 font-normal">Our Priority ♡</span>
                </span>
              </div>

              {/* Floating Glassmorphism Badge Card on the Right */}
              <div className="absolute top-12 -right-3 sm:-right-8 z-30 max-w-[210px] sm:max-w-[225px] glass-badge p-4 rounded-2xl animate-float shadow-xl">
                <div className="flex items-center gap-2.5 mb-2.5 pb-2 border-b border-cyan-100/60">
                  <div className="w-8 h-8 rounded-xl bg-[#00a4c4]/10 text-[#009eb8] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M12 2C8.5 2 6 4.5 6 7.5c0 3.8 2 6.5 3 9.5.5 1.5 1.5 2 3 2s2.5-.5 3-2c1-3 3-5.7 3-9.5C18 4.5 15.5 2 12 2zm0 15c-.8 0-1.4-.4-1.8-1.5-.9-2.7-2.7-5.3-2.7-8C7.5 5.3 9.5 3.5 12 3.5s4.5 1.8 4.5 4c0 2.7-1.8 5.3-2.7 8-.4 1.1-1 1.5-1.8 1.5z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-[12.5px] font-bold text-[#1c1549] leading-tight">
                      Experience
                    </h2>
                    <span className="text-[11px] font-semibold text-[#009eb8]">
                      Painless Care
                    </span>
                  </div>
                </div>

                <ul className="space-y-1.5 text-[11px] text-slate-600 font-medium">
                  <li className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-cyan-100 text-[#008ba3] flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Relieves Pain</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-cyan-100 text-[#008ba3] flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Restores Function</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-cyan-100 text-[#008ba3] flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Improves Oral Health</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-cyan-100 text-[#008ba3] flex items-center justify-center flex-shrink-0">
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
