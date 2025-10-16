import type { Metadata } from 'next'
import React from 'react'
import { Inter_Tight } from 'next/font/google'
import FontsExperimentBase from '../FontsExperimentBase'

const font = Inter_Tight({
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
    <FontsExperimentBase fontName="Inter Tight" className={font.className} />
  )
}
