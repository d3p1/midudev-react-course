/**
 * @description Translator context
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {createContext, type ReactNode} from 'react'

export const TranslatorContext = createContext<{
  translations: {[key: string]: {[key: string]: string}}
}>({
  translations: {},
})

export function TranslatorProvider({children}: {children: ReactNode}) {
  const translations = {
    en: {
      ['About']: 'About',
      ['Go to home']: 'Go to home',
    },
    es: {
      ['About']: 'Sobre mí',
      ['Go to home']: 'Ir al inicio',
    },
  }

  return (
    <TranslatorContext.Provider value={{translations}}>
      {children}
    </TranslatorContext.Provider>
  )
}
