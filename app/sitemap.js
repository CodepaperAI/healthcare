import { services } from '@/data/services';
import { absoluteUrl } from '@/lib/utils';

/**
 * Sitemap. Static routes are listed once; service pages are generated from the
 * data file, so a new service is indexed automatically.
 */
export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/products', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/direct-billing', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/special-programs', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/careers', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/cancellation-policy', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    })),
  ];
}
