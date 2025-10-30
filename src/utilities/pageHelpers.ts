import { cache } from 'react'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

/**
 * Shared types for page documents
 */
export interface PageDoc {
  id: string
  slug?: string | null | undefined
}

/**
 * Query a page by slug and locale
 * Uses React cache for request deduplication
 */
export const queryPageBySlug = cache(
  async ({ lang, slug }: { lang: 'de' | 'en' | 'all' | undefined; slug: string }) => {
    const { isEnabled: draft } = await draftMode()

    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'pages',
      draft,
      limit: 1,
      pagination: false,
      overrideAccess: draft,
      locale: lang,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return result.docs?.[0] || null
  },
)

/**
 * Fetch all pages for static generation
 */
export async function fetchAllPages() {
  const payload = await getPayload({ config: configPromise })

  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  return pages.docs as PageDoc[]
}

/**
 * Generate static params for locale-prefixed routes ([lang]/[slug])
 */
export async function generateLocalizedStaticParams() {
  const pages = await fetchAllPages()

  interface StaticParam {
    lang: string
    slug: string
  }

  const locales = ['de', 'en']
  const params: StaticParam[] = []

  for (const locale of locales) {
    // Add home page for each locale
    params.push({ lang: locale, slug: 'home' })

    // Add all other pages for each locale
    pages
      ?.filter((doc) => doc.slug && doc.slug !== 'home')
      .forEach(({ slug }) => {
        if (slug) {
          params.push({ lang: locale, slug })
        }
      })
  }

  return params
}

/**
 * Generate static params for non-locale routes (German default)
 */
export async function generateDefaultLocaleStaticParams() {
  const pages = await fetchAllPages()

  const params: { slug: string[] }[] = [
    { slug: [] }, // Root path
  ]

  pages?.forEach((doc) => {
    if (doc.slug && doc.slug !== 'home') {
      params.push({ slug: [doc.slug] })
    } else if (doc.slug === 'home') {
      params.push({ slug: ['home'] })
    }
  })

  return params
}
