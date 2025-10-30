import type { Metadata } from 'next'
import { generateMeta } from '@/utilities/generateMeta'
import { SharedPage } from '@/components/SharedPage'
import { generateDefaultLocaleStaticParams, queryPageBySlug } from '@/utilities/pageHelpers'

export async function generateStaticParams() {
  return generateDefaultLocaleStaticParams()
}

type Args = {
  params: Promise<{
    slug?: string[]
  }>
}

// This page handles routes without locale prefix (German pages)
// e.g., /, /home, /page1, /page2
export default async function Page({ params: paramsPromise }: Args) {
  const { slug: slugArray = [] } = await paramsPromise

  const lang = 'de' // Default language for non-prefixed URLs
  const slug = slugArray.length === 0 ? 'home' : slugArray[0]
  const url = slugArray.length === 0 ? '/' : '/' + slugArray.join('/')

  return <SharedPage lang={lang} slug={slug} url={url} includeLayout={true} />
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug: slugArray = [] } = await paramsPromise
  const lang = 'de'
  const slug = slugArray.length === 0 ? 'home' : slugArray[0]

  const page = await queryPageBySlug({
    lang,
    slug,
  })

  return generateMeta({ doc: page })
}
