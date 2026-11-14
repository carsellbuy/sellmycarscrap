import React from 'react';
import { Hero } from './Hero';
import { HowItWorks } from './HowItWorks';
import { TrustBadges } from './TrustBadges';
import { Features } from './Features';
import { FAQ } from './FAQ';
import { ContactSection } from './ContactSection';
import { Testimonials } from './Testimonials';
import { WhatWeDo } from './WhatWeDo';
import { ServiceArea } from './ServiceArea';
import { SeoContent } from './SeoContent';
import { RecentBuys } from './RecentBuys';

interface ServiceLandingPageProps {
  title: React.ReactNode;
  subtitle: string;
  onNavigate?: (view: string) => void;
  location?: string;
  // --- নতুন ২ লাইন (লাল দাগ ফিক্স করার জন্য) ---
  contentHeading?: string; 
  contentBody?: string;
}

export const ServiceLandingPage: React.FC<ServiceLandingPageProps> = ({ 
  title, 
  subtitle, 
  location,
  // --- এখানে রিসিভ করছি ---
  contentHeading, 
  contentBody
}) => {

  return (
    <>
      <Hero customTitle={title} customSubtitle={subtitle} />
      <TrustBadges />
      <WhatWeDo />
      <RecentBuys />
      <HowItWorks />
      <Features />
      
      {/* --- নতুন ডাটা SeoContent এ পাঠিয়ে দিচ্ছি --- */}
      <SeoContent 
        location={location} 
        customHeading={contentHeading} 
        customBody={contentBody} 
      />
      
      <Testimonials />
      <ServiceArea /> 
      <FAQ />
      <ContactSection />
    </>
  );
};