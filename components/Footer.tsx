import React from 'react';
import Link from 'next/link'; // Link ইম্পোর্ট করা হয়েছে
import { Car, Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white border-t border-gray-800 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 cursor-pointer">
              <Car className="h-6 w-6 text-brand-gold" />
              <span className="font-serif text-xl font-bold">SellMyCar.ae</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              The most trusted car buying service in the UAE. We turn your car into cash in 30 minutes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-gold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/#valuation-form" className="hover:text-white transition-colors">Free Valuation</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-gold">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/sell-used-car" className="hover:text-white transition-colors block">
                  Sell Used Car
                </Link>
              </li>
              <li>
                <Link href="/sell-accidental-car" className="hover:text-white transition-colors block">
                  Sell Accidental Car
                </Link>
              </li>
              <li>
                <Link href="/sell-damaged-car" className="hover:text-white transition-colors block">
                  Sell Damaged Car
                </Link>
              </li>
              <li>
                <Link href="/sell-unused-car" className="hover:text-white transition-colors block">
                  Sell Unused Car
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors block">
                  Scrap Car Buyers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-gold">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a 
                  href="https://goo.gl/maps/Dubai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <MapPin className="h-5 w-5 text-brand-gold shrink-0" />
                  <span>Sheikh Zayed Road, Dubai, UAE</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+971564990530" 
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5 text-brand-gold shrink-0" />
                  <span>+971 56 499 0530</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@sellmycar.ae" 
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5 text-brand-gold shrink-0" />
                  <span>info@sellmycar.ae</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-black py-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p className="flex items-center gap-2 flex-wrap justify-center">
            <span>&copy; {new Date().getFullYear()} SellMyCar.ae. All rights reserved.</span>
            <span className="hidden md:inline text-gray-700">|</span>
            <span className="flex items-center gap-1">
               Developed by <a href="https://zasstech.top" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white transition-colors font-semibold">Zass Tech</a>
            </span>
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-brand-gold transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};