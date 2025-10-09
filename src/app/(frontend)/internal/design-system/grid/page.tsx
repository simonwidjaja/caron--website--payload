import type { Metadata } from 'next'
import React from 'react'
import SectionDefault from '@/components/sections/SectionDefault'
import { TextCompositionBlock } from '@/blocks/basic/TextCompositionBlock/Component'
import { BackLink } from '../shared/DsNav'

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
          metaTitle="Caron Design System"
          headline="The Grid"
          headlineSize="h1"
          body="This page demonstrates the grid layout styles used in the Caron design system. It includes examples of different grid configurations and usage."
        >
        </TextCompositionBlock>
      </SectionDefault>
      
      <SectionDefault></SectionDefault>

      <SectionDefault>
        <TextCompositionBlock
          metaTitle="Grid"
          headline="The Default Grid"
          headlineSize="h2"
        >
        </TextCompositionBlock>
      </SectionDefault>

    </article>
  )
}
