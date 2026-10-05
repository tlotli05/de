import React from 'react';
import { Calendar, Phone, Mail, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface AppointmentSectionProps {
  onOpenBooking: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#0C182A] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full bg-[#14746F]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-xs font-medium text-neutral-300 mb-6">
          <Clock className="w-3.5 h-3.5 text-[#2A9D8F]" />
          <span>Same-Day & Advance Bookings</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-[-0.02em] leading-[1.1]">
          Your Health Deserves Time.
        </h2>

        {/* Supporting Copy */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
          Book a consultation with one of our healthcare professionals in Claremont, Cape Town.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#14746F] hover:bg-[#188B85] active:scale-[0.98] text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-[0_10px_25px_rgba(20,116,111,0.4)] flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="tel:0215550148"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white text-sm font-semibold tracking-wide transition-all duration-200 border border-white/20 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#2A9D8F]" />
            <span>Call the Practice</span>
          </a>
        </div>

        {/* Contact Details & Practice Information */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-neutral-300 text-xs">
          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.03] border border-white/5">
            <Phone className="w-4 h-4 text-[#2A9D8F] mb-2" />
            <span className="text-neutral-400">Direct Telephone</span>
            <a href="tel:0215550148" className="mt-1 font-semibold text-white hover:text-[#2A9D8F] transition-colors tabular-nums">
              021 555 0148
            </a>
          </div>

          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.03] border border-white/5">
            <Mail className="w-4 h-4 text-[#2A9D8F] mb-2" />
            <span className="text-neutral-400">Electronic Enquiries</span>
            <a href="mailto:hello@aureliamedical.co.za" className="mt-1 font-semibold text-white hover:text-[#2A9D8F] transition-colors">
              hello@aureliamedical.co.za
            </a>
          </div>

          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.03] border border-white/5 sm:col-span-2 md:col-span-1">
            <ShieldCheck className="w-4 h-4 text-[#2A9D8F] mb-2" />
            <span className="text-neutral-400">Confidentiality Assured</span>
            <span className="mt-1 font-semibold text-white">
              POPIA Compliant & Encrypted
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
