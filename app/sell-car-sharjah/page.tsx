import { Metadata } from 'next';
import { ServiceLandingPage } from '@/components/ServiceLandingPage';

export const metadata: Metadata = {
  title: 'Sell Your Car in Sharjah | Quick & Easy Process',
  description: 'We buy any car in Sharjah. From industrial areas to the city center, we offer free towing and cash payment.',
};

export default function SellCarSharjahPage() {
  return (
    <ServiceLandingPage 
      title={<>Sell Your Car in <span className="text-brand-gold">Sharjah</span></>}
      subtitle="Get the best market rate for your car in Sharjah. No hidden fees, free inspection."
      location="Sharjah"
      metaTitle="Sell Your Car in Sharjah"
      metaDescription="Cash for cars in Sharjah."
    />
  );
}