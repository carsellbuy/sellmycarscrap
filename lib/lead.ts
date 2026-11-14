// Shared helpers for lead forms (WhatsApp quote requests + GTM tracking).

export const PHONE_E164 = '+971564990530';
export const PHONE_DISPLAY = '+971 56 499 0530';
export const PHONE_HREF = `tel:${PHONE_E164}`;
export const WHATSAPP_NUMBER = '971564990530';
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * Tracks a click on a phone link. Keeps the existing `custom_button_click`
 * event (so current GTM triggers keep working) and adds a dedicated
 * `phone_call_click` event to use as the Google Ads call conversion.
 */
export function trackCallClick(buttonName: string) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'custom_button_click', button_name: buttonName, page_path: window.location.pathname });
  window.dataLayer.push({ event: 'phone_call_click', call_location: buttonName, page_path: window.location.pathname });
}

/**
 * Accepts the formats people actually type in the UAE
 * ("501234567", "0501234567", "+971 50 123 4567", "00971501234567")
 * and returns the 9-digit local mobile number, or null if invalid.
 */
export function normalizeUAEMobile(input: string): string | null {
  let digits = input.replace(/\D/g, '');
  if (digits.startsWith('00971')) digits = digits.slice(5);
  else if (digits.startsWith('971')) digits = digits.slice(3);
  if (digits.startsWith('0')) digits = digits.slice(1);
  return /^5[0-9]\d{7}$/.test(digits) ? digits : null;
}

type LeadEvent = {
  leadType: string;
  carMake: string;
  carModel: string;
  extra?: Record<string, string>;
};

/**
 * Pushes a `generate_lead` event to GTM. Deliberately contains no phone
 * number or name: sending PII to Google Analytics violates its policy.
 */
export function pushLeadEvent({ leadType, carMake, carModel, extra }: LeadEvent) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'generate_lead',
    lead_type: leadType,
    car_make: carMake,
    car_model: carModel,
    ...extra,
    ecommerce: {
      currency: 'AED',
      value: 0,
      items: [{ item_name: `${carMake} ${carModel}`.trim(), item_category: 'Car Inquiry' }],
    },
  });
}
