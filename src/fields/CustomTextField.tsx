'use client'

import React, { useState } from 'react'
import { useField } from '@payloadcms/ui'

type CustomTextFieldProps = {
  path: string
  label?: string
  required?: boolean
  borderLeftColor?: string
  maxLength?: number
  placeholder?: string
  description?: string
}

export const CustomTextField: React.FC<CustomTextFieldProps> = (props) => {
  const { 
    path, 
    label = 'Custom Text Field', 
    required = false,
    borderLeftColor = '#3b82f6',
    maxLength = 100,
    placeholder = 'Enter your custom text...',
    description = 'This is a custom field with enhanced UI and character counting'
  } = props
  
  const { value, setValue } = useField<string>({ path })
  const [isFocused, setIsFocused] = useState(false)
  const [charCount, setCharCount] = useState(value?.length || 0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    setCharCount(newValue.length)
  }

  const isNearLimit = charCount >= maxLength * 0.8
  const isOverLimit = charCount > maxLength

  return (
    <div className="custom-text-field">
      <div className="field-wrapper">
        <label 
          htmlFor={path} 
          className={`field-label ${required ? 'required' : ''}`}
        >
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
        
        <div className={`input-wrapper ${isFocused ? 'focused' : ''} ${isOverLimit ? 'error' : ''}`}>
          <input
            id={path}
            type="text"
            value={value || ''}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="custom-input"
            maxLength={maxLength + 10} // Allow slight overflow for better UX
            style={{ borderLeft: `4px solid ${borderLeftColor}` }}
          />
          
          <div className="input-decorations">
            <div className="char-counter-wrapper">
              <span 
                className={`char-counter ${isNearLimit ? 'warning' : ''} ${isOverLimit ? 'error' : ''}`}
              >
                {charCount}/{maxLength}
              </span>
            </div>
            
            {isFocused && (
              <div className="focus-indicator">
                <div className="focus-dot"></div>
              </div>
            )}
          </div>
        </div>

        {isOverLimit && (
          <div className="error-message">
            Text exceeds maximum length of {maxLength} characters
          </div>
        )}
        
        <div className="field-description">
          {description}
        </div>
      </div>

        {/* SCOPED !!!! */}
      <style jsx>{`
        .custom-text-field {
          margin: 1rem 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .field-wrapper {
          position: relative;
        }

        .field-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
          transition: color 0.2s ease;
        }

        .field-label.required {
          color: #1f2937;
        }

        .required-asterisk {
          color: #ef4444;
          margin-left: 0.25rem;
        }

        .input-wrapper {
          position: relative;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
          background: #ffffff;
        }

        .input-wrapper.focused {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .input-wrapper.error {
          border-color: #ef4444;
        }

        .custom-input {
          width: 100%;
          padding: 0.75rem 1rem;
          padding-right: 4rem;
          border: none;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          background: transparent;
          outline: none;
          color: #1f2937;
        }

        .custom-input::placeholder {
          color: #9ca3af;
        }

        .input-decorations {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .char-counter-wrapper {
          display: flex;
          align-items: center;
        }

        .char-counter {
          font-size: 0.75rem;
          color: #6b7280;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .char-counter.warning {
          color: #f59e0b;
        }

        .char-counter.error {
          color: #ef4444;
        }

        .focus-indicator {
          display: flex;
          align-items: center;
        }

        .focus-dot {
          width: 6px;
          height: 6px;
          background: #3b82f6;
          border-radius: 50%;
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2);
          }
        }

        .error-message {
          margin-top: 0.5rem;
          font-size: 0.75rem;
          color: #ef4444;
          font-weight: 500;
        }

        .field-description {
          margin-top: 0.5rem;
          font-size: 0.75rem;
          color: #6b7280;
          font-style: italic;
        }

        /* Dark theme support */
        @media (prefers-color-scheme: dark) {
          .field-label {
            color: #f3f4f6;
          }
          
          .input-wrapper {
            border-color: #4b5563;
            background: #1f2937;
          }
          
          .custom-input {
            color: #f3f4f6;
          }
          
          .custom-input::placeholder {
            color: #6b7280;
          }
        }
      `}</style>
    </div>
  )
}
