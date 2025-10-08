import type { Block } from 'payload'

export const SpacerBlockConfig: Block = {
  slug: 'SpacerBlock',
  interfaceName: 'SpacerBlock',
  labels: {
    singular: 'Spacer Block',
    plural: 'Spacer Blocks',
  },
  admin: {
    group: 'basic', 
  },  
  fields: [
    {
      name: 'size',
      type: 'select',
      label: 'Spacer Size',
      defaultValue: '20px',
      options: [
        {
          label: '1px',
          value: '1px',
        },
        {
          label: '2px',
          value: '2px',
        },
        {
          label: '3px',
          value: '3px',
        },
        {
          label: '5px',
          value: '5px',
        },
        {
          label: '10px',
          value: '10px',
        },
        {
          label: '20px',
          value: '20px',
        },
        {
          label: '30px',
          value: '30px',
        },
        {
          label: '40px',
          value: '40px',
        },
        {
          label: '50px',
          value: '50px',
        },
        {
          label: '80px',
          value: '80px',
        },
        {
          label: '100px',
          value: '100px',
        },
        {
          label: '150px',
          value: '150px',
        },
        {
          label: '200px',
          value: '200px',
        },
        {
          label: '300px',
          value: '300px',
        },
      ],
      required: true,
    },
  ],
}
