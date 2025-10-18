import { advancedPropertiesField } from '@/fields/wip/customGroup/advancedPropertiesField'
import type { Block } from 'payload'

export const VideoBlockConfig: Block = {
  slug: 'videoBlock',
  labels: {
    singular: 'Video',
    plural: 'Videos',
  },
  admin: {
    group: 'basic', 
  },
  fields: [
    {
      name: 'myname',
      type: 'text',
      validate: (value:any) => value != "simon" || 'This field is not valid',
    },    
    advancedPropertiesField(),
  ],
}
