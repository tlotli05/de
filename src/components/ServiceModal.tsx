import React from 'react';
import { X, Clock, Check, ArrowRight, ShieldCheck, Stethoscope } from 'lucide-react';
import { MedicalService } from '../types';

interface ServiceModalProps {
  service: MedicalService | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-neutral-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="px-6 sm:px-8 py-5 border-b border-neutral-100 flex items-center justify-between bg-[#FAF9F6]">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#14746F] font-semibold">
              Clinical Discipline
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

        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium mb-1">
              <Clock className="w-3.5 h-3.5 text-[#14746F]" />
              <span>Standard Consultation: {service.duration}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0C182A]">
              {service.title}
            </h3>
            <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">
              {service.details}
            </p>
          </div>

          {/* Key Clinical Features */}
          <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-neutral-200/80">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0C182A] mb-3">
              Included in this Consultation
            </h4>
            <div className="space-y-2">
              {service.keyBenefits.map((b) => (
                <div key={b} className="flex items-start gap-2.5 text-xs text-[#374151]">
                  <div className="w-4 h-4 rounded-full bg-[#14746F]/10 text-[#14746F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preparation Advice */}
          <div className="text-xs text-[#4B5563] p-4 rounded-xl bg-neutral-50 border border-neutral-200">
            <span className="font-semibold text-[#0C182A]">Patient Preparation: </span>
            {service.preparationTip}
          </div>

          {/* Practitioners who offer this */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Consulting Practitioners
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-[#0C182A]">
              {service.practitioners.map((doc) => (
                <span
                  key={doc}
                  className="px-3 py-1.5 rounded-full bg-white border border-neutral-200"
                >
                  {doc}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
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
                onBookService(service.id);
              }}
              className="px-6 py-2.5 rounded-full bg-[#0C182A] hover:bg-[#14223D] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Book This Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
