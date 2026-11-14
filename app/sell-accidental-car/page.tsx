import { Metadata } from 'next';
import { ServiceLandingPage } from '@/components/ServiceLandingPage';

export const metadata: Metadata = {
  alternates: { canonical: '/sell-accidental-car' },
  title: 'Sell Accidental Car in Dubai | Top Cash for Accident Cars',
  description: 'Got into an accident? We buy accidental cars in any condition across UAE. Fair valuation, free towing, and instant cash payment.',
};

export default function SellAccidentalCarPage() {
  return (
    <ServiceLandingPage 
      path="/sell-accidental-car"
      serviceName="Sell your accident car"
      title={<>Sell Your <span className="text-brand-gold">Accidental Car</span> Today</>}
      subtitle="Don't worry about repairs. We buy cars with major or minor accident history. Get a fair price instantly."
      // location নির্দিষ্ট না করলে ডিফল্ট কন্টেন্ট দেখাবে, যা সব জায়গার জন্য প্রযোজ্য
    />
  );
}