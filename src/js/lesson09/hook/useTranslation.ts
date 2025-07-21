/**
 * @description Custom hook to manage translations
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useEffect} from 'react'
import {TranslationManager} from '../utils/translation-manager.ts'
import type {
  TranslatorFromText,
  FromLang,
  Lang,
  TranslatorToText,
} from '../types'
import {useDebounce} from './useDebounce.ts'

export const useTranslation: (param: {
  fromText: TranslatorFromText
  fromLang: FromLang
  toLang: Lang
  handleSetToText: (toText: TranslatorToText) => void
}) => void = ({fromText, fromLang, toLang, handleSetToText}) => {
  const debouncedFromText = useDebounce(fromText)

  useEffect(() => {
    if (!debouncedFromText) {
      return
    }

    handleSetToText('Loading...')
    TranslationManager.translate(fromLang, toLang, debouncedFromText)
      .then((result) => handleSetToText(result))
      .catch((e) => {
        console.error(e)
        handleSetToText('Translation failed.')
      })
  }, [debouncedFromText, fromLang, toLang])
}
