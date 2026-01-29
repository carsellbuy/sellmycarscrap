"use client";

import React from 'react';
import { PhoneCall, ClipboardCheck, Wallet } from 'lucide-react';

const STEPS = [
  {
    icon: PhoneCall,
    title: "Step 1: Contact Us",
    description: "Fill out the form or give us a call. We'll give you an initial estimate instantly."
  },
  {
    icon: ClipboardCheck,
    title: "Step 2: Free Inspection",
    description: "We come to you or you visit us. A 20-minute inspection to finalize the offer."
  },
  {
    icon: Wallet,
    title: "Step 3: Instant Cash",
    description: "Agree to the price? We transfer cash immediately and handle RTA transfer."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold font-bold tracking-widest uppercase mb-2">Simple Process</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">How to Sell Your Car</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Selling your car in Dubai doesn't have to be complicated. We've simplified it into three easy steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-200 -z-10"></div>

          {STEPS.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white p-6 relative group">
              <div className="w-24 h-24 bg-brand-light rounded-full flex items-center justify-center mb-6 border-2 border-brand-gold/20 group-hover:border-brand-gold transition-colors duration-300 shadow-sm">
                <step.icon className="h-10 w-10 text-brand-dark group-hover:text-brand-gold transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};