import type { Metadata } from 'next';
import { PrivacyPolicy } from '@/components/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy | SellMyCar.ae',
  description:
    'Read our privacy policy to understand how SellMyCar.ae collects, uses, and protects your personal data when you use our car buying services.',
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
