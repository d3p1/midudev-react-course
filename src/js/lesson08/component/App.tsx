/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState} from 'react'
import {FILTERS} from '../data/filters.ts'
import {todos as items} from '../data/todos.ts'
import type {FilterValue, TodoItem, TodoItemId, TodoItemTitle} from '../types'
import {Header} from './app/Header.tsx'
import {Footer} from './app/Footer.tsx'
import {TodoList} from './app/TodoList.tsx'

export default function App() {
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

  const totalActiveItems = todos.filter((item) => !item.isCompleted).length
  const filteredItems = todos.filter((item) => {
    switch (filter) {
      case FILTERS.COMPLETED.value:
        return item.isCompleted

      case FILTERS.ACTIVE.value:
        return !item.isCompleted

      default:
        return true
    }
  })

  return (
    <div className="w-full flex flex-col justify-center items-center gap-16">
      <Header onAddItem={handleAddItem} />
      <TodoList
        todos={filteredItems}
        onRemoveTodos={handleRemoveItem}
        onToggleCompleteItem={handleToggleCompleteItem}
      />
      <Footer
        totalActiveItems={totalActiveItems}
        currentFilterValue={filter}
        onClearCompleted={handleClearCompleted}
        onFilterChange={handleFilterChange}
      />
    </div>
  )
}
