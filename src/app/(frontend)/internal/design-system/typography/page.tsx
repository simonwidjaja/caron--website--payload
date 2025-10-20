import type { Metadata } from 'next'
import React from 'react'
import SectionDefault from '@/components/sections/SectionDefault'
import { TextCompositionBlock } from '@/blocks/basic/TextCompositionBlock/Component'
import { BackLink } from '../shared/DsNav'
import { ColumnsTwoBlock } from '@/blocks/sections/ColumnsTwoBlock/Component'
import { TextBlock } from '@/blocks/basic/TextBlock/Component'
import Headline from '@/components/basic/typography/Headline'

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
        col1={
          <>
            <Headline headline="Some headline (h1)" size="h1" />
            <TextBlock text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'/>
            <TextBlock text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'/>
            <Headline headline="Some headline (h2)" size="h2" />
            <TextBlock text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'/>
            <TextBlock text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'/>
            <Headline headline="Some headline (h3)" size="h3" />
            <TextBlock text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'/>
            <TextBlock text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'/>
            <Headline headline="Some headline (h4)" size="h4" />
            <TextBlock text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'/>
            <TextBlock text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'/>
          </>
        }
        col2={<>
          <TextBlock 
            text='Example of more complex text compositions with multiple headlines and paragraphs. This layout helps to visualize how different text elements interact within a two-column design, ensuring readability and aesthetic balance.'
          />
        </>}
      />

      <SectionDefault></SectionDefault>

    </article>
  )
}
