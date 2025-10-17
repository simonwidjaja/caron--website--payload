'use client'

import React from 'react'

import { RenderFields } from '@payloadcms/ui'

// Client component: receives client-safe field definitions and handles interactions
export const CustomGroup = (props: any) => {
  const { field, permissions, path, schemaPath, value, setValue, readOnly, indexPath, errors } = props
  const [open, setOpen] = React.useState(true)

  return (
    <>
    <div onClick={() => setOpen(!open)} style={{ textAlign: 'right', cursor: 'pointer', marginBottom: '0.2rem' }}>[{open ? '-' : '+'}] {field.label}</div>
    {!open
      ? ''
      : 
      <div
        style={{
          border: `2px solid #BADA55`,
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#BADA55' }}>{field.label}</div>

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
      }
    </>
  )
}

export default CustomGroup

