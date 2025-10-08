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
      admin: {
        description: 'Alt text for accessibility (describe the image)',
      },
    },
  ],
}
