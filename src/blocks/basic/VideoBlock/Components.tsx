import React from 'react'
import Video from '@/components/basic/media/Video'

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
}

export const VideoBlock: React.FC<VideoBlockProps> = ({ sourceType, video, externalUrl, poster, metaTitle, title, icon }) => {
  const source = sourceType === 'internal' && video ? video.url : externalUrl || ''

  return (
    <Video
      source={source}
      poster={poster?.url}
      metaTitle={metaTitle}
      title={title}
      icon={icon ? <img src={icon.url} alt="Icon" className="w-14 h-10" /> : undefined}
    />
  )
}
