import type { Metadata } from 'next'
import React from 'react'
import SectionDefault from '@/components/sections/SectionDefault'
import { TextCompositionBlock } from '@/blocks/basic/TextCompositionBlock/Component'
import { BackLink } from '../shared/DsNav'
import Text from '@/components/basic/typography/Text'
import { ColumnsTwoBlock } from '@/blocks/sections/ColumnsTwoBlock/Component'
import { TextBlock } from '@/blocks/basic/TextBlock/Component'
import { HeadlineBlock } from '@/blocks/basic/HeadlineBlock/Component'

export const metadata: Metadata = {
  title: 'Design System | Internal',
  description: 'Internal design system documentation and component showcase',
}

export default function DesignSystemPage() {
  return (
    <article className="">
      
      <BackLink />

      <SectionDefault>
        <TextCompositionBlock
          metaTitle="Typography"
          headline="Copy text"
          headlineSize="h2"
        >
        </TextCompositionBlock>
      </SectionDefault>

      <ColumnsTwoBlock
        col2VerticalAlign = 'center'
        col1={[
          {
            blockType: 'textBlock',
            text: 'This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'
          },
          {
            blockType: 'textBlock',
            text: 'This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'
          }
        ]}
        col2={[
          {
            blockType: 'textBlock',
            text: 'Two basic paragraphs'
          }
        ]}
      />

      <SectionDefault></SectionDefault>

      <SectionDefault>
        <TextCompositionBlock
          metaTitle="Typography"
          headline="Headlines"
          headlineSize="h2"
        >
        </TextCompositionBlock>
      </SectionDefault>

      <SectionDefault></SectionDefault>

      <SectionDefault>
        <TextCompositionBlock
          metaTitle="Typography"
          headline="Text Compositions"
          headlineSize="h2"
        >
        </TextCompositionBlock>
      </SectionDefault>

     <ColumnsTwoBlock
        col2VerticalAlign = 'center'
        col1={[
          <HeadlineBlock key="headline-h1" headline="Some headline (h1)" size="h1" />,
          <TextBlock 
            key="text-1"
            text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'
          />,
          <TextBlock 
            key="text-2"
            text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'
          />,
          <HeadlineBlock key="headline-h2-2" headline="Some headline (h2)" size="h2" />,
          <TextBlock 
            key="text-3"
            text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'
          />,
        ]}
        col2={[
          <TextBlock 
            key="43829478"
            text='DESCRIPTION'
          />,
        ]}
      />



    </article>
  )
}
