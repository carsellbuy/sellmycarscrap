"use client";

import React from 'react';
import { PHONE_HREF, trackCallClick } from '@/lib/lead';

interface CallButtonProps {
  /** Name sent to GTM, e.g. "navbar_call". */
  trackingName: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}

/** A plain tel: link (works even before JS loads) with GTM call tracking. */
export function CallButton({ trackingName, className, ariaLabel, children }: CallButtonProps) {
  return (
    <a href={PHONE_HREF} onClick={() => trackCallClick(trackingName)} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
