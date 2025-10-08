import type { Field } from 'payload'

export const containerLayoutField = (options?: {
  namePrefix?: string
  description?: string
  paddingLabel?: string
}): Field[] => {
  const {
    namePrefix = '',
    paddingLabel = 'Padding',
  } = options || {}

  const fields: Field[] = []

  // Add padding 
  fields.push({
    name: namePrefix ? `${namePrefix}Padding` : 'padding',
    label: paddingLabel,
    type: 'checkbox',
    defaultValue: true,
  })
  
  // Add alignment fields in a row
  fields.push({
    type: 'row',
    fields: [
      {
        name: namePrefix ? `${namePrefix}VerticalAlign` : 'verticalAlign',
        label: 'Vertical Alignment',
        type: 'select',
        defaultValue: 'top',
        options: [
          { label: 'Top', value: 'top' },
          { label: 'Center', value: 'center' },
          { label: 'Bottom', value: 'bottom' },
        ],
        admin: {
          width: '50%',
        },
      },
      {
        name: namePrefix ? `${namePrefix}HorizontalAlign` : 'horizontalAlign',
        label: 'Horizontal Alignment',
        type: 'select',
        defaultValue: 'left',
        options: [
          { label: 'Left', value: 'left' },
          { label: 'Center', value: 'center' },
          { label: 'Right', value: 'right' },
        ],
        admin: {
          width: '50%',
        },
      },
    ],
  })

  // Add classes
  fields.push({
    name: namePrefix ? `${namePrefix}CssClasses` : 'cssClasses',
    label: 'CSS Classes',
    type: 'text',
    admin: {
      placeholder: 'Enter CSS classes (e.g., "mb-4 text-center")',
    },
  })
  
  return fields
}
