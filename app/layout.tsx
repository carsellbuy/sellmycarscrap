import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google"; 
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileStickyFooter } from '@/components/MobileStickyFooter';
import { ScrollToTop } from '@/components/ScrollToTop';
import Script from 'next/script'; 
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
    // পরিবর্তন ১: এখানে suppressHydrationWarning যোগ করা হয়েছে
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KPS673JQ');
          `}
        </Script>
      </head>

      {/* পরিবর্তন ২: বডিতেও suppressHydrationWarning যোগ করা হয়েছে */}
      <body 
        className={`${outfit.variable} ${playfair.variable} flex flex-col min-h-screen bg-brand-light text-brand-dark font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPS673JQ"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
        <MobileStickyFooter />
        <ScrollToTop />
      </body>
    </html>
  );
}