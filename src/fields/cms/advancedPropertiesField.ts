import type { GroupField, TextField, ClientField, Field } from 'payload'

export const advancedSectionField = (options?: {
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
    fields: [
      {
        name: 'simonsays',
        label: 'simonsays',
        type: 'text',
        admin: {},
      } satisfies ClientField,
      {
        name: 'architect',
        label: 'architect',
        type: 'text',
        localized: true,
        validate: (value:any) => value != "black" || 'This field is required',
        admin: {
          condition: (data:any, siblingData:any) => siblingData?.simonsays === 'y',
        },
      } satisfies ClientField,
      // collapsible section with a single text field 'customClasses'
      {
        type: 'collapsible',
        label: 'Advanced',
        admin: {
          initCollapsed: true,
        },
        fields: [
          {
            name: 'customClasses',
            label: 'Custom Classes',
            type: 'text',
            admin: {
              placeholder: classesPlaceholder,
              description: 'Enter additional CSS classes (space-separated) for this section',
            },
          } satisfies ClientField,
        ],
      } satisfies ClientField,
    ] satisfies Field[]
  };
}
