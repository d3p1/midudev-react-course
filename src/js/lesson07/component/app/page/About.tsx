/**
 * @description About page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @todo        Improve i18n logic
 * @todo        Improve i18n types
 */
import {Link} from '../core/Link.tsx'
import type {RouteParams} from '../../../types'

type I18nItem = {[key: string]: string}

type I18n = {
  [key: string]: I18nItem
}

const i18n: I18n = {
  en: {
    title: 'About',
    link: 'Go to home',
  },
  es: {
    title: 'Sobre mí',
    link: 'Ir al inicio',
  },
}

const useI18n = function (lang: keyof I18n): I18nItem {
  return i18n[lang] ?? i18n.en
}

export default function About({routeParams}: RouteParams) {
  const i18n = useI18n(routeParams?.lang ?? 'en')

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h2 className="uppercase text-lg font-black">{i18n.title}</h2>
      <p className="italic text-sm underline">
        <Link pathname="/midudev-react-course/">{i18n.link}</Link>
      </p>
    </div>
  )
}
