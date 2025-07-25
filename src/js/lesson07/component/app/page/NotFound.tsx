/**
 * @description 404 page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Link} from '../core/Link.tsx'

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h2 className="uppercase text-lg font-black">404 not found</h2>
      <p className="italic text-sm underline">
        <Link pathname="/midudev-react-course/">Go to home</Link>
      </p>
    </div>
  )
}
