import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Experience', href: '#experience' },
    { label: 'Patient Info', href: '#patient-info' },
    { label: 'Location', href: '#location' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav border-b border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Single element Brand Zone */}
          <a
            href="#"
            className="group flex items-baseline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14746F] rounded"
          >
            <span
              className={`font-serif text-2xl md:text-2xl tracking-[0.08em] font-semibold transition-colors duration-300 ${
                isScrolled ? 'text-[#0C182A]' : 'text-[#0C182A]'
              }`}
            >
              AURELIA
            </span>
            <span
              className={`font-sans text-[11px] uppercase tracking-[0.2em] font-medium ml-2 transition-colors duration-300 ${
                isScrolled ? 'text-[#14746F]' : 'text-[#14746F]'
              }`}
            >
              Medical Suite
            </span>
          </a>

          {/* Zone 2: Clean 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#374151] hover:text-[#0C182A] transition-colors duration-200 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#14746F] transition-all duration-200 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:0215550148"
              className="text-xs font-medium text-[#4B5563] hover:text-[#0C182A] transition-colors flex items-center gap-1.5 px-2 py-1"
              title="Call Claremont Practice"
            >
              <Phone className="w-3.5 h-3.5 text-[#14746F]" />
              <span className="tabular-nums">021 555 0148</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-[#0C182A] hover:bg-[#14223D] active:scale-[0.98] transition-all duration-200 rounded-full shadow-[0_2px_8px_rgba(12,24,42,0.12)] whitespace-nowrap cursor-pointer"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0C182A] rounded-full whitespace-nowrap"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-[#0C182A] hover:bg-black/5 rounded-lg transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-black/40 backdrop-blur-xs transition-opacity">
          <div className="fixed top-16 left-0 right-0 bg-[#FAF9F6] border-b border-neutral-200 p-6 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#1F2937] hover:text-[#14746F] py-2 border-b border-neutral-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:0215550148"
                className="text-sm font-medium text-[#4B5563] flex items-center justify-center gap-2 py-2.5 rounded-lg border border-neutral-200"
              >
                <Phone className="w-4 h-4 text-[#14746F]" />
                Call Practice: 021 555 0148
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-sm font-semibold tracking-wide text-white bg-[#0C182A] rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
