'use client'

import React, { useState } from 'react'
import { RenderFields } from '@payloadcms/ui'
import { GroupFieldClientProps } from 'payload'

const AdvancedGroupComponent = (props: GroupFieldClientProps) => {
  const { field, permissions, path, schemaPath } = props
  const [isOpen, setIsOpen] = useState(false)
  const fields = field?.fields || []

  return (
    <div>

      {/* Group Header (open/collapse) */}
      <div style={{display: 'flex', justifyContent: 'end', marginTop: '-1.2rem', marginBottom: '-0.2rem', marginRight: '-0.3rem'}}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          title="Advanced settings"
          onMouseEnter={(evt) => evt.currentTarget.style.opacity = "1"}
          onMouseLeave={(evt) => evt.currentTarget.style.opacity = "0.5"}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            opacity: 0.5,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={14} height={14} viewBox="0 0 24 24" strokeWidth={1.1} stroke="currentColor" className="size-6"
            style={{ marginTop: '-1rem', marginBottom: '-1rem' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </button>
      </div>

      {/* Child fields */}
      {isOpen && (
        <div
          style={{
            backgroundColor: '#fBfBfB',
            border: `1px solid #DDD`,
            borderRadius: '4px',
            padding: '1rem',
            marginTop: '1rem',
            marginBottom: '2rem',
          }}
        >
          <div style={{ padding: '0.5rem' }}>
            <RenderFields
              fields={fields}
              parentPath={path}
              parentSchemaPath={schemaPath || ''}
              permissions={permissions!}
              margins="small"
              parentIndexPath=""
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default AdvancedGroupComponent
