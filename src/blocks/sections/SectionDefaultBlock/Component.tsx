import { RenderBlocks } from '@/blocks/RenderBlocks'
import SectionDefault from '@/components/sections/SectionDefault'
import { cn } from '@/utilities/ui'
import React from 'react'

type SectionDefaultBlockProps = {
  currentLanguage?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any[]
  col1Padding?: boolean
  col1CssClasses?: string
  col1VerticalAlign?: 'top' | 'center' | 'bottom'
  col1HorizontalAlign?: 'left' | 'center' | 'right'
  className?: string
  classesAndStyles?: {
    cssId?: string
    cssClasses?: string
    styles?: string
  }
}

// Helper function to get alignment classes
const getAlignmentClasses = (
  vertical: 'top' | 'center' | 'bottom' = 'top',
  horizontal: 'left' | 'center' | 'right' = 'left'
) => {
  const verticalMap = {
    top: 'justify-start',
    center: 'justify-center',
    bottom: 'justify-end',
  }
  
  const horizontalMap = {
    left: 'items-start',
    center: 'items-center',
    right: 'items-end',
  }
  
  return `${verticalMap[vertical]} ${horizontalMap[horizontal]}`
}

export const SectionDefaultBlock: React.FC<SectionDefaultBlockProps> = ({ 
  currentLanguage,
  content,
  col1Padding = true,
  col1CssClasses,
  col1VerticalAlign = 'top',
  col1HorizontalAlign = 'left',
  className,
  classesAndStyles,
}) => {
  return (
    <SectionDefault 
      id={classesAndStyles?.cssId} 
      className={cn(className, classesAndStyles?.cssClasses)} 
      padding={false}
    >
      <div 
        className={cn(
          'flex flex-col',
          col1Padding && 'p-6',
          getAlignmentClasses(col1VerticalAlign, col1HorizontalAlign),
          col1CssClasses
        )}
      >
        {
          content && content.length > 0 && (
            content[0].blockType 
              /* Content is array of plain config objects */
              ? <RenderBlocks blocks={content} currentLanguage={currentLanguage} />
              /* Content is array of react components (code usage) */
              : content.map((item, index) => (
                  <React.Fragment key={index}>
                    {item}
                  </React.Fragment>
                ))
          )
        }
      </div>
      {/* Render scoped CSS if provided */}
      {classesAndStyles?.styles && (
        <style>{`#${classesAndStyles.cssId} { ${classesAndStyles.styles} }`}</style>
      )}
    </SectionDefault>
  )
}
