import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { Link as LinkType } from '@/payload-types'
import { getLocalizedUrl } from '@/utilities/getLocalizedUrl'

type ButtonBlockProps = {
  currentLanguage?: string
  label: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  link: LinkType
}

export const ButtonBlock: React.FC<ButtonBlockProps> = ({ 
  currentLanguage,
  label,
  variant = 'default',
  size = 'default',
  link,
}) => {

  // Determine href based on link type and current language
  const href = getLocalizedUrl(link, currentLanguage)

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
