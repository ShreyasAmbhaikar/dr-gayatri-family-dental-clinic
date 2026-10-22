"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBanner from "@/components/StatsBanner";
import TreatmentsSection from "@/components/TreatmentsSection";
import AboutSection from "@/components/AboutSection";
import ClinicExperienceSection from "@/components/ClinicExperienceSection";
import PatientStoriesSection from "@/components/PatientStoriesSection";
import PatientJourneySection from "@/components/PatientJourneySection";
import FaqSection from "@/components/FaqSection";
import AppointmentCtaSection from "@/components/AppointmentCtaSection";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState("General Dentistry");

  // GSAP scroll trigger subtle reveal
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced-motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let ctx: any;
    const initGsap = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          // Subtle fade up for sections
          const animatedElements = document.querySelectorAll<HTMLElement>(".gsap-reveal");
          animatedElements.forEach((el) => {
            gsap.fromTo(
              el,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.75,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 88%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          });
        });
      } catch (err) {
        // Fallback gracefully if GSAP isn't available
        console.warn("GSAP subtle animation deferred:", err);
      }
    };

    initGsap();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  const handleOpenBooking = (treatmentName: string = "General Dentistry") => {
    setSelectedTreatment(treatmentName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking("General Dentistry")} />

      {/* Main Page Flow Matching Reference Layout */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection onOpenBooking={() => handleOpenBooking("General Dentistry")} />

        {/* 2. Stats / Trust Bar */}
        <div className="gsap-reveal">
          <StatsBanner />
        </div>

        {/* 3. Treatments Section */}
        <div className="gsap-reveal">
          <TreatmentsSection onSelectTreatment={handleOpenBooking} />
        </div>

        {/* 4. About the Dentist */}
        <div className="gsap-reveal">
          <AboutSection onOpenBooking={() => handleOpenBooking("Consultation")} />
        </div>

        {/* 5. Modern Clinic Experience */}
        <div className="gsap-reveal">
          <ClinicExperienceSection />
        </div>

        {/* 6. Patient Stories & Before/After */}
        <div className="gsap-reveal">
          <PatientStoriesSection />
        </div>

        {/* 7. Patient Journey */}
        <div className="gsap-reveal">
          <PatientJourneySection />
        </div>

        {/* 8. FAQs */}
        <div className="gsap-reveal">
          <FaqSection />
        </div>

        {/* 9. Appointment CTA Banner */}
        <div className="gsap-reveal">
          <AppointmentCtaSection onOpenBooking={() => handleOpenBooking("General Dentistry")} />
        </div>
      </main>

      {/* 10. Contact & Footer */}
      <Footer />

      {/* Accessible Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTreatment={selectedTreatment}
      />
    </div>
  );
}
