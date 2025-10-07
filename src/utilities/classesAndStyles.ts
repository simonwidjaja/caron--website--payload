/**
 * Utility functions for working with classesAndStyles field data
 */

type ClassesAndStylesData = {
  cssId?: string
  cssClasses?: string
}

/**
 * Applies classes and styles from the classesAndStyles field to a React element
 */
export function applyClassesAndStyles(
  classesAndStyles?: ClassesAndStylesData,
  baseClassName?: string
): {
  id?: string
  className?: string
} {
  const className = [baseClassName, classesAndStyles?.cssClasses]
    // .filter(Boolean)
    .join(' ')
    .trim()
  
  return {
    id: classesAndStyles?.cssId || undefined,
    className: className || undefined,
  }
}

