/**
 * @description Custom hook to handle translator reducer
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useReducer} from 'react'
import {LANGUAGES} from '../data/languages.ts'
import {
  TRANSLATOR_ACTION_TYPE,
  translatorReducer,
} from '../reducer/translator.ts'
import type {FromLang, Lang} from '../types'

export const useTranslatorReducer = () => {
  const [state, dispatch] = useReducer(translatorReducer, {
    fromLang: LANGUAGES.en.key,
    toLang: LANGUAGES.es.key,
    fromText: '',
    toText: '',
    isLoading: false,
  })

  const handleSetFromLang = (lang: FromLang) => {
    dispatch({
      type: TRANSLATOR_ACTION_TYPE.SET_FROM_LANG,
      payload: lang,
    })
  }

  const handleSetToLang = (lang: Lang) => {
    dispatch({
      type: TRANSLATOR_ACTION_TYPE.SET_TO_LANG,
      payload: lang,
    })
  }

  const handleInterchange = () => {
    dispatch({
      type: TRANSLATOR_ACTION_TYPE.INTERCHANGE,
      payload: null,
    })
  }

  const handleSetFromText = (text: string) => {
    dispatch({
      type: TRANSLATOR_ACTION_TYPE.SET_FROM_TEXT,
      payload: text,
    })
  }

  const handleSetToText = (text: string) => {
    dispatch({
      type: TRANSLATOR_ACTION_TYPE.SET_TO_TEXT,
      payload: text,
    })
  }

  return {
    state,
    handleSetFromLang,
    handleSetToLang,
    handleInterchange,
    handleSetFromText,
    handleSetToText,
  }
}
