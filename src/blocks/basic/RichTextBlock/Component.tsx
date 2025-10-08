import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'

type RichTextBlockProps = {
  content: any
}

export const RichTextBlock: React.FC<RichTextBlockProps> = ({ content }) => {
  if (!content) {
    return null
  }

  return (
    <div className="prose dark:prose-invert max-w-none">
      <RichText data={content} />
    </div>
  )
}
