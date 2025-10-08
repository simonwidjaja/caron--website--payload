import Image, { type PayloadImageSize } from '@/components/basic/media/Image'
import type { Media as MediaType } from '@/payload-types'
import React from 'react'

type ImageBlockProps = {
  image?: MediaType | string | number | null
  alt?: string
  size?: PayloadImageSize
}

export const ImageBlock: React.FC<ImageBlockProps> = ({ 
  image,
  alt,
  size = 'large',
}) => {
  // Only render if we have a valid media object
  if (!image || typeof image !== 'object') {
    return null
  }

  return (
    <div className="image-block w-full">
      <Image
        media={image}
        size={size}
        alt={alt}
        imgClassName="w-full h-auto object-cover"
      />
    </div>
  )
}
