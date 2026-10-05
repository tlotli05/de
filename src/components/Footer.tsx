import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyModal?: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal, onOpenBooking }) => {
  return (
    <footer className="bg-[#070D1E] text-neutral-400 border-t border-white/5 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="#" className="inline-block">
              <span className="font-serif text-3xl font-semibold tracking-wider text-white">
                AURELIA
              </span>
              <span className="block font-sans text-xs uppercase tracking-[0.25em] font-medium text-[#2A9D8F] mt-1">
                Medical Suite
              </span>
            </a>

            <p className="mt-4 text-sm text-neutral-300 font-light leading-relaxed max-w-sm">
              Exceptional Healthcare. Thoughtfully Delivered.
            </p>

            <p className="mt-3 text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              A private medical practice in Claremont, Cape Town. Providing personalized, comprehensive healthcare designed around your comfort and time.
            </p>

            {/* Accreditation details */}
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-neutral-400 font-medium">
              <span className="bg-white/5 px-2.5 py-1 rounded border border-white/5">
                HPCSA PR: 0429182
              </span>
              <span className="bg-white/5 px-2.5 py-1 rounded border border-white/5">
                BHF Accredited
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Practice
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Clinical Services
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-white transition-colors">
                  Our Doctors
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Patient Experience
                </a>
              </li>
              <li>
                <a href="#patient-info" className="hover:text-white transition-colors">
                  Patient Information
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Medical Disciplines
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  General Practice Consultations
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Preventative Health & Longevity
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Women’s Health & Hormones
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Men’s Health & Wellness
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Chronic Disease Support
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Travel & Occupational Medicine
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Claremont Practice
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2A9D8F] shrink-0 mt-0.5" />
                <span>
                  Suite 302, Claremont Medical Pavilion<br />
                  123 Main Road, Claremont, Cape Town
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                <a href="tel:0215550148" className="hover:text-white transition-colors tabular-nums">
                  021 555 0148
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                <a href="mailto:hello@aureliamedical.co.za" className="hover:text-white transition-colors">
                  hello@aureliamedical.co.za
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-full bg-[#14746F] hover:bg-[#188B85] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Subtle Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © 2026 Aurelia Medical Suite. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-neutral-300 transition-colors">
              Terms of Care
            </a>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <button
              onClick={onOpenPrivacyModal}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Privacy Policy (POPIA)
            </button>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <a href="#location" className="hover:text-neutral-300 transition-colors">
              Claremont, Cape Town
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
