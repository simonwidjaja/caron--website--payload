import React from 'react'

export type HeadlineProps = {
  headline?: string
  size?: 'huge' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  className?: string
}

export default function Headline(props:HeadlineProps){
  const {
    headline,
    size = 'h2',
    className
  } = props

  if (!headline) return null

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'huge':
        return 'text-6xl font-bold'
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

  const sizeClasses = getSizeClasses(size)
  const baseClassName = `Headline ${sizeClasses} ${className || ''}`

  // Return the appropriate JSX element directly
  switch (size) {
    case 'huge':
    case 'h1':
      return <h1 className={baseClassName}>{headline}</h1>
    case 'h2':
      return <h2 className={baseClassName}>{headline}</h2>
    case 'h3':
      return <h3 className={baseClassName}>{headline}</h3>
    case 'h4':
      return <h4 className={baseClassName}>{headline}</h4>
    case 'h5':
      return <h5 className={baseClassName}>{headline}</h5>
    default:
      return <h2 className={baseClassName}>{headline}</h2>
  }
}