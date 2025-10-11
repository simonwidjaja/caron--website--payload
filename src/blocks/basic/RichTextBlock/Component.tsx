import React from 'react'
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
}

// Function to convert internal doc links to href
const internalDocToHref = ({ linkNode }: { linkNode: LinkNode }) => {
  const doc = linkNode.fields.doc
  
  if (!doc || !doc.value || typeof doc.value !== 'object') {
    return '#'
  }
  
  const slug = doc.value.slug || doc.value.id
  const relationTo = doc.relationTo
  
  // Handle different collection types
  if (relationTo === 'posts') {
    return `/posts/${slug}`
  }
  
  if (relationTo === 'pages') {
    return `/${slug}`
  }
  
  // Default fallback
  return `/${slug}`
}

// JSX converters with link support
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jsxConverters = ({ defaultConverters }: any) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
})

export const RichTextBlock: React.FC<RichTextBlockProps> = ({ content }) => {
  if (!content) {
    return null
  }

  return (
    <div className="prose dark:prose-invert max-w-none">
      <RichText 
        data={content} 
        converters={jsxConverters}
      />
    </div>
  )
}
