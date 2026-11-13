import type { Metadata } from 'next';
import { TermsOfService } from '@/components/TermsOfService';

export const metadata: Metadata = {
  alternates: { canonical: '/terms' },
  title: 'Terms of Service | SellMyCarScrap',
  description:
    'Review the terms and conditions for using SellMyCarScrap services. Understanding your rights and obligations when selling your car to us.',
};

export default function TermsPage() {
  return <TermsOfService />;
}
