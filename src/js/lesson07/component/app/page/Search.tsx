/**
 * @description Search page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Link} from '../Router.tsx'
import type {RouteParams} from '../../../types'

export default function Search({routeParams}: RouteParams) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2 className="uppercase text-lg font-black">
        Search {routeParams?.query}
      </h2>
      <p className="text-sm italic underline">
        <Link pathname="/midudev-react-course/">Go to home</Link>
      </p>
    </div>
  )
}
