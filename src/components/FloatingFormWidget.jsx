import React, { useState } from 'react';
import { X, MessageSquare, Sparkles, ShieldCheck, Phone } from 'lucide-react';
import { SharedQuoteForm } from './SharedQuoteForm';

export const FloatingFormWidget = ({
  darkMode,
  openPhoneModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[90] flex flex-col items-end">
      {/* Expanded Floating Form Popup Modal */}
      {isOpen && (
        <div
          className={`w-[calc(100vw-2.5rem)] sm:w-[420px] max-h-[85vh] overflow-y-auto rounded-3xl p-5 sm:p-6 border shadow-2xl transition-all animate-fade-in mb-4 ${
            darkMode
              ? 'bg-slate-900/95 border-slate-800 text-white shadow-[#833AB4]/30 backdrop-blur-xl'
              : 'bg-white/95 border-slate-200 text-slate-900 shadow-slate-500/20 backdrop-blur-xl'
          }`}
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-insta-gradient flex items-center justify-center text-white shadow-md">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
            
                <h3 className="text-base font-extrabold">Send Us a Message</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800/40 text-red-800 hover:text-white transition-colors"
                aria-label="Close widget"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Phone Alternative Banner */}
          <div className="mb-4 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-medium">Prefer calling?</span>
            <button
              type="button"
              onClick={() => openPhoneModal('1300 Horizon (1300 842 867)')}
              className="text-[#E1306C] font-bold hover:underline flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>1300 842 867</span>
            </button>
          </div>

          {/* Single Shared Form File */}
          <SharedQuoteForm darkMode={darkMode} compact />

          <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E1306C]" />
            <span>Guaranteed 24-Hour Response • Encrypted Web3Forms</span>
          </div>
        </div>
      )}

      {/* Floating Action Button Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-insta-gradient hover:bg-insta-gradient-hover text-white font-bold text-xs uppercase tracking-wider shadow-2xl shadow-[#E1306C]/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Toggle Quick Quote Form Widget"
      >
        {/* Pulse ring indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FCAF45] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#FCAF45]"></span>
        </span>

        {isOpen ? (
          <>
            <X className="w-5 h-5" />
            <span>Close Form</span>
          </>
        ) : (
          <>
            <MessageSquare className="w-5 h-5 animate-bounce" />
            <span>Contact Form</span>
          </>
        )}
      </button>
    </div>
  );
};

