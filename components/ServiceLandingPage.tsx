"use client";

import React, { useEffect } from 'react';
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
import { SEO } from './SEO';

interface ServiceLandingPageProps {
  title: React.ReactNode;
  subtitle: string;
  onNavigate?: (view: string) => void;
  location?: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords?: string;
  // --- নতুন ২ লাইন (লাল দাগ ফিক্স করার জন্য) ---
  contentHeading?: string; 
  contentBody?: string;
}

export const ServiceLandingPage: React.FC<ServiceLandingPageProps> = ({ 
  title, 
  subtitle, 
  location,
  metaTitle,
  metaDescription,
  metaKeywords,
  // --- এখানে রিসিভ করছি ---
  contentHeading, 
  contentBody
}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} keywords={metaKeywords} />
      
      <Hero customTitle={title} customSubtitle={subtitle} />
      <TrustBadges />
      <WhatWeDo />
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