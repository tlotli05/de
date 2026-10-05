import React from 'react';
import { X, GraduationCap, Calendar, Award, MapPin, Check, ArrowRight, Shield } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onBookWithDoctor: (doctorId: string) => void;
}

export const DoctorModal: React.FC<DoctorModalProps> = ({
  doctor,
  onClose,
  onBookWithDoctor,
}) => {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-neutral-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="px-6 sm:px-8 py-5 border-b border-neutral-100 flex items-center justify-between bg-[#FAF9F6]">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#14746F] font-semibold">
              Practitioner Profile
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
          {/* Header with Photo & Credentials */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <img
              src={doctor.image}
              alt={doctor.name}
              referrerPolicy="no-referrer"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-neutral-200 shrink-0"
            />
            <div className="space-y-1.5 flex-1">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0C182A]">
                {doctor.name}
              </h3>
              <div className="text-sm font-medium text-[#14746F]">
                {doctor.role}
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <GraduationCap className="w-3.5 h-3.5 text-neutral-400" />
                <span>{doctor.degrees}, {doctor.university}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-400 pt-1">
                <span>HPCSA: {doctor.registrationNumber}</span>
                <span aria-hidden="true">·</span>
                <span>{doctor.roomNumber}</span>
              </div>
            </div>
          </div>

          {/* Clinical Bio */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0C182A] mb-2">
              Clinical Background & Philosophy
            </h4>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              {doctor.bio}
            </p>
          </div>

          {/* Areas of Clinical Interest */}
          <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-neutral-200/80">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0C182A] mb-3">
              Specialized Areas of Focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {doctor.specialties.map((spec) => (
                <div key={spec} className="flex items-center gap-2 text-xs text-[#374151]">
                  <div className="w-4 h-4 rounded-full bg-[#14746F]/10 text-[#14746F] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Days */}
          <div className="flex items-center justify-between text-xs text-[#4B5563] p-4 rounded-xl bg-neutral-50 border border-neutral-200">
            <span className="flex items-center gap-2 font-medium">
              <Calendar className="w-4 h-4 text-[#14746F]" />
              <span>Available Days at Claremont Practice:</span>
            </span>
            <span className="font-semibold text-[#0C182A]">
              {doctor.consultationDays.join(', ')}
            </span>
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
                onBookWithDoctor(doctor.id);
              }}
              className="px-6 py-2.5 rounded-full bg-[#0C182A] hover:bg-[#14223D] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Schedule with {doctor.name.split(' ')[1]}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
