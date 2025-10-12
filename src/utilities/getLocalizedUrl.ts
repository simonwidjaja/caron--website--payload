import { Link } from "@/payload-types";

export function getLocalizedUrl(link: Link, locale?: string) {
  // Determine href based on link type
  if (link.type === 'external') {
    return link.externalLink || '#'
  }
  if (link.type === 'internal' && typeof link.internalLink === 'object' && link.internalLink !== null) {
    return `/${locale ? locale + '/' : ''}${link.internalLink.slug}` || '#'
  }
  return '#'
}

export function getLocalizedUrlFromHref(href: string, locale?: string) {
  if (!locale) {
    return href;
  }
  return `/${locale}${href}`;
}