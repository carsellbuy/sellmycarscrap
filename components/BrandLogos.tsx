"use client";

import React from 'react';

// Using simple text placeholders or generic SVG shapes for brands to keep it clean without external assets
const BRANDS = ["Toyota", "Nissan", "Ford", "BMW", "Mercedes", "Audi", "Hyundai", "Kia", "Honda"];

export const BrandLogos: React.FC = () => {
  return (
    <div className="bg-gray-50 py-10 border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-6">
          We Buy All Major Brands
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Simple typographic representation for brands for the demo */}
           {BRANDS.map(brand => (
             <span key={brand} className="text-2xl font-serif font-bold text-gray-800">{brand}</span>
           ))}
        </div>
      </div>
    </div>
  );
};