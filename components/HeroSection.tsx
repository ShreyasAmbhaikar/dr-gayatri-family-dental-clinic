"use client";

import React from "react";
import { ArrowRight, Phone, ShieldCheck, Check, Users, Calendar } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative pt-24 pb-14 lg:pt-28 lg:pb-16 overflow-hidden bg-white min-h-[640px] lg:min-h-[720px] flex items-center"
    >
      {/* Desktop Full-Bleed Fluid Organic Wave Visual (Bleeds to Far-Right Viewport Edge) */}
      <div className="hidden lg:block absolute top-0 right-0 w-[55vw] max-w-[880px] h-full z-0 pointer-events-none">
        <div className="relative w-full h-full pointer-events-auto">
          <svg
            viewBox="0 0 840 740"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover object-right"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Organic Wave Clip for Patient Photo */}
              <clipPath id="heroWaveClip">
                <path d="M 180 0 C 300 25, 480 70, 640 70 C 740 70, 800 35, 840 0 L 840 740 L 240 740 C 140 680, 60 550, 25 410 C -10 250, 60 95, 180 0 Z" />
              </clipPath>

              {/* Soft Luminous Aqua Gradient for Aura */}
              <linearGradient id="auraGrad" x1="0" y1="200" x2="840" y2="700" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#d5f4f9" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#e8fafc" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#bfeef6" stopOpacity="0.95" />
              </linearGradient>

              {/* Vibrant Ocean Turquoise Wave Gradient */}
              <linearGradient id="waveGrad" x1="140" y1="560" x2="840" y2="740" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#009eb8" />
                <stop offset="50%" stopColor="#00b4d8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>

            {/* Layer 1: Soft Cyan Aura expanding to the left */}
            <path
              d="M 130 0 C 260 15, 460 55, 620 55 C 720 55, 780 25, 840 0 L 840 740 L 180 740 C 80 660, -5 530, -40 380 C -65 220, 20 75, 130 0 Z"
              fill="url(#auraGrad)"
            />

            {/* Layer 2: Main Patient Photo clipped by organic wave */}
            <image
              href="/images/hero-patient.jpg"
              x="20"
              y="20"
              width="820"
              height="720"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#heroWaveClip)"
            />

            {/* Layer 3: Subtle soft bottom shadow fade connecting to turquoise wave */}
            <path
              d="M 160 560 C 300 580, 540 630, 840 560 L 840 740 L 240 740 Z"
              fill="black"
              opacity="0.08"
              clipPath="url(#heroWaveClip)"
            />

            {/* Layer 4: Sweeping Vibrant Turquoise Wave Ribbon at Bottom-Right (Smooth Taper) */}
            <path
              d="M 140 710 C 260 620, 520 620, 840 520 L 840 740 L 140 740 Z"
              fill="url(#waveGrad)"
            />

            {/* Layer 5: Light Cyan Crest Highlight on the wave */}
            <path
              d="M 220 715 C 340 650, 580 660, 840 570 L 840 740 L 220 740 Z"
              fill="#38bdf8"
              opacity="0.5"
            />
          </svg>

          {/* Handwritten Script Accent Overlaid on the Left Contour in Soft Aqua Bubble */}
          <div className="absolute top-[28%] left-1 sm:left-3 z-20 select-none pointer-events-none transform -rotate-6">
            <div className="bg-[#e4f8fb]/92 backdrop-blur-md px-5 py-3 rounded-[36px] shadow-sm border border-white/80">
              <span className="font-script text-[26px] sm:text-[32px] text-[#008399] font-bold block leading-none">
                Your
              </span>
              <span className="font-script text-[36px] sm:text-[44px] text-[#008399] font-bold block leading-none -mt-1">
                Smile
              </span>
              <span className="font-script text-[20px] sm:text-[24px] text-[#1d174e] font-semibold block leading-none mt-1 ml-1">
                Our Priority ♡
              </span>
            </div>
          </div>

          {/* Floating Badge Card on Top-Right matching Reference Image 2 (Positioned safely below navbar) */}
          <div className="absolute top-20 right-6 sm:right-10 z-30 max-w-[210px] sm:max-w-[220px] bg-white rounded-2xl p-4 shadow-xl shadow-cyan-950/14 border border-cyan-100/90 animate-float-subtle">
            {/* Badge Header: Icon + Experience Painless Care + Dual-Color Accent Bar */}
            <div className="flex items-center gap-2.5 mb-2.5 pb-2 border-b border-cyan-100/70">
              <div className="w-8 h-8 rounded-xl bg-[#e5f8fb] text-[#009eb8] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                  <path d="M7 3C4.24 3 2 5.24 2 8c0 4.42 2.5 7.5 3.5 11 .5 1.75 2 2 3.5 2 1.3 0 2.2-.8 3-2 .8 1.2 1.7 2 3 2 1.5 0 3-.25 3.5-2 1-3.5 3.5-6.58 3.5-11 0-2.76-2.24-5-5-5-2.2 0-3.5 1.5-4.5 3-1-1.5-2.3-3-4.5-3z" />
                </svg>
              </div>
              <div>
                <h2 className="text-[13px] font-extrabold text-[#1d174e] leading-tight tracking-tight">
                  Experience
                </h2>
                <span className="text-[11.5px] font-bold text-[#1d174e] block leading-tight mt-0.5">
                  Painless Care
                </span>
                {/* Dual-color accent line (Cyan + Coral/Pink) */}
                <div className="h-[2.5px] w-8 rounded-full mt-1.5 flex overflow-hidden">
                  <div className="w-1/2 bg-[#009eb8]" />
                  <div className="w-1/2 bg-[#f472b6]" />
                </div>
              </div>
            </div>

            {/* 4 Checklist Items with Solid Cyan Badges */}
            <ul className="space-y-1.5 text-[11.5px] text-slate-700 font-semibold">
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#009eb8] text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Relieves Pain</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#009eb8] text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Restores Function</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#009eb8] text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Improves Oral Health</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#009eb8] text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Long-Lasting Results</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Container with Left Column Content */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 w-full relative z-10">
        <div className="lg:w-[50%] xl:w-[48%] flex flex-col items-start pt-2 sm:pt-4">
          {/* Eyebrow */}
          <div className="inline-block mb-4">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] text-[#009eb8] uppercase">
              GENTLE CARE. CONFIDENT SMILES.
            </span>
          </div>

          {/* Main Headline matching Reference Image 2 exactly */}
          <h1 className="font-serif text-[46px] sm:text-[56px] lg:text-[62px] xl:text-[70px] leading-[1.04] tracking-tight font-bold text-[#1d174e] mb-5">
            Healthy <br />
            Smiles for <br />
            <span className="text-[#009eb8] font-normal italic font-serif">
              a Brighter <br className="hidden sm:inline" />
              Tomorrow
            </span>
          </h1>

          {/* Description Subtitle */}
          <p className="text-slate-600 text-[15px] sm:text-[16.5px] max-w-[460px] mb-8 leading-relaxed font-normal">
            Modern, painless and personalized dental care for you and your family.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            {/* Purple Book Appointment Button with Calendar Icon */}
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center justify-center gap-2.5 bg-[#38247b] hover:bg-[#2b1a64] text-white text-[14px] font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg shadow-indigo-950/20 transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-white/90" />
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* White Call Now Button with Purple Phone Icon */}
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-[#1d174e] text-[14px] font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-slate-300 shadow-2xs transition-all duration-200 hover:border-cyan-400 hover:shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#38247b]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Trust Indicators matching Reference Image 2 */}
          <div className="pt-2 w-full flex items-center justify-between sm:justify-start sm:gap-10 max-w-lg">
            {/* Painless Treatments */}
            <div className="flex items-center gap-2.5">
              <div className="text-[#009eb8] flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-none stroke-current stroke-2"
                >
                  <path d="M7 3C4.24 3 2 5.24 2 8c0 4.42 2.5 7.5 3.5 11 .5 1.75 2 2 3.5 2 1.3 0 2.2-.8 3-2 .8 1.2 1.7 2 3 2 1.5 0 3-.25 3.5-2 1-3.5 3.5-6.58 3.5-11 0-2.76-2.24-5-5-5-2.2 0-3.5 1.5-4.5 3-1-1.5-2.3-3-4.5-3z" />
                </svg>
              </div>
              <div className="text-[12px] sm:text-[12.5px] font-semibold text-[#1d174e] leading-tight">
                Painless <br /> Treatments
              </div>
            </div>

            {/* Modern Technology */}
            <div className="flex items-center gap-2.5">
              <div className="text-[#009eb8] flex-shrink-0">
                <ShieldCheck className="w-5 h-5 stroke-2" />
              </div>
              <div className="text-[12px] sm:text-[12.5px] font-semibold text-[#1d174e] leading-tight">
                Modern <br /> Technology
              </div>
            </div>

            {/* All Age Groups Welcome */}
            <div className="flex items-center gap-2.5">
              <div className="text-[#009eb8] flex-shrink-0">
                <Users className="w-5 h-5 stroke-2" />
              </div>
              <div className="text-[12px] sm:text-[12.5px] font-semibold text-[#1d174e] leading-tight">
                All Age Groups <br /> Welcome
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Fallback Visual */}
        <div className="lg:hidden mt-10 relative w-full h-[460px] sm:h-[520px]">
          <svg
            viewBox="0 0 840 740"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M 180 0 C 300 25, 480 70, 640 70 C 740 70, 800 35, 840 0 L 840 740 L 240 740 C 140 680, 60 550, 25 410 C -10 250, 60 95, 180 0 Z"
              fill="url(#auraGrad)"
            />
            <image
              href="/images/hero-patient.jpg"
              x="20"
              y="20"
              width="820"
              height="720"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#heroWaveClip)"
            />
            <path
              d="M 140 710 C 260 620, 520 620, 840 520 L 840 740 L 140 740 Z"
              fill="url(#waveGrad)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
