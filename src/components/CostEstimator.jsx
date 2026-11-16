import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { SERVICE_EXACT_OPTIONS } from '../data/servicesData';

export const CostEstimator = ({ darkMode, onApplyEstimateToForm }) => {
  const [selectedService, setSelectedService] = useState('Carpet Repair - Pet damage repair');
  const [roomsCount, setRoomsCount] = useState(1);
  const [severity, setSeverity] = useState('minor');

  const calculateEstimate = () => {
    let base = 150;
    if (selectedService.includes('Stretching')) base = 180;
    if (selectedService.includes('Removal')) base = 160;
    if (selectedService.includes('replacement')) base = 350;

    let multiplier = 1;
    if (severity === 'moderate') multiplier = 1.35;
    if (severity === 'extensive') multiplier = 1.75;

    const min = Math.round((base + (roomsCount - 1) * 70) * multiplier);
    const max = Math.round(min * 1.25);

    return { min, max };
  };

  const { min, max } = calculateEstimate();

  const handleApply = () => {
    const desc = `Instant Cost Estimate Details:
- Service Required: ${selectedService}
- Rooms/Areas: ${roomsCount}
- Issue Severity: ${severity.toUpperCase()}
- Estimated Price Range: $${min} - $${max} AUD`;

    onApplyEstimateToForm(selectedService, desc);
  };

  return (
    <section className={`py-20 md:py-28 transition-colors duration-300 ${
      darkMode ? 'bg-slate-950' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`p-8 sm:p-12 rounded-3xl border shadow-xl ${
          darkMode
            ? 'bg-slate-900/90 border-slate-800 shadow-[#833AB4]/10'
            : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#E1306C]/10 text-[#E1306C] text-xs font-bold uppercase tracking-wider mb-2">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Instant Quote Estimator</span>
                </div>

                <h3 className={`text-2xl sm:text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Estimate Your Repair or Stretching Cost
                </h3>

                <p className={`text-sm mt-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  Select your service parameters below for an instant rough estimate range.
                </p>
              </div>

              {/* Service Dropdown */}
              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Select Service Required
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className={`w-full p-3.5 rounded-xl text-sm font-medium border transition-colors ${
                    darkMode
                      ? 'bg-slate-950 border-slate-800 text-white focus:border-[#E1306C]'
                      : 'bg-white border-slate-300 text-slate-900 focus:border-[#E1306C]'
                  }`}
                >
                  {SERVICE_EXACT_OPTIONS.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rooms Counter */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className={`text-xs font-bold uppercase tracking-wider ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Number of Affected Rooms / Areas
                  </label>
                  <span className="text-sm font-extrabold text-[#E1306C]">{roomsCount} {roomsCount === 1 ? 'Room' : 'Rooms'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={roomsCount}
                  onChange={(e) => setRoomsCount(Number(e.target.value))}
                  className="w-full accent-[#E1306C] h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-semibold text-slate-400 mt-1">
                  <span>1 Room</span>
                  <span>3 Rooms</span>
                  <span>6+ Rooms</span>
                </div>
              </div>

              {/* Severity Buttons */}
              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Damage / Work Scope Severity
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'minor', label: 'Minor / Localized' },
                    { id: 'moderate', label: 'Moderate' },
                    { id: 'extensive', label: 'Extensive / Large' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSeverity(s.id)}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all ${
                        severity === s.id
                          ? 'bg-insta-gradient text-white border-transparent shadow-md'
                          : darkMode
                          ? 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Estimated Result Box */}
            <div className="lg:col-span-5">
              <div className={`p-6 sm:p-8 rounded-2xl border text-center relative overflow-hidden ${
                darkMode
                  ? 'bg-slate-950 border-[#E1306C]/30'
                  : 'bg-white border-[#E1306C]/20 shadow-lg'
              }`}>
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-insta-gradient" />

                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Estimated Price Range
                </span>

                <div className="text-4xl sm:text-5xl font-extrabold text-[#E1306C] mb-2">
                  ${min} - ${max} <span className="text-xs font-semibold text-slate-400">AUD</span>
                </div>

                <p className={`text-xs mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Includes materials, heat-bond tape, power stretching tools, and 100% workmanship warranty.
                </p>

                <button
                  onClick={handleApply}
                  className="w-full py-4 rounded-xl bg-insta-gradient hover:bg-insta-gradient-hover text-white font-bold text-sm transition-all shadow-lg shadow-[#E1306C]/30 flex items-center justify-center gap-2 group"
                >
                  <Sparkles className="w-4 h-4 text-[#FCAF45] group-hover:rotate-12 transition-transform" />
                  <span>Transfer Estimate to Contact Form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-slate-400 mt-3 font-medium">
                  ⚡ Pre-fills your service option & estimate notes automatically!
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
