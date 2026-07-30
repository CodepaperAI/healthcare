import { site } from '@/data/site';

/**
 * Tiny conditional class joiner. Keeps component markup readable without
 * pulling in clsx/tailwind-merge as dependencies.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/** URL-safe slug from any human label. Used by programmatic SEO routes. */
export function slugify(value = '') {
  return String(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Absolute URL for canonicals, Open Graph and JSON-LD. */
export function absoluteUrl(path = '/') {
  const base = site.url.replace(/\/$/, '');
  if (!path || path === '/') return `${base}/`;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Footer link data stores external destinations as keys of site.links so the
 * URLs live in exactly one place. This resolves them at render time.
 */
export function resolveHref(href) {
  if (!href) return '#';
  return site.links[href] || href;
}

/** Splits an array into `count` roughly even columns for balanced layouts. */
export function chunk(items = [], size = 2) {
  const output = [];
  for (let i = 0; i < items.length; i += size) {
    output.push(items.slice(i, i + size));
  }
  return output;
}

/** Zero-pads a sequence index for eyebrow labels: 1 -> "01". */
export function pad(index) {
  return String(index).padStart(2, '0');
}
