import { RenderBlocks } from '@/blocks/RenderBlocks'
import SectionDefault from '@/components/sections/SectionDefault'
import { cn } from '@/utilities/ui'
import React from 'react'

type ColumnsTwoBlockProps = {
  col1?: any[]
  col2?: any[]
  paddingCol1?: boolean
  paddingCol2?: boolean
  id?: string
  className?: string
  classesAndStyles?: {
    cssId?: string
    cssClasses?: string
    styles?: string
  }
}

export const ColumnsTwoBlock: React.FC<ColumnsTwoBlockProps> = ({ 
  col1, 
  col2,
  paddingCol1 = true,
  paddingCol2 = true,
  id = Math.random().toString(36).substring(2, 15), // Generate a random id if not provided
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
        'columns-two-block'
      }>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className={cn(
            "col-1 border-r border-[hsl(var(--grid-color))]",
            paddingCol1 && "p-6"
          )}>
            {col1 && col1.length > 0 && (
              <RenderBlocks blocks={col1} />
            )}
          </div>
          <div className={cn(
            "col-2 border-l border-[hsl(var(--grid-color))]",
            paddingCol2 && "p-6"
          )}>
            {col2 && col2.length > 0 && (
              <RenderBlocks blocks={col2} />
            )}
          </div>
        </div>
      </div>
      {/* Render scoped CSS if provided */}
      {classesAndStyles?.styles && (
        <style>{`#${classesAndStyles.cssId || id} { ${classesAndStyles.styles} }`}</style>
      )}
    </SectionDefault>
  )
}
