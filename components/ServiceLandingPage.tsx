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
  // onNavigate আর দরকার নেই, কিন্তু যদি প্যারেন্ট ফাইল থেকে আসে তাই অপশনাল (?) রাখা হলো
  onNavigate?: (view: string) => void; 
  location?: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords?: string;
}

export const ServiceLandingPage: React.FC<ServiceLandingPageProps> = ({ 
  title, 
  subtitle, 
  location,
  metaTitle,
  metaDescription,
  metaKeywords
}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <>
      {/* নোট: Next.js এ পেজের মেটাডাটা সাধারণত page.tsx ফাইলে export const metadata দিয়ে করা হয়।
        তবে আপাতত এরর এড়াতে আপনার SEO কম্পোনেন্টটি রাখা হলো।
      */}
      <SEO title={metaTitle} description={metaDescription} keywords={metaKeywords} />
      
      <Hero customTitle={title} customSubtitle={subtitle} />
      <TrustBadges />
      <WhatWeDo />
      <HowItWorks />
      <Features />
      <SeoContent location={location} />
      <Testimonials />
      
      {/* পরিবর্তন: এখানে onNavigate প্রপসটি মুছে ফেলা হয়েছে */}
      <ServiceArea /> 
      
      <FAQ />
      <ContactSection />
    </>
  );
};