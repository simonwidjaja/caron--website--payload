import React from 'react'

export type TextProps = {
  children?: React.ReactNode
  text?: string
  size?: 'lg' | 'md' | 'sm' | 'xs'
  className?: string
}

export default function Text(props:TextProps){
  const {
    children,
    text,
    size = 'md',
    className
  } = props

  const content = text || children;

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'lg':
        return 'text-lg'
      case 'md':
        return 'text-md'
      case 'sm':
        return 'text-sm'
    }
  }

  const sizeClasses = getSizeClasses(size)

  return (
    <p className={`Text ${sizeClasses} ${className || ''}`}>
      {content}
    </p>
  )
}
