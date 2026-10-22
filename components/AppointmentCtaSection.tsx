"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

interface AppointmentCtaSectionProps {
  onOpenBooking: () => void;
}

export default function AppointmentCtaSection({ onOpenBooking }: AppointmentCtaSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl sm:rounded-[44px] bg-gradient-to-br from-[#dcf4f8] via-[#eaf7fb] to-[#f4fcfd] p-8 sm:p-14 lg:p-16 border border-[#bfe8f1] shadow-xl shadow-cyan-950/5 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute -bottom-10 left-10 w-72 h-72 bg-indigo-100/40 rounded-full blur-2xl pointer-events-none -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Heading, Subtitle & Action Buttons */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs sm:text-sm font-bold tracking-[0.18em] text-[#009eb8] uppercase block mb-3">
                READY FOR A HEALTHIER SMILE?
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-bold text-[#1d174e] mb-6">
                Book Your Appointment <br />
                <span className="text-[#372379]">Today</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
                Take the first step toward a radiant, pain-free smile. Schedule your consultation with Dr. Gayatri today in Viman Nagar.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="group inline-flex items-center gap-2.5 bg-[#372379] hover:bg-[#2c1a63] text-white text-[15px] font-semibold px-8 py-4 rounded-full shadow-lg shadow-indigo-950/20 transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2.5 bg-white/90 hover:bg-white text-[#2c1a63] text-[15px] font-semibold px-7 py-4 rounded-full border border-slate-200/90 shadow-sm transition-all duration-200 hover:shadow-md hover:border-cyan-400 active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 text-[#009eb8]" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Right Column: 3D Tooth Ribbon Render & Handwritten Script */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              <div className="relative w-64 sm:w-80 aspect-square">
                <Image
                  src="/images/tooth-ribbon.jpg"
                  alt="3D Molar Tooth wrapped in teal ribbon representing gentle care and bright smiles"
                  fill
                  className="object-contain filter drop-shadow-2xl animate-float"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>

              {/* Handwritten Script Accent */}
              <div className="mt-2 text-center select-none pointer-events-none transform -rotate-3">
                <span className="font-script text-2xl sm:text-3xl text-[#007b92] font-bold tracking-wide">
                  Painless Care, <br className="sm:hidden" />
                  <span className="text-[#1c1549]">Beautiful Smiles ♡</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
