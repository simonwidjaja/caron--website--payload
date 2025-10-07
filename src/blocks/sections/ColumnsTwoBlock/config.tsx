import type { Block } from 'payload'
import ContentBlockList from '@/blocks/ContentBlockList'
import { classesAndStylesField } from '@/fields/cms/classesAndStylesField'

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
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
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
        },
        {
          label: 'Layout and Styles',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'paddingCol1',
                  label: 'Padding Column 1',
                  type: 'checkbox',
                  defaultValue: true,
                  admin: {
                    description: 'Enable or disable default padding for the first column',
                    width: '50%',
                  },
                },
                {
                  name: 'paddingCol2',
                  label: 'Padding Column 2',
                  type: 'checkbox',
                  defaultValue: true,
                  admin: {
                    description: 'Enable or disable default padding for the second column',
                    width: '50%',
                  },
                },
              ],
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
