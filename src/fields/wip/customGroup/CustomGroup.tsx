import { RenderFields } from '@payloadcms/ui'
import { UIFieldServerProps } from 'payload'

const CustomGroup = (props: UIFieldServerProps) => {
  const { field, permissions, path, schemaPath } = props
  const borderColor = field.admin.custom?.borderColor || '#ddd'
  const fields = field.admin.custom?.fields || []

  return (
    <div
      style={{
        border: `2px solid ${borderColor}`,
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '1rem',
      }}
    >
      {fields.length > 0 ? (
        <RenderFields
          fields={fields}
          parentPath={path}
          parentSchemaPath={schemaPath || ''}
          permissions={permissions}
          margins="small"
          parentIndexPath=""
        />
      ) : (
        <p style={{ fontStyle: 'italic', color: '#888' }}>No child fields</p>
      )}
    </div>
  )
}

export default CustomGroup
