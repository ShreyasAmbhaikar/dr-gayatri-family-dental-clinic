"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import StatsBanner from "@/components/StatsBanner";
import AboutSection from "@/components/AboutSection";
import ClinicExperienceSection from "@/components/ClinicExperienceSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import PatientStoriesSection from "@/components/PatientStoriesSection";
import PatientJourneySection from "@/components/PatientJourneySection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/ui/WaveDivider";
import { SITE } from "@/lib/site";

export default function HomePage() {
  const router = useRouter();

  const handleNavigateToContact = (treatmentName?: string) => {
    const url = treatmentName ? `/contact?treatment=${encodeURIComponent(treatmentName)}` : "/contact";
    router.push(url);
  };

  return (
    <div className="page-bg min-h-screen flex flex-col overflow-x-hidden selection:bg-cyan-500 selection:text-white">
      <Navbar onOpenBooking={() => handleNavigateToContact()} />

      <main className="flex-grow">
        <HeroSection onOpenBooking={() => handleNavigateToContact("General Dentistry")} />
        <TreatmentsSection onSelectTreatment={handleNavigateToContact} />
        <StatsBanner />
        <AboutSection onOpenBooking={() => handleNavigateToContact("Consultation")} />
        <ClinicExperienceSection />
        <BeforeAfterSection onOpenBooking={handleNavigateToContact} />
        {SITE.showPatientStories && <PatientStoriesSection />}
        <PatientJourneySection />
        <FaqSection />
        {/* Layered aqua → teal → indigo wave leading seamlessly into footer */}
        <div className="relative z-20 h-24 sm:h-36 lg:h-44 -mt-4 sm:-mt-8">
          <WaveDivider variant="footer" className="h-full" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
