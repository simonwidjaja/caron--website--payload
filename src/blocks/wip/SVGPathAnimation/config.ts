import type { Block } from 'payload'

export const SVGPathAnimationConfig: Block = {
  slug: 'svgPathAnimation',
  interfaceName: 'SVGPathAnimationBlock',
  fields: [
    {
      name: 'className',
      type: 'text',
      label: 'CSS Classes',
      admin: {
        description: 'Optional CSS classes to apply to the SVG container',
      },
    },
  ],
}
