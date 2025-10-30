import React, { useCallback, useMemo } from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { LinkJSXConverter } from '@payloadcms/richtext-lexical/react'
import { getLocalizedUrlFromHref } from '@/utilities/getLocalizedUrl'
import AdvancedHelper from '@/fields/cms/advancedGroupField/AdvancedHelper'
import type { AdvancedGroupField } from '@/payload-types'

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
  advanced?: AdvancedGroupField
}

export const RichTextBlock: React.FC<RichTextBlockProps> = ({ content, currentLanguage, advanced }) => {

  const internalDocToHref = useCallback(
    ({ linkNode }: { linkNode: LinkNode }) => {
      const doc = linkNode.fields.doc

      if (!doc || !doc.value || typeof doc.value !== 'object') {
        return '#'
      }

      const slug = doc.value.slug || doc.value.id
      const relationTo = doc.relationTo
      let href;

      // Handle different collection types
      if (relationTo === 'posts') {
        href = `/posts/${slug}`
      }
      else if (relationTo === 'pages') {
        href = `/${slug}`
      }
      else {
        return '#'
      }
      return getLocalizedUrlFromHref(href, currentLanguage);

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
    <>
      <div 
        id={AdvancedHelper.advancedId(advanced)}
        className={`prose dark:prose-invert max-w-none ${AdvancedHelper.advancedClassName(advanced)}`}
      >
        <RichText data={content} converters={jsxConverters} />
      </div>
      {AdvancedHelper.advancedStyles(advanced)}
    </>
  )
}
