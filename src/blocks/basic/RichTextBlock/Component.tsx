import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { 
  LinkJSXConverter, 
  JSXConvertersFunction 
} from '@payloadcms/richtext-lexical/react'
import { SerializedLinkNode } from '@payloadcms/richtext-lexical'

type RichTextBlockProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
}

// Function to convert internal doc links to href
const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!
  
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  
  const slug = value.slug
  
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
const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
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
