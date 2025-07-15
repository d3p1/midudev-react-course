/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {JSX, LazyExoticComponent} from 'react'

export interface Lesson {
  number: string
  title: string
  link: string
  additionalNote?: (() => JSX.Element) | LazyExoticComponent<() => JSX.Element>
  component: (() => JSX.Element) | LazyExoticComponent<() => JSX.Element>
}

export type Lessons = Array<Lesson>
