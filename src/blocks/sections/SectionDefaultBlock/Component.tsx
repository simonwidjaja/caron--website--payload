import { RenderBlocks } from '@/blocks/RenderBlocks'
import SectionDefault from '@/components/sections/SectionDefault'
import React from 'react'

type SectionDefaultBlockProps = {
  content?: any[]
}

export const SectionDefaultBlock: React.FC<SectionDefaultBlockProps> = ({ 
  content, 
}) => {
  return (
    <SectionDefault>
      {
        content && content.length > 0 && (
          content[0].blockType 
            /* Content is array of plain config objects */
            ? <RenderBlocks blocks={content} />
            /* Content is array of react components (code usage) */
            : content.map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                </React.Fragment>
              ))
        )
      }
    </SectionDefault>
  )
}
