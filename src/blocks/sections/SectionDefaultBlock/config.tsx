import type { Block } from 'payload'
import ContentBlockList from '@/blocks/ContentBlockList'
import { classesAndStylesField } from '@/fields/cms/classesAndStylesField'
import { containerLayoutField } from '@/fields/cms/containerLayoutField'


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
            ...containerLayoutField({
              namePrefix: 'col1',
            }),                
            classesAndStylesField({
              description: 'Customize the appearance of this section',
            }),
          ],
        },
      ],
    },
  ],
}