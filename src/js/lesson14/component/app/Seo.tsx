/**
 * @description SEO
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState} from 'react'

export const Seo = () => {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <title>{`Title ${counter}`}</title>
      <meta name="description" content={`Description ${counter}`} />
      <link
        rel="stylesheet"
        href="/midudev-react-course/lesson14/css/styles.css"
      />

      <button
        onClick={() => setCounter(counter + 1)}
        className="bg-secondary text-primary-900 font-black p-4 rounded-2xl cursor-pointer d3p1__button"
      >
        Update Title
      </button>
    </>
  )
}
