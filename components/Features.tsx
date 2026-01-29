"use client";

import React from 'react';
import { Clock, FileCheck, Coins, MapPin } from 'lucide-react';

const FEATURES = [
  {
    icon: Clock,
    title: "30-Minute Process",
    desc: "We value your time. The entire process from inspection to cash takes less than 30 minutes."
  },
  {
    icon: FileCheck,
    title: "No Paperwork Hassle",
    desc: "We handle all RTA transfer paperwork, clearing fines (if any), and mortgage settlements."
  },
  {
    icon: Coins,
    title: "Best Price Guarantee",
    desc: "Our AI-driven valuation tool ensures you get the most competitive market rate."
  },
  {
    icon: MapPin,
    title: "We Come To You",
    desc: "Schedule an inspection at your home or office anywhere in Dubai."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-brand-gold font-bold tracking-widest uppercase mb-2">Why Choose SellMyCar</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">The Smartest Way to Sell Your Car in Dubai</h3>
            <p className="text-gray-400 mb-8 text-lg">
              Avoid the hassle of private buyers, endless negotiations, and risky payments. We offer a professional, streamlined service tailored for the UAE market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#valuation-form" className="inline-block bg-brand-red text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors text-center">
                Get Your Offer Now
              </a>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-brand-gold/50 transition-colors">
                <feature.icon className="h-8 w-8 text-brand-gold mb-4" />
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};