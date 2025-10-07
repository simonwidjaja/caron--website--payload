import { RenderBlocks } from '@/blocks/RenderBlocks'
import SectionDefault from '@/components/sections/SectionDefault'
// import { applyClassesAndStyles } from '@/utilities/classesAndStyles'
import React from 'react'

type SectionDefaultBlockProps = {
  content?: any[]
  classesAndStyles?: {
    cssId?: string
    cssClasses?: string
    styles?: string
  }
  // _className?: string // Legacy support
}

export const SectionDefaultBlock: React.FC<SectionDefaultBlockProps> = ({ 
  content,
  classesAndStyles,
  // _className, 
}) => {
  // Apply new classesAndStyles system
  // const styleProps = applyClassesAndStyles(classesAndStyles, _className)
  const styleProps = classesAndStyles?.cssClasses;
  const idProp = classesAndStyles?.cssId ? { id: classesAndStyles.cssId } : {}
  return (
    // <SectionDefault {...idProp} className={classesAndStyles?.cssClasses} {...styleProps}>
    <SectionDefault {...idProp} className={classesAndStyles?.cssClasses}>
      {idProp?.id}
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

      <hr/>
      {classesAndStyles?.styles && typeof classesAndStyles.styles === 'string' && (
        <style>{`#${classesAndStyles.cssId} { ${classesAndStyles.styles} }`}</style>
      )}
    </SectionDefault>
  )
}
