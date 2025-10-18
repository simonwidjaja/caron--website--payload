import type { Field } from 'payload'

export const customGroupField = (options: {
  name: string
  label?: string
  borderColor?: string
  fields: Field[]
}): Field => ({
  name: options.name,
  label: options.label || options.name,
  type: 'group',
  fields: options.fields,
  admin: {
    components: {
      Field: {
        path: '@/fields/wip/customGroup/CustomGroup',
      },
    },
    custom: {
      borderColor: options.borderColor || '#ddd',
    },
  },
})
