import RichTextCustom from '@/components/RichTextCustom'
import React from 'react'

type Props = {
  metaTitle?: string
  headline?: string
  body?: any
  headlineSize?: 'huge' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  className?: string
}

export const TextCompositionBlock: React.FC<Props> = (props) => {
  const {
    metaTitle,
    headline,
    body,
    headlineSize = 'h2',
    className
  } = props

  if (!headline) return null

  const getSizeClasses = (headlineSize: string) => {
    switch (headlineSize) {
      case 'huge':
        return 'text-6xl md:text-8xl font-bold'
      case 'h1':
        return 'text-4xl md:text-6xl font-bold'
      case 'h2':
        return 'text-3xl md:text-4xl font-semibold'
      case 'h3':
        return 'text-2xl md:text-3xl font-semibold'
      case 'h4':
        return 'text-xl md:text-2xl font-medium'
      case 'h5':
        return 'text-lg md:text-xl font-medium'
      default:
        return 'text-3xl md:text-4xl font-semibold'
    }
  }

  const getSemanticTag = (headlineSize: string) => {
    if (headlineSize === 'huge') return 'h1'
    return headlineSize as 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  }

  const HeadlineTag = getSemanticTag(headlineSize)
  const sizeClasses = getSizeClasses(headlineSize)

  const content = (
    <div className={`TextCompositionBlock ${className || ''}`}>
      {metaTitle && <div className="metaTitle text-sm text-gray-600 uppercase tracking-wide mb-2">{metaTitle}</div>}
      {headline && (
        <HeadlineTag className={`headline ${sizeClasses} mb-4`}>
          {headline}
        </HeadlineTag>
      )}
      {body && typeof(body) === 'string' ? body : <RichTextCustom data={body} />}
    </div>
  )

  return content
}
