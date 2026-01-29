"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // পেজ ডিটেক্ট করার জন্য
import { Menu, X, Phone, Car } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);
  const pathname = usePathname(); // বর্তমান URL পাথ পাওয়ার জন্য

  const phoneNumber = "+971564990530";
  const displayPhone = "+971 56 499 0530";

  const confirmCall = () => {
    window.location.href = `tel:${phoneNumber}`;
    setShowCallModal(false);
  };

  // লিংকগুলো এখানে ডিফাইন করলাম যাতে পাথ (href) ঠিক থাকে
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  // একটিভ লিংক চেক করার ফাংশন
  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href === '/blog' && pathname.startsWith('/blog')) return true;
    return false;
  };

  return (
    <>
      <nav className="bg-brand-dark text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link 
              href="/"
              className="flex-shrink-0 flex items-center space-x-2 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <div className="bg-brand-gold p-2 rounded-lg">
                <Car className="h-6 w-6 text-brand-dark" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                SellMyCar<span className="text-brand-gold">.ae</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`hover:text-brand-gold transition-colors px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider ${
                      isActive(link.href) ? 'text-brand-gold' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setShowCallModal(true)}
                className="flex items-center gap-2 bg-brand-gold hover:bg-yellow-500 text-brand-dark font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                <span>{displayPhone}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-brand-dark border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                     isActive(link.href) ? 'text-brand-gold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                 onClick={() => {
                   setIsOpen(false);
                   setShowCallModal(true);
                 }}
                 className="w-full flex items-center gap-2 text-brand-gold font-bold px-3 py-4 border-t border-gray-700 mt-4"
              >
                <Phone className="h-5 w-5" />
                Call Now: {displayPhone}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Call Confirmation Modal */}
      {showCallModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 transform transition-all scale-100">
            <div className="text-center">
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Confirm Call</h3>
                <p className="text-gray-600 mb-8">
                    Are you sure you want to call <br/>
                    <span className="font-bold text-gray-900 text-lg">{displayPhone}</span>?
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <button 
                        onClick={() => setShowCallModal(false)}
                        className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={confirmCall}
                        className="px-4 py-3 bg-brand-gold hover:bg-yellow-500 text-brand-dark font-bold rounded-xl shadow-lg transition-colors"
                    >
                        Call Now
                    </button>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};