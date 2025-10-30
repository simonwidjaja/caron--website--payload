import type { Metadata } from 'next'
import { generateMeta } from '@/utilities/generateMeta'
import { SharedPage } from '@/components/SharedPage'
import { generateLocalizedStaticParams, queryPageBySlug } from '@/utilities/pageHelpers'

export async function generateStaticParams() {
  return generateLocalizedStaticParams()
}

type Args = {
  params: Promise<{
    slug?: string
    lang?: "de" | "en" | "all" | undefined
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { lang = 'de' } = await paramsPromise
  const { slug = 'home' } = await paramsPromise
  const url = '/' + slug

  // Ensure lang is either 'de' or 'en', fallback to 'de' if 'all'
  const locale = (lang === 'de' || lang === 'en') ? lang : 'de'

  return <SharedPage lang={locale} slug={slug} url={url} includeLayout={false} />
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
