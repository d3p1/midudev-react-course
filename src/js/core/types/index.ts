/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {JSX, LazyExoticComponent} from 'react'

export type Component<T = null> =
  | ((params: T) => JSX.Element)
  | LazyExoticComponent<(params: T) => JSX.Element>

export interface Lesson {
  number: string
  title: string
  link: string
  component: Component
  additionalNote?: Component
}

export type Lessons = Array<Lesson>
