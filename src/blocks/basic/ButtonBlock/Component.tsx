import React from 'react'
import Link from 'next/link'
import { getLocalizedUrl } from '@/utilities/getLocalizedUrl'
import { Button } from '@/components/basic/buttons/Button'
import AdvancedHelper from '@/fields/cms/advancedGroupField/AdvancedHelper'
import { ButtonBlockConfig } from '@/payload-types'

// Extend the generated type to include currentLanguage
interface ExtendedButtonBlockConfig extends ButtonBlockConfig {
  currentLanguage?: string
}

// export const ButtonBlock: React.FC<ButtonBlockProps> = ({ 
export const ButtonBlock: React.FC<ExtendedButtonBlockConfig> = ({ 
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
        id={AdvancedHelper.advancedId(advanced)}
        className={AdvancedHelper.advancedClassName(advanced)}
      >
        <Link href={href} {...linkProps}>
          {label}
        </Link>
      </Button>

      {AdvancedHelper.advancedStyles(advanced)}
    </>
  )
}
