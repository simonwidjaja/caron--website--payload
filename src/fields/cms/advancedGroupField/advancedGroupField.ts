import type { Field } from 'payload'

export const advancedGroupField = (options: {
  name: string
  label?: string
  // borderColor?: string
  fields: Field[]
}): Field => ({
  name: options.name,
  label: options.label || options.name,
  type: 'group',
  fields: options.fields,
  admin: {
    components: {
      Field: {
        path: '@/fields/cms/advancedGroupField/AdvancedGroupComponent.tsx',
      },
    },
    custom: {
      //borderColor: options.borderColor || '#ddd',
    },
  },
})
