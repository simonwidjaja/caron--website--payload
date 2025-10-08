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
    
    const pathSegments = pathname.split('/').filter(Boolean)
    
    // Check if first segment is a language code
    if (pathSegments[0] === 'de' || pathSegments[0] === 'en') {
      // Replace the language segment
      pathSegments[0] = lang
    } else {
      // No language segment, add it at the beginning
      pathSegments.unshift(lang)
    }
    
    const newPath = '/' + pathSegments.join('/')
    router.push(newPath)
  }
  
  return (
    <div className="flex items-center gap-2 text-sm">
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
      <span className="text-muted-foreground">/</span>
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
    </div>
  )
}
