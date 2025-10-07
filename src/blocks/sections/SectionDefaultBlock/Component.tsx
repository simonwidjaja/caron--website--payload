import { RenderBlocks } from '@/blocks/RenderBlocks'
import SectionDefault from '@/components/sections/SectionDefault'
import { applyClassesAndStyles } from '@/utilities/classesAndStyles'
import React from 'react'

type SectionDefaultBlockProps = {
  content?: any[]
  classesAndStyles?: {
    cssId?: string
    cssClasses?: string
    styles?: string
  }
}

export const SectionDefaultBlock: React.FC<SectionDefaultBlockProps> = ({ 
  content,
  classesAndStyles,
}) => {
  // Apply classesAndStyles using the utility function
  const { id, className } = applyClassesAndStyles(classesAndStyles)
  return (
    <SectionDefault id={id} className={className}>
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
      {/* Render scoped CSS if provided */}
      {classesAndStyles?.styles && classesAndStyles?.cssId && (
        <style>{`#${classesAndStyles.cssId} { ${classesAndStyles.styles} }`}</style>
      )}
    </SectionDefault>

  )
}
