"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  initialTreatment = "General Dentistry",
}: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: initialTreatment,
    date: "",
    timeSlot: "11:00 AM",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialTreatment) {
      setFormData((prev) => ({ ...prev, treatment: initialTreatment }));
    }
  }, [initialTreatment]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    setFormData((prev) => ({ ...prev, date: `${yyyy}-${mm}-${dd}` }));
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in"
      role="dialog"
      aria-modal="true"
      onClick={handleReset}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-xs font-bold tracking-[0.16em] text-[#009eb8] uppercase block mb-1">
                DR. GAYATRI&apos;S CLINIC
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1549]">
                Book Your Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fast, painless, and gentle dental appointments in Viman Nagar, Pune.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Treatment Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Treatment / Service
                </label>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 text-sm text-slate-800 bg-white"
                  required
                >
                  <option value="General Dentistry">General Dentistry &amp; Routine Checkup</option>
                  <option value="Root Canal Treatment">Painless Root Canal Treatment</option>
                  <option value="Dental Implants">Dental Implants &amp; Crowns</option>
                  <option value="Teeth Whitening">Laser Teeth Whitening</option>
                  <option value="Pediatric Dentistry">Pediatric / Child Dental Care</option>
                  <option value="Braces & Aligners">Orthodontic Braces &amp; Clear Aligners</option>
                  <option value="Emergency Dental Pain">Urgent / Emergency Consultation</option>
                </select>
              </div>

              {/* Patient Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 text-sm text-slate-800 placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 text-sm text-slate-800 placeholder-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 text-sm text-slate-800 placeholder-slate-400"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time Slot Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 text-sm text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 text-sm text-slate-800 bg-white"
                  >
                    <option value="10:00 AM">10:00 AM (Morning)</option>
                    <option value="11:30 AM">11:30 AM (Morning)</option>
                    <option value="01:00 PM">01:00 PM (Afternoon)</option>
                    <option value="03:30 PM">03:30 PM (Afternoon)</option>
                    <option value="05:30 PM">05:30 PM (Evening)</option>
                    <option value="07:00 PM">07:00 PM (Evening)</option>
                  </select>
                </div>
              </div>

              {/* Additional notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Symptoms or Special Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Sensitivity to cold water, first visit with toddler..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 text-sm text-slate-800 placeholder-slate-400"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#372379] hover:bg-[#2c1a63] text-white py-3.5 px-6 rounded-full font-semibold text-sm shadow-md shadow-indigo-950/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Confirming your slot...
                    </span>
                  ) : (
                    <>
                      <span>Confirm Appointment</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 animate-in zoom-in">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1c1549] mb-2">
              Appointment Request Received!
            </h3>

            <p className="text-slate-600 text-sm max-w-sm mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. We have scheduled your consultation for{" "}
              <span className="font-semibold text-[#009eb8]">{formData.treatment}</span> on{" "}
              <span className="font-semibold text-slate-900">{formData.date}</span> at{" "}
              <span className="font-semibold text-slate-900">{formData.timeSlot}</span>.
            </p>

            <div className="bg-[#f0fbfd] border border-cyan-100 rounded-2xl p-4 text-xs text-slate-600 mb-6 text-left w-full space-y-1">
              <div className="flex justify-between">
                <span className="font-medium text-slate-500">Location:</span>
                <span className="font-bold text-[#1c1549]">Amorea Park Town, Viman Nagar, Pune</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-500">Doctor:</span>
                <span className="font-bold text-[#1c1549]">Dr. Gayatri</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-500">Confirmation SMS:</span>
                <span className="font-bold text-[#009eb8]">Sent to {formData.phone}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="bg-[#372379] text-white py-3 px-8 rounded-full text-sm font-semibold shadow-md hover:bg-[#2c1a63] transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
