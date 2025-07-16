/**
 * @description Use translator custom hook
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useContext} from 'react'
import {TranslatorContext} from '../context/translator.tsx'

export function useTranslator({lang}: {lang: string}) {
  const {translations} = useContext(TranslatorContext)

  if (!translations) {
    throw new Error('useTranslator should be used inside a TranslatorProvider.')
  }

  return translations[lang]
}
