import { advancedGroupField } from '@/fields/cms/advancedGroupField/advancedGroupField'
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
    advancedGroupField({
      tabsStart: [
        {
          label: 'General',
          fields: [
            {
              name: 'addon1',
              label: 'Title',
              type: 'text',
            }
          ],
        },
      ],
      fieldsStyles: [
        {
          name: 'field1',
          label: 'Field 1',
          type: 'text',
        },
        {
          name: 'field2',
          label: 'Field 2',
          type: 'text',
        },
      ],
      tabsEnd: [
        {
          label: 'End Tab',
          fields: [
            {
              name: 'addon2',
              label: 'Title',
              type: 'text',
            }
          ],
        },
      ],      
    }),
    {
      name: 'myname',
      type: 'text',
      validate: (value:any) => value != "simon" || 'This field is not valid',
    },
  ],
}
