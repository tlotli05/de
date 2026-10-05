import React from 'react';
import { Stethoscope, ShieldCheck, Network, Clock3 } from 'lucide-react';

interface QuickInfoStripProps {
  onSelectService?: (serviceId: string) => void;
}

export const QuickInfoStrip: React.FC<QuickInfoStripProps> = ({ onSelectService }) => {
  const cards = [
    {
      id: 'general-consultations',
      title: 'General Medical Care',
      description: 'Comprehensive healthcare for everyday needs.',
      icon: Stethoscope,
    },
    {
      id: 'preventative-healthcare',
      title: 'Preventative Care',
      description: 'Helping you stay healthy before problems arise.',
      icon: ShieldCheck,
    },
    {
      id: 'specialist-referrals',
      title: 'Specialist Referrals',
      description: 'Access to trusted specialist networks when required.',
      icon: Network,
    },
    {
      id: 'modern-experience',
      title: 'Modern Patient Experience',
      description: 'Efficient appointments and personalised care.',
      icon: Clock3,
    },
  ];

  return (
    <section className="relative -mt-8 sm:-mt-10 z-20 max-w-7xl mx-auto px-6 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              onClick={() => onSelectService && onSelectService(card.id)}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-[#0C182A]/[0.06] shadow-[0_10px_30px_rgba(12,24,42,0.04)] hover:shadow-[0_16px_36px_rgba(12,24,42,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
            >
              {/* Subtle accent hover indicator line */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#14746F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF9F6] border border-[#0C182A]/[0.05] group-hover:bg-[#14746F]/10 group-hover:border-[#14746F]/20 flex items-center justify-center text-[#0C182A] group-hover:text-[#14746F] transition-all duration-300 mb-5">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#0C182A] tracking-tight group-hover:text-[#14746F] transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-medium text-neutral-400 group-hover:text-[#14746F] transition-colors">
                <span>Learn more</span>
                <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
