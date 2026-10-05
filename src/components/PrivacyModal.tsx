import React from 'react';
import { X, ShieldCheck, Lock, Check } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-neutral-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="px-6 sm:px-8 py-5 border-b border-neutral-100 flex items-center justify-between bg-[#FAF9F6]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#14746F]" />
            <span className="text-xs uppercase tracking-widest text-[#14746F] font-semibold">
              Privacy & POPIA Compliance
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto text-xs text-[#4B5563] leading-relaxed">
          <p>
            Aurelia Medical Suite (Practice No: 0429182) strictly complies with the South African Protection of Personal Information Act (POPIA) and the National Health Act (Act 61 of 2003).
          </p>

          <div className="space-y-3 p-4 rounded-2xl bg-[#FAF9F6] border border-neutral-200/80 text-[#374151]">
            <div className="flex items-start gap-2.5">
              <Lock className="w-3.5 h-3.5 text-[#14746F] shrink-0 mt-0.5" />
              <div>
                <strong>Medical Confidentiality:</strong> Your diagnostic notes, prescriptions, pathology reports, and personal contact details are accessible solely by your designated attending practitioner and authorized clinical staff.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#14746F] shrink-0 mt-0.5" />
              <div>
                <strong>Medical Scheme Transmission:</strong> Claims sent electronically to Discovery Health, Momentum, Bonitas, or other schemes utilize encrypted EDI protocols with explicit patient consent.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Check className="w-3.5 h-3.5 text-[#14746F] shrink-0 mt-0.5" />
              <div>
                <strong>Data Retention & Access:</strong> You maintain the statutory right to request copies of your health records or revoke third-party communication authorizations at any time.
              </div>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-[#0C182A] text-white text-xs font-semibold hover:bg-[#14223D] cursor-pointer"
            >
              Understood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
