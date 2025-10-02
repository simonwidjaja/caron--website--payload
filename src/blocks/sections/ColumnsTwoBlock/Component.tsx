import { RenderBlocks } from '@/blocks/RenderBlocks'
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
    <div className={
      'columns-two-block'
    }>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="col-1 border-r custom-grid-color ">
          {col1 && col1.length > 0 && (
            <RenderBlocks blocks={col1} />
          )}
        </div>
        <div className="col-2 border-l custom-grid-color">
          {col2 && col2.length > 0 && (
            <RenderBlocks blocks={col2} />
          )}
        </div>
      </div>
    </div>
  )
}
