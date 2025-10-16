import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import { RenderSectionBlocks } from '@/blocks/RenderSectionBlocks'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
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

  interface PageDoc {
    id: string;
    slug?: string | null | undefined;
  }

  interface StaticParam {
    lang: string;
    slug: string;
  }

  // Generate params for all languages
  const locales = ['de', 'en'] // Only using configured locales for now
  const params: StaticParam[] = []

  for (const locale of locales) {
    // Add home page for each locale
    params.push({ lang: locale, slug: 'home' })
    
    // Add all other pages for each locale
    pages.docs
      ?.filter((doc: PageDoc) => doc.slug && doc.slug !== 'home')
      .forEach(({ slug }: PageDoc) => {
        if (slug) {
          params.push({ lang: locale, slug })
        }
      })
  }

  return params
}

type Args = {
  params: Promise<{
    slug?: string
    lang?: "de" | "en" | "all" | undefined
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { lang = 'de' } = await paramsPromise
  const { slug = 'home' } = await paramsPromise
  const url = '/' + slug

  const page = await queryPageBySlug({
    lang,
    slug,
  })

  // // Remove this code once your website is seeded
  // if (!page && slug === 'home') {
  //   page = homeStatic
  // }

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { layout } = page

  return (
    <article className="">
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <RenderSectionBlocks blocks={layout} currentLanguage={lang} />

    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { lang = 'de' } = await paramsPromise
  const { slug = 'home' } = await paramsPromise
  const page = await queryPageBySlug({
    lang,
    slug,
  })

  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(async ({ lang, slug }: { lang: "de" | "en" | "all" | undefined, slug: string }) => {
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
})
