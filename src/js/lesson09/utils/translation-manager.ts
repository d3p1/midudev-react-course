/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {
  FromLang,
  Lang,
  TranslatorFromText,
  TranslatorToText,
} from '../types'
import {LANGUAGES, AUTO_LANGUAGE_KEY} from '../data/languages.ts'

export class TranslationManager {
  /**
   * Translate
   *
   * @param   {FromLang}           fromLang
   * @param   {Lang}               toLang
   * @param   {TranslatorFromText} text
   * @returns Promise<string>
   * @throws  {Error}
   */
  static async translate(
    fromLang: FromLang,
    toLang: Lang,
    text: TranslatorFromText,
  ): Promise<TranslatorToText> {
    if (fromLang === AUTO_LANGUAGE_KEY) {
      fromLang = await this.detectLanguage(text)
    }

    if (fromLang === toLang) {
      return text
    }

    const translator = await window.Translator.create({
      sourceLanguage: fromLang,
      targetLanguage: toLang,
    })

    const result = await translator.translate(text)

    if (!result) {
      throw new Error('It was not possible to do the translation.')
    }

    return result
  }

  /**
   * Detect language
   *
   * @param   {TranslatorFromText} fromText
   * @returns {Promise<string>}
   * @throws  {Error}
   */
  static async detectLanguage(fromText: TranslatorFromText): Promise<Lang> {
    const detector = await window.LanguageDetector.create({
      expectedInputLanguages: Object.keys(LANGUAGES),
    })
    const result = await detector.detect(fromText)

    if (!result?.length) {
      throw new Error('It was not possible to detect source language.')
    }

    return result[0]?.detectedLanguage
  }
}
