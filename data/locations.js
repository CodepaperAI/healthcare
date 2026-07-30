import { serviceAreas, site } from './site';

/**
 * LOCATION SEED DATA FOR PROGRAMMATIC SEO
 *
 * These are the neighbourhoods the clinic already serves. They are shown on the
 * homepage and are the seed for future /services/[service]/[location] pages.
 *
 * To turn these into real pages later, create:
 *   app/services/[service]/[location]/page.js
 * with generateStaticParams() returning the cross product of serviceSlugs and
 * locationSlugs, and metadata from buildServiceMetadata(service, { location }).
 *
 * Do not generate location pages until each has genuinely distinct content —
 * near-duplicate pages across a city are treated as thin content by search
 * engines and can suppress the pages that already rank.
 */

export const locations = serviceAreas.map((area) => ({
  ...area,
  city: site.address.city,
  region: site.address.regionName,
  /** Add a sentence or two of genuinely local context before publishing. */
  intro: null,
}));

export const locationSlugs = locations.map((location) => location.slug);

export const getLocation = (slug) => locations.find((location) => location.slug === slug);
