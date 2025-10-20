import { advancedGroupField } from '@/fields/cms/advancedGroupField/advancedGroupField'
import type { Block } from 'payload'

/**
 * Config
 */
export const TextBlockConfig: Block = {
  slug: 'textBlock',
  labels: {
    singular: 'Text ',
    plural: 'Texts',
  },
  admin: {
    group: 'basic', 
  },
  fields: [
    advancedGroupField(),
    {
      type: 'row',
      fields: [
        {
          name: 'text',
          type: 'text',
          localized: true,
        },
        {
          name: 'size',
          type: 'select',
          defaultValue: 'md',
          options: [
            { label: 'lg', value: 'lg'},
            { label: 'md', value: 'md'},
            { label: 'sm', value: 'sm'},
            { label: 'xs', value: 'xs'},
          ],
          admin: {
            width: '30%',
            style: { maxWidth: '200px' },
            // description: 'Choose the size',
          },
        },
      ],
    },    
  ],
}
