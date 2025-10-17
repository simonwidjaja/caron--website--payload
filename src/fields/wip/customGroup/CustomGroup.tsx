'use client'

import React from 'react'

import { RenderFields } from '@payloadcms/ui'

// Client component: receives client-safe field definitions and handles interactions
export const CustomGroup = (props: any) => {
  const { field, permissions, path, schemaPath, value, setValue, readOnly, indexPath, errors } = props

  const renderLabel = () => {
    if (!field.label) return null
    if (typeof field.label === 'string') return field.label
    if (typeof field.label === 'object') {
      // attempt to pick the first locale/string value
      const vals = Object.values(field.label as Record<string, any>)
      return vals[0] ?? ''
    }
    // fallback for functions or other types
    try {
      // don't call unknown functions — just stringify
      return String(field.label)
    } catch {
      return ''
    }
  }

  return (
    <div
      style={{
        border: `2px solid #BADA55`,
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '1rem',
      }}
    >
      {(() => {
        const lbl = renderLabel()
        return lbl ? (
          <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#BADA55' }}>{lbl}</div>
        ) : null
      })()}

      {field.fields && field.fields.length > 0 ? (
        (() => {
          const ClientRenderFields: any = RenderFields
          return (
            <ClientRenderFields
              // client RenderFields expects client-safe props
              fields={field.fields as unknown as any}
              parentPath={path}
              parentSchemaPath={schemaPath || ''}
              permissions={permissions}
              readOnly={readOnly}
              value={value}
              setValue={setValue}
              errors={errors}
              margins="small"
              indexPath={indexPath || ''}
            />
          )
        })()
      ) : (
        <p style={{ fontStyle: 'italic', color: '#888' }}>No child fields</p>
      )}
    </div>
  )
}

export default CustomGroup

