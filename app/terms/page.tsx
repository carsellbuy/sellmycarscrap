import type { Metadata } from 'next';
import { TermsOfService } from '@/components/TermsOfService';

export const metadata: Metadata = {
  title: 'Terms of Service | SellMyCar.ae',
  description:
    'Review the terms and conditions for using SellMyCar.ae services. Understanding your rights and obligations when selling your car to us.',
};

export default function TermsPage() {
  return <TermsOfService />;
}
