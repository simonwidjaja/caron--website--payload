'use client'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/utilities/ui'
import { getLocalizedUrlFromHref } from '@/utilities/getLocalizedUrl'

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
    if (pathname.startsWith('/de') || pathname.startsWith('/en')) {
      pathWithoutLang = pathname.substring(3) // Remove '/de' or '/en'
    }
    
    // Use getLocalizedUrlFromHref to add the new language prefix
    const newPath = getLocalizedUrlFromHref(pathWithoutLang, lang)
    router.push(newPath)
  }
  
  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => switchLanguage('de')}
        className={cn(
          'px-2 py-1 rounded transition-colors',
          currentLang === 'de' 
            ? 'bg-primary text-primary-foreground font-semibold' 
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
          'px-2 py-1 rounded transition-colors',
          currentLang === 'en' 
            ? 'bg-primary text-primary-foreground font-semibold' 
            : 'text-muted-foreground hover:text-foreground'
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  )
}
