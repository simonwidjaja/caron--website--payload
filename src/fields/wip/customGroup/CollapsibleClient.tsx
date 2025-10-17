"use client"

import React from 'react'

type Props = {
  label?: string
  initialOpen?: boolean
  // id of the server-rendered element this toggle should control
  targetId: string
}

const CollapsibleClient = ({ label, initialOpen = true, targetId }: Props) => {
  const [open, setOpen] = React.useState(initialOpen)

  React.useEffect(() => {
    const el = document.getElementById(targetId)
    if (!el) return
    el.style.display = open ? '' : 'none'
  }, [open, targetId])

  // set initial visibility on mount
  React.useEffect(() => {
    const el = document.getElementById(targetId)
    if (!el) return
    el.style.display = initialOpen ? '' : 'none'
  }, [initialOpen, targetId])

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls={targetId}
        onClick={() => setOpen((s) => !s)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setOpen((s) => !s)
          }
        }}
        style={{ textAlign: 'right', cursor: 'pointer', marginBottom: '0.2rem' }}
      >
        [{open ? '-' : '+'}] {label}
      </div>
    </div>
  )
}

export default CollapsibleClient
