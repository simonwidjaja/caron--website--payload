import type { Block } from 'payload'
import ContentBlockList from '@/blocks/ContentBlockList'
import { classesAndStylesField } from '@/fields/cms/classesAndStylesField'

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
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
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
        },
        {
          label: 'Layout and Styles',
          fields: [
            {
              name: 'padding',
              label: 'Padding',
              type: 'checkbox',
              defaultValue: true,
              admin: {
                description: 'Enable or disable default padding for this section',
              },
            },
            classesAndStylesField({
              description: 'Customize the appearance of this section',
            }),
          ],
        },
      ],
    },
  ],
}
