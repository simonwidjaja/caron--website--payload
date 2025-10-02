import { RenderBlocks } from '@/blocks/RenderBlocks'
import SectionDefault from '@/components/sections/SectionDefault'
import React from 'react'

type ColumnsTwoBlockProps = {
  col1?: any[]
  col2?: any[]
}

export const ColumnsTwoBlock: React.FC<ColumnsTwoBlockProps> = ({ 
  col1, 
  col2, 
}) => {
  return (
    <SectionDefault>
      <div className={
        'columns-two-block'
      }>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="col-1 border-r border-[hsl(var(--grid-color))]">
            {col1 && col1.length > 0 && (
              <RenderBlocks blocks={col1} />
            )}
          </div>
          <div className="col-2 border-l border-[hsl(var(--grid-color))]">
            {col2 && col2.length > 0 && (
              <RenderBlocks blocks={col2} />
            )}
          </div>
        </div>
      </div>
    </SectionDefault>
  )
}
