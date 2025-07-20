/**
 * @description Lang selector
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as React from 'react'
import {AUTO_LANGUAGE, LANGUAGES} from '../../data/languages.ts'
import type {FromLang, Lang} from '../../types'

export const FROM_TYPE = 'from'
export const TO_TYPE = 'to'

type Props =
  | {
      type: typeof FROM_TYPE
      value: FromLang
      onChange: (lang: FromLang) => void
    }
  | {type: typeof TO_TYPE; value: Lang; onChange: (lang: Lang) => void}

export const LangSelector: React.FC<Props> = ({type, value, onChange}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Lang)
  }

  return (
    <select
      value={value}
      onChange={handleOnChange}
      className="bg-transparent text-secondary p-2 rounded-lg"
    >
      {type === FROM_TYPE && (
        <option value={AUTO_LANGUAGE} className="bg-primary-800">
          Auto
        </option>
      )}

      {Object.entries(LANGUAGES).map(([_, {key, label}]) => {
        return (
          <option key={key} value={key} className="bg-primary-800">
            {label}
          </option>
        )
      })}
    </select>
  )
}
