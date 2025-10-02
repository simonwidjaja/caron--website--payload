import React from 'react'

type Props = {
  headline?: string
  size?: 'huge' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  className?: string
}

export const HeadlineBlock: React.FC<Props> = (props) => {
  const {
    headline,
    size = 'h2',
    className
  } = props

  if (!headline) return null

  const getSizeClasses = (size: string) => {
    switch (size) {
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

  const getSemanticTag = (size: string) => {
    if (size === 'huge') return 'h1'
    return size as 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  }

  const Tag = getSemanticTag(size)
  const sizeClasses = getSizeClasses(size)

  const content = (
    <Tag className={`headline-block ${sizeClasses} ${className || ''}`}>
      {headline}
    </Tag>
  )

  return content
}
