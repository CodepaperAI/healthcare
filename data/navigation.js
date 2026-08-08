import { services } from './services';

/**
 * One navigation source powers the desktop navbar, the services mega-menu,
 * the mobile drawer and the footer. Add a page here and it appears everywhere.
 */

export const primaryNav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    // Children are generated from the service data so the menu can never
    // drift out of sync with the pages that actually exist.
    children: services.map((service) => ({
      label: service.name,
      href: `/services/${service.slug}`,
      description: service.menuNote,
      icon: service.icon,
      accent: service.accent,
    })),
  },
  { label: 'Products', href: '/products' },
  { label: 'Direct Billing', href: '/direct-billing' },
  { label: 'Special Programs', href: '/special-programs' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = [
  {
    title: 'Services',
    links: services.map((service) => ({
      label: service.name,
      href: `/services/${service.slug}`,
    })),
  },
  {
    title: 'Clinic',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Products', href: '/products' },
      { label: 'Direct Billing', href: '/direct-billing' },
      { label: 'Special Programs', href: '/special-programs' },
      { label: 'Careers', href: '/careers' },
      { label: 'Cancellation Policy', href: '/cancellation-policy' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Book online', href: 'booking', external: true },
      { label: 'Contact', href: '/contact' },
      { label: 'Facebook', href: 'facebook', external: true },
      { label: 'Instagram', href: 'instagram', external: true },
      { label: 'LinkedIn', href: 'linkedin', external: true },
      { label: 'Google reviews', href: 'googleReviews', external: true },
    ],
  },
];
