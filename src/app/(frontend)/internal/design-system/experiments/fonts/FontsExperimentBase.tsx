import React from 'react'
import SectionDefault from '@/components/sections/SectionDefault'
import { TextCompositionBlock } from '@/blocks/basic/TextCompositionBlock/Component'
import { ColumnsTwoBlock } from '@/blocks/sections/ColumnsTwoBlock/Component'
import { TextBlock } from '@/blocks/basic/TextBlock/Component'
import { HeadlineBlock } from '@/blocks/basic/HeadlineBlock/Component'
import Link from 'next/link'

import { Allan } from 'next/font/google'
import { Kalam } from 'next/font/google'
import { cn } from '@/utilities/ui'

const secondFont = Allan({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

const thirdFont = Kalam({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export default function FontsExperimentBase({className, fontName}: {className?: string, fontName?: string}) {
  return (
    <article className={className}>
      
      <SectionDefault className="text-xs">
        <Link href="/internal/design-system/experiments/fonts" className="opacity-20 hover:opacity-100">← Back to Fonts Experiments</Link>
      </SectionDefault>

      <SectionDefault>
        <TextCompositionBlock
          metaTitle="Typography"
          headline={`Font: ${fontName}`}
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
          headline="Interactive Experiences for better learning"
          headlineSize="huge"
        >
        </TextCompositionBlock>
        <TextBlock text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'/>
        <TextBlock text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'/>        
        <TextBlock 
          className={cn(secondFont.className, ' text-xl [color:#a755da]')} 
          text='Das sollten Sie sich nicht entgehen lassen!'
        />
      </SectionDefault>

      <SectionDefault>
        <TextCompositionBlock
          metaTitle="Typography"
          headline="Interactive Experiences for better learning"
          headlineSize="huge"
        >
        </TextCompositionBlock>
        <TextBlock text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'/>
        <TextBlock text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'/>        
        <TextBlock 
          className={cn(thirdFont.className, ' text-xl [color:#a755da]')} 
          text='Das sollten Sie sich nicht entgehen lassen!'
        />
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
            <HeadlineBlock headline="Some headline (h1)" size="h1" />
            <TextBlock text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'/>
            <TextBlock text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'/>
            <HeadlineBlock headline="Some headline (h2)" size="h2" />
            <TextBlock text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'/>
            <TextBlock text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'/>
            <HeadlineBlock headline="Some headline (h3)" size="h3" />
            <TextBlock text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'/>
            <TextBlock text='This is a paragraph. Coffee shops hum with the rhythm of keyboards and quiet conversations. Ideas brew stronger than espresso, mixing creativity with the comfort of worn leather chairs and jazz melodies floating through warm air.'/>
            <HeadlineBlock headline="Some headline (h4)" size="h4" />
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
