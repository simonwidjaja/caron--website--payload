import type { Block } from 'payload'

export const ImageBlockConfig: Block = {
  slug: 'imageBlock',
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
        description: 'Choose which image size to use',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'maxWidth',
          label: 'Max Width',
          type: 'number',
          admin: {
            description: 'Maximum width in pixels (optional)',
            width: '50%',
          },
        },
        {
          name: 'maxHeight',
          label: 'Max Height',
          type: 'number',
          admin: {
            description: 'Maximum height in pixels (optional)',
            width: '50%',
          },
        },
      ],
    },
    
    //-------------- WIP ----------------
    // {
    //   type: 'collapsible',
    //   label: 'Work In Progress',
    //   admin: {
    //     components: {
    //       Field: 'src/fields/wip#Wip',
    //     },
    //     initCollapsed: true,
    //   },
    //   fields: [
    //     {
    //       name: 'enabled',
    //       type: 'checkbox',
    //       label: 'Work In Progress',
    //       defaultValue: false,
    //     },
    //     {
    //       name: 'animated',
    //       type: 'checkbox',
    //       label: 'Work In Progress Animated',
    //       defaultValue: true,
    //     },
    //   ],
    // },
    //----------------------------------
  ],
}
