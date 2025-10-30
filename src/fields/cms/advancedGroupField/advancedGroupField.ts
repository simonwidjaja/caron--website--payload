import type { Field, GroupField, TabsField } from 'payload'

export const advancedGroupField = (options?: { 
  name?: string
  label?: string
  tabsStart?: TabsField['tabs']
  fieldsStyles?: Field[]
  tabsEnd?: TabsField['tabs']
}): GroupField => {
  const { 
    name = 'advanced',
    label = 'Advanced',
    tabsStart = [],
    fieldsStyles = [],
    tabsEnd = [],
  } = options || {}

  return {
    name,
    label,
    type: 'group',
    interfaceName: 'AdvancedGroupField',
    admin: {
      components: {
        Field: {
          path: '@/fields/cms/advancedGroupField/AdvancedGroupComponent',
        },
      },
    },
    fields: [
      {
        type: 'tabs',
        tabs: [
          ...tabsStart,
          {
            label: 'Styles',
            fields: [
              {
                type: 'row',
                fields: [
                  {
                    name: 'id',
                    label: 'ID',
                    type: 'text',
                    admin: {
                      placeholder: 'ID',
                      description: 'Unique identifier for the component (without #)',
                      width: '50%',
                    },
                  },
                  {
                    name: 'className',
                    label: 'CSS Classes',
                    type: 'text',
                    admin: {
                      placeholder: 'CSS/TW classes (e.g. "mb-4 text-center")',
                      description: 'Space-separated CSS classes (e.g. "mb-4 text-center")',
                      width: '50%',
                    },
                  },
                ],
              },
              {
                name: 'styles',
                label: 'CSS',
                type: 'code',
                admin: {
                  language: 'css',
                  description: 'This is scoped CSS that applies only to this instance. Use "SELF { }" to target the component itself. ID must also be set.',
                  editorOptions: {
                    automaticLayout: true,
                  },
                  style: {
                    maxHeight: '300px',
                    overflow: 'auto',
                  },                  
                },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                validate: (value: string | null | undefined, args: any) => {
                  // If styles has content but no id is provided
                  if (value && value.trim() !== '') {
                    const id = args.siblingData?.id
                    if (!id || id.trim() === '') {
                      return 'An ID is required when using scoped CSS. Please set an ID above.'
                    }
                  }
                  return true
                },                        
              },
              ...fieldsStyles
            ],
          },
          {
            label: 'Documentation',
            fields: [],
          },
          ...tabsEnd
        ],
      },
    ],
  }
}

export default advancedGroupField
