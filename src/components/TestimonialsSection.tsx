import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#F5F4F0] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        {/* Header Tag */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#14746F] mb-3">
          <Quote className="w-3.5 h-3.5" />
          <span>Patient Perspectives</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0C182A] tracking-[-0.015em]">
          Trust Built on Attentive Care
        </h2>

        {/* Carousel Card Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="mt-12 sm:mt-16 bg-[#FAF9F6] rounded-3xl p-8 sm:p-14 border border-[#0C182A]/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.03)] relative"
        >
          {/* Subtle Quote Mark Watermark */}
          <div className="absolute top-6 left-8 font-serif text-8xl text-[#14746F]/10 select-none pointer-events-none leading-none">
            “
          </div>

          <div className="relative z-10 min-h-[160px] flex flex-col justify-center">
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-[#0C182A] font-normal leading-relaxed italic">
              "{current.quote}"
            </blockquote>

            <div className="mt-8 flex flex-col items-center">
              <div className="font-sans text-sm sm:text-base font-semibold text-[#0C182A]">
                {current.author}
              </div>
              <div className="mt-1 flex items-center gap-2 text-xs text-[#6B7280]">
                <span>{current.suburb}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#14746F] font-medium">{current.visitType}</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-white border border-neutral-200 text-[#0C182A] hover:bg-neutral-50 hover:border-[#14746F]/40 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2 px-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-7 bg-[#14746F]'
                      : 'w-1.5 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-white border border-neutral-200 text-[#0C182A] hover:bg-neutral-50 hover:border-[#14746F]/40 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
