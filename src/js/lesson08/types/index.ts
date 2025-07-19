/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {FILTERS} from '../data/filters.ts'

export interface TodoItem {
  id: string
  title: string
  isCompleted: boolean
}

export type TodoItemId = Pick<TodoItem, 'id'>
export type TodoItemTitle = Pick<TodoItem, 'title'>

export type TodoList = TodoItem[]

export type FilterValue = (typeof FILTERS)[keyof typeof FILTERS]['value']
