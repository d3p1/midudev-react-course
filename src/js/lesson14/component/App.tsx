/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState, version} from 'react'
import {Seo} from './app/Seo.tsx'

export default function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="flex flex-col gap-8">
      <Seo title={`Title ${counter}`} description={`Description ${counter}`} />

      <p className="italic text-xs">
        This app uses the following React version: {version}
      </p>
      <button
        onClick={() => setCounter(counter + 1)}
        className="bg-secondary text-primary-900 font-black p-4 rounded-2xl cursor-pointer"
      >
        Increment title counter
      </button>
    </div>
  )
}
