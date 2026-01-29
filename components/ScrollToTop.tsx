"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 md:bottom-10 md:right-10 z-40 p-3 rounded-full bg-brand-gold text-brand-dark shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:bg-yellow-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold border-2 border-brand-dark/10 backdrop-blur-sm`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" strokeWidth={3} />
    </button>
  );
};