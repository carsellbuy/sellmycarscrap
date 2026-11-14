"use client";

import React, { useState } from 'react';
import { Phone, MessageCircle, Monitor, Check } from 'lucide-react';
import { trackButtonClick } from '@/lib/tracking';
import { CallButton } from './CallButton';
import { WHATSAPP_HREF } from '@/lib/lead';

export const ContactSection: React.FC = () => {
  const phoneNumber = "+971564990530"; 
  const displayPhone = "+971 56 499 0530";
  
  const [copied, setCopied] = useState(false);

  const handleCopyBotim = () => {
    trackButtonClick('contact_section_botim_copy'); // GTM ট্র্যাকিং
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };


  return (
    <section id="contact" className="scroll-mt-20 py-16 bg-white border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-serif">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Call us directly, 24/7. It’s the fastest way to get your price.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Phone Call Card - primary, full width */}
          <CallButton
            trackingName="contact_section_call"
            className="md:col-span-2 flex flex-col items-center text-center p-10 rounded-2xl shadow-xl shadow-blue-200/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group hover:-translate-y-2 w-full bg-gradient-to-br from-blue-600 to-blue-900 text-white relative overflow-hidden"
          >
            {/* Subtle background overlay effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>

            <div className="p-4 bg-white/10 backdrop-blur-md rounded-full mb-5 border border-white/10 ring-4 ring-white/5 group-hover:scale-110 transition-transform duration-300">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 tracking-wide">Call Now for an Instant Price</h3>
            <p className="text-2xl md:text-3xl font-bold bg-blue-800/40 px-6 py-2 rounded-xl border border-blue-400/20">{displayPhone}</p>
            <p className="mt-3 text-sm text-blue-100">Tap to call. Available 24/7.</p>
          </CallButton>

          {/* WhatsApp Card (secondary) */}
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackButtonClick('contact_section_whatsapp')}
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-100 group hover:-translate-y-2 w-full"
          >
            <div className="p-4 bg-green-50 rounded-full mb-4 group-hover:bg-green-600 transition-colors duration-300">
              <MessageCircle className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 font-medium">Chat with us</p>
          </a>

          {/* Botim Card (Click to Copy) */}
          <button 
            onClick={handleCopyBotim}
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-100 group hover:-translate-y-2 cursor-pointer w-full"
          >
            <div className={`p-4 rounded-full mb-4 transition-colors duration-300 ${copied ? 'bg-green-600' : 'bg-orange-50 group-hover:bg-orange-600'}`}>
              {copied ? (
                 <Check className="h-8 w-8 text-white" />
              ) : (
                <Monitor className={`h-8 w-8 transition-colors duration-300 ${copied ? 'text-white' : 'text-orange-600 group-hover:text-white'}`} />
              )}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {copied ? "Number Copied!" : "Botim App"}
            </h3>
            
            <p className="text-gray-600 font-medium mb-1">{displayPhone}</p>
            
            <span className={`text-xs px-3 py-1 rounded-full transition-colors mt-2 font-semibold ${copied ? 'bg-green-100 text-green-700' : 'text-orange-600 bg-orange-50 group-hover:bg-orange-100'}`}>
              {copied ? "Ready to paste" : "Click to copy number"}
            </span>
          </button>
        </div>
      </div>

    </section>
  );
};