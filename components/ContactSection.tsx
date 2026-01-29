"use client";

import React, { useState } from 'react';
import { Phone, MessageCircle, Monitor, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const phoneNumber = "+971564990530"; 
  const displayPhone = "+971 56 499 0530";
  
  const [copied, setCopied] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  const handleCopyBotim = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
    setShowCallModal(false);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber.replace('+', '')}`, '_blank');
    setShowWhatsAppModal(false);
  };

  return (
    <section id="contact" className="py-16 bg-white border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-serif">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are available 24/7 on Call, WhatsApp, and Botim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Call Card - Premium Blue Gradient */}
          <button
            onClick={() => setShowCallModal(true)}
            className="flex flex-col items-center p-8 rounded-2xl shadow-xl shadow-blue-200/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group hover:-translate-y-2 w-full bg-gradient-to-br from-blue-600 to-blue-900 text-white relative overflow-hidden"
          >
            {/* Subtle background overlay effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>

            <div className="p-4 bg-white/10 backdrop-blur-md rounded-full mb-5 border border-white/10 ring-4 ring-white/5 group-hover:scale-110 transition-transform duration-300">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 tracking-wide">Call Directly</h3>
            <p className="text-blue-100 font-medium bg-blue-800/40 px-4 py-1.5 rounded-lg border border-blue-400/20">{displayPhone}</p>
          </button>

          {/* WhatsApp Card */}
          <button
            onClick={() => setShowWhatsAppModal(true)}
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-100 group hover:-translate-y-2 w-full"
          >
            <div className="p-4 bg-green-50 rounded-full mb-4 group-hover:bg-green-600 transition-colors duration-300">
              <MessageCircle className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 font-medium">Chat with us</p>
          </button>

          {/* Botim Card (Click to Copy) */}
          <button 
            onClick={handleCopyBotim}
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-100 group hover:-translate-y-2 cursor-pointer w-full"
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

      {/* Confirmation Modal for Call */}
      {showCallModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 transform transition-all scale-100">
            <div className="text-center">
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Confirm Call</h3>
                <p className="text-gray-600 mb-8">
                    Are you sure you want to call <br/>
                    <span className="font-bold text-gray-900 text-lg">{displayPhone}</span>?
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <button 
                        onClick={() => setShowCallModal(false)}
                        className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handleCall}
                        className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-colors"
                    >
                        Call Now
                    </button>
                </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal for WhatsApp */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 transform transition-all scale-100">
            <div className="text-center">
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Open WhatsApp</h3>
                <p className="text-gray-600 mb-8">
                    Are you sure you want to chat on WhatsApp with <br/>
                    <span className="font-bold text-gray-900 text-lg">{displayPhone}</span>?
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <button 
                        onClick={() => setShowWhatsAppModal(false)}
                        className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handleWhatsApp}
                        className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg shadow-green-500/30 transition-colors"
                    >
                        Chat Now
                    </button>
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};