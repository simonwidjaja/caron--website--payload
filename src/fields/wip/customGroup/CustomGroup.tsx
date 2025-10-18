'use client'

import React, { useState } from 'react'
import { RenderFields } from '@payloadcms/ui'
import { GroupFieldClientProps } from 'payload'

const CustomGroup = (props: GroupFieldClientProps) => {
  const { field, permissions, path, schemaPath } = props
  const [isOpen, setIsOpen] = useState(true)
  const borderColor = field.admin?.custom?.borderColor || '#ddd'
  const fields = field?.fields || []

  return (
    <div
      style={{
        border: `2px solid ${borderColor}`,
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '1rem',
      }}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 600,
          marginBottom: '0.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        {isOpen ? '▼ Collapse Group' : '▶ Expand Group'}
      </button>

      {isOpen && (
        <RenderFields
          fields={fields}
          parentPath={path}
          parentSchemaPath={schemaPath || ''}
          permissions={permissions!}
          margins="small"
          parentIndexPath=""
        />
      )}
    </div>
  )
}

export default CustomGroup
