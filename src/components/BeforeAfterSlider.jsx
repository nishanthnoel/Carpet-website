import React, { useState, useRef, useCallback } from 'react';
import { BEFORE_AFTER_GALLERY } from '../data/servicesData';
import { SlidersHorizontal, ArrowLeftRight, Check, Sparkles } from 'lucide-react';

export const BeforeAfterSlider = ({ darkMode, onSelectService }) => {
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  const activeItem = BEFORE_AFTER_GALLERY[selectedGalleryIndex];

  const handleMove = useCallback((clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className={`py-20 md:py-28 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900/60 border-y border-slate-800' : 'bg-slate-50 border-y border-slate-200/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${
            darkMode ? 'bg-[#E1306C]/10 text-[#E1306C] border border-[#E1306C]/20' : 'bg-[#E1306C]/10 text-[#E1306C]'
          }`}>
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#E1306C]" />
            <span>Interactive Before & After Proof</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            See the Seamless Transformation
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Drag the interactive handle across our real job gallery to witness how  The Horizon Carpets erases pet claws, wave buckles, and split seams.
          </p>
        </div>

        {/* Gallery Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {BEFORE_AFTER_GALLERY.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedGalleryIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedGalleryIndex === idx
                  ? 'bg-insta-gradient text-white shadow-md shadow-[#E1306C]/30'
                  : darkMode
                  ? 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-900'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Drag Comparison Widget */}
        <div className="max-w-4xl mx-auto">
          <div className={`p-4 sm:p-6 rounded-3xl border shadow-2xl ${
            darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
              <div>
                <h3 className={`text-xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {activeItem.title}
                </h3>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {activeItem.subtitle}
                </p>
              </div>

              <button
                onClick={() => onSelectService(activeItem.serviceType)}
                className="px-4 py-2 rounded-xl bg-insta-gradient hover:bg-insta-gradient-hover text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book This Repair Type</span>
              </button>
            </div>

            {/* Slider Stage */}
            <div
              ref={sliderRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onClick={(e) => handleMove(e.clientX)}
              className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-200 dark:border-slate-800"
            >
              {/* After Image (Background) */}
              <img
                src={activeItem.afterImage}
                alt="Repaired carpet finish"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Before Image (Clipped Overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeItem.beforeImage}
                  alt="Damaged carpet before repair"
                  className="absolute top-0 left-0 max-w-none h-full object-cover"
                  style={{ width: sliderRef.current ? `${sliderRef.current.offsetWidth}px` : '100%' }}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlay Labels */}
              <div className="absolute top-4 left-4 pointer-events-none">
                <span className="bg-[#E1306C]/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow">
                  {activeItem.beforeLabel}
                </span>
              </div>

              <div className="absolute top-4 right-4 pointer-events-none">
                <span className="bg-[#833AB4]/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow">
                  {activeItem.afterLabel}
                </span>
              </div>

              {/* Slider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-xl cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-[#E1306C] to-[#FCAF45] text-white shadow-xl border-2 border-white flex items-center justify-center">
                  <ArrowLeftRight className="w-5 h-5" />
                </div>
              </div>

            </div>

            <p className={`text-center text-xs mt-3 font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              👈 Drag or tap anywhere on the image to slide between Before & After 👉
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};
