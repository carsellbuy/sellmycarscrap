import React, { useEffect } from 'react';
import { SEO } from './SEO';

export const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-10 pb-20">
      <SEO 
        title="Terms of Service | SellMyCar.ae"
        description="Review the terms and conditions for using SellMyCar.ae services. Understanding your rights and obligations when selling your car to us."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8 border-b pb-4">Terms of Service</h1>
        
        <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <p>
            Welcome to SellMyCar.ae. By accessing this website, you agree to be bound by these Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>

          <h3 className="text-xl font-bold text-gray-900">1. Use License</h3>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on SellMyCar.ae's website for personal, non-commercial transitory viewing only.
          </p>

          <h3 className="text-xl font-bold text-gray-900">2. Valuation Services</h3>
          <p>
            Any online valuation provided by our website is an estimate based on the information you provide. It does not constitute a binding offer to purchase. The final price is subject to a physical inspection of the vehicle by our experts. We reserve the right to withdraw or change our offer after inspection.
          </p>

          <h3 className="text-xl font-bold text-gray-900">3. User Obligations</h3>
          <p>
            You warrant that all information provided by you regarding the vehicle is accurate and truthful. You must be the legal owner of the vehicle or authorized to sell it. You agree to disclose any known defects or issues with the vehicle.
          </p>

          <h3 className="text-xl font-bold text-gray-900">4. Limitations</h3>
          <p>
            In no event shall SellMyCar.ae or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SellMyCar.ae's website.
          </p>

          <h3 className="text-xl font-bold text-gray-900">5. Governing Law</h3>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>
      </div>
    </div>
  );
};