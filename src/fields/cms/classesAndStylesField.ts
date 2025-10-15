import type { Field } from 'payload'

export const classesAndStylesField = (options?: {
  name?: string
  label?: string
  classesPlaceholder?: string
  description?: string
}): Field => {
  const {
    name = 'classesAndStyles',
    label = 'Classes and Styles',
    classesPlaceholder = 'Enter CSS classes (e.g. "mb-4 text-center")',
    description = 'Add custom CSS classes and inline styles',
  } = options || {}

  return {
    name,
    label,
    type: 'group',
    admin: {
      description,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'cssId',
            label: 'Id',
            type: 'text',
            admin: {
              description: 'Unique identifier for the component (without #)',
              width: '50%',
            },
          },
          {
            name: 'cssClasses',
            label: 'CSS Classes',
            type: 'text',
            admin: {
              placeholder: classesPlaceholder,
              description: 'Space-separated CSS classes (e.g., "mb-4 text-center bg-gray-100")',
              width: '50%',
            },
          },
        ],
      },

      {
        name: 'styles',
        label: 'CSS',
        type: 'code',
        required: false,
        // defaultValue: '',
        admin: {
          language: 'css',
          description: 'This is scoped CSS that applies only to this instance',
          // width: '50%',
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        validate: (value: string | null | undefined, args: any) => {
          // If styles has content but no cssId is provided
          if (value && value.trim() !== '') {
            const cssId = args.data?.cssId || args.siblingData?.cssId
            if (!cssId || cssId.trim() === '') {
              return 'An ID is required when using scoped CSS. Please set an ID above.'
            }
          }
          return true
        },        
      },      
    ],
  }
}
