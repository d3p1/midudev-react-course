/**
 * @description Search page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Link} from '../Router.tsx'

export default function Search({
  routeParams,
}: {
  routeParams?: {[key: string]: string}
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2 className="uppercase text-lg font-black">
        Search {routeParams?.query}
      </h2>
      <p className="text-sm italic underline">
        Go to <Link pathname="/midudev-react-course/">home</Link>
      </p>
    </div>
  )
}
