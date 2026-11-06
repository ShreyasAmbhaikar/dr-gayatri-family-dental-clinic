"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import StatsBanner from "@/components/StatsBanner";
import AboutSection from "@/components/AboutSection";
import ClinicExperienceSection from "@/components/ClinicExperienceSection";
import PatientStoriesSection from "@/components/PatientStoriesSection";
import PatientJourneySection from "@/components/PatientJourneySection";
import AppointmentCtaSection from "@/components/AppointmentCtaSection";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState("General Dentistry");

  const handleOpenBooking = (treatmentName: string = "General Dentistry") => {
    setSelectedTreatment(treatmentName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden selection:bg-cyan-500 selection:text-white">
      {/* 1. Header & Sticky Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking("General Dentistry")} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection onOpenBooking={() => handleOpenBooking("General Dentistry")} />

        {/* 3. Treatments Section (Directly under Hero as in Reference 1) */}
        <TreatmentsSection onSelectTreatment={handleOpenBooking} />

        {/* 4. Stats / Trust Bar (Between Treatments and About Us as in Reference 1) */}
        <StatsBanner />

        {/* 5. About the Dentist (Dr. Gayatri) */}
        <AboutSection onOpenBooking={() => handleOpenBooking("Consultation")} />

        {/* 6. Modern Clinic Experience ("Designed for Your Comfort") */}
        <ClinicExperienceSection />

        {/* 7. Patient Stories & Before/After */}
        <PatientStoriesSection />

        {/* 8. Patient Journey ("Simple Steps to a Healthier Smile") */}
        <PatientJourneySection />

        {/* 9. Appointment CTA ("Book Your Appointment Today") - No FAQ in Reference 1 */}
        <AppointmentCtaSection onOpenBooking={() => handleOpenBooking("General Dentistry")} />
      </main>

      {/* 10. Complete Footer with Layered Waves & Interactive Map Card */}
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
