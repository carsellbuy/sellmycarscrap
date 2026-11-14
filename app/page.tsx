import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustBadges } from "@/components/TrustBadges";
import { SeoContent } from "@/components/SeoContent";
import { Features } from "@/components/Features";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";
import { Testimonials } from "@/components/Testimonials";
import { WhatWeDo } from "@/components/WhatWeDo";
import { ServiceArea } from "@/components/ServiceArea";
import { RecentBuys } from "@/components/RecentBuys";
import type { Metadata } from "next";

// 1. স্ট্যাটিক ডাটা অবজেক্ট (Sanity এর বিকল্প)
const homePageData = {
  metaTitle: "Sell Your Car in Dubai | Instant Cash & Free Valuation",
  metaDescription: "Sell your scrap, used or damaged car in Dubai for instant cash. Free valuation, free towing and RTA paperwork handled. Get your offer in 30 minutes.",
  keywords: "sell my car dubai, scrap car buyers, sell used car uae",
  heroTitle: "Sell Your Scrap Car in Dubai in Just 30 Minutes",
  heroSubtitle: "Get instant cash for your used or scrap car. Free valuation and towing.",
  seoHeading: "Why Choose Our Scrap Car Buying Service in Dubai?",
  seoBody: "Selling your car in Dubai has never been easier. We offer top cash for scrap, used, and damaged cars. Our process is simple, fast, and completely hassle free."
};

// 2. ডাইনামিক মেটাডাটা
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: homePageData.metaTitle,
    description: homePageData.metaDescription,
    keywords: homePageData.keywords,
    alternates: { canonical: '/', languages: { en: '/', ar: '/ar' } },
  };
}

// 3. মেইন কম্পোনেন্ট
export default function Home() {
  
  // Organization Schema 
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SellMyCarScrap",
    "url": "https://sellmycarscrap.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971564990530",
      "contactType": "customer service"
    }
  };

  // FAQ Schema 
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast can I sell my car?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can sell your car in as little as 30 minutes with our instant valuation service."
        }
      },
      {
        "@type": "Question",
        "name": "Do you buy scrap cars?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we buy cars in any condition, including scrap, damaged, and non running vehicles."
        }
      }
    ]
  };

  return (
    <>
      {/* স্কিমা ইনজেকশন */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* কম্পোনেন্টসমূহ */}
      <Hero 
        customTitle={<span className="text-white">{homePageData.heroTitle}</span>} 
        customSubtitle={homePageData.heroSubtitle} 
      />
      
      <TrustBadges />
      <WhatWeDo />
      <RecentBuys />
      <HowItWorks />
      <Features />
      
      <SeoContent 
        customHeading={homePageData.seoHeading}
        customBody={homePageData.seoBody}
      />

      <Testimonials />
      <ServiceArea /> 
      <FAQ />
      <ContactSection />
    </>
  );
}