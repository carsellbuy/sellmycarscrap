"use client";

import React from 'react';
import { FreeTowingImage } from '../FreeTowingImage';
import { Check, Phone } from 'lucide-react';
import { CallButton } from '@/components/CallButton';
import { PHONE_DISPLAY } from '@/lib/lead';

export const AbuDhabiHero = () => {
  return (
    <div className="relative bg-brand-dark overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/80 lg:to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-sans font-bold text-white leading-tight">
              Sell Your Scrap Car in <br />
              <span className="text-brand-gold">Abu Dhabi</span> In 30 Min!
            </h1>
            
            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We offer top cash for used and scrap cars in the capital city. Get a hassle free valuation today.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 pt-2">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-brand-gold" strokeWidth={3} />
                <span className="text-white font-bold">Instant Cash</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-brand-gold" strokeWidth={3} />
                <span className="text-white font-bold">Free Towing</span>
              </div>
            </div>
            {/* Primary CTA: phone call */}
            <div className="pt-4 flex flex-col items-center lg:items-start gap-2">
              <CallButton
                trackingName="hero_call"
                className="inline-flex items-center gap-3 whitespace-nowrap bg-brand-gold hover:bg-yellow-500 text-brand-dark font-bold text-lg sm:text-xl py-4 px-6 sm:px-8 rounded-2xl shadow-xl shadow-yellow-500/20 transition-transform hover:scale-105"
              >
                <Phone className="h-6 w-6 fill-current" />
                Call Now: {PHONE_DISPLAY}
              </CallButton>
              <p className="text-sm text-gray-400">Speak to a buyer now and get your price on the call. Open 7 days.</p>
            </div>
          </div>

          <div className="w-full max-w-xl mx-auto lg:ml-auto">
             <FreeTowingImage alt="Free car towing in Abu Dhabi: a car we bought, loaded on our flatbed tow truck" />
          </div>

        </div>
      </div>
    </div>
  );
};