"use client";

import React from "react";
import { ClipboardPen, ShieldPlus, ShieldCheck, HeartHandshake } from "lucide-react";
import Button from "@/components/ui/Button";
import OrganicImage from "@/components/ui/OrganicImage";
import ScriptBubble from "@/components/ui/ScriptBubble";
import SectionHeading, { Highlight } from "@/components/ui/SectionHeading";

interface AboutSectionProps {
  onOpenBooking: () => void;
}

const FEATURES = [
  { icon: ClipboardPen, label: ["Personalized", "Care Plans"] },
  { icon: ShieldPlus, label: ["Hygienic & Safe", "Environment"] },
  { icon: ShieldCheck, label: ["Modern", "Technology"] },
  { icon: HeartHandshake, label: ["Comfortable", "Experience"] },
];

function DoctorPortrait({ compact = false }: { compact?: boolean }) {
  return (
    <OrganicImage
      src="/images/doctor/dr-gayatri-lead-dentist.webp"
      alt="Dr. Gayatri - Chief Dental Surgeon & Family Dentist at Dr. Gayatri's Family Dental Clinic in Hadapsar, Pune"
      shape="about"
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="w-full h-full"
      imgClassName="object-[50%_20%]"
      layers={[
        { className: "bg-aqua-300/60", blur: true, scale: 1.02 },
        { className: "bg-gradient-to-bl from-[#d7f3f9] via-[#eaf8fb] to-[#bfe9f3]", x: compact ? "8px" : "16px", y: compact ? "-8px" : "-14px" },
      ]}
      decor={
        <>
          <path d="M0,0.6 C0.08,0.76 0.24,0.86 0.46,0.9 C0.58,0.92 0.66,0.94 0.7,0.97 C0.5,1 0.22,0.99 0,0.96 Z" fill="#1ab3c2" opacity="0.85" />
          <path d="M0,0.72 C0.12,0.86 0.3,0.93 0.52,0.95 C0.6,0.96 0.64,0.97 0.66,0.985 C0.44,1 0.2,0.995 0,0.985 Z" fill="#0e9aa7" />
          <path d="M0.55,0.95 C0.72,0.93 0.86,0.86 0.95,0.72 C0.96,0.8 0.93,0.88 0.86,0.93 C0.78,0.98 0.66,0.985 0.55,0.95 Z" fill="#a6e0ec" opacity="0.85" />
        </>
      }
    >
      <ScriptBubble
        shape="blob"
        lines={["Care", "Compassion", "Confidence"]}
        className={
          compact
            ? "absolute left-[4%] top-[10%] w-[140px] h-[108px]"
            : "absolute left-[5%] top-[12%] w-[200px] h-[156px] xl:w-[220px] xl:h-[170px]"
        }
        textClassName={compact ? "text-[21px]" : "text-[28px] xl:text-[31px]"}
      />
    </OrganicImage>
  );
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  return (
    <section id="about" className="relative scroll-mt-20 lg:min-h-[600px] xl:min-h-[640px] flex items-center">
      {/* Desktop portrait bleeding off the left edge */}
      <div className="hidden lg:block absolute left-0 -top-12 bottom-0 w-[50%] max-w-[900px]">
        <DoctorPortrait />
      </div>

      <div className="page-container relative z-10 py-8 lg:py-16">
        <div className="lg:hidden relative w-[calc(100%+1rem)] sm:w-[calc(100%+1.5rem)] -ml-4 sm:-ml-6 aspect-[1.25] max-w-[680px] mb-10">
          <DoctorPortrait compact />
        </div>

        <div className="lg:ml-[52%] flex flex-col items-start">
          <SectionHeading
            eyebrow="About Us"
            titleClassName="text-[30px] sm:text-[38px] lg:text-[38px] xl:text-[44px]"
            title={
              <>
                Your Partner in <br />
                <Highlight>Lifelong Oral Health</Highlight>
              </>
            }
          />

          <p className="text-body text-[14.5px] sm:text-[15.5px] leading-relaxed mt-5 mb-8 max-w-[540px]">
            At Dr. Gayatri&apos;s Family Dental Clinic, we combine advanced technology with a compassionate approach to provide high-quality and painless dental care for you and your family. Our focus is on building long-term relationships and helping you achieve healthy, confident smiles at every stage of life.
          </p>

          <Button href="/about" arrow className="mb-10 px-8">
            Know More About Us
          </Button>

          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-[580px]">
            {FEATURES.map(({ icon: Icon, label }) => (
              <li key={label[0]} className="flex flex-col items-center text-center">
                <Icon className="w-8 h-8 text-teal stroke-[1.5] mb-2.5" />
                <span className="text-[12.5px] font-medium text-body leading-snug">
                  {label[0]} <br /> {label[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
