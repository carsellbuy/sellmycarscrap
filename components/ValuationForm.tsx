"use client";

import React, { useState } from 'react';
import { CAR_BRANDS } from '../constants';
import { Loader2, Send, ArrowRight } from 'lucide-react';

export const ValuationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'phone') setError(''); // Clear error when typing
  };

  const validateUAEPhone = (phone: string) => {
    // Remove spaces, dashes, or non-numeric characters
    const cleanNumber = phone.replace(/\D/g, '');
    
    // Check if it starts with 5 (mobile) and is 9 digits long
    const uaeRegex = /^(50|51|52|54|55|56|58)\d{7}$/;
    
    return uaeRegex.test(cleanNumber);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateUAEPhone(formData.phone)) {
      setError('Please enter a valid UAE mobile number (e.g. 501234567)');
      return;
    }

    // Push event to DataLayer for GTM/Google Ads conversion tracking
    const dataLayer = (window as any).dataLayer || [];
    dataLayer.push({
      event: 'generate_lead',
      lead_type: 'WhatsApp Quote',
      car_make: formData.make,
      car_model: formData.model,
      ecommerce: {
        currency: 'AED',
        value: 0, 
        items: [{
          item_name: `${formData.make} ${formData.model}`,
          item_category: 'Car Inquiry'
        }]
      }
    });

    setIsSubmitting(true);

    // Artificial delay to provide UI feedback (better UX than instant redirect)
    await new Promise(resolve => setTimeout(resolve, 800));

    // Construct WhatsApp Message
    const text = `Hi, I would like an offer for my car.%0A%0AMake: ${formData.make}%0AModel: ${formData.model}%0APhone: +971${formData.phone}`;
    const whatsappUrl = `https://wa.me/+971564990530?text=${text}`;
    
    // Redirect
    window.open(whatsappUrl, '_blank');
    setIsSubmitting(false);
  };

  // Shared input styles for consistent look and feel
  const inputClasses = "w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-gray-900 outline-none transition-all duration-300 ease-out focus:bg-white focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/20 focus:shadow-lg focus:-translate-y-1 placeholder-gray-400";

  return (
    <div id="valuation-form" className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden relative border border-gray-100 transform transition-all hover:shadow-2xl">
      {/* Top Brand Gold Bar Decorator with Gradient */}
      <div className="h-2 bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold w-full"></div>

      <div className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Instant Offer</h3>
          <p className="text-gray-500 text-sm">Fill the details below to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Make Field */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1 transition-colors group-focus-within:text-brand-gold">Car Make</label>
            <select 
              name="make"
              required
              className={inputClasses}
              value={formData.make}
              onChange={handleChange}
            >
              <option value="">Select Make</option>
              {CAR_BRANDS.map(brand => <option key={brand} value={brand}>{brand}</option>)}
            </select>
          </div>
          
          {/* Model Field */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1 transition-colors group-focus-within:text-brand-gold">Car Model</label>
            <input
              type="text"
              name="model"
              required
              placeholder="e.g. Corolla, Patrol, Altima"
              className={inputClasses}
              value={formData.model}
              onChange={handleChange}
            />
          </div>

          {/* Phone Field */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1 transition-colors group-focus-within:text-brand-gold">Phone Number</label>
            <div className="relative group-focus-within:transform group-focus-within:-translate-y-1 transition-transform duration-300 ease-out">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium z-10 pointer-events-none border-r border-gray-300 pr-2">+971</span>
              <input
                type="tel"
                name="phone"
                required
                maxLength={9}
                placeholder="50 123 4567"
                className={`w-full rounded-xl border bg-gray-50 p-3.5 pl-16 text-gray-900 outline-none transition-all duration-300 ease-out focus:bg-white focus:shadow-lg focus:ring-4 ${
                  error 
                  ? 'border-red-500 focus:ring-red-200 focus:border-red-500' 
                  : 'border-gray-200 focus:border-brand-gold focus:ring-brand-gold/20'
                }`}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            {error && <p className="text-red-500 text-xs mt-1.5 ml-1 animate-pulse">{error}</p>}
          </div>

          {/* Submit Button - Enhanced Visual Treatment */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand-red via-red-600 to-red-800 p-4 text-white shadow-xl shadow-red-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/50 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
            >
              {/* Shine Animation Overlay */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              
              <div className="relative flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-6 w-6 animate-spin" />
                    <span className="font-bold tracking-wide">PROCESSING...</span>
                  </>
                ) : (
                  <>
                    <span className="text-lg font-bold uppercase tracking-wider">Get My Instant Offer</span>
                    <div className="rounded-full bg-white/20 p-1.5 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-[-45deg] group-hover:bg-white/30">
                      <Send className="h-5 w-5 fill-current" />
                    </div>
                  </>
                )}
              </div>
            </button>
          </div>
        </form>

        <p className="text-xs text-gray-400 text-center mt-6 flex items-center justify-center gap-1">
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-green-500" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          No spam. 100% Free Valuation.
        </p>
      </div>
    </div>
  );
};