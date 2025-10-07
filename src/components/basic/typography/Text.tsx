import React from 'react'

export type TextProps = {
  text: string
  size?: 'lg' | 'md' | 'sm' | 'xs'
  className?: string
}

export default function Text(props:TextProps){
  const {
    text,
    size = 'md',
    className
  } = props

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

  const content = (
    <p className={`Text ${sizeClasses} ${className || ''}`}>
      {text}
    </p>
  )

  return content
}
