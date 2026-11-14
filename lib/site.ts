export const SITE_URL = 'https://sellmycarscrap.com';
export const SITE_NAME = 'SellMyCarScrap';

// Business address: keep identical everywhere (site, schema, Google Business Profile).
export const ADDRESS = {
  street: '27 Street, Industrial Area 10',
  area: 'Industrial Area',
  city: 'Sharjah',
  country: 'UAE',
  countryCode: 'AE',
};
export const ADDRESS_TEXT = `${ADDRESS.street}, ${ADDRESS.area}, ${ADDRESS.city}, ${ADDRESS.country}`;
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `27 Street, Industrial Area 10, ${ADDRESS.city}, ${ADDRESS.country}`,
)}`;
