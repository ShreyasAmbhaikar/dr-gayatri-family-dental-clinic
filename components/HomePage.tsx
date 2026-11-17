"use client";

import React, { useState } from "react";
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
import AppointmentModal from "@/components/AppointmentModal";
import WaveDivider from "@/components/ui/WaveDivider";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState("General Dentistry");

  const handleOpenBooking = (treatmentName: string = "General Dentistry") => {
    setSelectedTreatment(treatmentName);
    setIsBookingOpen(true);
  };

  return (
    <div className="page-bg min-h-screen flex flex-col overflow-x-hidden selection:bg-cyan-500 selection:text-white">
      <Navbar onOpenBooking={() => handleOpenBooking("General Dentistry")} />

      <main className="flex-grow">
        <HeroSection onOpenBooking={() => handleOpenBooking("General Dentistry")} />
        <TreatmentsSection onSelectTreatment={handleOpenBooking} />
        <StatsBanner />
        <AboutSection onOpenBooking={() => handleOpenBooking("Consultation")} />
        <ClinicExperienceSection />
        <BeforeAfterSection onOpenBooking={handleOpenBooking} />
        <PatientStoriesSection />
        <PatientJourneySection />
        <FaqSection />
        {/* Layered aqua → teal → indigo wave leading seamlessly into footer */}
        <div className="relative z-20 h-24 sm:h-36 lg:h-44 -mt-4 sm:-mt-8">
          <WaveDivider variant="footer" className="h-full" />
        </div>
      </main>

      <Footer />

      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTreatment={selectedTreatment}
      />
    </div>
  );
}
