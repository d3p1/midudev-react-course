/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {ErrorMessage} from './app/ErrorMessage.tsx'
import {Translator} from './app/Translator.tsx'

export default function App() {
  if (!window.Translator || !window.LanguageDetector) {
    return <ErrorMessage />
  }

  return <Translator/>
}
