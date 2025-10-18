import { customGroupField } from '@/fields/wip/customGroup/customGroupField'
import type { Block } from 'payload'

export const CustomGroupTestFieldConfig: Block = {
  slug: 'customGroupTestField',
  labels: {
    singular: 'Custom Group Test Field',
    plural: 'Custom Group Test Fields',
  },
  admin: {
    group: 'basic', 
  },
  fields: [
    customGroupField({
      name: 'advanced',
      label: 'Custom Group',
      borderColor: '#0070f3', 
      fields: [
        {
          type: 'tabs',
          tabs: [
            {
              label: 'General',
              fields: [
                {
                  name: 'tabAField',
                  label: 'Tab A Field',
                  type: 'text',
                  admin: {
                    description: 'Field inside the General tab',
                  },
                },
              ],
            },
            {
              label: 'Advanced',
              fields: [
                {
                  name: 'tabBField',
                  label: 'Tab B Field',
                  type: 'text',
                  admin: {
                    description: 'Field inside the Advanced tab',
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'activate',
          label: 'Activate',
          type: 'checkbox',
        },
        {
          name: 'activated',
          label: 'Activated',
          type: 'text',
          admin: {
            condition: (data:any, siblingData:any) => siblingData?.activate === true,
          },
        },
      ]
    }),
    
    {
      name: 'myname',
      type: 'text',
      validate: (value:any) => value != "simon" || 'This field is not valid',
    },      
  ],
}
