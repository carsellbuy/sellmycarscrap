import React from 'react';
import Image from 'next/image';
import { Truck } from 'lucide-react';

/** Hero visual: our tow truck with a "Free Towing" badge. */
export function FreeTowingImage({ alt = 'Free car towing in the UAE: flatbed tow truck collecting a car' }: { alt?: string }) {
  return (
    <figure className="relative">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-300 ring-4 ring-brand-gold/60 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
        <Image
          src="/tow-truck-hero.webp"
          alt={alt}
          width={1366}
          height={579}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute -top-4 left-4 sm:left-6 flex items-center gap-2 rounded-full bg-brand-gold px-4 py-2 text-brand-dark shadow-lg">
        <Truck className="h-5 w-5" />
        <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider">Free Towing</span>
      </div>

      <figcaption className="mt-4 text-center text-gray-300 font-medium">
        We collect your car from your location at no cost.
      </figcaption>
    </figure>
  );
}
