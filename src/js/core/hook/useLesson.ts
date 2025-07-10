/**
 * @description Hook to manage lessons
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState, useEffect, useRef} from 'react'
import type {Lesson} from '../types'
import {lessons} from '../utils/lessons.ts'

export default function useLesson() {
  const indexRef = useRef(0)
  const [lesson, setLesson] = useState<Lesson>(lessons[indexRef.current])

  const refreshLesson = (step: number) => {
    indexRef.current = (indexRef.current + step) % lessons.length
    if (indexRef.current < 0) {
      indexRef.current = lessons.length - 1
    }

    setLesson(lessons[indexRef.current])
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
