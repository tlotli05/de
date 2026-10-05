import React from 'react';
import { ArrowRight, Calendar, GraduationCap, Award } from 'lucide-react';
import { DOCTORS } from '../data/mockData';
import { Doctor } from '../types';

interface DoctorsSectionProps {
  onSelectDoctor: (doctor: Doctor) => void;
  onBookWithDoctor: (doctorId: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ 
  onSelectDoctor,
  onBookWithDoctor 
}) => {
  return (
    <section id="doctors" className="py-24 sm:py-32 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#14746F] mb-3">
              <span>Medical Practitioners</span>
              <span aria-hidden="true" className="w-8 h-px bg-[#14746F]/40" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0C182A] tracking-[-0.015em] leading-[1.15]">
              Meet Your Care Team
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Our doctors are dedicated clinicians with extensive hospital and private practice experience, committed to attentive, evidence-guided medical care.
            </p>
          </div>

          <div className="text-xs text-neutral-500 font-medium">
            <span>HPCSA Board Certified</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Claremont, Cape Town</span>
          </div>
        </div>

        {/* 3 Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-9">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              onClick={() => onSelectDoctor(doctor)}
              className="group bg-white rounded-3xl overflow-hidden border border-[#0C182A]/[0.06] shadow-[0_8px_30px_rgba(12,24,42,0.03)] hover:shadow-[0_20px_45px_rgba(12,24,42,0.09)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Doctor Portrait with Hover Zoom & Floating Action */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                <img
                  src={doctor.image}
                  alt={`${doctor.name} - ${doctor.role} in Claremont Cape Town`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C182A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <span className="px-4 py-2 rounded-full bg-white text-[#0C182A] text-xs font-semibold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-1.5">
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Quiet Room tag */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-black/5 text-[11px] font-medium text-[#0C182A]">
                  {doctor.roomNumber}
                </div>
              </div>

              {/* Doctor Bio Card Details */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#0C182A] tracking-tight group-hover:text-[#14746F] transition-colors duration-200">
                    {doctor.name}
                  </h3>
                  
                  <div className="mt-1 text-sm font-medium text-[#14746F]">
                    {doctor.role}
                  </div>

                  {/* University & Degree */}
                  <div className="mt-3 flex items-center gap-2 text-xs text-neutral-500 font-normal">
                    <GraduationCap className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span>{doctor.degrees}, {doctor.university}</span>
                  </div>

                  {/* Specialties List */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {doctor.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-[11px] text-neutral-600 bg-neutral-100/80 px-2.5 py-1 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom schedule & action */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#14746F]" />
                    <span>Consults Mon–Fri</span>
                  </span>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onBookWithDoctor(doctor.id);
                    }}
                    className="font-semibold text-[#0C182A] group-hover:text-[#14746F] hover:underline cursor-pointer"
                  >
                    Schedule →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
