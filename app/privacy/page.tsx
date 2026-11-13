import type { Metadata } from 'next';
import { PrivacyPolicy } from '@/components/PrivacyPolicy';

export const metadata: Metadata = {
  alternates: { canonical: '/privacy' },
  title: 'Privacy Policy | SellMyCarScrap',
  description:
    'Read our privacy policy to understand how SellMyCarScrap collects, uses, and protects your personal data when you use our car buying services.',
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
