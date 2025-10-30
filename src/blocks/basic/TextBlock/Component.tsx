import Text, { TextProps } from '@/components/basic/typography/Text'
import AdvancedHelper from '@/fields/cms/advancedGroupField/AdvancedHelper'
import type { AdvancedGroupField } from '@/payload-types'
import React from 'react'

interface TextBlockProps extends TextProps {
  advanced?: AdvancedGroupField
}

export const TextBlock: React.FC<TextBlockProps> = ({ advanced, ...props }) => {
  return (
    <>
      <div 
        id={AdvancedHelper.advancedId(advanced)}
        className={AdvancedHelper.advancedClassName(advanced)}
      >
        <Text className="TextBlock" {...props} />
      </div>
      {AdvancedHelper.advancedStyles(advanced)}
    </>
  )
}
