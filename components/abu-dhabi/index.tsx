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
import { JsonLd } from '../JsonLd';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { ABU_DHABI_FAQS } from '@/data/faqs';
import { ServiceArea } from '../ServiceArea';
import { ContactSection } from '../ContactSection';

export const AbuDhabiLandingPage = () => {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: 'Sell your car in Abu Dhabi', path: '/sell-car-abu-dhabi', area: 'Abu Dhabi' }),
          breadcrumbSchema('Sell your car in Abu Dhabi', '/sell-car-abu-dhabi'),
          faqSchema(ABU_DHABI_FAQS),
        ]}
      />
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