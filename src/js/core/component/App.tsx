/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState, createElement} from 'react'
import {lessons} from '../utils/lessons.ts'

export default function App() {
  const [index, setIndex] = useState(0)

  const handleClick = (step: number) => {
    let processedIndex = (index + step) % lessons.length
    if (processedIndex < 0) {
      processedIndex = lessons.length - 1
    }

    setIndex(processedIndex)
  }

  return (
    <main className="w-full h-full grid place-items-center">
      <h1 className="absolute top-10 uppercase font-black">
        <a
          href={lessons[index].link}
          target="_blank"
          className="underline cursor-pointer"
        >
          <span className="mr-2">[{`Lesson ${lessons[index].number}`}]</span>
          <span>{lessons[index].title}</span>
        </a>
      </h1>

      {lessons[index].additionalNote && (
        <div className="absolute top-20">
          {createElement(lessons[index].additionalNote)}
        </div>
      )}

      <div className="absolute bottom-10 w-full flex justify-between p-10">
        <button
          className="relative z-10 h-0 w-0 border-y-16 border-y-transparent border-r-16 border-r-primary-200 cursor-pointer"
          onClick={() => handleClick(-1)}
        ></button>
        <button
          className="relative z-10 h-0 w-0 border-y-16 border-y-transparent border-l-16 border-l-primary-200 cursor-pointer"
          onClick={() => handleClick(+1)}
        ></button>
      </div>

      {createElement(lessons[index].component)}
    </main>
  )
}
