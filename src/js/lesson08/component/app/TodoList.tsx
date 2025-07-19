/**
 * @description TODO list
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as React from 'react'
import type {TodoItem, TodoItemId, TodoList as TodoListType} from '../../types'

export const TodoList: React.FC<{
  todos: TodoListType
  onRemoveTodos: ({id}: TodoItemId) => void
  onToggleCompleteItem: ({id, isCompleted}: Omit<TodoItem, 'title'>) => void
}> = ({todos, onRemoveTodos, onToggleCompleteItem}) => {
  return (
    <ul className="flex flex-col justify-center items-center gap-4 min-w-1/3">
      {todos.map((todo) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          onToggleCompleteItem({id: todo.id, isCompleted: e.target.checked})
        }

        const isCompletedStyles = todo.isCompleted ? 'italic line-through' : ''

        return (
          <li
            key={todo.id}
            className="flex flex-row justify-between items-center w-full border-secondary border-2 border-solid p-4"
          >
            <label htmlFor={`todo_${todo.id}`} className={isCompletedStyles}>
              {todo.title}
            </label>
            <input
              type="checkbox"
              id={`todo_${todo.id}`}
              value={todo.isCompleted ? 1 : 0}
              onChange={handleChange}
              className="hidden"
            />

            <button
              className="text-xs cursor-pointer opacity-50 hover:opacity-100 hover:scale-150 transition-all duration-500"
              onClick={() => onRemoveTodos({id: todo.id})}
            >
              x
            </button>
          </li>
        )
      })}
    </ul>
  )
}
