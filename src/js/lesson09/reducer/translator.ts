/**
 * @description Translator reducer
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {AUTO_LANGUAGE} from '../data/languages.ts'
import type {Translator, TranslatorReducerAction} from '../types'

export const TRANSLATOR_ACTION_TYPE = {
  SET_FROM_LANG: 'set_from_lang',
  SET_TO_LANG: 'set_to_lang',
  INTERCHANGE: 'interchange',
  SET_FROM_TEXT: 'set_from_text',
  SET_TO_TEXT: 'set_to_text',
} as const

export const translatorReducer: (
  state: Translator,
  action: TranslatorReducerAction,
) => Translator = (state, action) => {
  const {type, payload} = action

  switch (type) {
    case TRANSLATOR_ACTION_TYPE.SET_FROM_LANG:
      return {
        ...state,
        fromLang: payload,
      }

    case TRANSLATOR_ACTION_TYPE.SET_TO_LANG:
      return {
        ...state,
        toLang: payload,
      }

    case TRANSLATOR_ACTION_TYPE.INTERCHANGE:
      if (state.fromLang === AUTO_LANGUAGE) {
        return state
      }

      return {
        ...state,
        fromLang: state.toLang,
        toLang: state.fromLang,
      }

    case TRANSLATOR_ACTION_TYPE.SET_FROM_TEXT:
      return {
        ...state,
        fromText: payload,
        isLoading: true,
      }

    case TRANSLATOR_ACTION_TYPE.SET_TO_TEXT:
      return {
        ...state,
        toText: payload,
        isLoading: false,
      }
  }

  return state
}
