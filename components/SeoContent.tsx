import React from 'react';

interface SeoContentProps {
  location?: string;
}

export const SeoContent: React.FC<SeoContentProps> = ({ location = "Dubai" }) => {
  return (
    <section id="about" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-600 space-y-6">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Sell Your Used Car in {location} – Quick, Easy, & Reliable</h2>
        
        <p>
          Looking to <strong>sell your car in {location}</strong> for the best possible price? You've come to the right place. 
          At SellMyCar.ae, we understand that selling a used vehicle in the UAE can be a stressful experience involving 
          unreliable buyers, endless negotiations, and complex RTA paperwork. We eliminate these hassles, offering you a 
          streamlined, transparent, and secure way to convert your car into cash instantly.
        </p>

        <p>
          Whether you have a <em>luxury SUV, a dependable sedan, or even a scrap vehicle</em>, our team of automotive experts 
          is ready to offer a competitive market valuation. We use advanced market data to ensure our offers are fair and 
          reflective of your car's true condition and the current {location} used car market trends.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6">Why We Are the Best Place to Sell Your Car in {location}</h3>
        <p>
          Unlike traditional dealerships or online classifieds, we prioritize your convenience. Our "We come to you" service 
          means you can have your car inspected at your home or office. Once a deal is agreed upon, we handle the 
          <strong> RTA transfer process</strong>, clear any outstanding mortgages, and transfer the money to your bank account 
          instantly. It is the safest way to sell any car in {location}, Sharjah, or Abu Dhabi.
        </p>

        <p className="text-sm text-gray-500 italic mt-8">
          Keywords: Sell my car {location}, cash for cars UAE, used car buyers {location}, sell car fast, scrap car buyers, RTA transfer assistance, online car valuation.
        </p>
      </div>
    </section>
  );
};