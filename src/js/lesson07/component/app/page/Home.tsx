/**
 * @description Home page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Link} from '../Router.tsx'

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h2 className="uppercase text-lg font-black">Home</h2>
      <p className="italic text-sm underline">
        <Link pathname="/midudev-react-course/about">Go to about</Link>
      </p>
      <p className="italic text-sm underline">
        <Link pathname="/midudev-react-course/search/javascript">
          Go to search "javascript"
        </Link>
      </p>
    </div>
  )
}
