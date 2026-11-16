import React, { useState } from 'react';
import { MAIN_SERVICES, CARPET_REPAIR_SUBTYPES } from '../data/servicesData';
import {
  Scissors,
  Layers,
  Trash2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  ChevronRight,
  X,
  Wrench,
  Sparkle
} from 'lucide-react';

export const ServicesSection = ({
  darkMode,
  onSelectServiceForContact,
}) => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);
  const [selectedSubtypeModal, setSelectedSubtypeModal] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-[#E1306C]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#E1306C]" />;
      case 'Trash2':
        return <Trash2 className="w-6 h-6 text-[#E1306C]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#E1306C]" />;
      default:
        return <Wrench className="w-6 h-6 text-[#E1306C]" />;
    }
  };

  return (
    <section id="services" className={`py-20 md:py-28 transition-colors duration-300 ${
      darkMode ? 'bg-slate-950' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${
            darkMode ? 'bg-[#E1306C]/10 text-[#E1306C] border border-[#E1306C]/20' : 'bg-[#E1306C]/10 text-[#E1306C]'
          }`}>
            <span>Our Core Offerings</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Specialized Carpet Services
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            From precision pet damage fixes and power stretching to complete carpet & underlay replacement, The Horizon Carpets  delivers master craftsmanship tailored to your space.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'repair', label: 'Carpet Repair (5 Types)' },
            { id: 'stretching', label: 'Stretching & Laying' },
            { id: 'removal', label: 'Removal & Disposal' },
            { id: 'replacement', label: 'Carpet & Underlay Replacement' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-insta-gradient text-white shadow-md shadow-[#E1306C]/25 scale-105'
                  : darkMode
                  ? 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
                  : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dedicated Carpet Repair Sub-Services Feature Highlight Box */}
        {(activeTab === 'all' || activeTab === 'repair') && (
          <div className={`mb-16 p-6 sm:p-8 rounded-3xl border transition-all ${
            darkMode
              ? 'bg-slate-900/90 border-[#E1306C]/30 shadow-xl shadow-[#833AB4]/10'
              : 'bg-gradient-to-br from-[#E1306C]/5 via-slate-50 to-white border-[#E1306C]/20 shadow-sm'
          }`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#E1306C]/10 text-[#E1306C] text-xs font-bold uppercase tracking-wider mb-2">
                  <Scissors className="w-3.5 h-3.5" />
                  <span>Carpet Repair Sub-Specialties</span>
                </div>
                <h3 className={`text-2xl sm:text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Targeted Carpet Repair Services
                </h3>
                <p className={`text-sm mt-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  Click any repair type below to see exact methods or book instantly.
                </p>
              </div>

              <button
                onClick={() => onSelectServiceForContact('Carpet Repair - Patch repair')}
                className="px-5 py-2.5 rounded-xl bg-insta-gradient hover:bg-insta-gradient-hover text-white font-semibold text-xs uppercase tracking-wider shadow-md self-start md:self-auto transition-all"
              >
                Book Carpet Repair
              </button>
            </div>

            {/* 5 Specific Subtype Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {CARPET_REPAIR_SUBTYPES.map((sub, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedSubtypeModal(sub)}
                  className={`group p-5 rounded-2xl border cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? 'bg-slate-950/80 border-slate-800 hover:border-[#E1306C]/50 hover:bg-slate-900'
                      : 'bg-white border-slate-200/90 hover:border-[#E1306C]/40 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-lg bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center font-bold text-xs">
                      0{idx + 1}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#E1306C] group-hover:translate-x-1 transition-all" />
                  </div>

                  <h4 className={`text-base font-bold mb-1.5 group-hover:text-[#E1306C] transition-colors ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {sub.title}
                  </h4>

                  <p className={`text-xs line-clamp-2 leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {sub.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-[#E1306C] uppercase">View Method</span>
                    <span className="text-[10px] font-bold text-slate-400">100% Seamless</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {MAIN_SERVICES.filter((s) => {
            if (activeTab === 'all') return true;
            if (activeTab === 'repair') return s.id === 'carpet-repair';
            if (activeTab === 'stretching') return s.id === 'carpet-stretching';
            if (activeTab === 'removal') return s.id === 'carpet-removal';
            if (activeTab === 'replacement') return s.id === 'carpet-replacement';
            return true;
          }).map((s) => (
            <div
              key={s.id}
              className={`p-7 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:border-[#E1306C]/40 hover:shadow-xl hover:shadow-[#833AB4]/10'
                  : 'bg-white border-slate-200 hover:border-[#E1306C]/30 hover:shadow-lg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E1306C]/10 flex items-center justify-center">
                    {getIcon(s.iconName)}
                  </div>
                  {s.popular && (
                    <span className="px-3 py-1 rounded-full bg-[#FCAF45]/10 text-[#FCAF45] border border-[#FCAF45]/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                      <Sparkle className="w-3 h-3" /> Most Requested
                    </span>
                  )}
                </div>

                <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {s.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {s.shortDesc}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  {s.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#E1306C] flex-shrink-0 mt-0.5" />
                      <span className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <span className={`text-[11px] block font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Starting From
                  </span>
                  <span className={`text-2xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {s.priceFrom}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedServiceModal(s)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                        : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Service Details
                  </button>

                  <button
                    onClick={() => onSelectServiceForContact(s.exactFormOption)}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-insta-gradient hover:bg-insta-gradient-hover text-white font-semibold text-xs transition-all shadow-md shadow-[#E1306C]/20"
                  >
                    <span>Select Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Main Service Detail Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className={`relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 border shadow-2xl max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E1306C]/10 flex items-center justify-center text-[#E1306C]">
                {getIcon(selectedServiceModal.iconName)}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E1306C]">
                {selectedServiceModal.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">{selectedServiceModal.title}</h3>
            <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {selectedServiceModal.fullDesc}
            </p>

            <div className="space-y-4 mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Included Features & Workmanship</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedServiceModal.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#E1306C]/5 border border-[#E1306C]/10">
                    <CheckCircle2 className="w-4 h-4 text-[#E1306C] flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mb-6">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                <Clock className="w-4 h-4 text-[#E1306C]" />
                <span>Est. Duration: {selectedServiceModal.estimatedTime}</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 block text-right">Starts At</span>
                <span className="text-xl font-extrabold text-[#E1306C]">{selectedServiceModal.priceFrom}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const opt = selectedServiceModal.exactFormOption;
                  setSelectedServiceModal(null);
                  onSelectServiceForContact(opt);
                }}
                className="px-6 py-2.5 rounded-xl bg-insta-gradient hover:bg-insta-gradient-hover text-white text-xs font-bold shadow-lg"
              >
                Inquire Now With This Service
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Carpet Repair Subtype Detail Modal */}
      {selectedSubtypeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className={`relative w-full max-w-xl rounded-3xl p-6 sm:p-8 border shadow-2xl max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <button
              onClick={() => setSelectedSubtypeModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#E1306C] mb-2 block">
              Carpet Repair Method
            </span>

            <h3 className="text-2xl font-extrabold mb-3">{selectedSubtypeModal.title}</h3>
            <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {selectedSubtypeModal.description}
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#FCAF45] mb-2">Common Causes</h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  {selectedSubtypeModal.commonCauses.map((cause, i) => (
                    <li key={i}>{cause}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#E1306C]/10 border border-[#E1306C]/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#E1306C] mb-1">Our Restoration Method</h4>
                <p className="text-xs text-slate-700 dark:text-slate-200 font-medium">{selectedSubtypeModal.repairMethod}</p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedSubtypeModal(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700"
              >
                Back
              </button>
              <button
                onClick={() => {
                  const opt = selectedSubtypeModal.exactFormOption;
                  setSelectedSubtypeModal(null);
                  onSelectServiceForContact(opt);
                }}
                className="px-6 py-2.5 rounded-xl bg-insta-gradient hover:bg-insta-gradient-hover text-white text-xs font-bold shadow-lg"
              >
                Book {selectedSubtypeModal.title}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
