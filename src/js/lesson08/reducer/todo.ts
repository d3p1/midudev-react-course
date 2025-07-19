/**
 * @description TODO reducer
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {TodoItem, TodoList} from '../types'

export const TODO_ACTION_TYPE = {
  ADD: 'add',
  REMOVE: 'remove',
  UPDATE: 'update',
  CLEAR_COMPLETED: 'clear_completed',
}

export const todosReducer = (
  state: TodoList,
  action: {type: string; payload: Partial<TodoItem> | null},
): TodoList => {
  const {type, payload} = action

  switch (type) {
    case TODO_ACTION_TYPE.ADD:
      if (payload) {
        return [
          ...state,
          {
            id: crypto.randomUUID(),
            title: payload.title as string,
            isCompleted: false,
          },
        ]
      }
      break

    case TODO_ACTION_TYPE.REMOVE:
      if (payload) {
        return state.filter((item) => item.id !== payload.id)
      }
      break

    case TODO_ACTION_TYPE.UPDATE:
      if (payload) {
        return state.map((item) => {
          if (item.id === payload.id) {
            item.isCompleted = payload.isCompleted as boolean
          }
          return item
        })
      }
      break

    case TODO_ACTION_TYPE.CLEAR_COMPLETED:
      return state.filter((item) => !item.isCompleted)
  }

  return state
}
