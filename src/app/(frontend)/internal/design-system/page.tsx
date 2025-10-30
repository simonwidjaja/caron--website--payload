import type { Metadata } from 'next'
import React from 'react'
import SectionDefault from '@/components/sections/SectionDefault'
import { TextCompositionBlock } from '@/blocks/basic/TextCompositionBlock/Component'
import { Toc } from './shared/DsNav'

export const metadata: Metadata = {
  title: 'Design System | Internal',
  description: 'Internal design system documentation and component showcase',
}

export default function DesignSystemPage() {
  return (
    <article className="">

      <SectionDefault>
        <TextCompositionBlock
          metaTitle="Caron Design System"
          headline="Typography"
          headlineSize="h1"
          body="This page demonstrates the typography styles used in the Caron design system. It includes examples of different headline sizes and body text styles."
        >
        </TextCompositionBlock>
      </SectionDefault>

      <SectionDefault></SectionDefault>

      <Toc />

      <SectionDefault></SectionDefault>

    </article>
  )
}
