import React from 'react'
import { draftMode } from 'next/headers'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import { RenderSectionBlocks } from '@/blocks/RenderSectionBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Header } from '@/Header/Component'
import { Footer } from '@/Footer/Component'
import PageClient from '@/app/(frontend)/[lang]/[slug]/page.client'
import { queryPageBySlug } from '@/utilities/pageHelpers'

interface SharedPageProps {
  lang: 'de' | 'en'
  slug: string
  url: string
  includeLayout?: boolean
}

/**
 * Shared page component used by both locale-prefixed and non-prefixed routes
 */
export async function SharedPage({ lang, slug, url, includeLayout = false }: SharedPageProps) {
  const { isEnabled: draft } = await draftMode()

  const page = await queryPageBySlug({
    lang,
    slug,
  })

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { layout } = page

  const content = (
    <article className="">
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}
      <RenderSectionBlocks blocks={layout} currentLanguage={lang} />
    </article>
  )

  // Include Header/Footer for non-locale routes (they don't have layout wrapper)
  if (includeLayout) {
    return (
      <>
        <Header lang={lang} />
        {content}
        <Footer />
      </>
    )
  }

  return content
}
