import React, { useState } from 'react';
import { Camera, Sparkles, Filter, ExternalLink, ArrowRight, Shield, CheckCircle2, MapPin, Clock, X, Eye } from 'lucide-react';

// Cloudinary CDN hosted images with auto-format and auto-quality
const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Pet Damage & Doorway Scratches',
    category: 'pet-damage',
    categoryLabel: 'Pet Damage',
    location: 'South Yarra, Melbourne, Australia',
    timeTaken: '45 mins',
    description: 'Cat scratched doorway carpet fibers down to the underlay. Repaired with seamless donor patch.',
    cloudinaryBefore: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    cloudinaryAfter: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
    serviceOption: 'Carpet Repair - Pet damage repair'
  },
  {
    id: 2,
    title: 'Iron Burn Mark & Fiber Patch',
    category: 'burn-patch',
    categoryLabel: 'Burn & Patch',
    location: 'Richmond, Melbourne, Australia',
    timeTaken: '1 Hour',
    description: 'Accidental hair straightener melt mark on bedroom carpet. Fully restored with matching carpet donor piece.',
    cloudinaryBefore: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    cloudinaryAfter: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    serviceOption: 'Carpet Repair - Patch repair'
  },
  {
    id: 3,
    title: 'Living Room Wave Power Stretching',
    category: 're-stretching',
    categoryLabel: 'Power Stretching',
    location: 'St Kilda, Melbourne, Australia',
    timeTaken: '1.5 Hours',
    description: 'Eliminated hazardous carpet ripples and bumps across a 35m² open living space using hydraulic power stretchers.',
    cloudinaryBefore: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80',
    cloudinaryAfter: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    serviceOption: 'Carpet Stretching and Laying'
  },
  {
    id: 4,
    title: 'Flood Restoration & Underlay Swap',
    category: 'flood-stain',
    categoryLabel: 'Flood & Underlay',
    location: 'Camberwell, Melbourne, Australia',
    timeTaken: '2 Hours',
    description: 'Water damage emergency response. Replaced waterlogged underlay, sanitized backing, and re-fitted carpet.',
    cloudinaryBefore: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    cloudinaryAfter: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    serviceOption: 'Carpet and Underlay replacement'
  },
  {
    id: 5,
    title: 'Hallway Split Seam Repair',
    category: 'burn-patch',
    categoryLabel: 'Seam Repair',
    location: 'Fitzroy, Melbourne, Australia',
    timeTaken: '50 mins',
    description: 'High-traffic hallway seam separated over time. Thermo-welded seam tape applied with invisible finish.',
    cloudinaryBefore: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
    cloudinaryAfter: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    serviceOption: 'Carpet Repair - Carpet seams'
  },
  {
    id: 6,
    title: 'Commercial Office Tile & Carpet Fit',
    category: 'commercial',
    categoryLabel: 'Commercial Fit',
    location: 'Melbourne CBD, Australia',
    timeTaken: '3 Hours',
    description: 'Replaced damaged hallway section in corporate office building overnight without business disruption.',
    cloudinaryBefore: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    cloudinaryAfter: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    serviceOption: 'Carpet Removal and Disposal'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'pet-damage', label: 'Pet Damage' },
  { id: 'burn-patch', label: 'Patch & Burns' },
  { id: 're-stretching', label: 'Re-stretching' },
  { id: 'flood-stain', label: 'Flood & Underlay' },
  { id: 'commercial', label: 'Commercial' },
];

export const PhotoGallery = ({ darkMode, onNavigateToContact }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTabMap, setActiveTabMap] = useState({}); // id -> 'after' | 'before'

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const toggleBeforeAfter = (id, e) => {
    e.stopPropagation();
    setActiveTabMap(prev => ({
      ...prev,
      [id]: prev[id] === 'before' ? 'after' : 'before'
    }));
  };

  return (
    <section id="gallery" className={`py-24 transition-colors duration-300 relative ${
      darkMode ? 'bg-slate-900/60 text-slate-100' : 'bg-slate-50/70 text-slate-900'
    }`}>
      {/* Decorative gradient blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#E1306C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#833AB4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-insta-gradient/10 border border-[#E1306C]/20 text-[#E1306C] text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Cloudinary CDN Photo Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Real Work, <span className="text-insta-gradient">Real Results</span>
          </h2>

          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Explore our latest completed carpet repairs, pet damage restorations, and re-stretching projects delivered across Greater Melbourne, Australia.
          </p>

          {/* Cloudinary Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700">
            <Sparkles className="w-3 h-3 text-[#FCAF45]" />
            <span>Hosted on Cloudinary Fast CDN for instant high-res previews</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-insta-gradient text-white shadow-md shadow-[#E1306C]/20 scale-105'
                  : darkMode
                  ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                  : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const currentTab = activeTabMap[item.id] || 'after';
            const displayImage = currentTab === 'before' ? item.cloudinaryBefore : item.cloudinaryAfter;

            return (
              <div
                key={item.id}
                className={`group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${
                  darkMode
                    ? 'bg-slate-950 border-slate-800/80 hover:border-[#E1306C]/50 hover:shadow-[#E1306C]/10'
                    : 'bg-white border-slate-200 hover:border-[#E1306C]/40 hover:shadow-slate-200'
                }`}
              >
                {/* Image Box */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    src={displayImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Before / After Toggle Pill */}
                  <div className="absolute top-3 left-3 z-10 flex items-center bg-black/75 backdrop-blur-md p-1 rounded-lg border border-white/10 text-xs font-semibold text-white">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTabMap(prev => ({ ...prev, [item.id]: 'before' }));
                      }}
                      className={`px-2 py-0.5 rounded ${currentTab === 'before' ? 'bg-[#E1306C] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
                    >
                      Before
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTabMap(prev => ({ ...prev, [item.id]: 'after' }));
                      }}
                      className={`px-2 py-0.5 rounded ${currentTab === 'after' ? 'bg-emerald-500 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
                    >
                      After (Repaired)
                    </button>
                  </div>

                  {/* Category Pill */}
                  <span className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-[11px] font-bold text-slate-200 border border-slate-700">
                    {item.categoryLabel}
                  </span>

                  {/* View Fullscreen Overlay Trigger */}
                  <button
                    onClick={() => setSelectedProject(item)}
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-bold text-sm cursor-pointer"
                  >
                    <Eye className="w-5 h-5 text-[#E1306C]" />
                    <span>Expand Details & Photos</span>
                  </button>
                </div>

                {/* Info Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#E1306C]" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#FCAF45]" />
                        {item.timeTaken}
                      </span>
                    </div>

                    <h3 className={`text-lg font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>

                    <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.description}
                    </p>
                  </div>

                  {/* Quote Action CTA Button */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-emerald-500 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      100% Invisible Seam Guarantee
                    </span>

                    <button
                      type="button"
                      onClick={() => onNavigateToContact ? onNavigateToContact(item.serviceOption, `I saw the "${item.title}" in your gallery and need a similar quote.`) : null}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-insta-gradient text-white text-xs font-bold hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
                    >
                      <span>Quote This</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cloudinary Info Banner */}
        <div className={`mt-16 p-6 sm:p-8 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6 ${
          darkMode
            ? 'bg-slate-950/80 border-slate-800'
            : 'bg-white border-slate-200 shadow-md'
        }`}>
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold flex items-center justify-center md:justify-start gap-2">
              <Shield className="w-5 h-5 text-[#E1306C]" />
              Need to upload your own damage photo for an instant quote?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Send us a photo of your carpet burn or pet tear via our instant quote form, and our master technicians will evaluate repair feasibility within minutes.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigateToContact ? onNavigateToContact() : null}
            className="px-6 py-3 rounded-xl bg-insta-gradient text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#E1306C]/20 hover:scale-105 transition-transform flex-shrink-0 cursor-pointer"
          >
            Upload Photo & Get Quote
          </button>
        </div>

      </div>

      {/* Lightbox / Fullscreen Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className={`relative w-full max-w-4xl rounded-2xl overflow-hidden border shadow-2xl ${
            darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-xs font-bold text-[#E1306C] uppercase tracking-wider">
                  {selectedProject.categoryLabel} • {selectedProject.location}
                </span>
                <h3 className="text-xl font-extrabold">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Side by Side Comparison */}
            <div className="p-4 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-rose-500 uppercase tracking-wider block">Before Repair</span>
                  <div className="rounded-xl overflow-hidden border border-rose-500/30 aspect-video">
                    <img src={selectedProject.cloudinaryBefore} alt="Before" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider block">After Repair (Cloudinary CDN)</span>
                  <div className="rounded-xl overflow-hidden border border-emerald-500/30 aspect-video">
                    <img src={selectedProject.cloudinaryAfter} alt="After" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm text-slate-300">
                <h4 className="font-bold text-white">Project Case Notes:</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  <span>Service Type: </span>
                  <strong className="text-white">{selectedProject.serviceOption}</strong>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const option = selectedProject.serviceOption;
                    setSelectedProject(null);
                    if (onNavigateToContact) {
                      onNavigateToContact(option, `I would like a quote similar to "${selectedProject.title}".`);
                    }
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-insta-gradient text-white font-bold text-xs shadow-md cursor-pointer"
                >
                  Get Quote For Similar Job
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
