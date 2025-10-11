import React from 'react'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

type CTABlockProps = {
  links?: Array<{ link: Record<string, unknown> }>
  richText?: Record<string, unknown>
}

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <div className="container">
      <div className="bg-card rounded border-border border p-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
        <div className="max-w-[48rem] flex items-center">
          {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
        </div>
        <div className="flex flex-col gap-8">
          {(links || []).map((linkItem: { link: Record<string, unknown> }, i: number) => {
            return <CMSLink key={i} size="lg" {...linkItem.link} />
          })}
        </div>
      </div>
    </div>
  )
}
