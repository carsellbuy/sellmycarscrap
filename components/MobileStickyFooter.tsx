"use client";

import React, { useState, useEffect } from 'react';
import { Phone, ChevronDown, MessageCircle } from 'lucide-react';

export const MobileStickyFooter: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showCallModal, setShowCallModal] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const phoneNumber = "971564990530"; 
  const displayPhone = "+971 56 499 0530";

  useEffect(() => {
    setIsMounted(true);
    // Slight delay to ensure animation plays nicely on load
    const timer = setTimeout(() => setIsExpanded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleTrackClick = (method: string) => {
    if (typeof window !== 'undefined') {
      const dataLayer = (window as any).dataLayer || [];
      dataLayer.push({
        event: 'contact_click',
        contact_method: method,
        location: 'mobile_sticky_footer'
      });
    }
  };

  const handleCall = () => {
    handleTrackClick('phone');
    window.location.href = `tel:+${phoneNumber}`;
    setShowCallModal(false);
  };

  const handleWhatsApp = () => {
    handleTrackClick('whatsapp');
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
    setShowWhatsAppModal(false);
  };

  if (!isMounted) return null;

  return (
    <>
      {/* Minimized State - Floating Action Button (FAB) */}
      <div 
        className={`fixed bottom-6 right-6 z-[59] md:hidden transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${!isExpanded ? 'scale-100 opacity-100 rotate-0 translate-y-0' : 'scale-50 opacity-0 rotate-45 translate-y-10 pointer-events-none'}`}
      >
        <button 
          onClick={() => setIsExpanded(true)}
          className="relative group bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center ring-4 ring-white"
          aria-label="Open Contact Options"
        >
          {/* Pulsing rings for attention when minimized */}
          <span className="absolute -inset-1 rounded-full border-2 border-[#25D366] opacity-0 animate-ping"></span>
          <MessageCircle className="h-7 w-7 fill-current relative z-10" />
          <span className="absolute top-0 right-0 h-3.5 w-3.5 bg-red-500 border-2 border-white rounded-full z-20"></span>
        </button>
      </div>

      {/* Expanded State - Compact Sporty Diagonal Pill Design */}
      <div 
        className={`fixed bottom-6 left-4 right-4 z-[60] flex md:hidden flex-col transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-[150%] opacity-0 pointer-events-none'}`}
      >
        <div className="relative w-full shadow-[0_15px_40px_-10px_rgba(0,0,0,0.4)] rounded-full">
            
            {/* Floating Minimize Button (Overlapping Top Right) */}
            <button 
                onClick={() => setIsExpanded(false)}
                className="absolute -top-2 -right-1 z-30 bg-white text-gray-700 p-1.5 rounded-full shadow-sm border border-gray-100 transform transition-transform active:scale-95 flex items-center justify-center hover:bg-gray-50"
                aria-label="Minimize footer"
            >
                <ChevronDown size={14} className="stroke-[3px]" />
            </button>

            {/* Main Pill Container - Reduced Height to 54px */}
            <div className="w-full h-[54px] relative rounded-full overflow-hidden bg-white ring-2 ring-white/50 isolate">
            
                {/* WhatsApp Button (Green Left - Diagonal Cut) */}
                <button 
                    onClick={() => setShowWhatsAppModal(true)}
                    className="absolute left-0 top-0 bottom-0 w-[60%] bg-[#25D366] active:bg-[#1da851] text-white flex items-center justify-center z-10 group"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)', paddingRight: '15px' }}
                    aria-label="WhatsApp"
                >
                    {/* Background Shine */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] animate-[shine_3s_infinite]" />
                    
                    <div className="relative flex flex-col items-center justify-center h-full pt-0.5 leading-none">
                        <MessageCircle className="w-5 h-5 fill-current drop-shadow-sm mb-0.5" />
                        <span className="text-[9px] font-bold uppercase tracking-widest opacity-90">WhatsApp</span>
                    </div>
                </button>

                {/* Call Button (Red Right - Fills background but positioned absolute right) */}
                <button 
                    onClick={() => setShowCallModal(true)}
                    className="absolute right-0 top-0 bottom-0 w-[50%] bg-[#ef4444] active:bg-[#b91c1c] text-white flex items-center justify-center z-0 group"
                    style={{ paddingLeft: '15px' }}
                    aria-label="Call"
                >
                    <div className="relative flex flex-col items-center justify-center h-full pt-0.5 leading-none">
                        <Phone className="w-5 h-5 fill-current drop-shadow-sm mb-0.5" />
                        <span className="text-[9px] font-bold uppercase tracking-widest opacity-90">Call Us</span>
                    </div>
                </button>

            </div>
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
    </>
  );
};