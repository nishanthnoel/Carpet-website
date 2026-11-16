import React, { createContext, useContext, useState, useCallback } from 'react';
import { SERVICE_EXACT_OPTIONS } from '../data/servicesData';

const QuoteFormContext = createContext(undefined);

export const QuoteFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    suburb: '',
    postcode: '',
    serviceRequired: SERVICE_EXACT_OPTIONS[0],
    problemDescription: '',
  });

  const [status, setStatus] = useState('idle');
  const [responseMessage, setResponseMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    const newErrors = {};

    // Name validation: required, letters, spaces, hyphens, apostrophes (at least 2 chars)
    const nameRegex = /^[a-zA-Z\s'-]{2,60}$/;
    if (!data.fullName || !data.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    } else if (!nameRegex.test(data.fullName.trim())) {
      newErrors.fullName = 'Please enter a valid name (letters only, min 2 characters).';
    }

    // Email validation: standard email format regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !data.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(data.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. john@example.com).';
    }

    // Phone / Mobile validation: Australian phone formats (Mobile 04XX XXX XXX, Landline 02/03/07/08, 1300/1800/13)
    let cleanedPhone = (data.mobile || '').replace(/[\s()\-]/g, '');
    if (cleanedPhone.startsWith('+61')) {
      cleanedPhone = '0' + cleanedPhone.slice(3);
    } else if (cleanedPhone.startsWith('61') && cleanedPhone.length >= 11) {
      cleanedPhone = '0' + cleanedPhone.slice(2);
    }

    const ausPhoneRegex = /^(04\d{8}|05\d{8}|0[2378]\d{8}|1300\d{6}|1800\d{6}|13\d{4})$/;

    if (!data.mobile || !data.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required.';
    } else if (!ausPhoneRegex.test(cleanedPhone)) {
      newErrors.mobile = 'Please enter a valid Australian phone number (e.g. 0412 345 678 or 02 9123 4567).';
    }

    // Suburb validation
    if (!data.suburb || !data.suburb.trim()) {
      newErrors.suburb = 'Suburb is required.';
    }

    // Problem description validation
    if (!data.problemDescription || data.problemDescription.trim().length < 5) {
      newErrors.problemDescription = 'Please describe the issue (at least 5 characters).';
    }

    return newErrors;
  };

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => {
        if (prev[name]) {
          const next = { ...prev };
          delete next[name];
          return next;
        }
        return prev;
      });
    },
    []
  );

  const setPrefilledData = useCallback((service, description) => {
    if (!service && !description) return;
    setFormData((prev) => {
      let changed = false;
      const next = { ...prev };
      if (service && prev.serviceRequired !== service) {
        next.serviceRequired = service;
        changed = true;
      }
      if (description !== undefined && prev.problemDescription !== description) {
        next.problemDescription = description;
        changed = true;
      }
      return changed ? next : prev;
    });
  }, []);

  const resetForm = useCallback(() => {
    setStatus('idle');
    setResponseMessage('');
    setErrors({});
  }, []);

  const handleSubmit = useCallback(
    async (e, web3Key) => {
      e.preventDefault();

      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setStatus('error');
        setResponseMessage('Please fix the highlighted errors before submitting your request.');
        return;
      }

      setErrors({});
      setStatus('submitting');
      setResponseMessage('');

      try {
        const envKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        const activeKey = (web3Key && web3Key.trim() !== '') ? web3Key : (envKey || 'YOUR_ACCESS_KEY_HERE');

        const payload = {
          access_key: activeKey,
          subject: `Horizon Carpets Quote Request - ${formData.fullName} (${formData.suburb})`,
          from_name: 'Horizon Carpets Website',
          name: formData.fullName,
          email: formData.email,
          phone: formData.mobile,
          suburb: formData.suburb,
          postcode: formData.postcode,
          service_requested: formData.serviceRequired,
          message: formData.problemDescription,
        };

        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (data.success) {
          setStatus('success');
          setResponseMessage(
            `Thank you ${formData.fullName}! Your request was transmitted via Web3Forms. Our technician will call you on ${formData.mobile} shortly.`
          );
        } else {
          setStatus('error');
          setResponseMessage(
            data.message || 'Submission failed. Please check your Web3Forms Access Key configuration.'
          );
        }
      } catch (err) {
        setStatus('error');
        setResponseMessage('Network error. Please try again or call us at 1300 842 867.');
      }
    },
    [formData]
  );

  return (
    <QuoteFormContext.Provider
      value={{
        formData,
        status,
        responseMessage,
        errors,
        handleChange,
        handleSubmit,
        resetForm,
        setPrefilledData,
      }}
    >
      {children}
    </QuoteFormContext.Provider>
  );
};

export const useQuoteForm = () => {
  const context = useContext(QuoteFormContext);
  if (!context) {
    throw new Error('useQuoteForm must be used within a QuoteFormProvider');
  }
  return context;
};
