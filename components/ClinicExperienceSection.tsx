"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, X, Leaf, ChevronLeft, ChevronRight, Images } from "lucide-react";
import Button from "@/components/ui/Button";
import OrganicImage from "@/components/ui/OrganicImage";
import SectionHeading from "@/components/ui/SectionHeading";

const TOUR_SLIDES = [
  {
    src: "/images/gallery/clinic-operatory-dental-chair.webp",
    title: "Ergonomic Operatory & Treatment Suite",
    desc: "Plush dental chair with computerized delivery console and clean cabinetry for maximum patient comfort in Amanora Park Town, Hadapsar.",
    alt: "Modern ergonomic dental operatory with comfortable treatment chair and welcoming interior at Dr. Gayatri's Family Dental Clinic",
  },
  {
    src: "/images/gallery/calming-ceiling-sky-view-operatory.webp",
    title: "Therapeutic Sky Ceiling View",
    desc: "Patients look up at a serene illuminated blue sky and green tree canopy to stay relaxed and calm during procedures.",
    alt: "Soothing illuminated sky and foliage ceiling view above patient dental chair to relieve anxiety during dental treatments",
  },
  {
    src: "/images/gallery/sterilized-dental-instruments-tray.webp",
    title: "Hospital-Grade Sterilization Protocols",
    desc: "Autoclaved Class-B sterilized precision instruments prepared freshly for each appointment in sealed, hygienic trays.",
    alt: "Autoclaved and sterilized precision dental diagnostic instruments on surgical tray demonstrating strict hygiene protocols",
  },
  {
    src: "/images/gallery/advanced-digital-dental-treatment-chair.webp",
    title: "Computerized Digital Dental Console",
    desc: "Equipped with high-definition digital consultation screen, apex locators, and rotary endodontics for pain-free treatment.",
    alt: "Advanced computerized dental delivery unit with high-definition digital consultation monitor for precise dental diagnosis",
  },
  {
    src: "/images/gallery/custom-dental-crown-prosthesis-model.webp",
    title: "Precision Crowns & Restorations",
    desc: "Custom dental prosthetics crafted with lifelike translucency and exact marginal fit at Dr. Gayatri's Clinic.",
    alt: "Precision ceramic dental prosthesis and custom crown model with Dr. Gayatri Dental Clinic entrance branding in the background",
  },
  {
    src: "/images/gallery/single-sitting-root-canal-treatment-xray.webp",
    title: "Verified Single-Sitting RCT Radiography",
    desc: "Digital X-rays confirming complete hermetic canal obturation and pain relief in a single convenient visit.",
    alt: "Digital dental X-ray radiograph proving successful single-sitting root canal treatment and hermetic obturation at Dr. Gayatri's Dental Clinic",
  },
];

function OperatoryPhoto({ onOpenTour, compact = false }: { onOpenTour: () => void; compact?: boolean }) {
  return (
    <OrganicImage
      src="/images/gallery/clinic-operatory-dental-chair.webp"
      alt="State-of-the-art sterile dental operatory and ergonomic treatment chair at Dr. Gayatri's Family Dental Clinic in Hadapsar, Pune"
      shape="clinic"
      sizes="(max-width: 1024px) 100vw, 60vw"
      className="w-full h-full"
      onClick={onOpenTour}
      clickLabel="Open the virtual clinic tour"
      layers={[
        { className: "bg-aqua-300/70", blur: true, scale: 1.03 },
        { className: "bg-gradient-to-br from-[#bfe9f3] via-[#e6f7fb] to-[#cdeff6]", x: compact ? "-8px" : "-14px", y: compact ? "6px" : "10px" },
      ]}
    >
      <div
        className={`absolute glass-card rounded-2xl flex items-center gap-3 pointer-events-none ${
          compact ? "right-[5%] bottom-[7%] px-3 py-2" : "right-[6%] bottom-[9%] px-4 py-3"
        }`}
      >
        <Leaf className="w-6 h-6 text-teal stroke-[1.6] flex-shrink-0" />
        <p className="leading-tight">
          <span className="block text-[13px] font-bold text-navy">A Calm Space</span>
          <span className="block text-[11.5px] text-body">for Healthier Smiles</span>
        </p>
      </div>
    </OrganicImage>
  );
}

export default function ClinicExperienceSection() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % TOUR_SLIDES.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + TOUR_SLIDES.length) % TOUR_SLIDES.length);

  return (
    <section id="clinic" className="relative scroll-mt-20 lg:min-h-[540px] xl:min-h-[580px] flex items-center">
      {/* Desktop operatory photo bleeding off the right edge */}
      <div className="hidden lg:block absolute right-0 top-6 bottom-4 w-[60%] max-w-[1100px]">
        <OperatoryPhoto onOpenTour={() => setShowVideoModal(true)} />
      </div>

      <div className="page-container relative z-10 py-12 lg:py-16">
        <div className="lg:w-[37%] flex flex-col items-start">
          <SectionHeading
            eyebrow="A Modern Dental Experience"
            titleClassName="text-[30px] sm:text-[38px] lg:text-[38px] xl:text-[44px]"
            title={
              <>
                Designed for <br />
                Your Comfort
              </>
            }
          />

          <p className="text-body text-[14.5px] sm:text-[15.5px] leading-relaxed mt-5 mb-8 max-w-[460px]">
            Our clinic in Ambrosia Alley, Amanora Park Town is meticulously designed to make every visit calm and pleasant. From computerized rotary instruments to international Class-B sterilization and soothing sky ceilings, we prioritize your peace of mind.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <Button variant="teal" onClick={() => setShowVideoModal(true)} arrow className="px-7">
              Take a Virtual Tour
            </Button>
            <Button href="/gallery" variant="outline" icon={<Images className="w-4 h-4 text-teal" />} className="px-6">
              View Photo Gallery
            </Button>
          </div>
        </div>

        <div className="lg:hidden relative w-[calc(100%+1rem)] sm:w-[calc(100%+1.5rem)] -mr-4 sm:-mr-6 ml-auto aspect-[1.55] mt-10">
          <OperatoryPhoto onOpenTour={() => setShowVideoModal(true)} compact />
        </div>
      </div>

      {/* Virtual Tour / Gallery Showcase Modal */}
      {showVideoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-7 shadow-2xl relative flex flex-col max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3.5">
              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-teal">
                  Authentic Clinic Tour • Photo {activeSlide + 1} of {TOUR_SLIDES.length}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1d174e]">
                  {TOUR_SLIDES[activeSlide].title}
                </h3>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                aria-label="Close clinic tour modal"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Photo slide container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-inner group">
              <Image
                src={TOUR_SLIDES[activeSlide].src}
                alt={TOUR_SLIDES[activeSlide].alt}
                fill
                sizes="(max-width: 640px) 95vw, 680px"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              <p className="absolute bottom-3 left-4 right-4 text-white text-xs sm:text-sm font-medium drop-shadow-md">
                {TOUR_SLIDES[activeSlide].desc}
              </p>

              {/* Prev / Next controls */}
              <button
                onClick={prevSlide}
                aria-label="Previous photo"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm grid place-items-center cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next photo"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm grid place-items-center cursor-pointer transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnails row */}
            <div className="flex gap-2 mt-3.5 overflow-x-auto pb-1 scrollbar-none">
              {TOUR_SLIDES.map((slide, idx) => (
                <button
                  key={slide.src}
                  onClick={() => setActiveSlide(idx)}
                  className={`relative w-14 h-11 sm:w-16 sm:h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                    activeSlide === idx ? "border-teal scale-105 shadow-xs" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={slide.src} alt={slide.title} fill sizes="64px" className="object-cover" />
                </button>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/gallery"
                onClick={() => setShowVideoModal(false)}
                className="text-xs font-semibold text-teal hover:underline flex items-center gap-1"
              >
                View Full 9-Photo Bento Gallery →
              </Link>
              <button
                onClick={() => setShowVideoModal(false)}
                className="bg-[#38247b] hover:bg-[#2c1a63] text-white px-5 py-2 rounded-full text-xs font-semibold cursor-pointer transition-colors"
              >
                Close Tour
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
