"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Calendar, Phone } from "lucide-react";

interface AppointmentCtaSectionProps {
  onOpenBooking: () => void;
}

export default function AppointmentCtaSection({ onOpenBooking }: AppointmentCtaSectionProps) {
  return (
    <section
      id="appointment-cta"
      className="relative bg-gradient-to-b from-[#eef9fb] via-[#f7fcfe] to-[#e4f6fa] pt-14 sm:pt-16 lg:pt-20 pb-0 overflow-hidden"
    >
      {/* Background Layer 1: Expansive Organic Light-Aqua Wave extending across the right */}
      <div className="absolute right-0 top-0 w-full sm:w-[85%] lg:w-[68%] h-[95%] pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 1000 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-right"
          preserveAspectRatio="none"
        >
          {/* Broad pale aqua organic wave */}
          <path
            d="M 220 50 C 460 -40, 760 70, 1000 15 L 1000 600 L 0 600 C 60 420, 110 200, 220 50 Z"
            fill="#dcf5fa"
            opacity="0.75"
          />
          {/* Subtle secondary cyan wave */}
          <path
            d="M 380 120 C 620 60, 840 150, 1000 90 L 1000 600 L 140 600 C 220 440, 280 260, 380 120 Z"
            fill="#c4f0f9"
            opacity="0.55"
          />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Heading, Accent Bar & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start pt-2 pb-6 lg:pb-16">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-[#009eb8] uppercase block mb-3">
              READY FOR A HEALTHIER SMILE?
            </span>

            <h2 className="font-serif text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.12] font-bold text-[#1d174e] mb-4">
              Book Your Appointment <br />
              <span className="text-[#1d174e]">Today</span>
            </h2>

            {/* 3-segment color accent bar matching Reference Screenshot exactly */}
            <div className="h-[3.5px] w-14 rounded-full mb-6 flex overflow-hidden">
              <div className="w-1/3 bg-[#38247b]" />
              <div className="w-1/3 bg-[#f43f5e]" />
              <div className="w-1/3 bg-[#00b4d8]" />
            </div>

            {/* Action Buttons matching Reference Screenshot */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              {/* Primary Purple Pill CTA */}
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#38247b] to-[#4c2f9e] hover:from-[#2d1b63] hover:to-[#38247b] text-white text-[13.5px] sm:text-[14px] font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-indigo-950/25 transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Calendar className="w-4 h-4 stroke-[2]" />
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary Call Now Pill Button */}
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 text-[#1d174e] text-[13.5px] sm:text-[14px] font-semibold px-7 py-3.5 rounded-full border-[1.5px] border-[#38247b] shadow-2xs transition-all duration-200 hover:border-cyan-500 hover:scale-[1.01]"
              >
                <Phone className="w-4 h-4 text-[#38247b]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Floating 3D Tooth Centerpiece with Original Turquoise Ribbon & Cursive Text */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[540px] flex items-center justify-center lg:justify-end">
              {/* 3D Glossy Tooth Wrapped in Turquoise Silk Ribbon (Supplied Asset) */}
              <div className="relative w-[340px] sm:w-[420px] lg:w-[480px] aspect-[1024/819] flex-shrink-0 z-10 transition-transform duration-300 hover:scale-[1.01]">
                <Image
                  src="/images/appointment-tooth.jpg"
                  alt="3D Tooth with Cyan Ribbon and Sparkles"
                  fill
                  priority
                  unoptimized
                  className="object-contain filter drop-shadow-2xl"
                  sizes="(max-width: 768px) 340px, (max-width: 1024px) 420px, 480px"
                />
              </div>

              {/* Pure HTML/CSS Cursive Handwriting Typography beside the Tooth */}
              <div className="absolute right-0 sm:right-2 lg:-right-4 top-[22%] sm:top-[26%] select-none pointer-events-none transform -rotate-3 z-20">
                <span className="font-script text-2xl sm:text-[30px] lg:text-[34px] text-[#1d174e] font-bold tracking-wide leading-tight block drop-shadow-xs">
                  Painless Care. <br />
                  <span className="text-[#009eb8]">Beautiful Smiles. ♡</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MULTI-LAYERED ORGANIC WAVE TRANSITION INTO DARK FOOTER */}
      {/* 
        Layer 1: Broad Pale Aqua Wave Ribbon (#bceff5 / #dcf5fa)
        Layer 2: Vibrant Saturated Turquoise Wave Ribbon (#00b4d8 / #20c4d0)
        Layer 3: Deep Ocean Cyan/Teal Transition Band (#087f94 / #007a99)
        Layer 4: Deep Navy/Purple Upper Footer Edge (#1c0e44) leading seamlessly into Footer
      */}
      <div className="w-full relative mt-[-40px] sm:mt-[-60px] lg:mt-[-80px] leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24 sm:h-36 md:h-44 lg:h-52 object-cover"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Broad Light Aqua Wave */}
          <path
            d="M 0 95 C 220 40, 440 110, 700 75 C 960 45, 1180 95, 1340 50 C 1390 35, 1420 40, 1440 48 L 1440 220 L 0 220 Z"
            fill="#bceff5"
            opacity="0.85"
          />

          {/* Layer 2: Saturated Turquoise Curved Band */}
          <path
            d="M 0 120 C 180 75, 380 135, 620 108 C 880 75, 1080 35, 1280 60 C 1360 70, 1410 52, 1440 60 L 1440 220 L 0 220 Z"
            fill="#00b4d8"
          />

          {/* Layer 3: Deep Ocean Cyan/Teal Transition Band */}
          <path
            d="M 0 142 C 220 115, 430 155, 680 130 C 940 102, 1140 68, 1330 88 C 1385 96, 1420 82, 1440 88 L 1440 220 L 0 220 Z"
            fill="#087f94"
          />

          {/* Layer 4: Deep Navy/Purple Wave leading into Complete Footer */}
          <path
            d="M 0 160 C 160 195, 290 140, 460 152 C 660 172, 860 155, 1060 120 C 1220 95, 1350 110, 1440 120 L 1440 220 L 0 220 Z"
            fill="#1c0e44"
          />
        </svg>
      </div>
    </section>
  );
}
