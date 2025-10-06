import { RenderBlocks } from '@/blocks/RenderBlocks'
import React from 'react'

type FullWidthBlockProps = {
  content?: any[]
}

export const FullWidthBlock: React.FC<FullWidthBlockProps> = ({ 
  content, 
}) => {
  return (
    // Full width section with invisible grid structure
    <section className="FullWidthBlock border-y border-[hsl(var(--grid-color))] flex flex-1 justify-stretch overflow-clip">
      
        {/* Content - full width without container constraint */}
        <div className="container flex-auto min-h-[40px]">
          {content && content.length > 0 && (
            <RenderBlocks blocks={content} />
          )}
        </div>

    </section>
  )
}
