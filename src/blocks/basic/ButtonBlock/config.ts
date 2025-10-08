import type { Block } from 'payload'

export const ButtonBlockConfig: Block = {
  slug: 'buttonBlock',
  interfaceName: 'ButtonBlock',
  labels: {
    singular: 'Button Block',
    plural: 'Button Blocks',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      label: 'Button Label',
      required: true,
      localized: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'variant',
          type: 'select',
          label: 'Button Variant',
          defaultValue: 'default',
          options: [
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Destructive',
              value: 'destructive',
            },
            {
              label: 'Outline',
              value: 'outline',
            },
            {
              label: 'Secondary',
              value: 'secondary',
            },
            {
              label: 'Ghost',
              value: 'ghost',
            },
            {
              label: 'Link',
              value: 'link',
            },
          ],
          required: true,
        },
        {
          name: 'size',
          type: 'select',
          label: 'Button Size',
          defaultValue: 'default',
          options: [
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Small',
              value: 'sm',
            },
            {
              label: 'Large',
              value: 'lg',
            },
            {
              label: 'Icon',
              value: 'icon',
            },
          ],
          required: true,
        },
      ],
    },
    {
      name: 'link',
      type: 'group',
      fields: [
        {
          name: 'type',
          type: 'radio',
          label: 'Link Type',
          options: [
            {
              label: 'Internal',
              value: 'internal',
            },
            {
              label: 'External',
              value: 'external',
            },
          ],
          defaultValue: 'internal',
          required: true,
        },
        {
          name: 'internalLink',
          type: 'relationship',
          relationTo: 'pages',
          label: 'Internal Link',
          admin: {
            condition: (data, siblingData) => siblingData?.type === 'internal',
          },
        },
        {
          name: 'externalLink',
          type: 'text',
          label: 'External URL',
          admin: {
            condition: (data, siblingData) => siblingData?.type === 'external',
          },
        },
        {
          name: 'newTab',
          type: 'checkbox',
          label: 'Open in New Tab',
          defaultValue: false,
        },
      ],
    },
  ],
}
