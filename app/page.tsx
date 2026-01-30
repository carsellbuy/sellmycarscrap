import { client } from "@/lib/sanity";
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
import type { Metadata } from "next";

// 1. ডাটা আনার ফাংশন
async function getHomePageData() {
  const query = `*[_type == "homePage"][0]`;
  const data = await client.fetch(query, {}, { cache: 'no-store' });
  return data;
}

// 2. ডাইনামিক মেটাডাটা
export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePageData();

  return {
    title: data?.metaTitle || "Sell Your Car in Dubai | Instant Cash & Free Valuation",
    description: data?.metaDescription || "Sell your scrap or used car in Dubai for instant cash.",
    keywords: data?.keywords || "sell my car dubai, scrap car buyers, sell used car uae",
  };
}

// 3. মেইন কম্পোনেন্ট
export default async function Home() {
  const data = await getHomePageData();

  // --- ভেরিয়েবলগুলো এখন ফাংশনের ভেতরে (সঠিক জায়গা) ---
  const heroTitle = data?.heroTitle || "Sell Your Car in Dubai";
  const heroSubtitle = data?.heroSubtitle || "Get instant cash for your used or scrap car. Free valuation and towing.";

  // --- 1. Organization Schema ---
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SellMyCar.ae",
    "url": "https://sellmycarscrap.com",
    "logo": "",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971564990530",
      "contactType": "customer service"
    }
  };

  // --- 2. FAQ Schema ---
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
          "text": "Yes, we buy cars in any condition, including scrap, damaged, and non-running vehicles."
        }
      }
    ]
  };

  return (
    <>
      {/* --- স্কিমা ইনজেকশন --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- কম্পোনেন্টসমূহ --- */}
      <Hero 
        customTitle={<span className="text-white">{heroTitle}</span>} 
        customSubtitle={heroSubtitle} 
      />
      
      <TrustBadges />
      <WhatWeDo />
      <HowItWorks />
      <Features />
      
      <SeoContent 
        customHeading={data?.seoHeading}
        customBody={data?.seoBody}
      />

      <Testimonials />
      <ServiceArea /> 
      <FAQ />
      <ContactSection />
    </>
  );
}