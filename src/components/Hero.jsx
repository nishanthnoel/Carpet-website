import React from 'react';
import { ShieldCheck, Phone, Sparkles, Star, CheckCircle2 } from 'lucide-react';
import { SharedQuoteForm } from './SharedQuoteForm';

export const Hero = ({
  darkMode,
  onNavigateToContact,
  openPhoneModal,
}) => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-[#833AB4]' : 'bg-[#C13584]/40'
        }`} />
        <div className={`absolute top-1/2 -left-40 w-96 h-96 rounded-full blur-3xl opacity-15 ${
          darkMode ? 'bg-[#E1306C]' : 'bg-[#FCAF45]/40'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Top Badge */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border ${
              darkMode
                ? 'bg-slate-900/80 border-slate-700/80 text-[#E1306C]'
                : 'bg-[#E1306C]/10 border-[#E1306C]/20 text-[#E1306C]'
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-[#E1306C]" />
              <span>Master Craftsmen in Carpet Repair & Stretching</span>
            </div>

            {/* Main Headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Don't Replace It. <br />
              <span className="text-insta-gradient">
                Seamlessly Repair It.
              </span>
            </h1>

            {/* Body Copy */}
            <p className={`text-lg sm:text-xl font-normal leading-relaxed max-w-2xl ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              The Horizon Carpets delivers invisible carpet patch repairs, pet damage fixes, wave power stretching, and underlay replacement across Melbourne, Australia. Save up to 80% compared to buying new carpet.
            </p>

            {/* Key Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Invisible Pet Damage & Patch Repairs',
                'Power Stretching Wrinkles & Waves',
                'Moth & Seam Burn Restoration',
                'End-of-Lease Bond Back Guarantee'
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E1306C] flex-shrink-0" />
                  <span className={`text-sm font-medium ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct Phone CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => openPhoneModal ? openPhoneModal('1300 VICTOR (1300 842 867)') : window.location.href = 'tel:1300842867'}
                className={`flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-base border transition-all duration-200 cursor-pointer ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 text-white hover:bg-slate-800 hover:border-slate-700'
                    : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
                }`}
              >
                <Phone className="w-5 h-5 text-[#E1306C]" />
                <span>Call Hotline 1300 842 867</span>
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <ShieldCheck className="w-4 h-4 text-[#E1306C]" />
                <span>100% Bond Refund Guarantee</span>
              </div>
            </div>

            {/* Social Proof
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-6">
              <div className="flex -space-x-2">
                {['https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80'
                ].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Satisfied client avatar"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#FCAF45]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FCAF45]" />
                  ))}
                  <span className={`text-sm font-bold ml-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>4.9 / 5.0</span>
                </div>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Based on 850+ Google & Local Service Reviews
                </p>
              </div>
            </div>
            */}

          </div>

          {/* Right Column: Contact Us Form */}
          <div className="lg:col-span-6 relative">
            <div className={`p-6 sm:p-8 rounded-3xl border shadow-2xl transition-all ${
              darkMode
                ? 'bg-slate-900/95 border-slate-800 shadow-[#833AB4]/10'
                : 'bg-white border-slate-200/90 shadow-slate-300/40'
            }`}>
              
              <div className="pb-4 mb-5 border-b border-slate-200 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E1306C]">Fast 24-Hour Service</span>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Request Free Quote
                </h3>
              </div>

              <SharedQuoteForm darkMode={darkMode} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

