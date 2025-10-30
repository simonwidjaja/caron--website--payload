import React from 'react'

export type HeadlineProps = {
  id?: string
  children?: React.ReactNode
  headline?: string
  size?: 'huge' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  className?: string
}

export default function Headline(props:HeadlineProps){
  const {
    id,
    headline,
    children,
    size = 'h2',
    className
  } = props

  const content = headline || children;

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

  const sizeClasses = getSizeClasses(size)
  const baseClassName = `Headline ${sizeClasses} ${size === 'huge' ? 'huge ' : ''}${className || ''}`.trim()

  // Map size to HTML tag
  const tagMap: Record<string, 'h1' | 'h2' | 'h3' | 'h4' | 'h5'> = {
    'huge': 'h1',
    'h1': 'h1',
    'h2': 'h2',
    'h3': 'h3',
    'h4': 'h4',
    'h5': 'h5',
  }

  const Tag = tagMap[size] || 'h2'

  return <Tag 
    id={id}
    className={baseClassName}
  >{content}</Tag>
}