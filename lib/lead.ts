// Contact details and call tracking helpers.

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
