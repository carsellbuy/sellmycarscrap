import { Metadata } from 'next';
import { ServiceLandingPage } from '@/components/ServiceLandingPage';

export const metadata: Metadata = {
  title: 'Sell Accidental Car in Dubai | Top Cash for Accident Cars',
  description: 'Got into an accident? We buy accidental cars in any condition across UAE. Fair valuation, free towing, and instant cash payment.',
};

export default function SellAccidentalCarPage() {
  return (
    <ServiceLandingPage 
      title={<>Sell Your <span className="text-brand-gold">Accidental hero Car</span> Today</>}
      subtitle="Don't worry about repairs. We buy cars with major or minor accident history. Get a fair price instantly."
      metaTitle="Sell Accidental Car Dubai"
      metaDescription="We buy accidental cars for cash."
      // location নির্দিষ্ট না করলে ডিফল্ট কন্টেন্ট দেখাবে, যা সব জায়গার জন্য প্রযোজ্য
    />
  );
}