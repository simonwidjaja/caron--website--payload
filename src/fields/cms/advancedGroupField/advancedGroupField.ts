import type { Field, GroupField, TabsField } from 'payload'

export const advancedGroupField = (options?: { 
  name?: string
  tabsStart?: TabsField['tabs']
  fieldsStyles?: Field[]
  tabsEnd?: TabsField['tabs']
}): GroupField => {
  const { 
    name = 'advanced',
    tabsStart = [],
    fieldsStyles = [],
    tabsEnd = [],
  } = options || {}

  return {
    name,
    label: 'Advanced',
    type: 'group',
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
            name: 'styles',
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
                name: 'customStyles',
                label: 'CSS',
                type: 'code',
                admin: {
                  language: 'css',
                  description: 'This is scoped CSS that applies only to this instance',
                },
              },
              ...fieldsStyles
            ],
          },
          {
            name: 'docs',
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
