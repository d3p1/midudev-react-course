/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useTranslatorReducer} from '../hook/useTranslatorReducer.ts'
import {InterchangeIcon} from './app/icon/InterchangeIcon.tsx'
import {FROM_TYPE, TO_TYPE, LangSelector} from './app/LangSelector.tsx'

export default function App() {
  const {state, handleSetFromLang, handleSetToLang, handleInterchange} =
    useTranslatorReducer()

  return (
    <div className="grid grid-rows-[1fr_4fr] place-items-stretch gap-5 w-1/2">
      <div className="grid grid-cols-3 place-items-center p-8 bg-primary-800 inset-shadow-[black_0_0_2rem] rounded-2xl">
        <LangSelector
          type={FROM_TYPE}
          value={state.fromLang}
          onChange={handleSetFromLang}
        />
        <button className="cursor-pointer" onClick={handleInterchange}>
          <InterchangeIcon />
        </button>
        <LangSelector
          type={TO_TYPE}
          value={state.toLang}
          onChange={handleSetToLang}
        />
      </div>
      <div className="grid grid-cols-2 place-items-stretch p-8 gap-4 bg-primary-800 inset-shadow-[black_0_0_2rem] rounded-2xl italic">
        <textarea
          name="from-text"
          value="From text..."
          className="p-8 border-primary-700 border-solid border-2 rounded-2xl"
        ></textarea>
        <textarea
          name="to-text"
          value="To text..."
          className="p-8 border-primary-700 border-solid border-2 rounded-2xl"
        ></textarea>
      </div>
    </div>
  )
}
