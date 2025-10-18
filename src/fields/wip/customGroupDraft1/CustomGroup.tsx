import { RenderFields } from '@payloadcms/ui'
import type { GroupFieldServerComponent } from 'payload'
import CollapsibleClient from './CollapsibleClient'

// Server component: can work with full server-side Field definitions (validators/hooks allowed)
export const CustomGroup: GroupFieldServerComponent = (props) => {
  const { field, permissions, path, schemaPath, readOnly } = props

  const renderLabel = () => {
    if (!field?.label) return ''
    if (typeof field.label === 'string') return field.label
    if (typeof field.label === 'object') {
      const vals = Object.values(field.label as Record<string, any>)
      return vals[0] ?? ''
    }
    try {
      return String(field.label)
    } catch {
      return ''
    }
  }

  const label = renderLabel()

  const initCollapsed = (field as any)?.admin?.initCollapsed

  const targetId = `custom-group-${path.replace(/\./g, '-')}`

  return (
    <>
      <CollapsibleClient label={label} initialOpen={!initCollapsed} targetId={targetId} />

      <div
        id={targetId}
        style={{
          border: `2px solid #BADA55`,
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
        {label ? (
          <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#BADA55' }}>{label}</div>
        ) : null}

        {field.fields && field.fields.length > 0 ? (
          (() => {

            // NOT IDEAL : IS THIS SAFE?
            // NOT IDEAL : IS THIS SAFE?
            // NOT IDEAL : IS THIS SAFE?

            // sanitize fields by removing functions so they can be safely passed to client components
            const sanitize = (v: any): any => {
              if (v === null || v === undefined) return v
              if (typeof v === 'function') return undefined
              if (typeof v !== 'object') return v
              if (Array.isArray(v)) return v.map(sanitize).filter((x) => x !== undefined)
              const out: any = {}
              for (const [k, val] of Object.entries(v)) {
                const s = sanitize(val)
                if (s !== undefined) out[k] = s
              }
              return out
            }

            const safeFields = sanitize(field.fields) as any

            return (
              <RenderFields
                // client RenderFields expects client-safe props
                fields={safeFields}
                // fields={field.fields}
                parentPath={path}
                parentSchemaPath={schemaPath || ''}
                permissions={permissions}
                readOnly={readOnly}
                margins="small"
                parentIndexPath={''}  // Is this safe? <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
              />
            )
          })()
        ) : (
          <p style={{ fontStyle: 'italic', color: '#888' }}>No child fields</p>
        )}
      </div>
    </>
  )
}

export default CustomGroup

