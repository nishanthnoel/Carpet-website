import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Shield, Moon, Sun } from 'lucide-react';

export const Navbar = ({
  darkMode,
  setDarkMode,
  openPhoneModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'services', 'about', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About us', href: '#about' },
    { name: 'Work Gallery', href: '#gallery' },
    { name: 'Contact us', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setActiveSection(href);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="top-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
          : darkMode
          ? 'bg-slate-950/60 backdrop-blur-sm'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-insta-gradient flex items-center justify-center text-white shadow-md shadow-[#E1306C]/20 group-hover:scale-105 transition-transform duration-300">
              <Shield className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Horizon <span className="text-[#E1306C] font-extrabold">Carpets</span>
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-semibold -mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Carpet Repair & Installation
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-sm transition-colors ${
                    isActive
                      ? 'font-extrabold text-[#E1306C]'
                      : 'font-medium text-[#565d67] dark:text-slate-300 hover:text-[#E1306C]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Phone CTA, Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl transition-all duration-200 border ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-[#FCAF45] hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-4 h-4" style={{ color: '#fc3f3f' }} /> : <Moon className="w-4 h-4" style={{ color: '#fc3f3f' }} />}
            </button>

            <button
              type="button"
              onClick={() => openPhoneModal ? openPhoneModal('1300 Horizon (1300 842 867)') : window.location.href = 'tel:1300842867'}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-insta-gradient hover:opacity-95 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-[#E1306C]/20 hover:shadow-lg hover:shadow-[#E1306C]/30 active:scale-95 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>1300 Horizon</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'text-[#FCAF45]' : 'text-slate-700'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-800 hover:bg-slate-100'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-4 pt-2 pb-6 space-y-3 transition-all ${
          darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2.5 rounded-lg text-base transition-colors ${
                    isActive
                      ? 'font-extrabold text-[#E1306C]'
                      : 'font-medium text-[#565d67] dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-[#E1306C]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (openPhoneModal) openPhoneModal('1300 Horizon (1300 842 867)');
                else window.location.href = 'tel:1300842867';
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-insta-gradient text-white font-medium text-sm shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call 1300 Horizon (1300 842 867)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
