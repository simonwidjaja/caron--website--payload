import React from 'react'
import AdvancedHelper from '@/fields/cms/advancedGroupField/AdvancedHelper'
import type { AdvancedGroupField } from '@/payload-types'

type SpacerBlockProps = {
  size: '1px' | '2px' | '3px' | '5px' | '10px' | '20px' | '30px' | '40px' | '50px' | '80px' | '100px'
  advanced?: AdvancedGroupField
}

export const SpacerBlock: React.FC<SpacerBlockProps> = ({ size = '20px', advanced }) => {
  return (
    <>
      <div 
        id={AdvancedHelper.advancedId(advanced)}
        style={{ height: size }} 
        aria-hidden="true"
        className={`w-full ${AdvancedHelper.advancedClassName(advanced)}`}
      />
      {AdvancedHelper.advancedStyles(advanced)}
    </>
  )
}
