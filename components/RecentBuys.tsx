import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { CallButton } from './CallButton';
import { PHONE_DISPLAY } from '@/lib/lead';

type Locale = 'en' | 'ar';

// Real cars bought from customers. Number plates are blurred in the image files.
const CARS: { file: string; name: string; tag: Record<Locale, string> }[] = [
  { file: 'bmw-650i', name: 'BMW 650i', tag: { en: 'Luxury coupe', ar: 'كوبيه فاخرة' } },
  { file: 'toyota-avanza-accident', name: 'Toyota Avanza', tag: { en: 'Accident damaged', ar: 'متضررة بحادث' } },
  { file: 'porsche-macan-parked', name: 'Porsche Macan', tag: { en: 'Long-parked', ar: 'متوقفة لفترة طويلة' } },
  { file: 'ford-explorer-tow-truck', name: 'Ford Explorer', tag: { en: 'Collected by tow truck', ar: 'نقل بالسطحة' } },
  { file: 'range-rover-hse', name: 'Range Rover HSE', tag: { en: 'Luxury SUV', ar: 'دفع رباعي فاخر' } },
  { file: 'lexus-lx470', name: 'Lexus LX470', tag: { en: 'SUV', ar: 'دفع رباعي' } },
  { file: 'toyota-rav4', name: 'Toyota RAV4', tag: { en: 'SUV', ar: 'دفع رباعي' } },
  { file: 'chrysler-300c', name: 'Chrysler 300C', tag: { en: 'Sedan', ar: 'سيدان' } },
  { file: 'lincoln-mkx', name: 'Lincoln MKX', tag: { en: 'SUV', ar: 'دفع رباعي' } },
  { file: 'honda-odyssey', name: 'Honda Odyssey', tag: { en: 'Family van', ar: 'فان عائلي' } },
  { file: 'ford-ecosport', name: 'Ford EcoSport', tag: { en: 'Compact SUV', ar: 'دفع رباعي صغيرة' } },
];

const TEXT = {
  en: {
    kicker: 'Real cars, real customers',
    title: 'Our Recent Car Buys',
    subtitle: 'Luxury, family, damaged or parked for years: these are cars we recently bought across the UAE. Number plates are hidden for our customers’ privacy.',
    ctaTitle: 'Your car next?',
    ctaBody: 'Call now and get your price on the call.',
    ctaButton: 'Call Now',
  },
  ar: {
    kicker: 'سيارات حقيقية، عملاء حقيقيون',
    title: 'سيارات اشتريناها مؤخراً',
    subtitle: 'فاخرة، عائلية، متضررة أو متوقفة لسنوات: هذه سيارات اشتريناها مؤخراً في الإمارات. أخفينا أرقام اللوحات لحماية خصوصية عملائنا.',
    ctaTitle: 'سيارتك هي التالية؟',
    ctaBody: 'اتصل الآن واحصل على السعر خلال المكالمة.',
    ctaButton: 'اتصل الآن',
  },
};

export function RecentBuys({ locale = 'en' }: { locale?: Locale }) {
  const t = TEXT[locale];

  return (
    <section id="recent-buys" className="py-16 md:py-20 bg-gray-50 border-t border-gray-100" dir={locale === 'ar' ? 'rtl' : undefined}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">{t.kicker}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {CARS.map((car) => (
            <figure key={car.file} className="group overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                <Image
                  src={`/recent-buys/${car.file}.webp`}
                  alt={`${car.name} bought by SellMyCarScrap (${car.tag.en.toLowerCase()})`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-2 start-2 rounded-full bg-brand-dark/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                  {car.tag[locale]}
                </span>
              </div>
              <figcaption className="px-3 py-2.5 text-sm font-bold text-gray-900" dir="ltr">
                {car.name}
              </figcaption>
            </figure>
          ))}

          {/* Last tile: call to action */}
          <CallButton
            trackingName={locale === 'ar' ? 'ar_recent_buys_call' : 'recent_buys_call'}
            className="flex flex-col items-center justify-center text-center gap-2 rounded-xl bg-brand-dark p-4 text-white shadow-sm transition-colors hover:bg-slate-800"
          >
            <Phone className="h-8 w-8 fill-current text-brand-gold" />
            <span className="text-lg font-bold">{t.ctaTitle}</span>
            <span className="text-xs sm:text-sm text-gray-300">{t.ctaBody}</span>
            <span className="mt-1 rounded-full bg-brand-gold px-3 py-1.5 text-xs sm:text-sm font-bold text-brand-dark" dir="ltr">
              {t.ctaButton} {PHONE_DISPLAY}
            </span>
          </CallButton>
        </div>
      </div>
    </section>
  );
}
