import React from 'react'
import { Header } from '@/Header/Component'
import { Footer } from '@/Footer/Component'

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{
    lang: "de" | "en"
  }>
}

export async function generateStaticParams() {
  return [
    { lang: 'de' },
    { lang: 'en' },
  ]
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params

  return (
    <>
      <Header lang={lang} />
      {children}
      <Footer />
    </>
  )
}
