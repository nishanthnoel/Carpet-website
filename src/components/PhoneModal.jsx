import React, { useState } from 'react';
import { Phone, Copy, Scissors, X, Check, ShieldCheck, Sparkles } from 'lucide-react';

export const PhoneModal = ({
  isOpen,
  onClose,
  phoneNumber = "1300 VICTOR (1300 842 867)",
  telNumber = "1300842867",
  darkMode,
}) => {
  const [copiedState, setCopiedState] = useState('idle');

  if (!isOpen) return null;

  const handleCall = () => {
    window.location.href = `tel:${telNumber}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("1300 842 867");
      setCopiedState('copied');
      setTimeout(() => setCopiedState('idle'), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleCut = async () => {
    try {
      await navigator.clipboard.writeText("1300 842 867");
      setCopiedState('cut');
      setTimeout(() => setCopiedState('idle'), 2500);
    } catch (err) {
      console.error('Failed to cut', err);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
      <div
        className={`relative w-full max-w-md rounded-3xl p-6 sm:p-8 border shadow-2xl transition-all ${
          darkMode
            ? 'bg-slate-900 border-slate-800 text-white shadow-[#833AB4]/20'
            : 'bg-white border-slate-200 text-slate-900 shadow-slate-400/30'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-800/20 text-slate-400 hover:text-white transition-colors"
          aria-label="Close phone modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-insta-gradient flex items-center justify-center text-white shadow-lg shadow-[#E1306C]/30">
            <Phone className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#E1306C] flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#FCAF45]" />
              Phone Action Options
            </span>
            <h3 className="text-xl font-extrabold tracking-tight">Connect With The Horizon Carpets </h3>
          </div>
        </div>

        {/* Display Phone Number */}
        <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-center mb-6">
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
            24/7 Hotline Number
          </p>
          <p className="text-2xl font-black text-transparent bg-clip-text bg-insta-gradient tracking-tight">
            {phoneNumber}
          </p>
          <p className="text-[11px] text-slate-400 mt-1 font-medium">
            Standard Melbourne, Australia phone rates apply
          </p>
        </div>

        {/* Action Status Feedback Banner */}
        {copiedState !== 'idle' && (
          <div className="mb-4 p-3 rounded-xl bg-[#E1306C]/10 border border-[#E1306C]/30 text-[#E1306C] text-xs font-bold flex items-center justify-center gap-2 animate-fade-in">
            <Check className="w-4 h-4 text-[#FCAF45]" />
            <span>
              {copiedState === 'copied'
                ? 'Phone number (1300 842 867) copied to clipboard!'
                : 'Phone number (1300 842 867) cut & copied to clipboard!'}
            </span>
          </div>
        )}

        {/* Option Buttons Grid */}
        <div className="space-y-3">
          {/* Option 1: Call Now */}
          <button
            onClick={handleCall}
            className="w-full py-3.5 px-5 rounded-2xl bg-insta-gradient hover:bg-insta-gradient-hover text-white font-bold text-sm shadow-xl shadow-[#E1306C]/25 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="font-extrabold text-sm">Call Direct Now</div>
                <div className="text-[10px] text-white/80 font-normal">Initiates telephone call via dialer</div>
              </div>
            </div>
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-lg">
              Call
            </span>
          </button>

          {/* Option 2: Copy Number */}
          <button
            onClick={handleCopy}
            className={`w-full py-3.5 px-5 rounded-2xl border font-bold text-sm flex items-center justify-between transition-all ${
              darkMode
                ? 'bg-slate-950 border-slate-800 text-white hover:border-[#E1306C]/50 hover:bg-slate-900'
                : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-[#E1306C]/50 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-slate-800/40 text-[#E1306C] flex items-center justify-center">
                <Copy className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="font-extrabold text-sm">Copy Number</div>
                <div className="text-[10px] text-slate-400 font-normal">Copies "1300 842 867" to clipboard</div>
              </div>
            </div>
            <span className="text-xs font-semibold text-slate-400">
              Copy
            </span>
          </button>

          {/* Option 3: Cut Number */}
          <button
            onClick={handleCut}
            className={`w-full py-3.5 px-5 rounded-2xl border font-bold text-sm flex items-center justify-between transition-all ${
              darkMode
                ? 'bg-slate-950 border-slate-800 text-white hover:border-[#FCAF45]/50 hover:bg-slate-900'
                : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-[#FCAF45]/50 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-slate-800/40 text-[#FCAF45] flex items-center justify-center">
                <Scissors className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="font-extrabold text-sm">Cut / Select Number</div>
                <div className="text-[10px] text-slate-400 font-normal">Cuts & saves number for pasting in messages</div>
              </div>
            </div>
            <span className="text-xs font-semibold text-slate-400">
              Cut
            </span>
          </button>
        </div>

        {/* Footer Guarantee */}
        <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
          <ShieldCheck className="w-4 h-4 text-[#E1306C]" />
          <span>The Horizon Carpets • Melbourne, Australia Carpet Master Technicians</span>
        </div>
      </div>
    </div>
  );
};
