"use client";

import React from 'react';

// --- লোকাল (হার্ডকোড) কম্পোনেন্টসমূহ ---
import { AbuDhabiHero } from './Hero';
import { AbuDhabiFeatures } from './Features';
import { AbuDhabiSeoContent } from './SeoContent';
import { AbuDhabiTestimonials } from './Testimonials';
import { AbuDhabiFaq } from './FAQ';

// --- গ্লোবাল কম্পোনেন্টসমূহ ---
import { TrustBadges } from '../TrustBadges';
import { WhatWeDo } from '../WhatWeDo'; 
import { HowItWorks } from '../HowItWorks';
import { RecentBuys } from '../RecentBuys';
import { ServiceArea } from '../ServiceArea';
import { ContactSection } from '../ContactSection';

export const AbuDhabiLandingPage = () => {
  return (
    <>
      <AbuDhabiHero />
      <TrustBadges />
      <WhatWeDo />
      <RecentBuys />
      <HowItWorks />
      <AbuDhabiFeatures />
      <AbuDhabiSeoContent />
      <AbuDhabiTestimonials />
      <ServiceArea /> 
      <AbuDhabiFaq />
      <ContactSection />
    </>
  );
};