import React from 'react';
import { X, Sparkles, Building2, Shield, HeartPulse, Check, ArrowRight } from 'lucide-react';

interface DiscoverModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const DiscoverModal: React.FC<DiscoverModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-neutral-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="px-6 sm:px-8 py-5 border-b border-neutral-100 flex items-center justify-between bg-[#FAF9F6]">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-bold text-[#0C182A]">AURELIA</span>
            <span className="text-xs uppercase tracking-wider text-[#14746F] font-semibold">Practice Walkthrough</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Hero image for facility */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-neutral-200">
            <img
              src="/src/assets/images/medical_suite_facility_1791242025782.jpg"
              alt="Aurelia Medical Suite Reception Lounge"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
              <span className="text-white text-xs font-medium tracking-wide">
                Suite 302, Claremont Medical Pavilion · 123 Main Road
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-bold text-[#0C182A]">
              Architectural Serenity Meets Rigorous Clinical Care
            </h3>
            <p className="mt-2 text-sm text-[#4B5563] leading-relaxed">
              Traditional medical facilities often amplify stress through cold fluorescent lighting, cramped waiting benches, and audible consultations. Aurelia was designed deliberately from the ground up to reverse that paradigm.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#FAF9F6] border border-neutral-200/80">
              <div className="font-semibold text-xs text-[#0C182A] uppercase tracking-wider mb-1">
                Acoustic Isolation
              </div>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Triple-glazed acoustic doors and sound-dampened partitions guarantee complete conversation privacy for every patient.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF9F6] border border-neutral-200/80">
              <div className="font-semibold text-xs text-[#0C182A] uppercase tracking-wider mb-1">
                Zero Waiting Congestion
              </div>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                By pacing consultations with dedicated time margins, you move smoothly from our quiet lounge directly into the doctor's room.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF9F6] border border-neutral-200/80">
              <div className="font-semibold text-xs text-[#0C182A] uppercase tracking-wider mb-1">
                Medical-Grade Air Filtration
              </div>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                HEPA-H14 hospital air handling maintains pure air turnover throughout the entire third-floor suite continuously.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF9F6] border border-neutral-200/80">
              <div className="font-semibold text-xs text-[#0C182A] uppercase tracking-wider mb-1">
                On-Site Diagnostic Suite
              </div>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Pathology phlebotomy, resting ECG, and spirometry completed comfortably within your consultation suite.
              </p>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-neutral-100">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-6 py-2.5 rounded-full bg-[#0C182A] hover:bg-[#14223D] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Schedule a Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
