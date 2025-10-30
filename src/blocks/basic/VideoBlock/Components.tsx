import React from 'react'
import Video from '@/components/basic/media/Video'
import AdvancedHelper from '@/fields/cms/advancedGroupField/AdvancedHelper'
import type { AdvancedGroupField } from '@/payload-types'

interface VideoBlockProps {
  sourceType: 'internal' | 'external'
  video?: {
    url: string
    filename: string
  }
  externalUrl?: string
  poster?: {
    url: string
    filename: string
  }
  metaTitle?: string
  title?: string
  icon?: {
    url: string
    filename: string
  }
  advanced?: AdvancedGroupField
}

export const VideoBlock: React.FC<VideoBlockProps> = ({ sourceType, video, externalUrl, poster, metaTitle, title, icon, advanced }) => {
  const source = sourceType === 'internal' && video ? video.url : externalUrl || ''

  return (
    <>
      <div 
        id={AdvancedHelper.advancedId(advanced)}
        className={AdvancedHelper.advancedClassName(advanced)}
      >
        <Video
          source={source}
          poster={poster?.url}
          metaTitle={metaTitle}
          title={title}
          icon={icon ? <img src={icon.url} alt="Icon" className="w-14 h-10" /> : undefined}
        />
      </div>
      {AdvancedHelper.advancedStyles(advanced)}
    </>
  )
}
