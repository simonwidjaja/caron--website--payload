import type { Metadata } from 'next'
import React from 'react'
import { TextCompositionBlock } from '@/blocks/basic/TextCompositionBlock/Component'
import { SectionDefaultBlock } from '@/blocks/sections/SectionDefaultBlock/Component'

export const metadata: Metadata = {
  title: 'Design System | Internal',
  description: 'Internal design system documentation and component showcase',
}

export default function CodedPage() {
  return (
    <article className="">


      <SectionDefaultBlock classesAndStyles={{cssClasses: ''}} content={[
        {
          blockType: 'TextCompositionBlock',
          metaTitle: 'Internal Documentation',
          headline: 'Configs',
          headlineSize: 'h2',
          body: 'This is a section wrapper that provides default padding and centering for its content. It is useful for creating consistent layouts across different pages and sections of the website.',
        },
        {
          blockType: 'TextCompositionBlock',
          metaTitle: 'Internal Documentation',
          headline: 'Usage',
          headlineSize: 'h3',
          body: 'To use the Section Default component, simply wrap your content within the SectionDefaultBlock component. You can pass any valid React nodes as children, including text, images, and other components.',
        },
      ]} />


      <SectionDefaultBlock content={[
        <TextCompositionBlock
          metaTitle="Internal Documentation"
          headline="Real components"
          headlineSize="h2"
          body="Hello world"
        />,
        <TextCompositionBlock
          metaTitle="Internal Documentation"
          headline="Design System"
          headlineSize="h2"
          body="Hello world"
        />
      ]} >
      </SectionDefaultBlock>

    </article>
  )
}
