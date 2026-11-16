import React from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { SERVICE_EXACT_OPTIONS } from '../data/servicesData';
import { useQuoteForm } from '../context/QuoteFormContext';

export const SharedQuoteForm = ({
  darkMode,
  compact = false,
}) => {
  const { formData, status, responseMessage, errors = {}, handleChange, handleSubmit, resetForm } =
    useQuoteForm();

  const inputPadding = compact ? 'p-2.5 text-xs' : 'p-3 text-xs';
  const labelMargin = compact ? 'mb-1 text-[10px]' : 'mb-1 text-xs';

  return (
    <div className="w-full">
      {/* Success Alert Banner */}
      {status === 'success' && (
        <div className="mb-4 p-3.5 rounded-xl bg-[#00C853]/10 border border-[#00C853]/30 text-[#00C853] dark:text-[#00E676] flex items-start gap-2.5 animate-fade-in text-xs font-semibold">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#00C853] dark:text-[#00E676]" />
          <div>
            <h4 className="font-bold uppercase tracking-wider text-[#008736] dark:text-[#00E676]">Message Transmitted!</h4>
            <p className="mt-1 leading-relaxed text-[#008736]  font-medium">{responseMessage}</p>
            <button
              type="button"
              onClick={resetForm}
              className="mt-2 text-xs font-bold underline text-[#d53274] dark:text-[#d53274] cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        </div>
      )}

      {/* Error Alert Banner */}
      {status === 'error' && (
        <div className="mb-4 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-400 flex items-start gap-2.5 animate-fade-in text-xs">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold uppercase tracking-wider">Submission Alert</h4>
            <p className="mt-1 leading-relaxed text-slate-900 dark:text-rose-200 font-medium">{responseMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={(e) => handleSubmit(e)} className={compact ? 'space-y-3' : 'space-y-4'}>
        {/* Full Name */}
        <div>
          <label
            className={`block font-bold uppercase tracking-wider ${labelMargin} ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            Full Name <span className="text-[#E1306C]">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. John Smith"
            className={`w-full rounded-xl font-medium border transition-colors ${inputPadding} ${
              errors.fullName
                ? 'border-rose-500 ring-1 ring-rose-500'
                : darkMode
                ? 'bg-slate-950 border-slate-800 text-white focus:border-[#E1306C]'
                : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#E1306C]'
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-[11px] font-semibold text-rose-500">{errors.fullName}</p>
          )}
        </div>

        {/* Email & Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label
              className={`block font-bold uppercase tracking-wider ${labelMargin} ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Email <span className="text-[#E1306C]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@example.com"
              className={`w-full rounded-xl font-medium border transition-colors ${inputPadding} ${
                errors.email
                  ? 'border-rose-500 ring-1 ring-rose-500'
                  : darkMode
                  ? 'bg-slate-950 border-slate-800 text-white focus:border-[#E1306C]'
                  : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#E1306C]'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-[11px] font-semibold text-rose-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              className={`block font-bold uppercase tracking-wider ${labelMargin} ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Mobile Number <span className="text-[#E1306C]">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="e.g. 0412 345 678"
              className={`w-full rounded-xl font-medium border transition-colors ${inputPadding} ${
                errors.mobile
                  ? 'border-rose-500 ring-1 ring-rose-500'
                  : darkMode
                  ? 'bg-slate-950 border-slate-800 text-white focus:border-[#E1306C]'
                  : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#E1306C]'
              }`}
            />
            {errors.mobile && (
              <p className="mt-1 text-[11px] font-semibold text-rose-500">{errors.mobile}</p>
            )}
          </div>
        </div>

        {/* Suburb & Postcode */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2">
            <label
              className={`block font-bold uppercase tracking-wider ${labelMargin} ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Suburb <span className="text-[#E1306C]">*</span>
            </label>
            <input
              type="text"
              name="suburb"
              value={formData.suburb}
              onChange={handleChange}
              placeholder="e.g. Richmond, St Kilda"
              className={`w-full rounded-xl font-medium border transition-colors ${inputPadding} ${
                errors.suburb
                  ? 'border-rose-500 ring-1 ring-rose-500'
                  : darkMode
                  ? 'bg-slate-950 border-slate-800 text-white focus:border-[#E1306C]'
                  : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#E1306C]'
              }`}
            />
            {errors.suburb && (
              <p className="mt-1 text-[11px] font-semibold text-rose-500">{errors.suburb}</p>
            )}
          </div>

          <div>
            <label
              className={`block font-bold uppercase tracking-wider ${labelMargin} ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Postcode
            </label>
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              placeholder="e.g. 2150"
              className={`w-full rounded-xl font-medium border transition-colors ${inputPadding} ${
                darkMode
                  ? 'bg-slate-950 border-slate-800 text-white focus:border-[#E1306C]'
                  : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#E1306C]'
              }`}
            />
          </div>
        </div>

        {/* Service Required */}
        <div>
          <label
            className={`block font-bold uppercase tracking-wider ${labelMargin} ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            Service Required <span className="text-[#E1306C]">*</span>
          </label>
          <select
            name="serviceRequired"
            value={formData.serviceRequired}
            onChange={handleChange}
            className={`w-full rounded-xl font-medium border transition-colors ${inputPadding} ${
              darkMode
                ? 'bg-slate-950 border-slate-800 text-white focus:border-[#E1306C]'
                : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#E1306C]'
            }`}
          >
            {SERVICE_EXACT_OPTIONS.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Problem Details */}
        <div>
          <label
            className={`block font-bold uppercase tracking-wider ${labelMargin} ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            Problem Details <span className="text-[#E1306C]">*</span>
          </label>
          <textarea
            name="problemDescription"
            rows={compact ? 2 : 3}
            value={formData.problemDescription}
            onChange={handleChange}
            placeholder="Describe issue (e.g. puppy chewed carpet edge near doorway, burn mark...)"
            className={`w-full rounded-xl font-medium border transition-colors ${inputPadding} ${
              errors.problemDescription
                ? 'border-rose-500 ring-1 ring-rose-500'
                : darkMode
                ? 'bg-slate-950 border-slate-800 text-white focus:border-[#E1306C]'
                : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-[#E1306C]'
            }`}
          />
          {errors.problemDescription && (
            <p className="mt-1 text-[11px] font-semibold text-rose-500">{errors.problemDescription}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`w-full ${
            compact ? 'py-3 text-xs' : 'py-3.5 text-sm'
          } rounded-xl font-bold transition-all duration-200 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer ${
            status === 'success'
              ? 'bg-gradient-to-r from-[#00C853] via-[#00C853]/95 to-[#00E676] text-white shadow-[#00C853]/30 hover:opacity-95'
              : 'bg-insta-gradient hover:bg-insta-gradient-hover text-white shadow-[#E1306C]/30 hover:shadow-[#E1306C]/50'
          }`}
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting via Web3Forms...</span>
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Message Sent</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>

        <p className="text-[10px] text-center text-slate-400 font-medium">
          🔒 Direct Web3Forms submission. Instant response guaranteed.
        </p>
      </form>
    </div>
  );
};
