"use client";

import { Phone, ShieldCheck, Users, CalendarDays } from "lucide-react";
import Button from "@/components/ui/Button";
import OrganicImage from "@/components/ui/OrganicImage";
import ScriptBubble from "@/components/ui/ScriptBubble";
import { ToothIcon } from "@/components/ui/icons";
import { SITE } from "@/lib/site";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

const TRUST_ITEMS = [
  { icon: ToothIcon, label: ["Gentle", "Treatments"] },
  { icon: ShieldCheck, label: ["Modern", "Technology"] },
  { icon: Users, label: ["All Age Groups", "Welcome"] },
];

/** Photo blob with its aqua ribbon, teal bottom wave and floating accents. */
function HeroVisual({ compact = false }: { compact?: boolean }) {
  return (
    <OrganicImage
      src="/images/hero-patient.webp"
      alt="Smiling patient relaxing in a dental chair at Dr. Gayatri's Family Dental Clinic"
      shape="hero"
      priority
      sizes="(max-width: 1024px) 100vw, 55vw"
      className="w-full h-full"
      imgClassName="object-[58%_38%]"
      layers={[
        { className: "bg-aqua-300/70", blur: true, scale: 1.02 },
        { className: "bg-gradient-to-br from-[#c6edf6] via-[#e2f6fa] to-[#a6e0ec]", x: compact ? "-8px" : "-18px", y: compact ? "6px" : "14px" },
      ]}
      decor={
        <>
          <path d="M0.3,1 C0.56,0.99 0.8,0.93 1,0.79 L1,1 Z" fill="#7fd6e6" opacity="0.75" />
          <path d="M0.46,1 C0.68,0.99 0.86,0.95 1,0.87 L1,1 Z" fill="#1ab3c2" opacity="0.9" />
          <path d="M0.64,1 C0.8,0.995 0.92,0.97 1,0.93 L1,1 Z" fill="#0e9aa7" />
        </>
      }
    >
      <ScriptBubble
        lines={["Your", "Smile", "Our Priority"]}
        className={
          compact
            ? "absolute left-[1%] top-[10%] w-[115px] h-[115px]"
            : "absolute left-[0%] top-[14%] w-[165px] h-[165px] xl:w-[190px] xl:h-[190px]"
        }
        textClassName={compact ? "text-[19px]" : "text-[25px] xl:text-[28px]"}
      />
    </OrganicImage>
  );
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Desktop photo blob positioned with clear clearance below the header's Book Appointment button */}
      <div className="hidden lg:block absolute right-0 top-[52px] -bottom-[35px] w-[55%] xl:w-[54%] max-w-[960px]">
        <HeroVisual />
      </div>

      <div className="page-container relative z-10">
        {/* Content positioned comfortably downwards */}
        <div className="lg:w-[56%] xl:w-[53%] flex flex-col items-start pt-28 sm:pt-32 lg:pt-32 xl:pt-36 pb-12 lg:pb-16">
          {/* The H1 carries the primary keywords; the large slogan below keeps the approved design. */}
          <h1 className="font-sans text-[12px] sm:text-[13px] font-semibold tracking-[0.24em] text-teal uppercase mb-3.5">
            Dentist &amp; Dental Clinic in Hadapsar, Pune
          </h1>

          <p className="font-serif font-bold text-navy text-[42px] sm:text-[52px] lg:text-[56px] xl:text-[64px] leading-[1.05] tracking-[-0.015em] mb-4">
            Healthy <br />
            Smiles for <br />
            <span className="text-teal">
              a Brighter <br />
              Tomorrow
            </span>
          </p>

          <p className="text-body text-[15.5px] sm:text-[17px] max-w-[440px] mb-6 leading-relaxed">
            Gentle, modern and personalised dental care for you and your family in Amanora Park Town, Hadapsar, Pune.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-9 lg:mb-11">
            <Button onClick={onOpenBooking} icon={<CalendarDays className="w-4 h-4" />} arrow>
              Book Appointment
            </Button>
            <Button href={`tel:${SITE.phone}`} variant="outline" icon={<Phone className="w-4 h-4 text-purple" />}>
              Call Now
            </Button>
          </div>

          {/* Trust points with generous spacing above */}
          <ul className="flex items-center gap-0 divide-x divide-slate-300/70 pt-1">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <li
                key={label[0]}
                className="flex items-center gap-2 px-3 sm:px-4.5 first:pl-0 last:pr-0"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal stroke-[1.6] flex-shrink-0" />
                <span className="text-[11.5px] sm:text-[12px] font-medium text-body leading-tight">
                  {label[0]} <br /> {label[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile / tablet photo blob */}
        <div className="lg:hidden relative w-[calc(100%+1rem)] sm:w-full aspect-[1.12] max-w-[560px] ml-auto -mr-4 sm:mr-0 mb-8">
          <HeroVisual compact />
        </div>
      </div>
    </section>
  );
}
