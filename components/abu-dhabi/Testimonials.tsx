"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';

const ABU_DHABI_TESTIMONIALS = [
  {
    id: 1,
    content: "Best car buyers in Abu Dhabi! They came to my home in Khalifa City, checked the car, and paid me cash on the spot. Highly recommended.",
    author: "Omar Tariq",
    location: "Khalifa City, Abu Dhabi",
    initials: "OT"
  },
  {
    id: 2,
    content: "Selling my accident damaged car in Mussafah was so easy with them. No paperwork hassle at all.",
    author: "James Wilson",
    location: "Mussafah, Abu Dhabi",
    initials: "JW"
  },
  {
    id: 3,
    content: "Very professional service. I got a much better price than the local dealers in Abu Dhabi offered me.",
    author: "Fatima Al Mansouri",
    location: "Al Reem Island",
    initials: "FA"
  }
];

export const AbuDhabiTestimonials = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Reviews from Abu Dhabi Customers
          </h2>
          <div className="h-1.5 w-24 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ABU_DHABI_TESTIMONIALS.map((t) => (
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
                “{t.content}”
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