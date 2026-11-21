import React from "react";

interface WhyChooseSectionProps {
  treatmentName?: string;
  note?: string;
  id?: string;
  className?: string;
}

/**
 * 1. Experienced Dentist Icon
 * Refined medical/dental practitioner profile with stethoscope and care resonance arcs.
 */
function ExperiencedDentistIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Doctor silhouette with subtle accent fill */}
      <circle cx="10.5" cy="7.5" r="4" fill="currentColor" fillOpacity="0.14" />
      <path d="M3.5 22.5c0-4.2 3.2-6.8 7-6.8s7 2.6 7 6.8" />
      {/* Gentle stethoscope / medical collar */}
      <path d="M8 15.5v2a2.5 2.5 0 0 0 5 0v-2" strokeWidth="1.6" />
      <circle cx="10.5" cy="19.5" r="0.9" fill="currentColor" />
      {/* Experience & patient care radiating rings (matches reference attachment) */}
      <path d="M19.5 7.5a6.5 6.5 0 0 1 0 9" strokeWidth="1.9" opacity="0.95" />
      <path d="M22.8 5a10.5 10.5 0 0 1 0 14" strokeWidth="1.7" opacity="0.7" />
    </svg>
  );
}

/**
 * 2. Modern Technology Icon
 * Ultra-sharp digital dental diagnostic display with tooth X-ray & sensor grid.
 */
function ModernTechnologyIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Monitor chassis with subtle tint */}
      <rect
        x="2.5"
        y="3.5"
        width="23"
        height="16"
        rx="2.5"
        strokeWidth="1.85"
        fill="currentColor"
        fillOpacity="0.12"
      />
      {/* Stand and base */}
      <path d="M9.5 23.5h9M14 19.5v4" strokeWidth="1.85" />
      {/* Digital X-ray tooth graphic on screen */}
      <path
        d="M11 8.5c-.7 0-1.3.4-1.3 1.1 0 .9.3 1.8.6 2.9.3 1 .6 1 .9 1 .4 0 .6-.7.8-1.6.1-.4.4-.5.6-.5s.5.1.6.5c.2.9.4 1.6.8 1.6.3 0 .6 0 .9-1 .3-1.1.6-2 .6-2.9 0-.7-.6-1.1-1.3-1.1-.6 0-.8.4-1.2.6-.4-.2-.6-.6-1.2-.6Z"
        strokeWidth="1.6"
        fill="currentColor"
        fillOpacity="0.22"
      />
      {/* Digital sensor indicators */}
      <circle cx="6" cy="7" r="0.85" fill="currentColor" stroke="none" />
      <line x1="19.5" y1="7" x2="22.5" y2="7" strokeWidth="1.5" opacity="0.85" />
      <line x1="21" y1="9.8" x2="22.5" y2="9.8" strokeWidth="1.5" opacity="0.65" />
    </svg>
  );
}

/**
 * 3. Hygienic & Safe Icon
 * Contoured sterilization shield with certified checkmark.
 */
function HygienicSafeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Medical-grade shield */}
      <path
        d="M14 2.5 4.5 6.5v8c0 6.2 4.1 10.4 9.5 11.8 5.4-1.4 9.5-5.6 9.5-11.8v-8L14 2.5Z"
        strokeWidth="1.85"
        fill="currentColor"
        fillOpacity="0.14"
      />
      {/* Clean verification checkmark */}
      <path d="m9.5 14 3 3 6-6" strokeWidth="2.2" />
    </svg>
  );
}

/**
 * 4. Convenient Location Icon
 * Precision map marker pin with inner radar locator dot.
 */
function ConvenientLocationIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Teardrop map pin */}
      <path
        d="M14 2.5a8 8 0 0 0-8 8c0 5.4 7 13.5 7.4 14a.8.8 0 0 0 1.2 0c.4-.5 7.4-8.6 7.4-14a8 8 0 0 0-8-8Z"
        strokeWidth="1.85"
        fill="currentColor"
        fillOpacity="0.14"
      />
      {/* Inner locator target */}
      <circle cx="14" cy="10.5" r="2.8" strokeWidth="1.85" fill="currentColor" fillOpacity="0.25" />
    </svg>
  );
}

export const WHY_CHOOSE_ITEMS = [
  {
    icon: ExperiencedDentistIcon,
    title: "Experienced Dentist",
    desc: "Skilled and gentle treatment with a patient-friendly approach",
  },
  {
    icon: ModernTechnologyIcon,
    title: "Modern Technology",
    desc: "Digital X-rays & advanced tools for higher accuracy",
  },
  {
    icon: HygienicSafeIcon,
    title: "Hygienic & Safe",
    desc: "Strict sterilization and infection control protocols",
  },
  {
    icon: ConvenientLocationIcon,
    title: "Convenient Location",
    desc: "Easily accessible in Hadapsar with flexible appointment slots",
  },
];

/**
 * Exact match to the user's reference attachment:
 * - Rich deep purple/indigo gradient container with rounded-3xl borders
 * - Left column: "WHY CHOOSE" cyan badge, Serif "Dr. Gayatri – Trusted Dental Care in Hadapsar"
 * - Vertical divider line on desktop
 * - Right column: 2x2 grid of modern frosted cards with upgraded crisp icons
 */
export default function WhyChooseSection({
  treatmentName = "root canal treatment",
  note,
  id = "why-us",
  className = "",
}: WhyChooseSectionProps) {
  const defaultNote = `Experience expert care, advanced technology, and a patient-first approach for safe and successful ${treatmentName.toLowerCase()}.`;
  const bodyText = note || defaultNote;

  return (
    <section id={id} className={`relative scroll-mt-20 py-12 sm:py-14 lg:py-16 ${className}`}>
      <div className="page-container">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[linear-gradient(135deg,#3c1c9c_0%,#301584_50%,#250f6c_100%)] border border-white/15 shadow-[0_22px_50px_-16px_rgba(40,15,110,0.65)] p-6 sm:p-9 lg:p-10 xl:p-11 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            {/* Left Column: Exactly matching Image Attachment */}
            <div className="lg:col-span-5 lg:pr-8 flex flex-col items-start">
              <span className="text-teal-bright text-[11px] sm:text-[12px] font-bold tracking-[0.24em] uppercase mb-2.5 inline-block">
                WHY CHOOSE
              </span>

              <h2 className="font-serif font-bold text-white text-[26px] sm:text-[30px] lg:text-[33px] xl:text-[35px] leading-[1.16]">
                Dr. Gayatri – Trusted<br />
                Dental Care <span className="text-teal-bright">in Hadapsar</span>
              </h2>

              <p className="mt-3.5 text-white/85 text-[13.5px] sm:text-[14.5px] leading-relaxed max-w-md">
                {bodyText}
              </p>
            </div>

            {/* Vertical Divider Line matching Attachment */}
            <div className="hidden lg:flex lg:col-span-1 justify-center">
              <div className="w-px h-44 bg-white/20 self-center" />
            </div>

            {/* Right Column: 2x2 Grid with high-fidelity modern icons & copy */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {WHY_CHOOSE_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[18px] bg-white/[0.10] hover:bg-white/[0.16] border border-white/15 p-4 flex items-start gap-3.5 transition-all duration-200"
                  >
                    <div className="flex-shrink-0 text-teal-bright mt-0.5">
                      <Icon className="w-6 h-6 sm:w-6.5 sm:h-6.5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-[14px] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[12px] text-white/80 mt-1 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
