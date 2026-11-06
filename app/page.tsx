"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import StatsBanner from "@/components/StatsBanner";
import AboutSection from "@/components/AboutSection";
import PatientJourneySection from "@/components/PatientJourneySection";
import ClinicExperienceSection from "@/components/ClinicExperienceSection";
import PatientStoriesSection from "@/components/PatientStoriesSection";
import FaqSection from "@/components/FaqSection";
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

        {/* 3. Treatments Section */}
        <TreatmentsSection onSelectTreatment={handleOpenBooking} />

        {/* 4. Stats / Trust Bar */}
        <StatsBanner />

        {/* 5. About the Dentist (Dr. Gayatri) */}
        <AboutSection onOpenBooking={() => handleOpenBooking("Consultation")} />

        {/* 6. Patient Journey (Moved above with styled background) */}
        <PatientJourneySection />

        {/* 7. Modern Clinic Experience ("Designed for Your Comfort") */}
        <ClinicExperienceSection />

        {/* 8. Patient Stories & Before/After */}
        <PatientStoriesSection />

        {/* 9. FAQs Section */}
        <FaqSection />

        {/* 10. Appointment CTA Section with 3D Tooth Artwork & Multi-Layered Waves */}
        <AppointmentCtaSection onOpenBooking={() => handleOpenBooking("Consultation")} />
      </main>

      {/* 11. Complete Footer with Dark Navy Background & Services/Links/Map */}
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
