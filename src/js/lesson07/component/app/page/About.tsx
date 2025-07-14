/**
 * @description About page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Link} from '../Router.tsx'

export default function About() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h2 className="uppercase text-lg font-black">About</h2>
      <p className="italic text-sm underline">
        Go to <Link pathname="/midudev-react-course/">home</Link>
      </p>
    </div>
  )
}
