import { Metadata } from 'next';
import { ServiceLandingPage } from '@/components/ServiceLandingPage';

export const metadata: Metadata = {
  title: 'Sell used or Old Car | Instant Cash Dubai',
  description: 'Have an used car sitting in your parking? Sell it today for instant cash. We buy non-running and old cars.',
};

export default function SellUnusedCarPage() {
  return (
    <ServiceLandingPage 
      title={<>Sell Your <span className="text-brand-gold">Unused Car</span> Fast</>}
      subtitle="Stop paying fines for a car you don't use. We buy old, used, and parked cars from your doorstep."
      metaTitle="Sell used Car"
      metaDescription="Cash for used cars."
    />
  );
}