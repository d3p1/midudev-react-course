/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState, version} from 'react'
import {preload} from 'react-dom'
import {ReactIcon} from './app/Icon/ReactIcon.tsx'
import {Seo} from './app/Seo.tsx'

export default function App() {
  preload('/midudev-react-course/lesson14/css/styles.css', {
    as: 'style',
    fetchPriority: 'low',
  })

  preload('https://react.dev/images/uwu.png', {
    as: 'image',
    fetchPriority: 'low',
  })

  const [isSeoEnabled, setIsSeoEnabled] = useState(false)
  const [showReactIcon, setShowReactIcon] = useState(false)

  return (
    <div className="flex flex-col gap-8">
      <p className="italic text-xs text-center">
        This app uses the following React version: {version}
      </p>

      {isSeoEnabled && <Seo />}

      {showReactIcon && <ReactIcon />}

      <button
        onClick={() => setIsSeoEnabled(!isSeoEnabled)}
        className="bg-secondary text-primary-900 font-black p-4 rounded-2xl cursor-pointer"
      >
        {isSeoEnabled ? 'Deactivate SEO' : 'Activate SEO'}
      </button>

      <button
        onClick={() => setShowReactIcon(!showReactIcon)}
        className="bg-secondary text-primary-900 font-black p-4 rounded-2xl cursor-pointer"
      >
        {showReactIcon ? 'Hide Icon' : 'Show Icon'}
      </button>
    </div>
  )
}
