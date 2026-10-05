import React from 'react';
import { Check, Shield, Users, Clock } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const stats = [
    {
      value: '15+',
      label: 'Years of Combined Experience',
      subtext: 'Leading Cape Town medical training',
    },
    {
      value: '4,500+',
      label: 'Patients Supported',
      subtext: 'Across southern suburbs & beyond',
    },
    {
      value: '98%',
      label: 'Patient Satisfaction',
      subtext: 'Consistent 5-star clinical feedback',
    },
  ];

  const highlights = [
    'Direct communication & minimal wait times',
    'Private consultation suites with acoustic isolation',
    'Integrative diagnostics & on-site blood drawing',
    'Seamless electronic prescription management',
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Subtle Editorial Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(12,24,42,0.08)] border border-[#0C182A]/[0.06] bg-white group">
              <img
                src="/src/assets/images/doctor_consultation_scene_1791242015205.jpg"
                alt="Doctor consulting with patient at Aurelia Medical Suite Claremont"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] sm:h-[480px] lg:h-[520px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C182A]/60 via-transparent to-transparent opacity-80" />

              {/* Floating caption overlay badge (editorial style) */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-sm text-left">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#14746F]">
                  <span>Thoughtful Clinical Care</span>
                  <span aria-hidden="true">·</span>
                  <span>Claremont Practice</span>
                </div>
                <p className="mt-1 text-xs text-[#374151] leading-relaxed">
                  Every consultation is scheduled with deliberate buffer times so your medical concerns are explored thoroughly without rush.
                </p>
              </div>
            </div>

            {/* Decorative subtle background accents */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#14746F]/5 -z-10 blur-xl" />
            <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-[#0C182A]/5 -z-10 blur-2xl" />
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#14746F] mb-3">
              <span>About Aurelia</span>
              <span aria-hidden="true" className="w-8 h-px bg-[#14746F]/40" />
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0C182A] tracking-[-0.015em] leading-[1.15]">
              Healthcare That Feels Personal.
            </h2>

            {/* Body Copy */}
            <p className="mt-6 text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal">
              Aurelia Medical Suite is a modern private healthcare practice in the heart of Cape Town. We combine experienced medical professionals, thoughtful patient care and modern technology to create a healthcare experience that feels simple, comfortable and personal.
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#6B7280] leading-relaxed font-normal">
              Located conveniently on Main Road in Claremont, we serve patients seeking an elevated standard of clinical medicine — from preventative longevity check-ups to comprehensive acute care.
            </p>

            {/* Key Clinical Commitments */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-neutral-200/80">
              {highlights.map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#14746F]/10 text-[#14746F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#374151] font-medium leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* 3 Statistics Display */}
            <div className="mt-10 pt-8 border-t border-neutral-200/80 grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="group">
                  <div className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#0C182A] tracking-tight tabular-nums group-hover:text-[#14746F] transition-colors duration-200">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-xs sm:text-[13px] font-semibold text-[#1F2937] leading-tight">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-[11px] text-[#6B7280] hidden sm:block">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
