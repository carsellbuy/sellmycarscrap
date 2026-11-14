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
import { JsonLd } from './JsonLd';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { GENERAL_FAQS } from '@/data/faqs';

interface ServiceLandingPageProps {
  title: React.ReactNode;
  subtitle: string;
  onNavigate?: (view: string) => void;
  location?: string;
  /** Page URL path, e.g. "/sell-car-dubai" (used for structured data). */
  path: string;
  /** Short service name for structured data, e.g. "Sell your car in Dubai". */
  serviceName: string;
  // --- নতুন ২ লাইন (লাল দাগ ফিক্স করার জন্য) ---
  contentHeading?: string; 
  contentBody?: string;
}

export const ServiceLandingPage: React.FC<ServiceLandingPageProps> = ({ 
  title, 
  subtitle, 
  location,
  path,
  serviceName,
  // --- এখানে রিসিভ করছি ---
  contentHeading, 
  contentBody
}) => {

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: serviceName, path, area: location }),
          breadcrumbSchema(serviceName, path),
          faqSchema(GENERAL_FAQS),
        ]}
      />
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