import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ServiceAreaChecker } from './components/ServiceAreaChecker';
import { PhotoGallery } from './components/PhotoGallery';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { PhoneModal } from './components/PhoneModal';
import { FloatingFormWidget } from './components/FloatingFormWidget';
import { QuoteFormProvider } from './context/QuoteFormContext';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState('1300 HORIZON (1300 842 867)');

  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledDescription, setPrefilledDescription] = useState('');

  const handleOpenPhoneModal = (phone) => {
    setSelectedPhone(phone || '1300 HORIZON (1300 842 867)');
    setPhoneModalOpen(true);
  };

  const handleNavigateToContactWithService = (serviceOption, description) => {
    if (serviceOption) {
      setPrefilledService(serviceOption);
    }
    if (description) {
      setPrefilledDescription(description);
    }
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <QuoteFormProvider>
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100 dark' : 'bg-white text-slate-900'
      }`}>
        {/* Top Sticky Navigation */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          openPhoneModal={handleOpenPhoneModal}
        />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section */}
          <Hero
            darkMode={darkMode}
            onNavigateToContact={handleNavigateToContactWithService}
            openPhoneModal={handleOpenPhoneModal}
          />

          {/* Core Services Section */}
          <ServicesSection
            darkMode={darkMode}
            onSelectServiceForContact={(exactOption) =>
              handleNavigateToContactWithService(exactOption)
            }
          /> 
          
          {/* About Section */}
          <About darkMode={darkMode} />

          {/* Interactive Before/After Drag Slider */}
          <BeforeAfterSlider
            darkMode={darkMode}
            onSelectService={(exactOption) =>
              handleNavigateToContactWithService(exactOption)
            }
          />

          {/* Suburb / Postcode Service Area Checker */}
          <ServiceAreaChecker darkMode={darkMode} />

          {/* Cloudinary Powered Work Gallery */}
          <PhotoGallery
            darkMode={darkMode}
            onNavigateToContact={(serviceOption, description) =>
              handleNavigateToContactWithService(serviceOption, description)
            }
          />

          {/* Contact Form with Web3Forms Integration */}
          <ContactForm
            darkMode={darkMode}
            prefilledService={prefilledService}
            prefilledDescription={prefilledDescription}
            openPhoneModal={handleOpenPhoneModal}
          />
        </main>

        {/* Footer */}
        <Footer darkMode={darkMode} openPhoneModal={handleOpenPhoneModal} />

        {/* Floating Form Button / Form Widget */}
        <FloatingFormWidget
          darkMode={darkMode}
          openPhoneModal={handleOpenPhoneModal}
        />

        {/* Phone Action Options Modal (Call, Copy, Cut) */}
        <PhoneModal
          isOpen={phoneModalOpen}
          onClose={() => setPhoneModalOpen(false)}
          phoneNumber={selectedPhone}
          telNumber="1300842867"
          darkMode={darkMode}
        />
      </div>
    </QuoteFormProvider>
  );
}

