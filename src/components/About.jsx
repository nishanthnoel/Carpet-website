import React from 'react';
import { Shield, Wrench, CheckCircle, HeartHandshake, Zap, DollarSign } from 'lucide-react';

export const About = ({ darkMode }) => {
  const values = [
    {
      icon: Wrench,
      title: 'Precision Micro-Craftsmanship',
      desc: 'We match fiber density, tuft twists, and directional pile angles so patch repairs blend invisibly into your existing floor.'
    },
    {
      icon: DollarSign,
      title: 'Save 70-80% vs Replacement',
      desc: 'Replacing a whole room carpet can cost thousands. Our targeted repair and stretching solutions achieve perfection for a fraction of the price.'
    },
    {
      icon: Shield,
      title: '100% Bond Back Guarantee',
      desc: 'Real estate property managers inspect closely. Our repairs satisfy stringent tenancy standards so you receive your full security deposit back.'
    },
    {
      icon: Zap,
      title: 'Rapid 24-48 Hr Turnaround',
      desc: 'Emergency pet damage before lease end or unexpected iron burn before guests arrive? We offer prompt, reliable scheduling.'
    }
  ];

  return (
    <section id="about" className={`py-20 md:py-28 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900/50 border-y border-slate-800' : 'bg-slate-50 border-y border-slate-200/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${
            darkMode ? 'bg-[#E1306C]/10 text-[#E1306C] border border-[#E1306C]/20' : 'bg-[#E1306C]/10 text-[#E1306C]'
          }`}>
            <span>About The Horizon Carpets </span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Melbourne’s Trusted Master Carpet Repair & Flooring Specialists
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            At <strong className="text-[#E1306C]">The Horizon Carpets </strong>, we believe every carpet deserves a second life. Instead of forcing costly full-room carpet replacements, our certified master technicians use precision repair, invisible patch weaving, and industrial power stretching to make damaged or wrinkled carpets look as good as new.
          </p>
        </div>

        {/* Story & Visual Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1000&q=80"
                alt="Craftsman repairing carpet seam"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <p className="text-[#E1306C] text-xs font-bold uppercase tracking-wider">Expertise You Can Count On</p>
                <p className="text-sm font-semibold mt-1">Over 15 Years of Specialized Carpet Restoration Excellence across Melbourne, Australia.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Why Homeowners, Landlords & Property Managers Choose Us
            </h3>

            <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Carpet damage happens unexpectedly—a pet clawing at a closed door, an iron accidentally left face down, moth infestations in quiet corners, or unsightly waves tripping guests up. Buying brand-new carpet for an entire floor can cost thousands and create unnecessary landfill waste.
            </p>

            <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
             The Horizon Carpets  provides a smarter, highly cost-effective alternative. By utilizing spare carpet remnants or discreet donor patches from closets, our heat-bond micro-seam technology restores carpet integrity seamlessly.
            </p>

            {/* Checkmark List */}
            <div className="space-y-3 pt-2">
              {[
                'Non-destructive patch repairs using hidden closet donor sections',
                'Heavy-duty power stretchers that remove dangerous ripples permanently',
                'Full removal and eco-disposal when replacement is requested',
                'Fully insured, police-checked, and background-verified technicians'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-[#E1306C]/10 text-[#E1306C] mt-1">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className={`text-sm font-medium ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 4 Pillars Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/90 border-slate-800 hover:border-[#E1306C]/50 hover:shadow-lg hover:shadow-[#833AB4]/10'
                    : 'bg-white border-slate-200 hover:border-[#E1306C]/30 hover:shadow-md'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {v.title}
                </h4>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
