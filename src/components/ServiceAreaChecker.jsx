import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { COVERED_SUBURBS } from '../data/servicesData';

export const ServiceAreaChecker = ({ darkMode }) => {
  const [query, setQuery] = useState('');
  const [resultStatus, setResultStatus] = useState('idle');

  const handleCheck = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const lower = query.toLowerCase().trim();
    const matches = COVERED_SUBURBS.some((s) => s.toLowerCase().includes(lower));

    if (matches || /^\d{4}$/.test(lower)) {
      setResultStatus('found');
    } else {
      setResultStatus('extended');
    }
  };

  return (
    <section className={`py-16 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900/40 border-y border-slate-800' : 'bg-slate-100/70 border-y border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E1306C]/10 text-[#E1306C] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#E1306C]" />
            <span>Service Coverage Checker</span>
          </div>

          <h3 className={`text-2xl sm:text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Do We Service Your Suburb or Postcode?
          </h3>

          <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Enter your suburb or postcode below for instant coverage confirmation and emergency booking slots.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleCheck} className="max-w-xl mx-auto flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (resultStatus !== 'idle') setResultStatus('idle');
              }}
              placeholder="e.g. Richmond, St Kilda, 3000, South Yarra..."
              className={`w-full pl-12 pr-4 py-3.5 rounded-xl text-sm font-medium border transition-colors ${
                darkMode
                  ? 'bg-slate-950 border-slate-800 text-white focus:border-[#E1306C]'
                  : 'bg-white border-slate-300 text-slate-900 focus:border-[#E1306C]'
              }`}
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3.5 rounded-xl bg-insta-gradient hover:bg-insta-gradient-hover text-white font-bold text-sm transition-all shadow-md"
          >
            Check Coverage
          </button>
        </form>

        {/* Status Message */}
        {resultStatus === 'found' && (
          <div className="max-w-xl mx-auto p-4 rounded-xl bg-[#E1306C]/10 border border-[#E1306C]/30 text-[#E1306C] flex items-center gap-3 animate-fade-in">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#E1306C]" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider">Full Priority Service Available!</p>
              <p className="text-xs text-slate-300 dark:text-slate-200 mt-0.5">
                We have active technicians servicing <strong>{query}</strong> with 24-48 hr booking availability.
              </p>
            </div>
          </div>
        )}

        {resultStatus === 'extended' && (
          <div className="max-w-xl mx-auto p-4 rounded-xl bg-[#FCAF45]/10 border border-[#FCAF45]/30 text-[#FCAF45] flex items-center gap-3 animate-fade-in">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-[#FCAF45]" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider">Extended Coverage Available!</p>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                We service surrounding regions near <strong>{query}</strong>. Submit your contact details below to confirm callout scheduling.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
