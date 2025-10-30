import { Link } from '@/payload-types'

const defaultLocale = 'de'

export function getLocalizedUrl(link: Link, locale?: string) {
  // Determine href based on link type
  if (link.type === 'external') {
    return link.externalLink || '#'
  }
  if (
    link.type === 'internal' &&
    typeof link.internalLink === 'object' &&
    link.internalLink !== null
  ) {
    const slug = link.internalLink.slug || ''

    // If no locale or default locale, return without locale prefix
    if (!locale || locale === defaultLocale) {
      return `/${slug}`
    }

    // For non-default locales, include locale prefix
    return `/${locale}/${slug}`
  }
  return '#'
}

export function getLocalizedUrlFromHref(href: string, locale?: string) {
  // If no locale or default locale, return href without prefix
  if (!locale || locale === defaultLocale) {
    return href
  }

  // For non-default locales, add locale prefix
  return `/${locale}${href}`
}
