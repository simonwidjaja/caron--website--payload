'use client'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/utilities/ui'

export const LanguageSwitcher: React.FC = () => {
  const pathname = usePathname()
  const router = useRouter()

  // Determine current language from pathname
  // Check if first segment is 'de' or 'en'
  const pathSegments = pathname.split('/').filter(Boolean)
  const currentLang = (pathSegments[0] === 'de' || pathSegments[0] === 'en') ? pathSegments[0] : 'de'

  const switchLanguage = (lang: 'en' | 'de') => {
    if (lang === currentLang) return

    // Remove current language prefix if it exists
    let pathWithoutLang = pathname
    if (pathname.startsWith('/de/')) {
      pathWithoutLang = pathname.substring(3) // Remove '/de'
    } else if (pathname.startsWith('/en/')) {
      pathWithoutLang = pathname.substring(3) // Remove '/en'
    }

    // Handle root path
    if (pathWithoutLang === '/de' || pathWithoutLang === '/en') {
      pathWithoutLang = '/'
    }

    // For German (default), use path without locale prefix
    // For English, add /en prefix
    const newPath = lang === 'de' ? pathWithoutLang : `/en${pathWithoutLang}`
    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-1.5 text-sm">
      <button
        onClick={() => switchLanguage('de')}
        className={cn(
          'py-1 rounded transition-colors hover:underline',
          currentLang === 'de'
            ? 'underline xtext-primary-foreground font-semibold'
            : 'text-muted-foreground hover:text-foreground'
        )}
        aria-label="Switch to German"
      >
        DE
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => switchLanguage('en')}
        className={cn(
          'py-1 rounded transition-colors hover:underline',
          currentLang === 'en'
            ? 'underline xtext-primary-foreground font-semibold'
            : 'text-muted-foreground hover:text-foreground'
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  )
}
