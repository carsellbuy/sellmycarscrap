"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // পেজ ডিটেক্ট করার জন্য
import { Menu, X, Phone, Car } from 'lucide-react';
import { CallButton } from './CallButton';
import { PHONE_DISPLAY } from '@/lib/lead';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // বর্তমান URL পাথ পাওয়ার জন্য


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
              className="min-w-0 flex items-center gap-2 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <div className="bg-brand-gold p-1.5 sm:p-2 rounded-lg">
                <Car className="h-6 w-6 text-brand-dark" />
              </div>
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-white">
                SellMyCarScrap<span className="text-brand-gold"></span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-6 lg:ml-10 flex items-baseline space-x-2 lg:space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`whitespace-nowrap hover:text-brand-gold transition-colors px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider ${
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
              <CallButton
                trackingName="navbar_call"
                className="flex items-center gap-2 whitespace-nowrap bg-brand-gold hover:bg-yellow-500 text-brand-dark font-bold py-2.5 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20"
              >
                <Phone className="h-4 w-4 fill-current" />
                <span className="lg:hidden">Call Now</span>
                <span className="hidden lg:inline">Call {PHONE_DISPLAY}</span>
              </CallButton>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 flex items-center gap-2 md:hidden">
              <CallButton
                trackingName="navbar_mobile_call"
                className="flex items-center gap-1.5 whitespace-nowrap bg-brand-gold active:bg-yellow-500 text-brand-dark font-bold py-2 px-3 rounded-full text-sm"
              >
                <Phone className="h-4 w-4 fill-current" />
                Call
              </CallButton>
              <button
                aria-label="Open menu"
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
              <CallButton
                trackingName="navbar_menu_call"
                className="w-full flex items-center gap-2 text-brand-gold font-bold px-3 py-4 border-t border-gray-700 mt-4"
              >
                <Phone className="h-5 w-5 fill-current" />
                Call Now: {PHONE_DISPLAY}
              </CallButton>
            </div>
          </div>
        )}
      </nav>

    </>
  );
};