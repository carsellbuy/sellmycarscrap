import { Metadata } from 'next';
import { ServiceLandingPage } from '@/components/ServiceLandingPage';

export const metadata: Metadata = {
  title: 'Sell Your Car in Dubai | Instant Cash & Free Inspection',
  description: 'Looking to sell your car in Dubai? We offer the best price, instant cash payment, and free doorstep inspection anywhere in Dubai.',
};

export default function SellCarDubaiPage() {
  return (
    <ServiceLandingPage 
      // এখানে পেজ অনুযায়ী টাইটেল চেঞ্জ করা হলো
      title={<>Sell Your Car in <span className="text-brand-gold">Dubai</span></>}
      subtitle="We come to your location anywhere in Dubai. Instant cash and free RTA transfer."
      location="Dubai" // এই লোকেশন প্রপসটি আপনার SeoContent এ ব্যবহৃত হবে
      metaTitle="Sell Your Car in Dubai"
      metaDescription="Best place to sell your car in Dubai."
    />
  );
}