import React, { useEffect } from 'react';
import { SEO } from './SEO';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-10 pb-20">
      <SEO 
        title="Privacy Policy | SellMyCar.ae"
        description="Read our privacy policy to understand how SellMyCar.ae collects, uses, and protects your personal data when you use our car buying services."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8 border-b pb-4">Privacy Policy</h1>
        
        <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <p>
            At SellMyCar.ae, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>

          <h3 className="text-xl font-bold text-gray-900">1. Information We Collect</h3>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name.</li>
            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
            <li><strong>Vehicle Data:</strong> includes make, model, year, condition, and mileage of the car you wish to sell.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900">2. How We Use Your Information</h3>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide you with a valuation for your vehicle.</li>
            <li>To contact you regarding your inquiry or to schedule an inspection.</li>
            <li>To improve our website and services.</li>
            <li>To comply with a legal or regulatory obligation.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900">3. Data Security</h3>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>

          <h3 className="text-xl font-bold text-gray-900">4. Contact Us</h3>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at info@sellmycar.ae.
          </p>
        </div>
      </div>
    </div>
  );
};