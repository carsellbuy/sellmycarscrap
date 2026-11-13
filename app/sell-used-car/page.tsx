import { Metadata } from 'next';
import { ServiceLandingPage } from '@/components/ServiceLandingPage';

export const metadata: Metadata = {
  alternates: { canonical: '/sell-used-car' },
  title: 'Sell Your Used Car in Dubai | Instant Cash Offer',
  description: 'Want to sell your used car in Dubai? Get a fair price and instant cash. We buy used cars of any make, model and mileage, with free inspection and RTA transfer.',
};

export default function SellUnusedCarPage() {
  return (
    <ServiceLandingPage 
      title={<>Sell Your <span className="text-brand-gold">Used Car</span> for Instant Cash</>}
      subtitle="Get a fair market price for your used car in minutes. Free inspection at your doorstep and same-day payment."
    />
  );
}