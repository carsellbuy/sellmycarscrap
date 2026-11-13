import type { Metadata } from 'next';
import { CookiePolicy } from '@/components/CookiePolicy';

export const metadata: Metadata = {
  alternates: { canonical: '/cookies' },
  title: 'Cookie Policy | SellMyCarScrap',
  description:
    'Understand how SellMyCarScrap uses cookies to improve your user experience and analyze website traffic.',
};

export default function CookiesPage() {
  return <CookiePolicy />;
}
