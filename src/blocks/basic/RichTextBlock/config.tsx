import { advancedGroupField } from '@/fields/cms/advancedGroupField/advancedGroupField'
import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  UnorderedListFeature,
  OrderedListFeature,
  lexicalEditor,
  LinkFeature,
} from '@payloadcms/richtext-lexical'

/**
 * Config
 */
export const RichTextBlockConfig: Block = {
  slug: 'richTextBlock',
  labels: {
    singular: 'Rich Text',
    plural: 'Rich Text Blocks',
  },
  admin: {
    group: 'basic',
  },
  fields: [
    advancedGroupField(),
    {
      name: 'content',
      type: 'richText',
      label: 'Rich Text Content',
      required: true,
      localized: true,
      editor: lexicalEditor({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        features: ({ rootFeatures }:any) => [
          ...rootFeatures,
          FixedToolbarFeature(),
          HeadingFeature({
            enabledHeadingSizes: ['h2', 'h3', 'h4', 'h5', 'h6'],
          }),
          UnorderedListFeature(),
          OrderedListFeature(),   
          LinkFeature({
            enabledCollections: ['pages'],
          }),
        ],
      })
    },
  ],
}
