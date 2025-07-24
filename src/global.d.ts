/**
 * @description Global declarations
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export {}

declare global {
  interface Window {
    Translator: any
    LanguageDetector: any
  }

  interface Array<T> {
    toSorted: (sorter: (a: T, b: T) => number) => Array<T>
  }
}
