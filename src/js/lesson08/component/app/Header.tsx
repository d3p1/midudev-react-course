/**
 * @description Header
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as React from 'react'
import {useState} from 'react'
import type {TodoItemTitle} from '../../types'

export const Header: React.FC<{
  onAddItem: ({title}: TodoItemTitle) => void
}> = ({onAddItem}) => {
  const [newTodoItem, setNewTodoItem] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onAddItem({title: newTodoItem})
    setNewTodoItem('')
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoItem(e.target.value)
  }

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What do you want to do?"
          value={newTodoItem}
          onChange={handleOnChange}
          className="border-b-primary-500 border-b-solid border-b-2 p-5 placeholder:italic placeholder:text-sm"
        />
      </form>
    </header>
  )
}
