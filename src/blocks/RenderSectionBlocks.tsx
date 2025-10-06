import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ColumnsTwoBlock } from '@/blocks/sections/ColumnsTwoBlock/Component'
import { SectionDefaultBlock } from '@/blocks/sections/SectionDefaultBlock/Component'
import { FullWidthBlock } from '@/blocks/sections/FullWidthBlock/Component'

const blockComponents = {
  ColumnsTwoBlock: ColumnsTwoBlock,
  SectionDefaultBlock: SectionDefaultBlock,
  FullWidthBlock: FullWidthBlock,
}

export const RenderSectionBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
