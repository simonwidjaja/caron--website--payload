'use client'


// NOT WORKING
// NOT WORKING
// NOT WORKING
// NOT WORKING
// NOT WORKING
// NOT WORKING
// NOT WORKING
// NOT WORKING
// NOT WORKING
// NOT WORKING
// NOT WORKING
// NOT WORKING
// NOT WORKING
// NOT WORKING
// NOT WORKING
// NOT WORKING
// NOT WORKING
// NOT WORKING
// NOT WORKING

import type { GroupFieldClientComponent } from 'payload'

// import { getTranslation } from '@payloadcms/translations'
import { groupHasName } from 'payload/shared'
import React, { useMemo } from 'react'

import { useCollapsible } from '@payloadcms/ui/elements/Collapsible'
import { ErrorPill } from '@payloadcms/ui/elements/ErrorPill'
import { RenderCustomComponent } from '@payloadcms/ui/elements/RenderCustomComponent'
import { FieldDescription } from '@payloadcms/ui/fields/FieldDescription'
import { FieldLabel } from '@payloadcms/ui/fields/FieldLabel'
import { useFormSubmitted } from '@payloadcms/ui/forms/Form'
import { RenderFields } from '@payloadcms/ui/forms/RenderFields'
import { useField } from '@payloadcms/ui/forms/useField'
import { withCondition } from '@payloadcms/ui/forms/withCondition'
import { useTranslation } from '@payloadcms/ui/providers/Translation'
import { fieldBaseClass } from '@payloadcms/ui/fields/shared'
import { GroupProvider, useGroup } from '@payloadcms/ui/fields/Group'

const baseClass = 'group-field'

export const Wip: GroupFieldClientComponent = (props) => {
  const {
    field,
    field: { admin: { className, description, hideGutter } = {}, fields, label },
    indexPath,
    parentPath,
    parentSchemaPath,
    path,
    permissions,
    readOnly,
    schemaPath: schemaPathFromProps,
  } = props

  const schemaPath =
    schemaPathFromProps ?? (field.type === 'group' && groupHasName(field) ? field.name : path)

  const { i18n } = useTranslation()
  const { isWithinCollapsible } = useCollapsible()
  const isWithinGroup = useGroup()
  const isWithinRow = false
  const isWithinTab = false

  const { customComponents: { AfterInput, BeforeInput, Description, Label } = {}, errorPaths } =
    useField({ path })

  const submitted = useFormSubmitted()
  const errorCount = errorPaths?.length || 0
  const fieldHasErrors = submitted && errorCount > 0

  const isTopLevel = !(isWithinCollapsible || isWithinGroup || isWithinRow)

  const styles = {}

  return (
    <div
      className={[
        fieldBaseClass,
        baseClass,
        isTopLevel && `${baseClass}--top-level`,
        isWithinCollapsible && `${baseClass}--within-collapsible`,
        isWithinGroup && `${baseClass}--within-group`,
        isWithinRow && `${baseClass}--within-row`,
        isWithinTab && `${baseClass}--within-tab`,
        !hideGutter && isWithinGroup && `${baseClass}--gutter`,
        fieldHasErrors && `${baseClass}--has-error`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      id={`field-${path?.replace(/\./g, '__')}`}
      style={styles}
    >
      <GroupProvider>
        <div className={`${baseClass}__wrap`}>
          {Boolean(Label || Description || label || fieldHasErrors) && (
            <div className={`${baseClass}__header`}>
              {Boolean(Label || Description || label) && (
                <header>
                  <RenderCustomComponent
                    CustomComponent={Label}
                    Fallback={
                      <h3 className={`${baseClass}__title`}>
                        <FieldLabel
                          as="span"
                          // label={getTranslation(label, i18n)}
                          label={"MISSING TRANSLATION"}
                          localized={false}
                          path={path}
                          required={false}
                        />
                      </h3>
                    }
                  />
                  <RenderCustomComponent
                    CustomComponent={Description}
                    Fallback={<FieldDescription description={description} path={path} />}
                  />
                </header>
              )}
              {fieldHasErrors && <ErrorPill count={errorCount} i18n={i18n} withMessage />}
            </div>
          )}
          {BeforeInput}
          {/* Render an unnamed group differently */}
          {groupHasName(field) ? (
            <RenderFields
              fields={fields}
              margins="small"
              parentIndexPath=""
              parentPath={path}
              parentSchemaPath={schemaPath}
              permissions={permissions === true ? permissions : permissions?.fields || {}}
              readOnly={readOnly}
            />
          ) : (
            <RenderFields
              fields={fields}
              margins="small"
              parentIndexPath={indexPath || ''}
              parentPath={parentPath || ''}
              parentSchemaPath={parentSchemaPath || ''}
              permissions={permissions || {}}
              readOnly={readOnly}
            />
          )}
        </div>
      </GroupProvider>
      {AfterInput}
    </div>
  )
}

export { GroupProvider, useGroup }

export const GroupField = withCondition(Wip)