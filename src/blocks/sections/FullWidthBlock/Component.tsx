import { RenderBlocks } from '@/blocks/RenderBlocks'
import { cn } from '@/utilities/ui'
import React from 'react'

type FullWidthBlockProps = {
  currentLanguage?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any[]
  padding?: boolean
  id?: string
  className?: string
  classesAndStyles?: {
    cssId?: string
    cssClasses?: string
    styles?: string
  }
}

export const FullWidthBlock: React.FC<FullWidthBlockProps> = ({ 
  currentLanguage,
  content,
  padding = true,
  id,
  className,
  classesAndStyles,
}) => {
  // Generate a fallback ID that doesn't start with a number
  const generateId = () => {
    const randomId = Math.random().toString(36).substring(2, 15)
    return /^\d/.test(randomId) ? `_${randomId}` : randomId
  }
  
  const fallbackId = id || generateId()
  
  return (
    // Full width section with invisible grid structure
    <section 
      id={classesAndStyles?.cssId || fallbackId}
      className={cn(
        "FullWidthBlock border-y border-[hsl(var(--grid-color))] flex flex-1 justify-stretch overflow-clip",
        className,
        classesAndStyles?.cssClasses
      )}
    >
      
        {/* Content - full width without container constraint */}
        <div className={cn(
          "container flex-auto min-h-[40px]",
          padding && "py-6"
        )}>
          {content && content.length > 0 && (
            <RenderBlocks blocks={content} currentLanguage={currentLanguage} />
          )}
        </div>

      {/* Render scoped CSS if provided */}
      {classesAndStyles?.styles && (
        <style>{`#${classesAndStyles.cssId || fallbackId} { ${classesAndStyles.styles} }`}</style>
      )}
    </section>
  )
}
