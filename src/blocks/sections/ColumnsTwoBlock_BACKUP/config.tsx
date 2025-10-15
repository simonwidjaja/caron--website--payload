import type { Block } from 'payload'
import ContentBlockList from '@/blocks/ContentBlockList'
import { classesAndStylesField } from '@/fields/cms/classesAndStylesField'
import { containerLayoutField } from '@/fields/cms/containerLayoutField'

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
                  type: 'collapsible',
                  label: 'Column 1',
                  admin: {
                    width: '50%',
                    initCollapsed: false,
                  },
                  fields: [
                    ...containerLayoutField({
                      namePrefix: 'col1',
                      includeColumnWidth: true,
                    }),
                  ],
                },
                {
                  type: 'collapsible',
                  label: 'Column 2',
                  admin: {
                    width: '50%',
                    initCollapsed: false,
                  },
                  fields: [
                    ...containerLayoutField({
                      namePrefix: 'col2',
                      includeColumnWidth: true,
                    }),
                  ],
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
