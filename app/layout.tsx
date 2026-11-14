import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google"; 
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileStickyFooter } from '@/components/MobileStickyFooter';
import { ScrollToTop } from '@/components/ScrollToTop';
import { GoogleTagManager } from '@next/third-parties/google'; // অফিশিয়াল প্যাকেজ ইম্পোর্ট
import { SITE_NAME, SITE_URL } from '@/lib/site';
import { businessSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import './globals.css';

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit", 
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Sell Your Car in Dubai | Instant Cash & Free Valuation | SellMyCarScrap',
  description: 'Sell your scrap or used car in Dubai for instant cash. We buy any car in any condition. Free valuation, free towing, and RTA paperwork handling.',
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_AE',
    images: [{ url: '/tow-truck-hero.webp', alt: 'SellMyCarScrap tow truck collecting a car in Dubai' }],
  },
  twitter: { card: 'summary_large_image' },
  verification: {
    google: 'UrYkZgFYXiZlOeXsD9dEmbsjplmDqohdy5OMnuelq7w',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${outfit.variable} ${playfair.variable} flex flex-col min-h-screen bg-brand-light text-brand-dark font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        <JsonLd data={businessSchema()} />
        <Navbar />
        
        <main className="flex-grow">
          {children}
          <SpeedInsights />
        </main>

        <Footer />
        <MobileStickyFooter />
        <ScrollToTop />
        
      </body>
      {/* বডির ঠিক বাইরে বা শেষে GTM কম্পোনেন্ট বসানো হলো */}
      <GoogleTagManager gtmId="GTM-KPS673JQ" />
    </html>
  );
}