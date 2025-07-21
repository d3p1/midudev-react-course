/**
 * @description Translation area
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as React from 'react'

interface Props {
  value: string
  placeholder: string
  onChange: (value: string) => void
  isDisabled?: boolean
  isAutoFocus?: boolean
}

export const TranslationArea: React.FC<Props> = ({
  placeholder,
  value,
  onChange,
  isDisabled = false,
  isAutoFocus = false,
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  return (
    <textarea
      name="translation-area"
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      className="p-8 border-primary-700 border-solid border-2 rounded-2xl resize-none"
      disabled={isDisabled}
      autoFocus={isAutoFocus}
    ></textarea>
  )
}
