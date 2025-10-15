import type { Field } from 'payload'

export const containerLayoutField = (options?: {
  namePrefix?: string
  includeColumnWidth?: boolean
  paddingLabel?: string
}): Field[] => {
  const {
    namePrefix = '',
    includeColumnWidth = false,    
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

  // Optionally add column width field
  if (includeColumnWidth) {
    fields.push({
      type: 'row',
      fields: [
        {
          name: namePrefix ? `${namePrefix}ColumnBaseWidth` : 'columnBaseWidth',
          label: 'Base Width',
          type: 'text',
          defaultValue: '100%',
          admin: {
            description: 'Base width of this column (e.g., "50%", "300px").',
            placeholder: 'e.g., 100%',
            width: '40%',
          },
        },
        {
          name: namePrefix ? `${namePrefix}MinWidth` : 'minWidth',
          label: 'Min Width',
          type: 'text',
          admin: {
            placeholder: 'e.g., 200px',
            width: '30%',
          },
        },
        {
          name: namePrefix ? `${namePrefix}MaxWidth` : 'maxWidth',
          label: 'Max Width',
          type: 'text',
          admin: {
            placeholder: 'e.g., 500px',
            width: '30%',
          },
        },
      ],
    })
  }

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
