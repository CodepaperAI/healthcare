import { site } from '@/data/site';
import { absoluteUrl } from '@/lib/utils';

const TITLE_SUFFIX = `${site.name}`;
const DEFAULT_OG_IMAGE = '/images/og-default.jpg';

/**
 * The single entry point for page metadata.
 *
 * Every route — including future programmatic routes — calls this so titles,
 * canonicals, Open Graph and robots rules stay consistent.
 *
 * @param {object}   options
 * @param {string}   options.title       Page title without the brand suffix.
 * @param {string}   options.description Meta description (aim for 150–160 chars).
 * @param {string}   options.path        Route path, e.g. '/services/physiotherapy'.
 * @param {string[]} options.keywords    Optional keyword list.
 * @param {string}   options.image       OG image path or absolute URL.
 * @param {boolean}  options.noindex     Set true for thin or private pages.
 * @param {string}   options.type        Open Graph type. Default 'website'.
 */
export function buildMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  type = 'website',
} = {}) {
  const fullTitle = title ? `${title} | ${TITLE_SUFFIX}` : `${site.name} — ${site.tagline}`;
  const canonical = absoluteUrl(path);
  const ogImage = image.startsWith('http') ? image : absoluteUrl(image);

  return {
    title: fullTitle,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical },
    openGraph: {
      type,
      siteName: site.name,
      title: fullTitle,
      description,
      url: canonical,
      locale: site.locale,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${site.name} — ${title || site.tagline}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
  };
}

/**
 * Metadata for a service page, derived from data/services.js.
 * Used by /services/[service] and reusable by future
 * /services/[service]/[location] routes.
 */
export function buildServiceMetadata(service, { location } = {}) {
  const place = location ? `${location.name}, London Ontario` : 'London, Ontario';
  const title = location ? `${service.name} in ${place}` : service.seo.title;

  return buildMetadata({
    title,
    description: location
      ? `${service.name} for patients in ${location.name} and North London, Ontario at Planet Health Care, Sherwood Forest Mall. Direct billing, same-day appointments. Call ${site.phone}.`
      : service.seo.description,
    path: location ? `/services/${service.slug}/${location.slug}` : `/services/${service.slug}`,
    keywords: service.seo.keywords,
    image: service.image,
  });
}

/** Shared viewport export — kept here so layout.js stays declarative. */
export const defaultViewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};
