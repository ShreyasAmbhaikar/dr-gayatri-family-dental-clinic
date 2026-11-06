"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

interface AppointmentCtaSectionProps {
  onOpenBooking: () => void;
}

export default function AppointmentCtaSection({ onOpenBooking }: AppointmentCtaSectionProps) {
  return (
    <section className="pt-10 pb-12 lg:pt-16 lg:pb-16 bg-white relative overflow-hidden">
      {/* Organic Flowing Cyan Wave sweeping across bottom-right meeting the footer */}
      <div className="absolute right-0 bottom-0 w-[58vw] max-w-[850px] h-[100%] pointer-events-none -z-0">
        <svg
          viewBox="0 0 700 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-right-bottom"
          preserveAspectRatio="none"
        >
          <path
            d="M80 320 C220 160 420 100 700 140 L700 500 L0 500 C0 440 30 370 80 320 Z"
            fill="#d8f5fa"
            opacity="0.85"
          />
          <path
            d="M200 360 C340 240 500 200 700 240 L700 500 L100 500 C130 430 160 380 200 360 Z"
            fill="#bdeef6"
            opacity="0.65"
          />
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtitle & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start pt-2">
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.18em] text-[#009eb8] uppercase block mb-3">
              READY FOR A HEALTHIER SMILE?
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] leading-[1.12] font-bold text-[#1d174e] mb-6">
              Book Your Appointment <br />
              <span className="text-[#1d174e]">Today</span>
            </h2>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-2 bg-[#38247b] hover:bg-[#2c1a63] text-white text-[13.5px] font-semibold px-7 py-3 rounded-full shadow-md shadow-indigo-950/20 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#1d174e] text-[13.5px] font-semibold px-6 py-3 rounded-full border border-slate-300 shadow-2xs transition-all duration-200 hover:border-cyan-400"
              >
                <Phone className="w-3.5 h-3.5 text-[#009eb8]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Tooth Ribbon Render & Handwritten Script (Seamless Blend) */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-60 sm:w-76 aspect-square [mask-image:radial-gradient(circle_at_center,black_60%,transparent_95%)]">
              <Image
                src="/images/tooth-ribbon.jpg"
                alt="Glossy 3D tooth wrapped in turquoise silk ribbon"
                fill
                priority
                className="object-contain filter drop-shadow-xl animate-float-subtle"
                sizes="(max-width: 768px) 240px, 304px"
              />
            </div>

            {/* Handwritten Script Accent to the Right matching Reference 1 */}
            <div className="hidden sm:block ml-4 select-none pointer-events-none transform -rotate-6">
              <span className="font-script text-2xl sm:text-[28px] text-[#007b92] font-bold tracking-wide whitespace-nowrap">
                Painless Care <br />
                <span className="text-[#1d174e]">Beautiful Smiles ♡</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
