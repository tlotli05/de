import React from 'react';
import { 
  Stethoscope, 
  ShieldCheck, 
  HeartHandshake, 
  Activity, 
  FileHeart, 
  ClipboardCheck, 
  Globe, 
  Sparkles, 
  ArrowRight,
  Clock
} from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { MedicalService } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: MedicalService) => void;
  onBookService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectService,
  onBookService 
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return Stethoscope;
      case 'ShieldCheck': return ShieldCheck;
      case 'HeartHandshake': return HeartHandshake;
      case 'Activity': return Activity;
      case 'FileHeart': return FileHeart;
      case 'ClipboardCheck': return ClipboardCheck;
      case 'Globe': return Globe;
      case 'Sparkles': return Sparkles;
      default: return Stethoscope;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F5F4F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#14746F] mb-3">
            <span>Our Clinical Disciplines</span>
            <span aria-hidden="true" className="w-8 h-px bg-[#14746F]/40" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0C182A] tracking-[-0.015em] leading-[1.15]">
            Complete Care. One Trusted Practice.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
            From routine check-ups to complex ongoing care, our practitioners provide thorough, evidence-based consultations tailored to your personal health goals.
          </p>
        </div>

        {/* Services Grid (8 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {SERVICES.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group relative bg-[#FAF9F6] rounded-2xl p-7 border border-[#0C182A]/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(12,24,42,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {/* Subtle top indicator on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#14746F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon & Time info */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#0C182A]/[0.06] group-hover:border-[#14746F]/30 group-hover:bg-[#14746F]/5 flex items-center justify-center text-[#0C182A] group-hover:text-[#14746F] transition-all duration-300 shadow-xs">
                      <Icon className="w-5 h-5 stroke-[1.5] transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-medium text-neutral-400">
                      <Clock className="w-3 h-3" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl font-semibold text-[#0C182A] tracking-tight group-hover:text-[#14746F] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Footer action link */}
                <div className="mt-8 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs font-semibold text-[#0C182A] group-hover:text-[#14746F] transition-colors">
                  <span>View clinical details</span>
                  <div className="w-7 h-7 rounded-full bg-white border border-neutral-200 group-hover:border-[#14746F]/40 flex items-center justify-center transition-all duration-200 group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Trust Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-[#0C182A]/[0.06] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#0C182A]">
              Require a consultation not listed above?
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-[#4B5563]">
              We facilitate diagnostic referrals, specialized second opinions, and custom health dossiers for travel or insurance.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => onBookService('general-consultations')}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0C182A] hover:bg-[#14223D] rounded-full transition-all cursor-pointer whitespace-nowrap"
            >
              Consult a Doctor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
