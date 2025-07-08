/**
 * @description Hook to manage lessons
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState, useEffect} from 'react'
import type {Lesson} from '../types'
import {lessons} from '../utils/lessons.ts'

let index = 0
export default function useLesson() {
  const [lesson, setLesson] = useState<Lesson>(lessons[index])

  const refreshLesson = (step: number) => {
    index = (index + step) % lessons.length
    if (index < 0) {
      index = lessons.length - 1
    }

    setLesson(lessons[index])
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          refreshLesson(+1)
          break

        case 'ArrowLeft':
          refreshLesson(-1)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return {lesson, refreshLesson}
}
