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
      {content && content.length > 0 && (
        <RenderBlocks blocks={content} />
      )}
    </SectionDefault>
  )
}
