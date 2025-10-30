import { RenderBlocks } from '@/blocks/RenderBlocks'
import SectionDefault from '@/components/sections/SectionDefault'
import { cn } from '@/utilities/ui'
import React from 'react'

type ColumnsTwoBlockProps = {
  currentLanguage?: string
  col1?: Array<{ blockType: string; [key: string]: unknown } | React.ReactElement> | React.ReactElement
  col2?: Array<{ blockType: string; [key: string]: unknown } | React.ReactElement> | React.ReactElement
  col1Padding?: boolean
  col1CssClasses?: string
  col1VerticalAlign?: 'top' | 'center' | 'bottom'
  col1HorizontalAlign?: 'left' | 'center' | 'right'
  col1ColumnBaseWidth?: string
  col1MinWidth?: string
  col1MaxWidth?: string
  col2Padding?: boolean
  col2CssClasses?: string
  col2VerticalAlign?: 'top' | 'center' | 'bottom'
  col2HorizontalAlign?: 'left' | 'center' | 'right'
  col2ColumnBaseWidth?: string
  col2MinWidth?: string
  col2MaxWidth?: string
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
  currentLanguage,
  col1, 
  col2,
  col1Padding = true,
  col1CssClasses,
  col1VerticalAlign = 'top',
  col1HorizontalAlign = 'left',
  col1ColumnBaseWidth,
  col1MinWidth, col1MaxWidth,
  col2Padding = true,
  col2CssClasses,
  col2VerticalAlign = 'top',
  col2HorizontalAlign = 'left',
  col2ColumnBaseWidth,
  col2MinWidth, col2MaxWidth,
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
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-10"> */}
        <div className="flex lg:gap-10 flex-col lg:flex-row">
          <div 
            className={cn(
              "ColumnsTwoBlock-col-1 flex flex-col border-r border-[hsl(var(--grid-color))]",
              col1Padding && "p-6",
              getAlignmentClasses(col1VerticalAlign, col1HorizontalAlign),
              col1CssClasses
            )}
            style={{ 
              flexBasis: col1ColumnBaseWidth || undefined,
              minWidth: col1MinWidth || undefined,
              maxWidth: col1MaxWidth || undefined,
            }}
          >
            {col1 && (
              Array.isArray(col1) ? (
                (col1[0] && typeof col1[0] === 'object' && 'blockType' in col1[0])
                /* Content is array of plain config objects */
                ? <RenderBlocks blocks={col1 as Array<{ blockType: string; [key: string]: unknown }>} currentLanguage={currentLanguage} />
                /* Content is array of react components (code usage) */
                : col1.map((item, index) => (
                    <React.Fragment key={index}>
                      {item as React.ReactElement}
                    </React.Fragment>
                  ))
              ) : (
                /* Content is a React fragment or single element */
                col1
              )
            )}
          </div>
          <div 
            className={cn(
              "ColumnsTwoBlock-col-2 flex flex-col border-l border-[hsl(var(--grid-color))]",
              col2Padding && "p-6",
              getAlignmentClasses(col2VerticalAlign, col2HorizontalAlign),
              col2CssClasses
            )}
            style={{ 
              flexBasis: col2ColumnBaseWidth || undefined,
              minWidth: col2MinWidth || undefined,
              maxWidth: col2MaxWidth || undefined,
            }}
          >
            {col2 && (
              Array.isArray(col2) ? (
                (col2[0] && typeof col2[0] === 'object' && 'blockType' in col2[0])
                /* Content is array of plain config objects */
                ? <RenderBlocks blocks={col2 as Array<{ blockType: string; [key: string]: unknown }>} currentLanguage={currentLanguage}  />
                /* Content is array of react components (code usage) */
                : col2.map((item, index) => (
                    <React.Fragment key={index}>
                      {item as React.ReactElement}
                    </React.Fragment>
                  ))
              ) : (
                /* Content is a React fragment or single element */
                col2
              )
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
