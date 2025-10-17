import type { Field } from 'payload'

export const CustomGroupField = (options: {
  name: string
  label?: string
  borderColor?: string
  fields: Field[]
}): Field => ({
  name: options.name,
  label: options.label || options.name,
  type: 'ui',
  admin: {
    components: {
      Field: {
        path: '@/fields/wip/customGroup/CustomGroup',
      },
    },
    custom: {
      borderColor: options.borderColor || '#ddd',
      fields: options.fields,
    },
  },
})
