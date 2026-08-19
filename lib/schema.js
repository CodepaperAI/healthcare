import { site, serviceAreas } from '@/data/site';
import { absoluteUrl } from '@/lib/utils';

/**
 * JSON-LD builders. Every value comes from data/ — nothing about the business
 * is invented here. Render the output with the <Schema /> component.
 */

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

function postalAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: `${site.address.unit}, ${site.address.street}`,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  };
}

function openingHoursSpecification() {
  return site.hours
    .filter((entry) => entry.open && entry.close)
    .map((entry) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${entry.day}`,
      opens: entry.open,
      closes: entry.close,
    }));
}

/** MedicalBusiness is the most accurate primary type for this clinic. */
export function medicalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'Physiotherapy', 'LocalBusiness'],
    '@id': ORG_ID,
    name: site.name,
    description: site.shortDescription,
    url: absoluteUrl('/'),
    telephone: site.phone,
    email: site.email,
    address: postalAddress(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.links.map,
    openingHoursSpecification: openingHoursSpecification(),
    areaServed: serviceAreas.map((area) => ({
      '@type': 'Place',
      name: `${area.name}, ${site.address.city}, ${site.address.regionName}`,
    })),
    sameAs: [
      site.links.facebook,
      site.links.instagram,
      site.links.linkedin,
      site.links.googleReviews,
    ].filter(Boolean),
    image: absoluteUrl('/images/clinic-exterior.jpg'),
    priceRange: '$$',
    currenciesAccepted: 'CAD',
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: site.links.booking,
        inLanguage: 'en-CA',
        actionPlatform: [
          'https://schema.org/DesktopWebPlatform',
          'https://schema.org/MobileWebPlatform',
        ],
      },
      result: { '@type': 'Reservation', name: 'Clinic appointment' },
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: absoluteUrl('/'),
    name: site.name,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-CA',
  };
}

export function webPageSchema({ title, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en-CA',
  };
}

/** Individual clinical service, optionally scoped to a neighbourhood. */
export function serviceSchema(service, { location } = {}) {
  const path = location
    ? `/services/${service.slug}/${location.slug}`
    : `/services/${service.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    '@id': `${absoluteUrl(path)}#service`,
    name: location ? `${service.name} in ${location.name}` : service.name,
    description: service.intro,
    url: absoluteUrl(path),
    provider: { '@id': ORG_ID },
    areaServed: {
      '@type': 'Place',
      name: location
        ? `${location.name}, ${site.address.city}, ${site.address.regionName}`
        : `${site.address.city}, ${site.address.regionName}`,
    },
  };
}

export function breadcrumbSchema(trail = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: absoluteUrl(crumb.href),
    })),
  };
}

export function faqSchema(faqs = []) {
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

export function personSchema(member) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    worksFor: { '@id': ORG_ID },
  };
}

export function articleSchema(blog) {
  const url = absoluteUrl(`/blog/${blog.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.excerpt || blog.title,
    url,
    image: blog.featuredImage ? [blog.featuredImage] : undefined,
    datePublished: blog.publishDate,
    dateModified: blog.updatedAt || blog.publishDate,
    author: blog.authorName
      ? { '@type': 'Person', name: blog.authorName, url: blog.authorUrl || undefined }
      : { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    articleSection: blog.categories?.[0],
    keywords: blog.tags?.join(', '),
  };
}

/** Convenience: an item list of all services for the services index page. */
export function serviceListSchema(services = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.name,
      url: absoluteUrl(`/services/${service.slug}`),
    })),
  };
}
