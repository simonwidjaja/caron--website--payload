import type { Block } from 'payload'

export const ImageBlockConfig: Block = {
  slug: 'ImageBlock',
  labels: {
    singular: 'Image',
    plural: 'Images',
  },
  admin: {
    group: 'basic', 
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Select an image to display',
      },
    },
    {
      name: 'alt',
      type: 'text',
      localized: true,
      admin: {
        description: 'Alt text for accessibility (describe the image)',
      },
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'large',
      options: [
        {
          label: 'Thumbnail (300px)',
          value: 'thumbnail',
        },
        {
          label: 'Square (500x500px)',
          value: 'square',
        },
        {
          label: 'Small (600px)',
          value: 'small',
        },
        {
          label: 'Medium (900px)',
          value: 'medium',
        },
        {
          label: 'Large (1400px)',
          value: 'large',
        },
        {
          label: 'Extra Large (1920px)',
          value: 'xlarge',
        },
        {
          label: 'Original (Full Resolution)',
          value: 'original',
        },
      ],
      admin: {
        description: 'Choose which image size to display',
      },
    },
  ],
}
