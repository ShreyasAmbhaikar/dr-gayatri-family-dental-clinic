"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, FileText, ShieldCheck, Cpu, Smile } from "lucide-react";

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  return (
    <section id="about" className="py-14 lg:py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Doctor Portrait with Organic Backdrop & Cursive Text */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[380px]">
              {/* Organic Soft Turquoise/Cyan Background Blob expanding to left and bottom */}
              <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-tr from-[#88e0f0] via-[#bfeff7] to-[#e8fbfd] rounded-[60px] sm:rounded-[80px] transform -rotate-4 -z-10 shadow-sm" />

              {/* Doctor Image Container with Organic Smooth Arch */}
              <div className="relative rounded-[50px] sm:rounded-[60px] overflow-hidden border-4 border-white shadow-xl shadow-cyan-950/10 aspect-[4/4.7] bg-slate-100">
                <div className="relative w-full h-[125%] -translate-y-2">
                  <Image
                    src="/images/dr-gayatri.jpg"
                    alt="Dr. Gayatri - Chief Dental Surgeon & Family Dentist in Viman Nagar, Pune"
                    fill
                    priority
                    className="object-cover object-[center_top] hover:scale-103 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                </div>
              </div>

              {/* Handwritten Script Accent Overlaid on Top-Left */}
              <div className="absolute top-5 -left-5 sm:-left-8 z-20 transform -rotate-10 select-none pointer-events-none">
                <span className="font-script text-2xl sm:text-[32px] text-[#007b92] drop-shadow-xs font-bold tracking-wide">
                  Care <br />
                  Compassion <br />
                  <span className="text-[#1d174e]">Confidence ♡</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, CTA & 4 Badges */}
          <div className="lg:col-span-7 flex flex-col items-start pt-2">
            {/* Eyebrow */}
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.18em] text-[#009eb8] uppercase block mb-3">
              ABOUT US
            </span>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] font-bold text-[#1d174e] mb-4">
              Your Partner in <br />
              <span className="text-[#009eb8]">Lifelong Oral Health</span>
            </h2>

            {/* Narrative text from Reference 1 */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              At Dr. Gayatri&apos;s Family Dental Clinic, we combine advanced technology with a compassionate approach to provide high-quality and painless dental care for you and your family. Our focus is on building long-term relationships and helping you achieve healthy, confident smiles at every stage of life.
            </p>

            {/* CTA Button */}
            <div className="mb-8">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-2 bg-[#38247b] hover:bg-[#2c1a63] text-white text-[13.5px] font-semibold px-6 py-3 rounded-full shadow-md shadow-indigo-950/20 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* 4 Feature Badges in Row matching Reference 1 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-5 border-t border-slate-100 w-full">
              {/* Badge 1 */}
              <div className="flex flex-col items-center text-center p-2 rounded-xl">
                <div className="w-9 h-9 rounded-xl bg-cyan-50 text-[#009eb8] flex items-center justify-center mb-2">
                  <FileText className="w-4 h-4 stroke-[2]" />
                </div>
                <span className="text-[11px] font-bold text-[#1d174e] leading-snug">
                  Personalized <br /> Care Plans
                </span>
              </div>

              {/* Badge 2 */}
              <div className="flex flex-col items-center text-center p-2 rounded-xl">
                <div className="w-9 h-9 rounded-xl bg-cyan-50 text-[#009eb8] flex items-center justify-center mb-2">
                  <ShieldCheck className="w-4 h-4 stroke-[2]" />
                </div>
                <span className="text-[11px] font-bold text-[#1d174e] leading-snug">
                  Hygienic &amp; Safe <br /> Environment
                </span>
              </div>

              {/* Badge 3 */}
              <div className="flex flex-col items-center text-center p-2 rounded-xl">
                <div className="w-9 h-9 rounded-xl bg-cyan-50 text-[#009eb8] flex items-center justify-center mb-2">
                  <Cpu className="w-4 h-4 stroke-[2]" />
                </div>
                <span className="text-[11px] font-bold text-[#1d174e] leading-snug">
                  Modern <br /> Technology
                </span>
              </div>

              {/* Badge 4 */}
              <div className="flex flex-col items-center text-center p-2 rounded-xl">
                <div className="w-9 h-9 rounded-xl bg-cyan-50 text-[#009eb8] flex items-center justify-center mb-2">
                  <Smile className="w-4 h-4 stroke-[2]" />
                </div>
                <span className="text-[11px] font-bold text-[#1d174e] leading-snug">
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
