import { Metadata } from 'next';
import { AbuDhabiLandingPage } from '@/components/abu-dhabi';

export const metadata: Metadata = {
  alternates: { canonical: '/sell-car-abu-dhabi' },
  title: 'Sell Your Scrap Car in Abu Dhabi | Top Rated Buyers',
  description: 'Sell your scrap car in Abu Dhabi easily. Free valuation and instant cash for used and scrap cars.',
};

export default function SellCarAbuDhabiPage() {
  return <AbuDhabiLandingPage />;
}