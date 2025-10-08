import type { Block } from 'payload'

/**
 * Config
 */
export const TextCompositionBlockConfig: Block = {
  slug: 'textCompositionBlock',
  labels: {
    singular: 'Text Composition',
    plural: 'Text Compositions',
  },
  admin: {
    group: 'basic', 
    // custom: {
    //   tags: ['text', 'headline'],
    // }
  },
  fields: [
    {
      name: 'metaTitle',
      type: 'text',
      localized: true,
    },    
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
          name: 'headlineSize',
          type: 'select',
          defaultValue: 'h2',
          options: [
            { label: 'Huge', value: 'huge'},
            { label: 'H1', value: 'h1'},
            { label: 'H2', value: 'h2'},
            { label: 'H3', value: 'h3'},
            { label: 'H4', value: 'h4'},
            { label: 'H5', value: 'h5'},
          ],
          admin: {
            width: '30%',
            style: { maxWidth: '200px' },
            description: 'Choose the headline size',
          },
        },
      ],
    },
    {
      name: 'body',
      type: 'richText',
      localized: true,
    },
  ],
}
