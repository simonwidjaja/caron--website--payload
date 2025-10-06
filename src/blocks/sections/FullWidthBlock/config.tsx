import type { Block } from 'payload'
import ContentBlockList from '@/blocks/ContentBlockList'

/**
 * Config
 */
export const FullWidthBlockConfig: Block = {
  slug: 'FullWidthBlock',
  labels: {
    singular: 'Full Width Section',
    plural: 'Full Width Sections',
  },
  admin: {
    group: 'sections',
  },
  fields: [
    {
      name: 'content',
      type: 'blocks',
      blocks: ContentBlockList.getBlockConfigs(),
      admin: {
        description: 'Add content blocks to this full-width section',
      },
    },
  ],
}
