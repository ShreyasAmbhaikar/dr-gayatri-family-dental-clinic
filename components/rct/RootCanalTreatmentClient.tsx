"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";
import RootCanalPageContent from "@/components/rct/RootCanalPageContent";

export default function RootCanalTreatmentClient() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="bg-[#fdfeff] min-h-screen flex flex-col overflow-x-clip selection:bg-cyan-500 selection:text-white">
      {/* Header / Navbar — unchanged site header */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Root Canal Treatment page content */}
      <main className="flex-grow">
        <RootCanalPageContent onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Footer — unchanged site footer */}
      <Footer />

      {/* Interactive Appointment Modal preselected with Root Canal Treatment */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTreatment="Root Canal Treatment"
      />
    </div>
  );
}
