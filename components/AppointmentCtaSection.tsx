"use client";

import React from "react";
import Image from "next/image";
import { CalendarDays, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import WaveDivider from "@/components/ui/WaveDivider";

interface AppointmentCtaSectionProps {
  onOpenBooking: () => void;
}

export default function AppointmentCtaSection({ onOpenBooking }: AppointmentCtaSectionProps) {
  return (
    <section id="appointment-cta" className="relative overflow-hidden pt-12 sm:pt-16">
      {/* Large pale-aqua blob behind the tooth */}
      <div aria-hidden="true" className="absolute right-0 top-0 w-[85%] lg:w-[58%] h-full pointer-events-none">
        <svg viewBox="0 0 800 500" preserveAspectRatio="none" className="w-full h-full block">
          <path d="M150,96 C270,14 480,46 640,24 C724,12 772,30 800,40 L800,500 L60,500 C16,380 40,176 150,96 Z" fill="#dcf3f9" opacity="0.75" />
        </svg>
      </div>

      {/* No z-index here: a stacking context would stop the tooth image from blending with the background */}
      <div className="page-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-4 lg:gap-6">
          <div className="lg:col-span-6 flex flex-col items-start pb-6 lg:pb-40 lg:self-center">
            <SectionHeading
              eyebrow="Ready for a Healthier Smile?"
              accent
              titleClassName="text-[30px] sm:text-[38px] lg:text-[40px] xl:text-[44px]"
              title={
                <>
                  Book Your Appointment <br />
                  Today
                </>
              }
            />

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button onClick={onOpenBooking} icon={<CalendarDays className="w-4 h-4" />} arrow>
                Book Appointment
              </Button>
              <Button href="tel:+917841930325" variant="outline" icon={<Phone className="w-4 h-4 text-purple" />}>
                Call Now
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            {/* Tooth artwork: edges dissolve into the page, bottom tucks under the footer wave */}
            <div className="relative w-[66%] sm:w-[58%] lg:w-[64%] lg:ml-[2%] aspect-[1024/700] -mb-8 sm:-mb-12 lg:-mb-16">
              <Image
                src="/images/appointment-tooth.jpg"
                alt="Glossy white tooth wrapped in a turquoise ribbon"
                fill
                sizes="(max-width: 1024px) 60vw, 420px"
                className="object-cover object-top edge-fade-mask mix-blend-multiply"
              />
            </div>

            <p
              aria-hidden="true"
              className="font-script absolute right-0 lg:right-[-2%] top-[16%] sm:top-[26%] -rotate-[8deg] text-navy text-[26px] sm:text-[34px] lg:text-[38px] leading-[1.05] select-none pointer-events-none"
            >
              Gentle Care. <br />
              <span className="pl-4">Beautiful Smiles.</span>
              <span className="text-purple text-[0.75em]"> ♡</span>
            </p>
          </div>
        </div>
      </div>

      {/* Layered aqua → teal → indigo waves into the footer */}
      <div className="relative z-20 h-28 sm:h-40 lg:h-48">
        <WaveDivider variant="footer" className="h-full" />
      </div>
    </section>
  );
}
