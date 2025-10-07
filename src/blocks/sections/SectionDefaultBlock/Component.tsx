import { RenderBlocks } from '@/blocks/RenderBlocks'
import SectionDefault from '@/components/sections/SectionDefault'
import { cn } from '@/utilities/ui'
import React from 'react'

type SectionDefaultBlockProps = {
  content?: any[]
  padding?: boolean
  className?: string
  classesAndStyles?: {
    cssId?: string
    cssClasses?: string
    styles?: string
  }
}

export const SectionDefaultBlock: React.FC<SectionDefaultBlockProps> = ({ 
  content,
  padding = true,
  className,
  classesAndStyles,
}) => {
  // Apply classesAndStyles using the utility function
  return (
    <SectionDefault id={classesAndStyles?.cssId} className={cn(className, classesAndStyles?.cssClasses)} padding={padding}>
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
      {classesAndStyles?.styles && (
        <style>{`#${classesAndStyles.cssId} { ${classesAndStyles.styles} }`}</style>
      )}
    </SectionDefault>

  )
}
