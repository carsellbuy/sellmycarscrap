import type { Metadata } from "next";
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

// ১. SEO বা Metadata এখানে সেট করতে হয় (আগের SEO কম্পোনেন্ট আর লাগবে না)
export const metadata: Metadata = {
  title: "Sell Your Car in Dubai | Instant Cash & Free Valuation | SellMyCar.ae",
  description: "Sell your scrap or used car in Dubai for instant cash. We buy any car in any condition. Free valuation, free towing, and RTA paperwork handling.",
  keywords: "sell my car dubai, scrap car buyers dubai, sell used car uae, cash for cars dubai",
};

export default function Home() {
  return (
    <>
      {/* Navbar এবং Footer এখন layout.tsx থেকে আসবে, তাই এখানে দরকার নেই */}
      
      {/* Hero Section containing the Valuation Form */}
      <Hero />
      
      {/* Trust Signals Badge Bar */}
      <TrustBadges />

      {/* What We Do Section */}
      <WhatWeDo />
      
      {/* Process Steps */}
      <HowItWorks />

      {/* Value Props */}
      <Features />
      
      {/* SEO Optimized Content Section */}
      <SeoContent />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Service Area - Coverage */}
      {/* নোট: ServiceArea কম্পোনেন্টের ভেতরে যদি onNavigate থাকে, সেটা সরিয়ে Link ব্যবহার করতে হবে */}
      <ServiceArea /> 

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Grid Section */}
      <ContactSection />
    </>
  );
}