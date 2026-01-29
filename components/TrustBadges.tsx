import React from 'react';
import { BadgeCheck, Lock, Zap, Award } from 'lucide-react';

const BADGES = [
  { icon: BadgeCheck, title: "RTA Authorized" },
  { icon: Lock, title: "Secure Transaction" },
  { icon: Zap, title: "Fastest Service" },
  { icon: Award, title: "Best Price Guarantee" },
];

export const TrustBadges: React.FC = () => {
  return (
    <div className="bg-white py-8 border-b border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {BADGES.map((badge, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left p-2 transition-transform hover:scale-105 duration-300">
              <div className="flex-shrink-0 bg-blue-50 p-3.5 rounded-full">
                <badge.icon className="h-6 w-6 text-blue-900" strokeWidth={1.5} />
              </div>
              <span className="font-semibold text-gray-900 text-sm md:text-base leading-tight">
                {badge.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};