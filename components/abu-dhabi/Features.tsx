"use client";

import React from 'react';
import { Clock, FileCheck, Coins, MapPin } from 'lucide-react';

const ABU_DHABI_FEATURES = [
  {
    icon: Clock,
    title: "Fast Cash in Abu Dhabi",
    desc: "Get cash in hand in just 30 minutes anywhere within the capital city."
  },
  {
    icon: FileCheck,
    title: "Abu Dhabi RTA Cleared",
    desc: "We manage all vehicle ownership transfers according to Abu Dhabi traffic rules."
  },
  {
    icon: Coins,
    title: "Top Market Price",
    desc: "Our local expertise ensures you get the highest offer for your scrap or used vehicle."
  },
  {
    icon: MapPin,
    title: "Free Abu Dhabi Towing",
    desc: "We dispatch our recovery trucks to your exact location in Abu Dhabi for free."
  }
];

export const AbuDhabiFeatures = () => {
  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-brand-gold font-bold tracking-widest uppercase mb-2">
              Top Abu Dhabi Buyers
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Smart Way to Sell Your Car in the Capital
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Do not waste time with private buyers in Abu Dhabi. We offer a professional service tailored specifically for residents of the capital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#valuation-form" className="inline-block bg-brand-red text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors text-center">
                Get Your Offer Now
              </a>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {ABU_DHABI_FEATURES.map((feature, idx) => (
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