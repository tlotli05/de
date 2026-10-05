import React, { useState } from 'react';
import { X, Calendar, Clock, User, CheckCircle2, ChevronRight, ArrowLeft, ShieldCheck, Download } from 'lucide-react';
import { DOCTORS, SERVICES, MEDICAL_AID_PROVIDERS, TIME_SLOTS } from '../data/mockData';
import { BookingData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedDoctorId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedDoctorId,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [serviceId, setServiceId] = useState(preselectedServiceId || 'general-consultations');
  const [doctorId, setDoctorId] = useState(preselectedDoctorId || 'maya-daniels');
  
  // Pick default date as tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowString = tomorrow.toISOString().split('T')[0];

  const [date, setDate] = useState(tomorrowString);
  const [timeSlot, setTimeSlot] = useState(TIME_SLOTS[1]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [medicalAid, setMedicalAid] = useState(MEDICAL_AID_PROVIDERS[0]);
  const [medicalAidNumber, setMedicalAidNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [bookingRef, setBookingRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update if props change
  React.useEffect(() => {
    if (preselectedServiceId) setServiceId(preselectedServiceId);
    if (preselectedDoctorId) setDoctorId(preselectedDoctorId);
  }, [preselectedServiceId, preselectedDoctorId]);

  if (!isOpen) return null;

  const selectedService = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];
  const selectedDoctor = DOCTORS.find((d) => d.id === doctorId) || DOCTORS[0];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (!fullName.trim() || !email.trim() || !phone.trim()) {
        alert('Please complete all required fields.');
        return;
      }
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        const randomNum = Math.floor(10000 + Math.random() * 90000);
        setBookingRef(`AMS-${randomNum}`);
        setStep(4);
      }, 700);
    }
  };

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Aurelia Medical Suite//Appointment Booking//EN
BEGIN:VEVENT
SUMMARY:${selectedService.title} with ${selectedDoctor.name}
DESCRIPTION:Appointment at Aurelia Medical Suite, 123 Main Road, Claremont, Cape Town. Ref: ${bookingRef}
LOCATION:Suite 302, 123 Main Road, Claremont, Cape Town
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Aurelia-Appointment-${bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-neutral-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="px-6 sm:px-8 py-5 border-b border-neutral-100 flex items-center justify-between bg-[#FAF9F6]">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold text-[#0C182A]">AURELIA</span>
            <span className="text-[11px] uppercase tracking-wider text-[#14746F] font-semibold">Appointment Booking</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close booking modal"
            className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Indicator (for steps 1-3) */}
        {step < 4 && (
          <div className="px-6 sm:px-8 pt-4 pb-2 flex items-center justify-between border-b border-neutral-100 text-xs">
            <div className={`font-medium ${step >= 1 ? 'text-[#14746F]' : 'text-neutral-400'}`}>
              1. Service & Doctor
            </div>
            <div className="w-6 h-px bg-neutral-200" />
            <div className={`font-medium ${step >= 2 ? 'text-[#14746F]' : 'text-neutral-400'}`}>
              2. Date & Time
            </div>
            <div className="w-6 h-px bg-neutral-200" />
            <div className={`font-medium ${step >= 3 ? 'text-[#14746F]' : 'text-neutral-400'}`}>
              3. Patient Details
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {/* STEP 1: Select Service & Doctor */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#0C182A] mb-2">
                  Select Clinical Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setServiceId(s.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        serviceId === s.id
                          ? 'border-[#14746F] bg-[#14746F]/5 shadow-xs'
                          : 'border-neutral-200 hover:border-neutral-300 bg-white'
                      }`}
                    >
                      <div className="font-serif text-sm font-semibold text-[#0C182A]">
                        {s.title}
                      </div>
                      <div className="text-[11px] text-[#6B7280] mt-0.5">
                        {s.duration} · {s.description.slice(0, 48)}...
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#0C182A] mb-2">
                  Select Doctor
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {DOCTORS.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setDoctorId(d.id)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center ${
                        doctorId === d.id
                          ? 'border-[#14746F] bg-[#14746F]/5 shadow-xs'
                          : 'border-neutral-200 hover:border-neutral-300 bg-white'
                      }`}
                    >
                      <img
                        src={d.image}
                        alt={d.name}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-full object-cover mb-2 border border-neutral-200"
                      />
                      <div className="font-serif text-xs font-bold text-[#0C182A]">
                        {d.name}
                      </div>
                      <div className="text-[10px] text-[#14746F] font-medium mt-0.5">
                        {d.role}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 rounded-full bg-[#0C182A] hover:bg-[#14223D] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <span>Select Date & Time</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Select Date & Time */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#0C182A] mb-2">
                  Choose Preferred Date
                </label>
                <input
                  type="date"
                  min={tomorrowString}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#14746F] bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#0C182A] mb-2">
                  Available Consultation Slots ({selectedDoctor.name})
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-2.5">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`py-3 px-2 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer tabular-nums ${
                        timeSlot === slot
                          ? 'border-[#14746F] bg-[#14746F] text-white shadow-xs'
                          : 'border-neutral-200 hover:border-neutral-300 bg-white text-neutral-700'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF9F6] border border-neutral-200/80 text-xs text-neutral-600">
                <span className="font-semibold text-[#0C182A]">Consultation Room:</span> {selectedDoctor.roomNumber}, Claremont Medical Pavilion.
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 rounded-full bg-[#0C182A] hover:bg-[#14223D] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <span>Patient Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Info & Medical Aid */}
          {step === 3 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0C182A] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nicolaus van der Merwe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#14746F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0C182A] mb-1.5">
                    Mobile Number (South Africa) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 082 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#14746F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#0C182A] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. name@example.co.za"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#14746F]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0C182A] mb-1.5">
                    Medical Scheme / Payment Option
                  </label>
                  <select
                    value={medicalAid}
                    onChange={(e) => setMedicalAid(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-[#14746F] bg-white"
                  >
                    {MEDICAL_AID_PROVIDERS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0C182A] mb-1.5">
                    Membership No. (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 90281489"
                    value={medicalAidNumber}
                    onChange={(e) => setMedicalAidNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#14746F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#0C182A] mb-1.5">
                  Brief Medical Notes / Reason for Visit (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Routine annual physical and blood work review"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-[#14746F]"
                />
              </div>

              <div className="pt-2 text-[11px] text-neutral-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#14746F]" />
                <span>Protected by South African POPIA health privacy regulations.</span>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-3 rounded-full bg-[#14746F] hover:bg-[#188B85] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Confirming...</span>
                  ) : (
                    <>
                      <span>Confirm Appointment</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success & Confirmation Screen */}
          {step === 4 && (
            <div className="text-center py-4 space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#14746F]/10 text-[#14746F] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8 stroke-[2]" />
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest text-[#14746F] font-semibold">
                  Booking Confirmed
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C182A] mt-1">
                  We look forward to welcoming you.
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#4B5563] max-w-md mx-auto">
                  A confirmation SMS and calendar invite have been issued to <strong className="text-[#0C182A]">{phone}</strong> and <strong className="text-[#0C182A]">{email}</strong>.
                </p>
              </div>

              {/* Booking Summary Card */}
              <div className="bg-[#FAF9F6] rounded-2xl p-5 border border-neutral-200 text-left max-w-md mx-auto text-xs space-y-2.5">
                <div className="flex justify-between py-1 border-b border-neutral-200/80">
                  <span className="text-neutral-500 font-medium">Reference Code</span>
                  <span className="font-mono font-bold text-[#0C182A] text-sm">{bookingRef}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-200/80">
                  <span className="text-neutral-500 font-medium">Doctor</span>
                  <span className="font-semibold text-[#0C182A]">{selectedDoctor.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-200/80">
                  <span className="text-neutral-500 font-medium">Service</span>
                  <span className="font-medium text-[#0C182A]">{selectedService.title}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-200/80">
                  <span className="text-neutral-500 font-medium">Date & Time</span>
                  <span className="font-semibold text-[#0C182A]">{date} at {timeSlot}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500 font-medium">Location</span>
                  <span className="font-medium text-[#0C182A]">{selectedDoctor.roomNumber}, 123 Main Rd, Claremont</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleDownloadCalendar}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-neutral-300 hover:border-neutral-400 text-xs font-semibold text-[#0C182A] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Add to Calendar (.ics)</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-[#0C182A] hover:bg-[#14223D] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
