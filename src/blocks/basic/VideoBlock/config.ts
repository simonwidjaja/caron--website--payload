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
      name: 'sourceType',
      type: 'select',
      defaultValue: 'internal',
      options: [
        {
          label: 'Internal Media',
          value: 'internal',
        },
        {
          label: 'External URL',
          value: 'external',
        },
      ],
      admin: {
        description: 'Choose whether to use an uploaded media file or an external video URL',
      },
    },
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Select a video to display',
        condition: (_, siblingData) => siblingData?.sourceType === 'internal',
      },
      filterOptions: {
        mimeType: {
          in: [
            'video/mp4',
            'video/webm',
          ],
        },
      },
    },
    {
      name: 'externalUrl',
      type: 'text',
      required: true,
      admin: {
        description: 'Enter the external video URL',
        condition: (_, siblingData) => siblingData?.sourceType === 'external',
      },
    },
    {
      name: 'poster',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Select a poster image or video for the video',
      },
    },
    {
      name: 'metaTitle',
      type: 'text',
      localized: true,
      admin: {
        description: 'Meta title for the video',
      },
    },
    {
      name: 'title',
      type: 'text',
      localized: true,
      admin: {
        description: 'Title for the video',
      },
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Select an icon image for the video (optional)',
      },
      filterOptions: {
        mimeType: {
          in: [
            'image/jpeg',
            'image/png',
            'image/webp',
            'image/svg+xml',
          ],
        },
      },
    },
  ],
}
