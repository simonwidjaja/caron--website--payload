import { Media } from '@/components/Media'
import type { Media as MediaType } from '@/payload-types'
import React from 'react'

type ImageBlockProps = {
  image?: MediaType | string | number | null
  alt?: string
}

export const ImageBlock: React.FC<ImageBlockProps> = ({ 
  image,
  alt,
}) => {
  if (!image) {
    return null
  }

  return (
    <div className="image-block">
      <Media
        resource={image}
        size="square"
        alt={alt}
        className="w-full"
        imgClassName="w-full h-auto object-cover"
      />
    </div>
  )
}
