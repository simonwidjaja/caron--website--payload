import type { Field } from 'payload'

export const linkField = (options?: {
  name?: string
  label?: string
  classesPlaceholder?: string
  description?: string
}): Field => {
  const {
    name = 'link',
    label = 'Link',
    description = 'Link to an internal page or external URL',
  } = options || {}

  return {
    name,
    label,
    interfaceName: 'Link',
    type: 'group',
    admin: {
      description,
    },
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
          condition: (_data: unknown, siblingData: { type?: string }) => siblingData?.type === 'internal',
        },
      },
      {
        name: 'externalLink',
        type: 'text',
        label: 'External URL',
        admin: {
          condition: (_data: unknown, siblingData: { type?: string }) => siblingData?.type === 'external',
        },
      },
      {
        name: 'newTab',
        type: 'checkbox',
        label: 'Open in New Tab',
        defaultValue: false,
      },
    ],
  }
}