import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { Page } from '@/payload-types'

type ButtonBlockProps = {
  label: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  link: {
    type: 'internal' | 'external'
    internalLink?: Page | string | number
    externalLink?: string
    newTab?: boolean
  }
}

export const ButtonBlock: React.FC<ButtonBlockProps> = ({ 
  label,
  variant = 'default',
  size = 'default',
  link,
}) => {
  // Determine href based on link type
  const href = (() => {
    if (link.type === 'external') {
      return link.externalLink || '#'
    }
    if (link.type === 'internal' && typeof link.internalLink === 'object') {
      return `/${link.internalLink.slug}` || '#'
    }
    return '#'
  })()

  // Handle external links with newTab
  const linkProps = link.newTab ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {}

  return (
    <Button 
      variant={variant} 
      size={size}
      asChild
    >
      <Link href={href} {...linkProps}>
        {label}
      </Link>
    </Button>
  )
}
