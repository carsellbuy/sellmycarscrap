"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    content: "My car was non-running after an accident. They gave me a fair quote over WhatsApp and towed it from Sharjah the same day. Highly recommended.",
    author: "Sarah Jenkins",
    location: "Sharjah",
    initials: "SJ"
  },
  {
    id: 2,
    content: "Sold my old Nissan Patrol here. The process was super fast. They came to my office in JLT, inspected the car, and transferred the cash instantly.",
    author: "Ahmed Al-Farsi",
    location: "Dubai",
    initials: "AA"
  },
  {
    id: 3,
    content: "I was worried about the paperwork for my scrap car. These guys handled everything including the RTA clearing. Very professional service.",
    author: "Mike Thompson",
    location: "Abu Dhabi",
    initials: "MT"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="h-1.5 w-24 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-gray-50 rounded-2xl p-8 relative flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 opacity-10 transform -scale-x-100">
                <Quote size={64} className="text-blue-900 fill-current" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed font-medium">
                "{t.content}"
              </p>

              {/* Author Info */}
              <div className="mt-auto flex flex-col items-center">
                <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white font-bold text-xl mb-3 shadow-md border-4 border-white">
                  {t.initials}
                </div>
                <h4 className="font-bold text-gray-900 text-lg">{t.author}</h4>
                <span className="text-blue-600 text-sm font-semibold">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};