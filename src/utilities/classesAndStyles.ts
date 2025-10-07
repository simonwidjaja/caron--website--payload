/**
 * Utility functions for working with classesAndStyles field data
 */

type ClassesAndStylesData = {
  classes?: string
  styles?: string
}

/**
 * Applies classes and styles from the classesAndStyles field to a React element
 */
export function applyClassesAndStyles(
  classesAndStyles?: ClassesAndStylesData,
  baseClassName?: string
): {
  className?: string
  style?: React.CSSProperties
} {
  const className = [baseClassName, classesAndStyles?.classes]
    .filter(Boolean)
    .join(' ')
    .trim()

  let style: React.CSSProperties | undefined

  if (classesAndStyles?.styles) {
    try {
      style = JSON.parse(classesAndStyles.styles)
    } catch (e) {
      console.warn('Invalid JSON in styles field:', classesAndStyles.styles)
    }
  }

  return {
    className: className || undefined,
    style,
  }
}

/**
 * Hook for applying classes and styles with better ergonomics
 */
export function useClassesAndStyles(
  classesAndStyles?: ClassesAndStylesData,
  baseClassName?: string
) {
  return applyClassesAndStyles(classesAndStyles, baseClassName)
}

/**
 * Validates if styles string is valid JSON
 */
export function validateStylesJSON(styles: string): boolean {
  if (!styles || styles.trim() === '') return true
  try {
    JSON.parse(styles)
    return true
  } catch {
    return false
  }
}

/**
 * Safely parses styles JSON with fallback
 */
export function parseStyles(styles?: string): React.CSSProperties {
  if (!styles) return {}
  try {
    return JSON.parse(styles)
  } catch {
    return {}
  }
}
