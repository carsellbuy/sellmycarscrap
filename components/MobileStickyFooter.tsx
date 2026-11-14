"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle } from 'lucide-react';
import { trackButtonClick } from '@/lib/tracking';
import { CallButton } from './CallButton';
import { PHONE_DISPLAY, WHATSAPP_HREF } from '@/lib/lead';

/**
 * Always-visible bottom bar on mobile. Phone call is the main action;
 * WhatsApp is a small secondary icon.
 */
export const MobileStickyFooter: React.FC = () => {
  const isArabic = usePathname().startsWith('/ar');

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] md:hidden bg-brand-dark/95 backdrop-blur border-t border-white/10 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
      <div className="flex items-center gap-2" dir={isArabic ? 'rtl' : 'ltr'}>
        <CallButton
          trackingName="mobile_sticky_footer_call"
          className="flex-1 flex items-center justify-center gap-2 h-14 rounded-xl bg-brand-red active:bg-red-800 text-white font-bold shadow-lg shadow-red-900/40"
        >
          <Phone className="h-6 w-6 fill-current animate-pulse" />
          <span className="flex flex-col leading-tight items-start">
            <span className="text-base uppercase tracking-wide">{isArabic ? 'اتصل الآن' : 'Call Now'}</span>
            <span className="text-xs font-semibold opacity-90" dir="ltr">{PHONE_DISPLAY}</span>
          </span>
        </CallButton>

        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackButtonClick('mobile_sticky_footer_whatsapp')}
          aria-label="WhatsApp"
          className="flex items-center justify-center h-14 w-14 shrink-0 rounded-xl bg-white/10 text-[#25D366] active:bg-white/20"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};
