'use client'
import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { LinkJSXConverter, JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'
import { SerializedLinkNode } from '@payloadcms/richtext-lexical'
import { usePathname } from 'next/navigation'

type RichTextBlockProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
}

// Updated internal link to include current language
const useInternalDocToHref = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)
  const currentLang = ['de', 'en', 'fr'].includes(pathSegments[0]) ? pathSegments[0] : 'de'

  return ({ linkNode }: { linkNode: SerializedLinkNode }) => {
    const { value, relationTo } = linkNode.fields.doc!
    if (typeof value !== 'object') {
      throw new Error('Expected value to be an object')
    }

    const slug = value.slug

    if (relationTo === 'posts') return `/${currentLang}/posts/${slug}`
    if (relationTo === 'pages') return `/${currentLang}/${slug}`

    return `/${currentLang}/${slug}`
  }
}

export const RichTextBlock: React.FC<RichTextBlockProps> = ({ content }) => {
  const internalDocToHref = useInternalDocToHref()

  if (!content) return null

  const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
    ...defaultConverters,
    ...LinkJSXConverter({ internalDocToHref }),
  })

  return (
    <div className="prose dark:prose-invert max-w-none">
      <RichText data={content} converters={jsxConverters} />
    </div>
  )
}
