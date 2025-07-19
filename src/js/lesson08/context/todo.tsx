/**
 * @description TODO context
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {createContext, type ReactNode} from 'react'
import {useFilterReducer} from '../hook/useFilterReducer.ts'
import {useTodoReducer} from '../hook/useTodoReducer.ts'

import type {
  FilterValue,
  TodoItem,
  TodoItemId,
  TodoItemTitle,
  TodoList,
} from '../types'

export const TodoContext = createContext<{
  todos: TodoList
  filter: FilterValue
  handleAddItem: ({title}: TodoItemTitle) => void
  handleRemoveItem: ({id}: TodoItemId) => void
  handleUpdateItem: ({id, isCompleted}: Omit<TodoItem, 'title'>) => void
  handleFilterChange: (filterValue: FilterValue) => void
  handleClearCompleted: () => void
} | null>(null)

export function TodoProvider({children}: {children: ReactNode}) {
  const {
    todos,
    handleAddItem,
    handleRemoveItem,
    handleUpdateItem,
    handleClearCompleted,
  } = useTodoReducer()

  const {filter, handleFilterChange} = useFilterReducer()

  return (
    <TodoContext.Provider
      value={{
        todos,
        filter,
        handleAddItem,
        handleRemoveItem,
        handleUpdateItem,
        handleFilterChange,
        handleClearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
