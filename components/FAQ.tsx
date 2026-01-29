"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  {
    question: "Do you buy damaged or non-running cars?",
    answer: "Yes, absolutely! We specialize in buying scrap, damaged, accident-wrecked, and non-running cars. Whether it has a blown engine, transmission failure, or has been in a major accident, we will offer you a fair price and tow it away for free."
  },
  {
    question: "Which documents do I need to sell my car?",
    answer: "You will need your original Emirates ID, vehicle registration card (Mulkiya), and bank account details for the transfer. If the car has a mortgage, we need a clearance letter from the bank."
  },
  {
    question: "How long does the process take?",
    answer: "The entire process usually takes about 30 minutes from inspection to payment. We value your time and aim for the fastest turnaround in the UAE."
  },
  {
    question: "Is the valuation free?",
    answer: "Yes, our valuation and inspection services are 100% free with no obligation to sell. You can get a quote online or schedule a visit."
  },
  {
    question: "Do you buy cars with expired registration?",
    answer: "Yes, we buy cars with expired registration. We handle all the necessary RTA paperwork and fines clearance (if applicable) to transfer the ownership legally."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-500">Common questions about selling scrap cars in the UAE</p>
        </div>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left bg-white focus:outline-none"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};