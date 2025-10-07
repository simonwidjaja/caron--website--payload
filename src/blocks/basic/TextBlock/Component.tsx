import Text, { TextProps } from '@/components/basic/typography/Text'
import React from 'react'

export const TextBlock: React.FC<TextProps> = (props) => {
  return (
    <Text className={`TextBlock`} {...props} />
  )
}
