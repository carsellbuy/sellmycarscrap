import React from 'react';
import { Phone } from 'lucide-react';
import { CallButton } from './CallButton';
import { PHONE_DISPLAY } from '@/lib/lead';

const STEPS = [
  'Call us and tell us the make, model and condition',
  'Get your price right on the call',
  'We collect the car for free and pay you cash',
];

/** Hero card that replaces the old valuation form: everything leads to a phone call. */
export function CallOfferCard() {
  return (
    <div id="get-offer" className="scroll-mt-24 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100">
      <div className="h-2 bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold w-full" />

      <div className="p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Instant Offer</h2>
          <p className="text-gray-500 text-sm">One short call is all it takes.</p>
        </div>

        <ol className="space-y-4 mb-8">
          {STEPS.map((step, i) => (
            <li key={step} className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-sm font-bold text-brand-dark">
                {i + 1}
              </span>
              <span className="text-gray-700 font-medium pt-0.5">{step}</span>
            </li>
          ))}
        </ol>

        <CallButton
          trackingName="offer_card_call"
          className="flex items-center justify-center gap-3 w-full rounded-2xl bg-gradient-to-br from-brand-red via-red-600 to-red-800 p-4 text-white shadow-xl shadow-red-500/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Phone className="h-6 w-6 fill-current" />
          <span className="flex flex-col items-start leading-tight">
            <span className="text-lg font-bold uppercase tracking-wider">Call Now</span>
            <span className="text-sm font-semibold opacity-90">{PHONE_DISPLAY}</span>
          </span>
        </CallButton>

        <p className="text-xs text-gray-400 text-center mt-5">Free valuation. No obligation. Open 7 days.</p>
      </div>
    </div>
  );
}
