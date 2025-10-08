import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  UnorderedListFeature,
  OrderedListFeature,
  BlockquoteFeature,
  lexicalEditor,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  StrikethroughFeature,
  ParagraphFeature,
  LinkFeature,
  AlignFeature,
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
    {
      name: 'content',
      type: 'richText',
      label: 'Rich Text Content',
      required: true,
      localized: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          FixedToolbarFeature(),
          HeadingFeature({
            enabledHeadingSizes: ['h2', 'h3', 'h4', 'h5', 'h6'],
          }),
        ],
      })
    },
  ],
}
