/**
 * @description Hook to manage TODOs
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useContext} from 'react'
import {TodoContext} from '../context/todo.tsx'
import {FILTERS} from '../data/filters.ts'

export function useTodo() {
  const context = useContext(TodoContext)

  if (!context) {
    throw new Error('useTodo should be used inside a TodoProvider.')
  }

  const totalActiveItems = context.todos.filter(
    (item) => !item.isCompleted,
  ).length
  const filteredItems = context.todos.filter((item) => {
    switch (context.filter) {
      case FILTERS.COMPLETED.value:
        return item.isCompleted

      case FILTERS.ACTIVE.value:
        return !item.isCompleted

      default:
        return true
    }
  })

  return {...context, todos: filteredItems, totalActiveItems}
}
