import React, { Fragment } from 'react'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { HeadlineBlock } from './basic/HeadlineBlock/Component'
import { TextCompositionBlock } from './basic/TextCompositionBlock/Component'
import { TextBlock } from './basic/TextBlock/Component'
import { ImageBlock } from './basic/ImageBlock/Component'
import { SpacerBlock } from './basic/SpacerBlock/Component'
import { ButtonBlock } from './basic/ButtonBlock/Component'
import { RichTextBlock } from './basic/RichTextBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  // Basic
  headlineBlock: HeadlineBlock,
  textCompositionBlock: TextCompositionBlock,
  textBlock: TextBlock,
  imageBlock: ImageBlock,
  spacerBlock: SpacerBlock,
  buttonBlock: ButtonBlock,
  richTextBlock: RichTextBlock,
}

export const RenderBlocks: React.FC<{
  blocks: any
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block
          JSON.stringify(blockType)

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType as keyof typeof blockComponents]

            if (Block) {
              return (
                <Fragment key={index}>
                  <Block {...block} disableInnerContainer />
                </Fragment>
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
