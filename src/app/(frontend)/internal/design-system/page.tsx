import type { Metadata } from 'next'
import React from 'react'
import { TextCompositionBlock } from '@/blocks/basic/TextCompositionBlock/Component'

export const metadata: Metadata = {
  title: 'Design System | Internal',
  description: 'Internal design system documentation and component showcase',
}

export default function DesignSystemPage() {
  return (
    <article className="pt-16 pb-24">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12">
          <TextCompositionBlock
            metaTitle="Internal Documentation"
            headline="Design System"
            size="huge"
            body={{
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'This is our internal design system documentation. Here you can find all the components, patterns, and guidelines we use across our projects.',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            }}
          />
        </div>

        {/* Typography Section */}
        <div className="mb-12">
          <TextCompositionBlock
            headline="Typography"
            size="h2"
            body={{
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Our typography system uses a consistent scale and hierarchy to ensure readability and visual consistency across all interfaces.',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            }}
          />
        </div>

        {/* Typography Examples */}
        <div className="space-y-8 mb-16">
          <TextCompositionBlock headline="Huge Headline Example" size="huge" />
          <TextCompositionBlock headline="H1 Headline Example" size="h1" />
          <TextCompositionBlock headline="H2 Headline Example" size="h2" />
          <TextCompositionBlock headline="H3 Headline Example" size="h3" />
          <TextCompositionBlock headline="H4 Headline Example" size="h4" />
          <TextCompositionBlock headline="H5 Headline Example" size="h5" />
        </div>

        {/* Components Section */}
        <div className="mb-12">
          <TextCompositionBlock
            headline="Text Composition Block"
            size="h2"
            body={{
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'The TextComposition block is a versatile component that combines headlines with rich text content. It supports multiple sizing options and localization.',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                  {
                    type: 'heading',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Features:',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h3',
                    version: 1,
                  },
                  {
                    type: 'list',
                    children: [
                      {
                        type: 'listitem',
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,
                            mode: 'normal',
                            style: '',
                            text: 'Responsive typography scaling',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                        version: 1,
                      },
                      {
                        type: 'listitem',
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,
                            mode: 'normal',
                            style: '',
                            text: 'Multiple size options (huge, h1-h5)',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                        version: 1,
                      },
                      {
                        type: 'listitem',
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,
                            mode: 'normal',
                            style: '',
                            text: 'Rich text support with custom styling',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                        version: 1,
                      },
                      {
                        type: 'listitem',
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,
                            mode: 'normal',
                            style: '',
                            text: 'Semantic HTML structure',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                        version: 1,
                      },
                      {
                        type: 'listitem',
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,
                            mode: 'normal',
                            style: '',
                            text: 'Localization support',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    listType: 'bullet',
                    start: 1,
                    tag: 'ul',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            }}
          />
        </div>

        {/* Usage Example */}
        <div className="mb-12">
          <TextCompositionBlock
            metaTitle="Example Usage"
            headline="How to Use TextComposition Block"
            size="h3"
            body={{
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'This block can be used throughout the application to maintain consistent typography and content structure. It automatically handles responsive sizing and semantic HTML tags.',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            }}
          />
        </div>
      </div>
    </article>
  )
}
