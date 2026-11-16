import React, { useEffect } from 'react';
import { SERVICE_EXACT_OPTIONS } from '../data/servicesData';
import { Send, Phone } from 'lucide-react';
import { SharedQuoteForm } from './SharedQuoteForm';
import { useQuoteForm } from '../context/QuoteFormContext';

export const ContactForm = ({
  darkMode,
  prefilledService,
  prefilledDescription,
  openPhoneModal,
}) => {
  const { setPrefilledData } = useQuoteForm();

  useEffect(() => {
    if (prefilledService && SERVICE_EXACT_OPTIONS.includes(prefilledService)) {
      setPrefilledData(prefilledService, prefilledDescription);
    } else if (prefilledDescription) {
      setPrefilledData(undefined, prefilledDescription);
    }
  }, [prefilledService, prefilledDescription, setPrefilledData]);

  return (
    <section id="contact" className={`py-20 md:py-28 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900/40 border-t border-slate-800' : 'bg-slate-50 border-t border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase ${
            darkMode ? 'bg-[#E1306C]/10 text-[#E1306C] border border-[#E1306C]/20' : 'bg-[#E1306C]/10 text-[#E1306C]'
          }`}>
            <Send className="w-3.5 h-3.5 text-[#E1306C]" />
            <span>Web3Forms Integrated Booking</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Get Your Free Carpet Repair Quote
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Fill in your details below to schedule an inspection or receive a fast phone quote. Submissions route directly to our team with zero delay.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Hotline */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-8 rounded-3xl border ${
              darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
            }`}>
              <h3 className="text-2xl font-bold mb-4">Contact The Horizon Carpets </h3>
              <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Prefer to speak with a master carpet craftsman immediately? Give us a call or send your project details.
              </p>

              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => openPhoneModal ? openPhoneModal('1300 Horizon (1300 842 867)') : window.location.href = 'tel:1300842867'}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl bg-[#E1306C]/10 border border-[#E1306C]/20 text-[#E1306C] hover:bg-[#E1306C]/20 transition-all group text-left cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-insta-gradient text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#E1306C] block">Direct Hotline</span>
                    <span className="text-xl font-extrabold text-white dark:text-white">1300 HORIZON (1300 842 867)</span>
                  </div>
                </button>

                <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Operating Hours</span>
                  <p className="text-sm font-semibold">Monday – Saturday: 7:00 AM – 7:00 PM</p>
                  <p className="text-xs text-slate-400 mt-0.5">Emergency Sunday Callouts Available</p>
                </div>

                <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Service Coverage</span>
                  <p className="text-sm font-semibold">All Greater Melbourne, Australia Suburbs & Surrounds</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Web3Forms Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-3xl border shadow-2xl ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <SharedQuoteForm darkMode={darkMode} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
