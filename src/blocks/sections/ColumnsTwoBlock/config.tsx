import ContentBlockList from '@/blocks/ContentBlockList'
import type { Block } from 'payload'

/**
 * Config
 */
export const ColumnsTwoBlockConfig: Block = {
  slug: 'ColumnsTwoBlock',
  labels: {
    singular: 'Two Columns Block',
    plural: 'Two Columns Blocks',
  },
  admin: {
    group: 'sections',
  },  
  fields: [
    {
      name: 'col1',
      type: 'blocks',
      blocks: [
        ...ContentBlockList.getBlockConfigs()
      ],
      admin: {
        description: 'Content blocks for the first column',
      },
    },
    {
      name: 'col2',
      type: 'blocks',
      blocks: [
        ...ContentBlockList.getBlockConfigs()
      ],
      admin: {
        description: 'Content blocks for the second column',
      },
    },
  ],
}
