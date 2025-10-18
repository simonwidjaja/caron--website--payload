import type { GroupField, TextField, ClientField, Field } from 'payload'

export const customGroupDraft2TestField = (options?: {
  name?: string
  label?: string
  classesPlaceholder?: string
  description?: string
}): GroupField => {
  const {
    name = 'advancedSection',
    label = 'Advanced Section',
    classesPlaceholder = 'Enter CSS classes (e.g. "mb-4 text-center")',
    description = 'Add custom CSS classes and inline styles',
  } = options || {}

  return {
    name: name,
    type: 'group',
    admin: {
      components: {
        Field: {
          path: '@/fields/wip/customGroup/CustomGroup#CustomGroup',
        },
      },
    },
    // fields are client-safe (no functions). Cast to server Field[] to satisfy GroupField return type.
    fields: ([
      ({
        name: 'simonsays',
        label: 'simonsays',
        type: 'text',
        admin: {},
      } as unknown) as ClientField,
      ({
        name: 'architect',
        label: 'architect',
        type: 'text',
        localized: true,
        admin: {},
      } as unknown) as ClientField,
    ] as unknown) as Field[]
  };
}