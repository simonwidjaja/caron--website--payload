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
        return 'font-bold'
      case 'h1':
        return 'font-bold'
      case 'h2':
        return 'font-semibold'
      case 'h3':
        return 'font-semibold'
      case 'h4':
        return 'font-medium'
      case 'h5':
        return 'font-medium'
      default:
        return 'font-semibold'
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
