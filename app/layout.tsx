import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google"; 
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileStickyFooter } from '@/components/MobileStickyFooter';
import { ScrollToTop } from '@/components/ScrollToTop';
import { GoogleTagManager } from '@next/third-parties/google'; // অফিশিয়াল প্যাকেজ ইম্পোর্ট
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
  title: 'Sell Your Car in Dubai | Instant Cash & Free Valuation | SellMyCar.ae',
  description: 'Sell your scrap or used car in Dubai for instant cash. We buy any car in any condition. Free valuation, free towing, and RTA paperwork handling.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${outfit.variable} ${playfair.variable} flex flex-col min-h-screen bg-brand-light text-brand-dark font-sans antialiased`}
        suppressHydrationWarning={true}
      >
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