import Image, { type PayloadImageSize } from '@/components/basic/media/Image'
import type { Media as MediaType } from '@/payload-types'
import React from 'react'

type ImageBlockProps = {
  image?: MediaType | string | number | null
  alt?: string
  size?: PayloadImageSize
  maxWidth?: number | null
  maxHeight?: number | null
}

export const ImageBlock: React.FC<ImageBlockProps> = ({ 
  image,
  alt,
  size = 'large',
  maxWidth,
  maxHeight,
}) => {
  // Only render if we have a valid media object
  if (!image || typeof image !== 'object') {
    return null
  }

  // Build inline styles for max dimensions
  const containerStyle: React.CSSProperties = {}
  if (maxWidth) {
    containerStyle.maxWidth = `${maxWidth}px`
  }
  if (maxHeight) {
    containerStyle.maxHeight = `${maxHeight}px`
  }

  return (
    <div 
      className="image-block w-full" 
      style={Object.keys(containerStyle).length > 0 ? containerStyle : undefined}
    >
      <Image
        media={image}
        size={size}
        alt={alt}
        imgClassName="w-full h-auto object-cover"
      />
    </div>
  )
}
