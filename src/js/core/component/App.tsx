/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {createElement} from 'react'
import useLesson from '../hook/useLesson.ts'

export default function App() {
  const {lesson, refreshLesson} = useLesson()

  return (
    <main className="w-full h-full grid place-items-center">
      <h1 className="absolute top-10 uppercase font-black">
        <a
          href={lesson.link}
          target="_blank"
          className="underline cursor-pointer"
        >
          <span className="mr-2">[{`Lesson ${lesson.number}`}]</span>
          <span>{lesson.title}</span>
        </a>
      </h1>

      {lesson.additionalNote && (
        <div className="absolute top-20">
          {createElement(lesson.additionalNote)}
        </div>
      )}

      <div className="absolute bottom-10 w-full flex justify-between p-10">
        <button
          className="relative z-10 h-0 w-0 border-y-16 border-y-transparent border-r-16 border-r-primary-200 cursor-pointer hover:border-r-primary-600"
          onClick={() => refreshLesson(-1)}
        ></button>
        <button
          className="relative z-10 h-0 w-0 border-y-16 border-y-transparent border-l-16 border-l-primary-200 cursor-pointer hover:border-l-primary-600"
          onClick={() => refreshLesson(+1)}
        ></button>
      </div>

      {createElement(lesson.component)}
    </main>
  )
}
