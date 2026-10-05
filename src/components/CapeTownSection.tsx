import React, { useState } from 'react';
import { MapPin, Navigation, Car, Clock, Phone, Mail, ExternalLink, Check } from 'lucide-react';

export const CapeTownSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('Aurelia Medical Suite, 123 Main Road, Claremont, Cape Town, 7708');
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleOpenDirections = () => {
    window.open('https://maps.google.com/?q=123+Main+Road+Claremont+Cape+Town', '_blank');
  };

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#F5F4F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#14746F] mb-3">
            <span>Cape Town Practice</span>
            <span aria-hidden="true" className="w-8 h-px bg-[#14746F]/40" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0C182A] tracking-[-0.015em] leading-[1.15]">
            Healthcare in the Heart of Cape Town.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Conveniently located in Claremont, Aurelia Medical Suite provides accessible private healthcare for individuals, families and professionals across Cape Town's southern suburbs.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Minimal Location Card & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#FAF9F6] rounded-3xl p-8 border border-[#0C182A]/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#0C182A]">
                    Aurelia Medical Suite
                  </h3>
                  <div className="mt-1 text-xs uppercase tracking-wider text-[#14746F] font-semibold">
                    Claremont Medical Pavilion · Suite 302
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#14746F]/10 text-[#14746F] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              {/* Physical Address */}
              <div className="mt-6 p-4 rounded-xl bg-white border border-neutral-200/80">
                <div className="text-xs text-neutral-400 font-medium">Physical Address</div>
                <div className="mt-1 text-sm font-medium text-[#111827]">
                  123 Main Road, Claremont
                </div>
                <div className="text-xs text-[#4B5563]">
                  Cape Town, 7708, South Africa
                </div>

                <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <button
                    onClick={handleCopyAddress}
                    className="text-[#14746F] hover:underline font-medium flex items-center gap-1 cursor-pointer"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Address copied</span>
                      </>
                    ) : (
                      <span>Copy address</span>
                    )}
                  </button>
                  <button
                    onClick={handleOpenDirections}
                    className="text-[#0C182A] font-semibold hover:text-[#14746F] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Get directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Parking Information */}
              <div className="mt-5 flex items-start gap-3 p-4 rounded-xl bg-white border border-neutral-200/80">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#0C182A]">
                    Parking & Accessibility
                  </div>
                  <p className="mt-0.5 text-xs text-[#6B7280] leading-relaxed">
                    Complimentary secure basement parking with ticket validation. Direct elevator access to the 3rd floor. Wheelchair accessible throughout.
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mt-6 pt-6 border-t border-neutral-200/80">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0C182A] mb-3">
                  <Clock className="w-4 h-4 text-[#14746F]" />
                  <span>Practice Hours</span>
                </div>
                <div className="space-y-2 text-xs text-[#374151]">
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="font-medium">Monday – Friday</span>
                    <span className="tabular-nums font-semibold text-[#0C182A]">08:00 – 17:00</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="font-medium">Saturday</span>
                    <span className="tabular-nums font-semibold text-[#0C182A]">08:00 – 13:00</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-neutral-400">Sunday & Public Holidays</span>
                    <span className="text-neutral-400 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Interactive Styled Vector Map */}
          <div className="lg:col-span-7 relative min-h-[420px] rounded-3xl overflow-hidden border border-[#0C182A]/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.04)] bg-[#EDEBE6] flex flex-col">
            {/* Custom Minimalist Vector Map Presentation */}
            <div className="relative flex-1 w-full bg-[#E5E2DA] overflow-hidden p-6 sm:p-10 flex flex-col justify-between">
              {/* Map background grid pattern & stylized Cape Town contours */}
              <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D3CFBF" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
                
                {/* Stylized contour of Table Mountain eastern slopes (Newlands/Kirstenbosch/Claremont) */}
                <path
                  d="M-50,80 Q120,40 280,110 T600,60 T900,140"
                  fill="none"
                  stroke="#C5C1B0"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                />
                
                {/* Main Arterials (Main Road & M3) */}
                <path
                  d="M 120,450 L 320,0"
                  stroke="#FFFFFF"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <path
                  d="M 120,450 L 320,0"
                  stroke="#CF8E62"
                  strokeWidth="3"
                  strokeOpacity="0.7"
                />
                <path
                  d="M 380,450 L 520,0"
                  stroke="#FFFFFF"
                  strokeWidth="8"
                />
                <path
                  d="M 0,260 L 700,210"
                  stroke="#FFFFFF"
                  strokeWidth="7"
                />
              </svg>

              {/* Map Label overlays */}
              <div className="relative z-10 flex items-center justify-between text-[11px] font-medium text-neutral-600 uppercase tracking-widest">
                <span className="bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded">
                  Newlands Forest & M3
                </span>
                <span className="bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded">
                  Claremont Central
                </span>
              </div>

              {/* Pinpoint Anchor for Aurelia Medical Suite */}
              <div className="relative z-10 my-auto self-center flex flex-col items-center">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-[#14746F]/20 animate-ping absolute -inset-2 pointer-events-none" />
                  <div className="w-12 h-12 rounded-full bg-[#0C182A] text-white flex items-center justify-center shadow-xl border-2 border-white relative z-10">
                    <MapPin className="w-6 h-6 text-[#2A9D8F]" />
                  </div>
                </div>

                <div className="mt-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-neutral-200 text-center">
                  <div className="font-serif text-sm font-bold text-[#0C182A]">
                    Aurelia Medical Suite
                  </div>
                  <div className="text-[11px] text-[#14746F] font-semibold">
                    123 Main Road · Suite 302
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    Opposite Claremont Park
                  </div>
                </div>
              </div>

              {/* Map Landmarks bar */}
              <div className="relative z-10 grid grid-cols-3 gap-2 text-center text-[10px] text-neutral-600">
                <div className="bg-white/80 backdrop-blur-xs py-1.5 px-2 rounded-lg border border-black/5">
                  Cavendish Square (350m)
                </div>
                <div className="bg-white/80 backdrop-blur-xs py-1.5 px-2 rounded-lg border border-black/5">
                  Kingsbury Hospital (800m)
                </div>
                <div className="bg-white/80 backdrop-blur-xs py-1.5 px-2 rounded-lg border border-black/5">
                  M3 Highway (1.2km)
                </div>
              </div>
            </div>

            {/* Bottom bar of map */}
            <div className="p-4 bg-white border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[#4B5563]">
                Ample patient drop-off bay & undercover reserved bays 41–48.
              </span>
              <button
                onClick={handleOpenDirections}
                className="px-4 py-1.5 rounded-full bg-[#0C182A] text-white font-medium flex items-center gap-1.5 hover:bg-[#14223D] transition-colors cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5 text-[#2A9D8F]" />
                <span>Open in Maps</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
