/**
 * @description About page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useTranslator} from '../../../hook/useTranslator.ts'
import {Link} from '../core/Link.tsx'
import type {RouteParams} from '../../../types'

export default function About({routeParams}: RouteParams) {
  const lang = routeParams?.lang ?? 'en'
  const translations = useTranslator({lang})

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h2 className="uppercase text-lg font-black">{translations['About']}</h2>
      <p className="italic text-sm underline">
        <Link pathname="/midudev-react-course/">
          {translations['Go to home']}
        </Link>
      </p>
    </div>
  )
}
