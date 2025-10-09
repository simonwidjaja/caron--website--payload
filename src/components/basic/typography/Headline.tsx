import React from 'react'

export type HeadlineProps = {
  children?: React.ReactNode
  headline?: string
  size?: 'huge' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  className?: string
}

export default function Headline(props:HeadlineProps){
  const {
    headline,
    children,
    size = 'h2',
    className
  } = props

  const content = headline || children;

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

  const sizeClasses = getSizeClasses(size)
  const baseClassName = `Headline ${sizeClasses} ${className || ''}`

  // Return the appropriate JSX element directly
  switch (size) {
    case 'huge':
    case 'h1':
      return <h1 className={baseClassName}>{content}</h1>
    case 'h2':
      return <h2 className={baseClassName}>{content}</h2>
    case 'h3':
      return <h3 className={baseClassName}>{content}</h3>
    case 'h4':
      return <h4 className={baseClassName}>{content}</h4>
    case 'h5':
      return <h5 className={baseClassName}>{content}</h5>
    default:
      return <h2 className={baseClassName}>{content}</h2>
  }
}