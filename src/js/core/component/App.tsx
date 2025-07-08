/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {createElement} from 'react'
import useLesson from '../hook/useLesson.ts'

export default function App() {
  const {lesson, refreshLesson} = useLesson()

  return (
    <div className="w-screen h-screen grid grid-rows-[1fr_5fr_1fr] place-items-center">
      <header className="w-full flex flex-col justify-center items-center gap-4">
        <h1 className="uppercase font-black">
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
          <div>{createElement(lesson.additionalNote)}</div>
        )}
      </header>

      <main className="w-full h-full flex flex-col justify-center items-center overflow-y-auto">
        {createElement(lesson.component)}
      </main>

      <div className="w-full flex justify-between p-10">
        <button
          className="h-0 w-0 border-y-16 border-y-transparent border-r-16 border-r-primary-200 cursor-pointer hover:border-r-primary-600"
          onClick={() => refreshLesson(-1)}
        ></button>
        <button
          className="h-0 w-0 border-y-16 border-y-transparent border-l-16 border-l-primary-200 cursor-pointer hover:border-l-primary-600"
          onClick={() => refreshLesson(+1)}
        ></button>
      </div>
    </div>
  )
}
