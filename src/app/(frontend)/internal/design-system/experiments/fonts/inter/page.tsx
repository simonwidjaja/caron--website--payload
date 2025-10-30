import type { Metadata } from 'next'
import React from 'react'
import { Inter } from 'next/font/google'
import FontsExperimentBase from '../FontsExperimentBase'

const font = Inter({
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
    <FontsExperimentBase fontName="Inter" className={font.className} />
  )
}
