import { RenderBlocks } from '@/blocks/RenderBlocks'
import SectionDefault from '@/components/sections/SectionDefault'
import { cn } from '@/utilities/ui'
import React from 'react'

type ColumnsTwoBlockProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  col1?: any[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  col2?: any[]
  col1Padding?: boolean
  col1CssClasses?: string
  col1VerticalAlign?: 'top' | 'center' | 'bottom'
  col1HorizontalAlign?: 'left' | 'center' | 'right'
  col2Padding?: boolean
  col2CssClasses?: string
  col2VerticalAlign?: 'top' | 'center' | 'bottom'
  col2HorizontalAlign?: 'left' | 'center' | 'right'
  id?: string
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

export const ColumnsTwoBlock: React.FC<ColumnsTwoBlockProps> = ({ 
  col1, 
  col2,
  col1Padding = true,
  col1CssClasses,
  col1VerticalAlign = 'top',
  col1HorizontalAlign = 'left',
  col2Padding = true,
  col2CssClasses,
  col2VerticalAlign = 'top',
  col2HorizontalAlign = 'left',
  id,
  className,
  classesAndStyles,
}) => {
  return (
    <SectionDefault 
      id={classesAndStyles?.cssId || id} 
      className={cn(className, classesAndStyles?.cssClasses)} 
      padding={false}
    >
      <div className={
        'ColumnsTwoBlock'
      }>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div 
            className={cn(
              "ColumnsTwoBlock-col-1 flex flex-col border-r border-[hsl(var(--grid-color))]",
              col1Padding && "p-6",
              getAlignmentClasses(col1VerticalAlign, col1HorizontalAlign),
              col1CssClasses
            )}
          >
            {col1 && col1.length > 0 && (
              col1[0].blockType === 'textBlock'
              /* Content is array of plain config objects */
              ? <RenderBlocks blocks={col1} />
              /* Content is array of react components (code usage) */
              : col1.map((item, index) => (
                  <React.Fragment key={index}>
                    {item}
                  </React.Fragment>
                ))              
            )}
          </div>
          <div 
            className={cn(
              "ColumnsTwoBlock-col-2 flex flex-col border-l border-[hsl(var(--grid-color))]",
              col2Padding && "p-6",
              getAlignmentClasses(col2VerticalAlign, col2HorizontalAlign),
              col2CssClasses
            )}
          >
            {col2 && col2.length > 0 && (
              col2[0].blockType === 'textBlock'
              /* Content is array of plain config objects */
              ? <RenderBlocks blocks={col2} />
              /* Content is array of react components (code usage) */
              : col2.map((item, index) => (
                  <React.Fragment key={index}>
                    {item}
                  </React.Fragment>
                ))              
            )}
          </div>
        </div>
      </div>
      {/* Render scoped CSS if provided */}
      {classesAndStyles?.styles && (
        <style>{`#${classesAndStyles.cssId} { ${classesAndStyles.styles} }`}</style>
      )}
    </SectionDefault>
  )
}
