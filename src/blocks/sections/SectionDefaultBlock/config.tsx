import type { Block } from 'payload'
import ContentBlockList from '@/blocks/ContentBlockList'

/**
 * Config
 */
export const SectionDefaultBlockConfig: Block = {
  slug: 'SectionDefaultBlock',
  labels: {
    singular: 'Section Default',
    plural: 'Section Defaults',
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
        description: 'Add content blocks to this section',
      },
    },
  ],
}
