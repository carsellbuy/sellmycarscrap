import { Metadata } from 'next';
import { ServiceLandingPage } from '@/components/ServiceLandingPage';

export const metadata: Metadata = {
  alternates: { canonical: '/sell-damaged-car' },
  title: 'Sell Damaged Car Dubai | Engine or Body Damage Accepted',
  description: 'Selling a damaged car with engine failure, transmission issues, or body damage? We offer the best price for damaged cars in UAE.',
};

export default function SellDamagedCarPage() {
  return (
    <ServiceLandingPage 
      path="/sell-damaged-car"
      serviceName="Sell your damaged car"
      title={<>Sell Your <span className="text-brand-gold">Damaged Car</span> for Cash</>}
      subtitle="Engine failure, transmission issues, or mechanical faults? Turn your damaged car into instant cash with free removal."
    />
  );
}