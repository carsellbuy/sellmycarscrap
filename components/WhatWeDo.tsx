"use client";

import React from 'react';
import { 
  CarFront, 
  Recycle, 
  CalendarX, 
  Ban, 
  AlertTriangle, 
  FileWarning, 
  Wrench, 
  Hourglass 
} from 'lucide-react';

const SERVICES = [
  { title: "Buy Damaged Cars", icon: CarFront },
  { title: "Buy Scrap Cars", icon: Recycle },
  { title: "Buy Expired Cars", icon: CalendarX },
  { title: "Buy Unused Car", icon: Ban },
  { title: "Accidental Cars Buy", icon: AlertTriangle },
  { title: "Buy Expired Mulkiya Vehicles", icon: FileWarning },
  { title: "Mechanical Issues Car", icon: Wrench },
  { title: "Old Car Buyer", icon: Hourglass }
];

export const WhatWeDo: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content Column */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-brand-dark mb-6 uppercase tracking-tight">
              What We Do
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Top Scrap Car Buyers in Dubai, Sharjah & Across UAE – We specialize as a
              scrap car buyer and second hand car buyer, offering Fast, Hassle-Free
              Service & the Highest Payouts. From luxury cars and SUVs to sedans, our
              team of expert scrap car buyers in Sharjah and beyond accepts all types of
              vehicles, whether new, old, or damaged.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-6">
              {SERVICES.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                   <div className="flex-shrink-0 mt-0.5 p-1.5 rounded-lg bg-gray-50 group-hover:bg-brand-gold/10 transition-colors">
                      <item.icon className="w-5 h-5 text-brand-gold group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                   </div>
                   <span className="font-bold text-gray-800 text-base mt-0.5">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2">
             <div className="relative rounded-xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                {/* 
                   IMPORTANT: Please save the user-provided image as 'scrap-car.jpg' 
                   in your public folder for this to work correctly.
                */}
                <img
                  src="/Sell-my-Car-yard.jpg" 
                  alt="Silver Lexus scrap car in Dubai yard"
                  className="w-full h-[400px] lg:h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};