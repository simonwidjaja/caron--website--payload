import type { Metadata } from 'next'
import React from 'react'
import { Barlow } from 'next/font/google'
import FontsExperimentBase from '../FontsExperimentBase'

const font = Barlow({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Design System | Internal',
  description: 'Internal design system documentation and component showcase',
}

export default function DesignSystemPage() {
  return (
    <FontsExperimentBase fontName="Barlow" className={font.className} />
  )
}
