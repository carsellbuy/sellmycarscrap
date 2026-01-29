"use client";

import React from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

// Next.js এর জন্য লিংক পাথের শুরুতে '/' যোগ করা হয়েছে
const EMIRATES = [
  { name: "Dubai", slug: "/sell-car-dubai" },
  { name: "Abu Dhabi", slug: "/sell-car-abu-dhabi" },
  { name: "Sharjah", slug: "/sell-car-sharjah" },
  { name: "Ajman", slug: "/sell-car-ajman" },
  { name: "Umm Al Quwain", slug: null },
  { name: "Ras Al Khaimah", slug: null },
  { name: "Fujairah", slug: null }
];

export const ServiceArea = () => {
  return (
    <section className="bg-brand-dark py-16 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Servicing All Emirates
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Our team is available across the UAE. We come to your location for free inspection and towing.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {EMIRATES.map((emirate) => {
            const hasLink = emirate.slug !== null;
            
            // ডিজাইনের কমন ক্লাসগুলো এক জায়গায় রাখা হলো
            const baseClasses = `
              group flex items-center justify-center gap-2 md:gap-3 
              bg-[#1e293b] border border-slate-700 
              rounded-xl md:rounded-2xl transition-all duration-300 
              shadow-lg select-none
              /* Mobile Layout */
              w-[calc(50%-0.375rem)] px-2 py-4
              /* Desktop Layout */
              md:w-auto md:min-w-[220px] md:px-8 md:py-5
            `;

            const activeClasses = "hover:bg-[#28354b] hover:border-brand-gold/50 cursor-pointer";
            const disabledClasses = "cursor-default opacity-80";

            // ভেতরের কন্টেন্ট (Icon + Text)
            const Content = () => (
              <>
                <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-dark/50 border border-slate-600 ${hasLink ? 'group-hover:border-brand-gold' : ''} flex items-center justify-center transition-colors`}>
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-brand-gold" />
                </div>
                <span className={`text-white font-bold text-xs sm:text-sm md:text-lg tracking-wide ${hasLink ? 'group-hover:text-brand-gold' : ''} transition-colors text-center leading-tight`}>
                  {emirate.name}
                </span>
              </>
            );

            // যদি লিংক থাকে তবে Link কম্পোনেন্ট, না থাকলে সাধারণ div
            if (hasLink) {
              return (
                <Link 
                  key={emirate.name} 
                  href={emirate.slug!}
                  className={`${baseClasses} ${activeClasses}`}
                >
                  <Content />
                </Link>
              );
            } else {
              return (
                <div 
                  key={emirate.name} 
                  className={`${baseClasses} ${disabledClasses}`}
                >
                  <Content />
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};