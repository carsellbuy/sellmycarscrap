import { Metadata } from 'next';
import { ServiceLandingPage } from '@/components/ServiceLandingPage';

export const metadata: Metadata = {
  title: 'Sell Your Car in Abu Dhabi | Top Rated Car Buyers',
  description: 'Sell your car in Abu Dhabi easily. Free valuation and instant cash for used and scrap cars in Abu Dhabi.',
};

export default function SellCarAbuDhabiPage() {
  return (
    <ServiceLandingPage 
      title={<>Sell Your Car in <span className="text-brand-gold">Abu Dhabi</span></>}
      subtitle="Hassle-free car selling experience in the capital. We handle all the paperwork."
      location="Abu Dhabi"
      metaTitle="Sell Your Car in Abu Dhabi"
      metaDescription="Sell your car for cash in Abu Dhabi."
    />
  );
}