"use client";

import React from 'react';
import { ValuationForm } from './ValuationForm';
import { Check } from 'lucide-react';

interface HeroProps {
  customTitle?: React.ReactNode;
  customSubtitle?: string;
}

export const Hero: React.FC<HeroProps> = ({ customTitle, customSubtitle }) => {
  return (
    <div className="relative bg-brand-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1920" 
          alt="Car Towing Service Dubai" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/80 lg:to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content - Naturally appears first on mobile */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-sans font-bold text-white leading-tight">
              {customTitle ? customTitle : (
                <>
                  Sell Your Scrap or <br />
                  Used Car in UAE for <br />
                  <span className="text-brand-gold">Instant Cash!</span>
                </>
              )}
            </h1>
            
            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {customSubtitle || "Best Prices Paid. Free Towing. Paperwork Handled. Get an Offer in 30 Minutes."}
            </p>

            {/* Checkmarks */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 pt-2">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-brand-gold" strokeWidth={3} />
                <span className="text-white font-bold">Instant Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-brand-gold" strokeWidth={3} />
                <span className="text-white font-bold">RTA Cleared</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-brand-gold" strokeWidth={3} />
                <span className="text-white font-bold">Free Towing</span>
              </div>
            </div>
          </div>

          {/* Form Container - Naturally appears second on mobile */}
          <div className="w-full max-w-md mx-auto lg:ml-auto">
             <ValuationForm />
          </div>

        </div>
      </div>
    </div>
  );
};