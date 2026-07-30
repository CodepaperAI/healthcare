/**
 * Single source of truth for business information (NAP), hours and links.
 * Edit this file and every page, footer, schema block and CTA updates.
 */

export const site = {
  name: 'Planet Health Care',
  legalName: 'Planet Health Care',
  tagline: 'Better Care. Better Health. Better Tomorrow.',
  shortDescription:
    'A multidisciplinary clinic in North London, Ontario — physiotherapy, chiropractic, massage therapy, psychology, shockwave and acupuncture under one roof.',

  // Update this to the production domain before deploying.
  url: 'https://www.planethealthcare.ca',
  locale: 'en_CA',

  phone: '226-721-8777',
  phoneHref: 'tel:+12267218777',
  email: 'info@planethealthcare.ca',
  emailHref: 'mailto:info@planethealthcare.ca',

  address: {
    unit: 'Unit 15',
    street: '1225 Wonderland Rd N',
    landmark: 'Sherwood Forest Mall',
    city: 'London',
    region: 'ON',
    regionName: 'Ontario',
    postalCode: 'N6G 2V9',
    country: 'CA',
  },

  // Approximate coordinates for Sherwood Forest Mall, London ON.
  // Replace with exact clinic coordinates if you have them.
  geo: { latitude: 43.0206, longitude: -81.2861 },

  links: {
    booking:
      'https://planethealthcare.juvonno.com/portal/publicbook.php?step=practitioner&dr=0&branch_id=1&pt=&proid=0',
    map: 'https://maps.app.goo.gl/ocwqA3W3Mqh1wiK79',
    facebook: 'https://www.facebook.com/Planet-Healthcare-100312841952708/',
    instagram: 'https://www.instagram.com/planethealthcarelondon',
    googleReviews: 'https://maps.app.goo.gl/ocwqA3W3Mqh1wiK79',
  },

  rating: {
    value: '5.0',
    source: 'Google',
    label: 'Rated on Google',
  },

  /** Displayed in the header utility bar, footer and location section. */
  hours: [
    { day: 'Monday', open: '10:00', close: '18:00', display: '10 am – 6 pm' },
    { day: 'Tuesday', open: '10:00', close: '18:00', display: '10 am – 6 pm' },
    { day: 'Wednesday', open: null, close: null, display: 'Closed' },
    { day: 'Thursday', open: '10:00', close: '18:00', display: '10 am – 6 pm' },
    { day: 'Friday', open: '10:00', close: '18:00', display: '10 am – 6 pm' },
    { day: 'Saturday', open: null, close: null, display: 'Closed' },
    { day: 'Sunday', open: null, close: null, display: 'Closed' },
  ],

  /** Short trust signals reused in hero pills and service page headers. */
  assurances: [
    { label: 'Direct billing', icon: 'shield' },
    { label: 'Same-day appointments', icon: 'clock' },
    { label: 'Free parking', icon: 'car' },
  ],

  establishedYear: 2020,
};

export const addressLines = [
  `${site.address.unit}, ${site.address.street}`,
  site.address.landmark,
  `${site.address.city}, ${site.address.region} ${site.address.postalCode}`,
];

export const addressOneLine = `${site.address.unit}, ${site.address.street}, ${site.address.city} ${site.address.region} ${site.address.postalCode}`;

/** Neighbourhoods served — also the seed list for future location pages. */
export const serviceAreas = [
  { name: 'Sherwood Forest', slug: 'sherwood-forest' },
  { name: 'Masonville', slug: 'masonville' },
  { name: 'Hyde Park', slug: 'hyde-park' },
  { name: 'Whitehills', slug: 'whitehills' },
  { name: 'Oakridge', slug: 'oakridge' },
  { name: 'Fox Hollow', slug: 'fox-hollow' },
  { name: 'Western University', slug: 'western-university' },
];
