import type { Block } from 'payload'
import ContentBlockList from '@/blocks/ContentBlockList'
import { classesAndStylesField } from '@/fields/cms/classesAndStyles'


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
    // {
    //   name: 'content',
    //   type: 'blocks',
    //   blocks: ContentBlockList.getBlockConfigs(),
    //   admin: {
    //     description: 'Add content blocks to this section',
    //   },
    // },

    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'content',
              type: 'blocks',
              blocks: ContentBlockList.getBlockConfigs(),
            },            
          ],
        },
        {
          label: 'Layout and Styles',
          fields: [
            classesAndStylesField({
              description: 'Customize the appearance of this section',
            }),
          ],
        },
      ],
    },

  ],
}