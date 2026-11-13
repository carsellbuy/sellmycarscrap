import type { Metadata } from 'next';
import { CookiePolicy } from '@/components/CookiePolicy';

export const metadata: Metadata = {
  title: 'Cookie Policy | SellMyCar.ae',
  description:
    'Understand how SellMyCar.ae uses cookies to improve your user experience and analyze website traffic.',
};

export default function CookiesPage() {
  return <CookiePolicy />;
}
