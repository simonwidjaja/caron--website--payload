import type { Metadata } from 'next'
import React from 'react'
import SectionDefault from '@/components/sections/SectionDefault'
import { TextCompositionBlock } from '@/blocks/basic/TextCompositionBlock/Component'
import Link from 'next/link'

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

      <SectionDefault>
        <Link href="/internal/design-system/experiments/fonts/barlow">Barlow</Link>
        <Link href="/internal/design-system/experiments/fonts/bricolage">Bricolage Grotesque</Link>
        <Link href="/internal/design-system/experiments/fonts/archivo">Archivo</Link>
        <Link href="/internal/design-system/experiments/fonts/inter">Inter</Link>
        <Link href="/internal/design-system/experiments/fonts/manrope">Manrope</Link>
        <Link href="/internal/design-system/experiments/fonts/publicSans">Public Sans</Link>
      </SectionDefault>

      <SectionDefault></SectionDefault>

    </article>
  )
}
