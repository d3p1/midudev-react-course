/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {LANGUAGES, AUTO_LANGUAGE_KEY} from '../data/languages.ts'
import {TRANSLATOR_ACTION_TYPE} from '../reducer/translator.ts'

export type Lang = (typeof LANGUAGES)[keyof typeof LANGUAGES]['key']
export type FromLang = Lang | typeof AUTO_LANGUAGE_KEY

export interface Translator {
  fromLang: FromLang
  toLang: Lang
  fromText: string
  toText: string
}

export type TranslatorFromText = Pick<Translator, 'fromText'>['fromText']
export type TranslatorToText = Pick<Translator, 'toText'>['toText']

export type TranslatorReducerAction =
  | {type: (typeof TRANSLATOR_ACTION_TYPE)['SET_FROM_LANG']; payload: FromLang}
  | {type: (typeof TRANSLATOR_ACTION_TYPE)['SET_TO_LANG']; payload: Lang}
  | {type: (typeof TRANSLATOR_ACTION_TYPE)['INTERCHANGE']; payload: null}
  | {
      type: (typeof TRANSLATOR_ACTION_TYPE)['SET_FROM_TEXT']
      payload: TranslatorFromText
    }
  | {
      type: (typeof TRANSLATOR_ACTION_TYPE)['SET_TO_TEXT']
      payload: TranslatorToText
    }
  | {type: any; payload: any}

export enum FromElementType {
  From = 'from',
  To = 'to',
}
