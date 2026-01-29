
"use client";

// import { CarCondition } from './types'; // এটি আপাতত কমেন্ট করা হলো কারণ এখানে ব্যবহার হচ্ছে না

export const CAR_BRANDS = [
  "Toyota", "Nissan", "Mercedes-Benz", "BMW", "Audi", "Ford", "Honda", "Hyundai", "Kia", "Lexus", "Mitsubishi", "Volkswagen", "Land Rover", "Porsche", "Chevrolet"
];

export const YEARS = Array.from({ length: 25 }, (_, i) => (new Date().getFullYear() - i).toString());

// Next.js এর জন্য লিঙ্কগুলো আপডেট করা হলো
export const NAV_LINKS = [
  { name: 'Home', href: '/' }, // হোম পেজ
  { name: 'How it Works', href: '/#how-it-works' }, // হোম পেজের সেকশন (ID থাকতে হবে)
  { name: 'About Us', href: '/#about' }, // হোম পেজের সেকশন
  { name: 'Blog', href: '/blog' }, // আলাদা ব্লগ পেজ
  { name: 'Contact', href: '/#contact' }, // হোম পেজের কন্টাক্ট সেকশন
];
