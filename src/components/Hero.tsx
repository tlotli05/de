import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#0C182A] text-white pt-24 pb-16">
      {/* Background Image Container with Cinematic Slow Scale */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/src/assets/images/hero_medical_suite_1791242003873.jpg"
          alt="Aurelia Medical Suite modern consultation room in Claremont Cape Town"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center transition-transform duration-[2200ms] ease-out will-change-transform ${
            mounted ? 'scale-100 opacity-90' : 'scale-108 opacity-40'
          }`}
        />

        {/* Cinematic Multi-stop Contrast Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C182A] via-[#0C182A]/65 to-[#0C182A]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C182A]/80 via-[#0C182A]/30 to-transparent pointer-events-none" />

        {/* Subtle Ambient Light Shimmer */}
        <div 
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#14746F]/20 blur-3xl pointer-events-none animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        <div 
          className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#2A9D8F]/15 blur-3xl pointer-events-none"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Trust Indicator */}
        <div
          className={`transition-all duration-700 ease-out delay-100 transform ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-[12px] sm:text-xs font-medium tracking-wide text-neutral-200 mb-6 sm:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F] animate-ping" />
            <span>Private Medical Care</span>
            <span className="text-white/40" aria-hidden="true">•</span>
            <span>Claremont, Cape Town</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1
          className={`font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-[-0.02em] leading-[1.08] text-white max-w-4xl transition-all duration-1000 ease-out delay-200 transform ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ textWrap: 'balance' }}
        >
          Healthcare, Designed Around You.
        </h1>

        {/* Supporting Copy */}
        <p
          className={`mt-6 text-base sm:text-lg md:text-xl font-normal text-neutral-300 max-w-2xl leading-relaxed tracking-normal transition-all duration-1000 ease-out delay-400 transform ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ textWrap: 'balance' }}
        >
          Personalised medical care in a modern environment where your health, comfort and time come first.
        </p>

        {/* Buttons / CTAs */}
        <div
          className={`mt-9 sm:mt-11 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto transition-all duration-1000 ease-out delay-500 transform ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#14746F] hover:bg-[#188B85] active:scale-[0.98] text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-[0_8px_20px_rgba(20,116,111,0.35)] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] active:scale-[0.98] text-white text-sm font-medium tracking-wide transition-all duration-200 border border-white/20 backdrop-blur-xs flex items-center justify-center cursor-pointer"
          >
            Explore Our Services
          </button>
        </div>

        {/* Micro Trust Credentials */}
        <div
          className={`mt-12 sm:mt-16 flex items-center justify-center gap-6 text-[12px] text-neutral-400 font-normal transition-all duration-1000 ease-out delay-700 ${
            mounted ? 'opacity-85' : 'opacity-0'
          }`}
        >
          <span>HPCSA Registered Practitioners</span>
          <span className="text-neutral-600">•</span>
          <span>Discovery & Major Medical Aids</span>
          <span className="text-neutral-600 hidden sm:inline">•</span>
          <span className="hidden sm:inline">Suite 302, Claremont</span>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div 
        onClick={scrollToServices}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 cursor-pointer text-white/50 hover:text-white transition-colors duration-200 flex flex-col items-center gap-1"
        role="button"
        tabIndex={0}
        aria-label="Scroll down to services"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
