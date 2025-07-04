/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {JSX} from 'react'

export interface Lesson {
  number: string
  title: string
  link: string
  component: () => JSX.Element
}

export type Lessons = Array<Lesson>
