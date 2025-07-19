/**
 * @description Hook to manage TODO reducer
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useReducer} from 'react'
import {todos as items} from '../data/todos.ts'
import type {TodoItem, TodoItemId, TodoItemTitle} from '../types'
import {TODO_ACTION_TYPE, todosReducer} from '../reducer/todo.ts'

export function useTodoReducer() {
  const [todos, dispatch] = useReducer(todosReducer, items)

  const handleAddItem = ({title}: TodoItemTitle) => {
    dispatch({
      type: TODO_ACTION_TYPE.ADD,
      payload: {title},
    })
  }

  const handleRemoveItem = ({id}: TodoItemId) => {
    dispatch({
      type: TODO_ACTION_TYPE.REMOVE,
      payload: {id},
    })
  }

  const handleUpdateItem = ({id, isCompleted}: Omit<TodoItem, 'title'>) => {
    dispatch({
      type: TODO_ACTION_TYPE.UPDATE,
      payload: {id, isCompleted},
    })
  }

  const handleClearCompleted = () => {
    dispatch({
      type: TODO_ACTION_TYPE.CLEAR_COMPLETED,
      payload: null,
    })
  }

  return {
    todos,
    handleAddItem,
    handleRemoveItem,
    handleUpdateItem,
    handleClearCompleted,
  }
}
