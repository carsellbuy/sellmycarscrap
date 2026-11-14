// Structured data (JSON-LD) builders. Keep facts here in sync with what the
// site shows: Google ignores or penalises schema that contradicts the page.
import { PHONE_E164 } from './lead';
import { ADDRESS, MAPS_URL, SITE_NAME, SITE_URL } from './site';
import type { Faq } from '@/data/faqs';

export const BUSINESS_ID = `${SITE_URL}/#business`;

export const EMIRATES = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah'];

/** The business itself. Rendered once, sitewide, from the root layout. */
export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    '@id': BUSINESS_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    image: `${SITE_URL}/hero-tow-truck-explorer.webp`,
    description:
      'We buy scrap, used, damaged, accident and non-running cars across the UAE. Free valuation by phone, free towing, RTA paperwork handled and instant payment.',
    telephone: PHONE_E164,
    hasMap: MAPS_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.area,
      addressRegion: ADDRESS.city,
      addressCountry: ADDRESS.countryCode,
    },
    areaServed: EMIRATES.map((name) => ({ '@type': 'AdministrativeArea', name })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE_E164,
      contactType: 'sales',
      areaServed: 'AE',
    },
    knowsAbout: ['Scrap car buying', 'Used car buying', 'Accident car buying', 'Car towing', 'RTA ownership transfer'],
  };
}

/** FAQPage built from the same list the page renders. */
export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

/** A car-buying service offered on a landing page, linked to the business. */
export function serviceSchema({ name, path, area }: { name: string; path: string; area?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType: 'Car buying',
    url: `${SITE_URL}${path}`,
    provider: { '@id': BUSINESS_ID },
    areaServed: area ? { '@type': 'City', name: area } : { '@type': 'Country', name: 'United Arab Emirates' },
  };
}

/** Home > Page breadcrumb. */
export function breadcrumbSchema(name: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}
