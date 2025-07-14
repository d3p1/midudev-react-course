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
        Go to <Link pathname="/midudev-react-course/about">about</Link>
      </p>
      <p className="italic text-sm underline">
        Go to{' '}
        <Link pathname="/midudev-react-course/search/javascript">
          search "javascript"
        </Link>
      </p>
    </div>
  )
}
