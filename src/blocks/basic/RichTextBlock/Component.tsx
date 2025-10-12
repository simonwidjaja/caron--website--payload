import React, { useCallback, useMemo } from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { LinkJSXConverter } from '@payloadcms/richtext-lexical/react'

type LinkNode = {
  fields: {
    doc?: {
      relationTo: string
      value: string | { id: string; slug?: string; [key: string]: unknown }
    } | null
  }
}

type RichTextBlockProps = {
  currentLanguage?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
}

export const RichTextBlock: React.FC<RichTextBlockProps> = ({ content, currentLanguage }) => {

  const internalDocToHref = useCallback(
    ({ linkNode }: { linkNode: LinkNode }) => {
      const doc = linkNode.fields.doc

      if (!doc || !doc.value || typeof doc.value !== 'object') {
        return '#'
      }

      const slug = doc.value.slug || doc.value.id
      const relationTo = doc.relationTo
      // const prefix = currentLanguage && currentLanguage !== 'en' ? `/${currentLanguage}` : ''

      // Handle different collection types
      if (relationTo === 'posts') {
        return `/posts/${slug}`
      }

      console.log('currentLanguage', currentLanguage);

      if (relationTo === 'pages') {
        return `/${slug}`
      }

      // Default fallback
      return `/${slug}`
    },
    [currentLanguage],
  )

  // JSX converters with link support
  const jsxConverters = useMemo(
    () =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ({ defaultConverters }: any) => ({
        ...defaultConverters,
        ...LinkJSXConverter({ internalDocToHref }),
      }),
    [internalDocToHref],
  )

  if (!content) {
    return null
  }

  return (
    <div className="prose dark:prose-invert max-w-none">
      <RichText data={content} converters={jsxConverters} />
    </div>
  )
}
