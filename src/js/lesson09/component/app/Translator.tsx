/**
 * @description Translator
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useTranslation} from '../../hook/useTranslation.ts'
import {useTranslatorReducer} from '../../hook/useTranslatorReducer.ts'
import {FromElementType} from '../../types'
import {CopyIcon} from './translator/icon/CopyIcon.tsx'
import {InterchangeIcon} from './translator/icon/InterchangeIcon.tsx'
import {SpeakerIcon} from './translator/icon/SpeakerIcon.tsx'
import {LangSelector} from './translator/LangSelector.tsx'
import {TranslationArea} from './translator/TranslationArea.tsx'
import {SPEECH_LANGUAGES, AUTO_LANGUAGE_KEY} from '../../data/languages.ts'

export const Translator = () => {
  const {
    state,
    handleSetFromLang,
    handleSetToLang,
    handleInterchange,
    handleSetFromText,
    handleSetToText,
  } = useTranslatorReducer()

  useTranslation({
    fromText: state.fromText,
    fromLang: state.fromLang,
    toLang: state.toLang,
    handleSetToText,
  })

  return (
    <div className="grid grid-rows-[1fr_4fr] place-items-stretch gap-5 w-1/2">
      <div className="grid grid-cols-3 place-items-center p-8 bg-primary-800 inset-shadow-[black_0_0_2rem] rounded-2xl">
        <LangSelector
          type={FromElementType.From}
          value={state.fromLang}
          onChange={handleSetFromLang}
        />
        <button
          className="cursor-pointer"
          onClick={handleInterchange}
          disabled={state.fromLang === AUTO_LANGUAGE_KEY}
        >
          <InterchangeIcon />
        </button>
        <LangSelector
          type={FromElementType.To}
          value={state.toLang}
          onChange={handleSetToLang}
        />
      </div>
      <div className="grid grid-cols-2 place-items-stretch p-8 gap-4 bg-primary-800 inset-shadow-[black_0_0_2rem] rounded-2xl italic">
        <TranslationArea
          value={state.fromText}
          placeholder="Enter text..."
          onChange={handleSetFromText}
          isAutoFocus={true}
        />
        <div className="relative w-full">
          <TranslationArea
            value={state.toText}
            placeholder="Translation..."
            onChange={handleSetToText}
            isDisabled={true}
          >
            <button
              onClick={() => navigator.clipboard.writeText(state.toText)}
              className="absolute bottom-5 right-5 cursor-pointer"
            >
              <CopyIcon />
            </button>
            <button
              onClick={() => {
                const utterance = new SpeechSynthesisUtterance(state.toText)
                utterance.lang = SPEECH_LANGUAGES[state.toLang]
                speechSynthesis.speak(utterance)
              }}
              className="absolute bottom-5 right-20 cursor-pointer"
            >
              <SpeakerIcon />
            </button>
          </TranslationArea>
        </div>
      </div>
    </div>
  )
}
