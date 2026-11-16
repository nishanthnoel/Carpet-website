import React from 'react';
import { Shield, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export const Footer = ({ darkMode, openPhoneModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`transition-colors duration-300 border-t ${
      darkMode ? 'bg-slate-950 border-slate-800/80 text-slate-300' : 'bg-slate-900 border-slate-800 text-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-insta-gradient flex items-center justify-center text-white shadow-md">
                <Shield className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                VICTOR <span className="text-insta-gradient">ELITE</span> SOLUTIONS
              </span>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              Melbourne’s premier master technicians specializing in non-destructive carpet repair, pet scratch fixes, power stretching, removal, and plush underlay replacement.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() => openPhoneModal ? openPhoneModal('1300 VICTOR (1300 842 867)') : window.location.href = 'tel:1300842867'}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-insta-gradient hover:bg-insta-gradient-hover text-white text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>1300 842 867</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Work Gallery', href: '#gallery' },
                { name: 'Contact us', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#E1306C] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Carpet Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Core Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Carpet Repair - Pet damage repair</li>
              <li>• Carpet Repair - Patch repair</li>
              <li>• Carpet Repair - Moth damage repair</li>
              <li>• Carpet Repair - Hole repair</li>
              <li>• Carpet Repair - Carpet seams</li>
              <li>• Carpet Stretching and Laying</li>
              <li>• Carpet Removal and Disposal</li>
              <li>• Carpet and Underlay replacement</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Headquarters & Hours</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E1306C] flex-shrink-0" />
                <span>Greater Melbourne, Australia</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E1306C] flex-shrink-0" />
                <button
                  type="button"
                  onClick={() => openPhoneModal ? openPhoneModal('1300 VICTOR (1300 842 867)') : window.location.href = 'tel:1300842867'}
                  className="hover:text-[#E1306C] transition-colors font-medium text-left cursor-pointer"
                >
                  1300 VICTOR (1300 842 867)
                </button>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E1306C] flex-shrink-0" />
                <span>thehorizoncarpets@gmail.com</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()}  The Horizon Carpets . All Rights Reserved. Built for Cloudflare Pages Static Hosting.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
