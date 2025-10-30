import type { GlobalConfig } from 'payload'

// import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navigation',
      type: 'array',
      label: 'First Level Links',
      admin: {
        description: 'Add navigation links for the header',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          localized: true,
          admin: {
            description: 'Label for the navigation link',
          },
        },
        {
          name: 'urlType',
          type: 'select',
          defaultValue: 'internal',
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
          admin: {
            description: 'Choose if the URL is internal or external',
          },
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          admin: {
            description: 'URL for the link (e.g., /page or https://example.com)',
            condition: (_, siblingData) => siblingData?.urlType === 'external',
          },
        },
        {
          name: 'internalUrl',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
          admin: {
            description: 'Select an internal page',
            condition: (_, siblingData) => siblingData?.urlType === 'internal',
          },
        },
        {
          name: 'children',
          type: 'array',
          label: 'Second Level Links',
          admin: {
            description: 'Add submenu links',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              localized: true,
              admin: {
                description: 'Label for the submenu link',
              },
            },
            {
              name: 'brief',
              type: 'text',
              localized: true,
              admin: {
                description: 'Brief description for the submenu link',
              },
            },
            {
              name: 'icon',
              type: 'textarea',
              admin: {
                description: 'SVG code for the submenu link icon',
              },
            },
            {
              name: 'urlType',
              type: 'select',
              defaultValue: 'internal',
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
              admin: {
                description: 'Choose if the URL is internal or external',
              },
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              admin: {
                description: 'URL for the link (e.g., /page or https://example.com)',
                condition: (_, siblingData) => siblingData?.urlType === 'external',
              },
            },
            {
              name: 'internalUrl',
              type: 'relationship',
              relationTo: 'pages',
              required: true,
              admin: {
                description: 'Select an internal page',
                condition: (_, siblingData) => siblingData?.urlType === 'internal',
              },
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
