import { Metadata } from 'next';
import { ServiceLandingPage } from '@/components/ServiceLandingPage';

export const metadata: Metadata = {
  title: 'Sell Your Car in Ajman | Best Prices Guaranteed',
  description: 'Sell your used or scrap car in Ajman today. Instant cash offers and free removal service.',
};

export default function SellCarAjmanPage() {
  return (
    <ServiceLandingPage 
      title={<>Sell Your Car in <span className="text-brand-gold">Ajman</span></>}
      subtitle="Selling your car in Ajman is now easier than ever. Contact us for a free quote."
      location="Ajman"
      metaTitle="Sell Your Car in Ajman"
      metaDescription="Sell your car in Ajman fast."
    />
  );
}