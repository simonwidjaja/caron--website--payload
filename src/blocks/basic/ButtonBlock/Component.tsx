import React from 'react'
import Link from 'next/link'
import type { ButtonBlock as ButtonBlockProps } from '@/payload-types'
import { getLocalizedUrl } from '@/utilities/getLocalizedUrl'
import { Button } from '@/components/basic/buttons/Button'
import AdvancedHelper from '@/fields/cms/advancedGroupField/AdvancedHelper'

// Extend the generated type to include currentLanguage
interface ExtendedButtonBlockProps extends ButtonBlockProps {
  currentLanguage?: string
}

// export const ButtonBlock: React.FC<ButtonBlockProps> = ({ 
export const ButtonBlock: React.FC<ExtendedButtonBlockProps> = ({ 
  currentLanguage,
  label,
  variant = 'default',
  size = 'default',
  link,
  advanced,
}) => {

  // Determine href based on link type and current language
  const href = getLocalizedUrl(link, currentLanguage)

  // Handle external links with newTab
  const linkProps = link.newTab ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {}

  return (
    <>
      <Button 
        variant={variant} 
        size={size}
        {...AdvancedHelper.advancedAttributes(advanced)}
      >
        <Link href={href} {...linkProps}>
          {label}
        </Link>
      </Button>

      {AdvancedHelper.advancedStyles(advanced)}
    </>
  )
}
