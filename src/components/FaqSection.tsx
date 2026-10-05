import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Phone } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#14746F] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Enquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0C182A] tracking-[-0.015em]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-[#4B5563] leading-relaxed">
            Everything you need to know about consulting with Aurelia Medical Suite in Claremont.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#0C182A]/[0.06] overflow-hidden transition-all duration-200 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 sm:px-7 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14746F]"
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-[#0C182A]">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#0C182A] text-white border-[#0C182A]' : 'text-neutral-500 bg-neutral-50'
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm text-[#4B5563] leading-relaxed border-t border-neutral-100 animate-in fade-in-50 duration-200">
                    <p className="max-w-3xl">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F5F4F0] border border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-serif text-base font-semibold text-[#0C182A]">
              Have a specific clinical or billing question?
            </div>
            <div className="text-xs text-[#6B7280] mt-0.5">
              Our front-desk team is on hand Monday through Saturday.
            </div>
          </div>
          <a
            href="tel:0215550148"
            className="px-5 py-2.5 rounded-full bg-white border border-neutral-300 hover:border-[#14746F] text-xs font-semibold text-[#0C182A] flex items-center gap-2 shrink-0 transition-colors shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#14746F]" />
            <span>Call 021 555 0148</span>
          </a>
        </div>
      </div>
    </section>
  );
};
