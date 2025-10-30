import Headline from '@/components/basic/typography/Headline'
import RichTextCustom from '@/components/RichTextCustom'
import AdvancedHelper from '@/fields/cms/advancedGroupField/AdvancedHelper'
import type { AdvancedGroupField } from '@/payload-types'
import React from 'react'

type Props = {
  metaTitle?: string
  headline?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any
  headlineSize?: 'huge' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  className?: string
  advanced?: AdvancedGroupField
}

export const TextCompositionBlock: React.FC<Props> = (props) => {
  const {
    metaTitle,
    headline,
    body,
    headlineSize = 'h2',
    className,
    advanced
  } = props

  const content = (
    <>
      <div 
        id={AdvancedHelper.advancedId(advanced)}
        className={`TextCompositionBlock ${className || ''} ${AdvancedHelper.advancedClassName(advanced)}`}
      >
        {metaTitle && <div className="metaTitle text-sm text-gray-600 uppercase tracking-wide mb-2">{metaTitle}</div>}
        {headline && <Headline className={`mb-4`} size={headlineSize} headline={headline} />}
        {body && typeof(body) === 'string' ? body : <RichTextCustom data={body} />}
      </div>
      {AdvancedHelper.advancedStyles(advanced)}
    </>
  )

  return content
}
