import React, { useState } from 'react';
import { 
  CalendarCheck, 
  CreditCard, 
  Clock, 
  UserCheck, 
  Stethoscope, 
  FileText, 
  ShieldAlert, 
  HelpCircle,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

interface PatientInfoSectionProps {
  onOpenFaq: () => void;
  onOpenBooking: () => void;
}

export const PatientInfoSection: React.FC<PatientInfoSectionProps> = ({ 
  onOpenFaq,
  onOpenBooking 
}) => {
  const [activeModalTab, setActiveModalTab] = useState<'new-patient' | 'medical-aid' | 'policies' | null>(null);

  const steps = [
    {
      number: '01',
      title: 'Book your appointment',
      desc: 'Select your preferred doctor and time slot via our digital booking portal or telephone.',
      icon: CalendarCheck,
    },
    {
      number: '02',
      title: 'Bring your ID & medical info',
      desc: 'Have your South African ID/passport, medical scheme card, and list of current medications ready.',
      icon: CreditCard,
    },
    {
      number: '03',
      title: 'Arrive 10 minutes early',
      desc: 'Enjoy complimentary tea or espresso in our calm, quiet reception lounge with zero crowds.',
      icon: Clock,
    },
    {
      number: '04',
      title: 'Speak to our reception team',
      desc: 'Quick digital check-in to confirm your personal details and validate your basement parking ticket.',
      icon: UserCheck,
    },
    {
      number: '05',
      title: 'Meet with your doctor',
      desc: 'Experience an unrushed, attentive clinical consultation focused entirely on your health.',
      icon: Stethoscope,
    },
  ];

  const infoCards = [
    {
      id: 'new-patient',
      title: 'New Patients',
      desc: 'Digital intake forms, what to expect on your first visit, and our patient-centered care charter.',
      icon: UserCheck,
      action: () => setActiveModalTab('new-patient'),
    },
    {
      id: 'medical-aid',
      title: 'Medical Aid Information',
      desc: 'Direct claims with Discovery Health, Momentum, Bonitas and other major schemes, plus transparent private tariffs.',
      icon: FileText,
      action: () => setActiveModalTab('medical-aid'),
    },
    {
      id: 'policies',
      title: 'Practice Policies',
      desc: 'Our 2-hour cancellation policy, electronic prescription repeats, and POPIA privacy guidelines.',
      icon: ShieldAlert,
      action: () => setActiveModalTab('policies'),
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      desc: 'Clear answers regarding appointments, pediatric care, emergency protocols, and fees.',
      icon: HelpCircle,
      action: onOpenFaq,
    },
  ];

  return (
    <section id="patient-info" className="py-24 sm:py-32 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#14746F] mb-3">
            <span>Patient Guidance</span>
            <span aria-hidden="true" className="w-8 h-px bg-[#14746F]/40" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0C182A] tracking-[-0.015em] leading-[1.15]">
            Before Your Visit
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
            We respect your time. Here is the straightforward 5-step journey to make your consultation comfortable, prompt, and seamless.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4 relative mb-20">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-2xl p-6 border border-[#0C182A]/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex flex-col justify-between group hover:border-[#14746F]/30 hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-bold text-[#14746F] tabular-nums">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-neutral-50 group-hover:bg-[#14746F]/10 text-neutral-600 group-hover:text-[#14746F] flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4 stroke-[1.5]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-base font-semibold text-[#0C182A] leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#6B7280] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={card.action}
                className="group p-6 rounded-2xl bg-white border border-[#0C182A]/[0.06] hover:border-[#14746F]/40 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-neutral-100 flex items-center justify-center text-[#0C182A] group-hover:text-[#14746F] group-hover:bg-[#14746F]/10 transition-colors mb-4">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#0C182A] group-hover:text-[#14746F] transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#6B7280] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#0C182A] group-hover:text-[#14746F]">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal for New Patients, Medical Aid, or Practice Policies */}
      {activeModalTab && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl border border-neutral-200 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            {activeModalTab === 'new-patient' && (
              <div>
                <div className="text-xs uppercase tracking-widest text-[#14746F] font-semibold">
                  Patient Information
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0C182A] mt-1">
                  New Patient Information
                </h3>
                <div className="mt-4 space-y-3 text-sm text-[#4B5563] leading-relaxed">
                  <p>
                    Welcome to Aurelia Medical Suite. For your first visit, we recommend arriving 10 minutes ahead of your booking to register with our practice concierge.
                  </p>
                  <div className="p-4 rounded-xl bg-[#FAF9F6] border border-neutral-200">
                    <div className="font-semibold text-[#0C182A] text-xs uppercase tracking-wider mb-2">
                      Checklist for your first consultation:
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#374151]">
                      <li>• Valid South African ID, Driver’s Licence, or Passport</li>
                      <li>• Medical Scheme membership details & principal member ID</li>
                      <li>• Chronic medications and vitamins in original containers</li>
                      <li>• Any existing medical discharge summaries or scan CDs</li>
                    </ul>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Digital intake forms can also be submitted ahead of time via the link sent in your SMS confirmation.
                  </p>
                </div>
              </div>
            )}

            {activeModalTab === 'medical-aid' && (
              <div>
                <div className="text-xs uppercase tracking-widest text-[#14746F] font-semibold">
                  Billing & Tariff Rates
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0C182A] mt-1">
                  Medical Aid & Scheme Coverage
                </h3>
                <div className="mt-4 space-y-3 text-sm text-[#4B5563] leading-relaxed">
                  <p>
                    Aurelia Medical Suite submits claims directly to all accredited South African schemes.
                  </p>
                  <div className="p-4 rounded-xl bg-[#FAF9F6] border border-neutral-200 text-xs text-[#374151] space-y-2">
                    <div>
                      <span className="font-semibold text-[#0C182A]">Contracted Schemes:</span> Discovery Health (all plans), Momentum Health, Bonitas, Fedhealth, Medscheme, Bankmed, and Bestmed.
                    </div>
                    <div>
                      <span className="font-semibold text-[#0C182A]">Private / Self-Paying:</span> Detailed itemised tax invoices with BHF and ICD-10 diagnostic codes are provided immediately for tax or gap-cover reimbursement.
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Standard card payment facilities (Visa, MasterCard, Amex) and Instant EFT are accepted.
                  </p>
                </div>
              </div>
            )}

            {activeModalTab === 'policies' && (
              <div>
                <div className="text-xs uppercase tracking-widest text-[#14746F] font-semibold">
                  Practice Governance
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0C182A] mt-1">
                  Practice Policies & Ethics
                </h3>
                <div className="mt-4 space-y-3 text-sm text-[#4B5563] leading-relaxed">
                  <p>
                    Our standards protect your time, privacy, and clinical confidentiality.
                  </p>
                  <ul className="space-y-2 text-xs text-[#374151]">
                    <li>• <strong>Cancellation Notice:</strong> We kindly request at least 2 hours notice to reschedule without penalty.</li>
                    <li>• <strong>Prescription Repeats:</strong> Available for registered chronic patients under ongoing bi-annual review.</li>
                    <li>• <strong>Data Protection (POPIA):</strong> Health records are stored in end-to-end encrypted medical cloud vaults with strict restricted access.</li>
                    <li>• <strong>Emergency Notice:</strong> For life-threatening emergencies, please proceed immediately to Kingsbury Hospital ER or dial 10177.</li>
                  </ul>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-end gap-3 pt-4 border-t border-neutral-200">
              <button
                onClick={() => setActiveModalTab(null)}
                className="px-5 py-2 rounded-full border border-neutral-300 text-xs font-semibold text-[#0C182A] hover:bg-neutral-50 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setActiveModalTab(null);
                  onOpenBooking();
                }}
                className="px-5 py-2 rounded-full bg-[#0C182A] text-white text-xs font-semibold hover:bg-[#14223D] cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
