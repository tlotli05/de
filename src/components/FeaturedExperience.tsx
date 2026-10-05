import React, { useState } from 'react';
import { Check, ShieldCheck, Sparkles, Building, ArrowRight } from 'lucide-react';

interface FeaturedExperienceProps {
  onOpenDiscoverModal: () => void;
  onOpenBooking: () => void;
}

export const FeaturedExperience: React.FC<FeaturedExperienceProps> = ({ 
  onOpenDiscoverModal,
  onOpenBooking 
}) => {
  const features = [
    {
      title: 'Modern consultation rooms',
      desc: 'Acoustically isolated suites with natural light, ergonomic seating, and non-intrusive diagnostic equipment.',
    },
    {
      title: 'Convenient appointment scheduling',
      desc: 'Real-time appointment availability with zero waiting room congestion or redundant paperwork.',
    },
    {
      title: 'Personalised patient care',
      desc: 'Consultations structured around listening, diagnostic clarity, and collaborative wellness plans.',
    },
    {
      title: 'Professional medical team',
      desc: 'Experienced general practitioners registered with the Health Professions Council of South Africa (HPCSA).',
    },
    {
      title: 'Confidential and secure environment',
      desc: 'Strict POPIA-compliant digital records and discreet private reception designed for discerning individuals.',
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#0C182A] text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 rounded-full bg-[#14746F]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#2A9D8F]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Large Facility Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] group">
              <img
                src="/src/assets/images/medical_suite_facility_1791242025782.jpg"
                alt="Aurelia Medical Suite Reception Lounge in Claremont Cape Town"
                referrerPolicy="no-referrer"
                className="w-full h-[440px] sm:h-[500px] lg:h-[560px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C182A]/80 via-transparent to-transparent opacity-60" />

              {/* Architectural Location Caption */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0C182A]/85 backdrop-blur-md border border-white/15">
                <div className="flex items-center justify-between text-xs font-medium text-neutral-300">
                  <span className="flex items-center gap-1.5 text-[#2A9D8F]">
                    <Building className="w-3.5 h-3.5" />
                    <span>Claremont Medical Pavilion · 3rd Floor</span>
                  </span>
                  <span className="text-white/60">Southern Suburbs</span>
                </div>
                <p className="mt-1.5 text-xs text-neutral-300 font-light leading-relaxed">
                  Engineered with serene acoustic damping, clean air filtration, and natural timber architectural accents.
                </p>
              </div>
            </div>

            {/* Subtle decorative frame effect */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-white/5 -z-10 hidden sm:block" />
          </div>

          {/* Right Side: Copy & Quality Checklist */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F] mb-3">
              <span>The Aurelia Standard</span>
              <span aria-hidden="true" className="w-8 h-px bg-[#2A9D8F]/40" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-[-0.015em] leading-[1.15]">
              A Better Healthcare Experience
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
              "From the moment you arrive, every detail is designed around comfort, privacy and simplicity."
            </p>

            <div className="mt-8 space-y-4">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.04] transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-[#14746F]/30 border border-[#2A9D8F]/40 text-[#2A9D8F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-neutral-400 font-light leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
              <button
                onClick={onOpenDiscoverModal}
                className="px-7 py-3 rounded-full bg-white text-[#0C182A] hover:bg-neutral-100 text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Discover Aurelia</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-white/20 cursor-pointer"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
