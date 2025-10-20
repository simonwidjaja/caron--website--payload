import Headline, { HeadlineProps } from '@/components/basic/typography/Headline'
import AdvancedHelper from '@/fields/cms/advancedGroupField/AdvancedHelper'
import { HeadlineBlockConfig } from '@/payload-types'
import React from 'react'

// Extend the generated type to include currentLanguage
interface ExtendedHeadlineBlockConfig extends HeadlineBlockConfig {
  currentLanguage?: string
}

export const HeadlineBlock: React.FC<ExtendedHeadlineBlockConfig> = (props) => {
  return <>
    <Headline 
      {...props as HeadlineProps} 
      id={AdvancedHelper.advancedId(props.advanced)} 
      className={AdvancedHelper.advancedClassName(props.advanced)} 
    />
    {AdvancedHelper.advancedStyles(props.advanced)}
  </>
}
