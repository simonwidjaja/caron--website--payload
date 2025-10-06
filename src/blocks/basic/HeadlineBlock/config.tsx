import type { Block } from 'payload'

/**
 * Config
 */
export const HeadlineBlockConfig: Block = {
  slug: 'HeadlineBlock',
  labels: {
    singular: 'Headline',
    plural: 'Headlines',
  },
  admin: {
    group: 'basic', 
    // custom: {
    //   tags: ['text', 'headline'],
    // }
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'headline',
          type: 'text',
          localized: true,
          admin: {
            width: '70%',
          },
        },
        {
          name: 'size',
          type: 'select',
          defaultValue: 'h2',
          options: [
            {
              label: 'Huge',
              value: 'huge',
            },
            {
              label: 'H1',
              value: 'h1',
            },
            {
              label: 'H2',
              value: 'h2',
            },
            {
              label: 'H3',
              value: 'h3',
            },
            {
              label: 'H4',
              value: 'h4',
            },
            {
              label: 'H5',
              value: 'h5',
            },
          ],
          admin: {
            width: '30%',
            style: { maxWidth: '200px' },
            description: 'Choose the headline size',
          },
        },
      ],
    },
  ],
}
