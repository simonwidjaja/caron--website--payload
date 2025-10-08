import React from 'react'

type SpacerBlockProps = {
  size: '1px' | '2px' | '3px' | '5px' | '10px' | '20px' | '30px' | '40px' | '50px' | '80px' | '100px'
}

export const SpacerBlock: React.FC<SpacerBlockProps> = ({ size = '20px' }) => {
  return (
    <div 
      style={{ height: size }} 
      aria-hidden="true"
      className="w-full"
    />
  )
}
