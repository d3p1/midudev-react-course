/**
 * @description TODO context
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {createContext, type ReactNode, useState} from 'react'
import {FILTERS} from '../data/filters.ts'
import {todos as items} from '../data/todos.ts'
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
  handleToggleCompleteItem: ({id, isCompleted}: Omit<TodoItem, 'title'>) => void
  handleFilterChange: (filterValue: FilterValue) => void
  handleClearCompleted: () => void
} | null>(null)

export function TodoProvider({children}: {children: ReactNode}) {
  const [todos, setTodos] = useState(items)
  const [filter, setFilter] = useState<FilterValue>(FILTERS.ALL.value)

  const handleRemoveItem = ({id}: TodoItemId) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  const handleAddItem = ({title}: TodoItemTitle) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title,
        isCompleted: false,
      },
    ])
  }

  const handleToggleCompleteItem = ({
    id,
    isCompleted,
  }: Omit<TodoItem, 'title'>) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.isCompleted = isCompleted
        }
        return item
      }),
    )
  }

  const handleClearCompleted = () => {
    setTodos(todos.filter((item) => !item.isCompleted))
  }

  const handleFilterChange = (filterValue: FilterValue) => {
    setFilter(filterValue)
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        filter,
        handleAddItem,
        handleRemoveItem,
        handleToggleCompleteItem,
        handleFilterChange,
        handleClearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
