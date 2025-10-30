import Image, { type PayloadImageSize } from '@/components/basic/media/Image'
import type { Media as MediaType, AdvancedGroupField } from '@/payload-types'
import AdvancedHelper from '@/fields/cms/advancedGroupField/AdvancedHelper'
import React from 'react'

type ImageBlockProps = {
  image?: MediaType | string | number | null
  alt?: string
  size?: PayloadImageSize
  maxWidth?: number | null
  maxHeight?: number | null
  advanced?: AdvancedGroupField
}

export const ImageBlock: React.FC<ImageBlockProps> = ({ 
  image,
  alt,
  size = 'large',
  maxWidth,
  maxHeight,
  advanced,
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
    <>
      <div 
        id={AdvancedHelper.advancedId(advanced)}
        className={`image-block w-full ${AdvancedHelper.advancedClassName(advanced)}`}
        style={Object.keys(containerStyle).length > 0 ? containerStyle : undefined}
      >
        <Image
          media={image}
          size={size}
          alt={alt}
          imgClassName="w-full h-auto object-cover"
        />
      </div>
      {AdvancedHelper.advancedStyles(advanced)}
    </>
  )
}
