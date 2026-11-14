import { Metadata } from 'next';
import { ServiceLandingPage } from '@/components/ServiceLandingPage';

export const metadata: Metadata = {
  alternates: { canonical: '/sell-car-dubai' },
  title: 'Sell Your Car in Dubai | Instant Cash & Free Inspection',
  description: 'Looking to sell your car in Dubai? We offer the best price, instant cash payment, and free doorstep inspection anywhere in Dubai.',
};

export default function SellCarDubaiPage() {
  return (
    <ServiceLandingPage 
      path="/sell-car-dubai"
      serviceName="Sell your car in Dubai"
      // এখানে পেজ অনুযায়ী টাইটেল চেঞ্জ করা হলো
      title={<>Sell Your Scrap Car in <span className="text-brand-gold">Dubai in Just 30 Minutes</span></>}
      subtitle="We come to your location anywhere in Dubai. Instant cash and free RTA transfer."
      location="Dubai" // এই লোকেশন প্রপসটি আপনার SeoContent এ ব্যবহৃত হবে
                />
  );
}