/**
 * @description Lang selector
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as React from 'react'
import {AUTO_LANGUAGE_KEY, LANGUAGES} from '../../../data/languages.ts'
import {type FromLang, type Lang, FromElementType} from '../../../types'

type Props =
  | {
      type: FromElementType.From
      value: FromLang
      onChange: (lang: FromLang) => void
    }
  | {type: FromElementType.To; value: Lang; onChange: (lang: Lang) => void}

export const LangSelector: React.FC<Props> = ({type, value, onChange}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Lang)
  }

  return (
    <select
      name="language-selector"
      value={value}
      onChange={handleOnChange}
      className="bg-transparent text-secondary p-2 rounded-lg"
    >
      {type === FromElementType.From && (
        <option value={AUTO_LANGUAGE_KEY} className="bg-primary-800">
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
