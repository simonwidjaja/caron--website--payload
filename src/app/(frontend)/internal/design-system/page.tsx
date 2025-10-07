import type { Metadata } from 'next'
import React from 'react'
import { TextCompositionBlock } from '@/blocks/basic/TextCompositionBlock/Component'
import { SectionDefaultBlock } from '@/blocks/sections/SectionDefaultBlock/Component'

export const metadata: Metadata = {
  title: 'Design System | Internal',
  description: 'Internal design system documentation and component showcase',
}

export default function DesignSystemPage() {
  return (
    <article className="">
      
      <SectionDefaultBlock content={[
        {
          blockType: 'HeadlineBlock',
          headline: 'Design System',
          size: 'huge',
        },
      ]} />

      <SectionDefaultBlock content={[
        {
          blockType: 'HeadlineBlock',
          headline: 'Basics',
          size: 'h2',
        },
      ]} />


      <SectionDefaultBlock content={[
        <TextCompositionBlock
          metaTitle="Internal Documentation"
          headline="Real components"
          headlineSize="h1"
          body="Hello world"
        />,
        <TextCompositionBlock
          metaTitle="Internal Documentation"
          headline="Design System"
          headlineSize="h2"
          body="Hello world"
        />,
        <TextCompositionBlock
          metaTitle="Internal Documentation"
          headline="Design System"
          headlineSize="h3"
          body="Hello world"
        />,
        <TextCompositionBlock
          metaTitle="Internal Documentation"
          headline="Design System"
          headlineSize="h4"
          body="Hello world"
        />
      ]} >
      </SectionDefaultBlock>      

    </article>
  )
}
