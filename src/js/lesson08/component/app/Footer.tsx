/**
 * @description Footer
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as React from 'react'
import {FILTERS} from '../../data/filters.ts'
import {useTodo} from '../../hook/useTodo.ts'

export const Footer = () => {
  const {filter, handleFilterChange, handleClearCompleted, totalActiveItems} = useTodo()

  return (
    <footer className="flex flex-row justify-between items-center gap-8 text-sm">
      <p className="italic">Total of {totalActiveItems} active items</p>
      <ul className="flex flex-row justify-between items-center gap-4">
        {Object.entries(FILTERS).map(([key, {label, value}]) => {
          const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault()
            handleFilterChange(value)
          }

          const isCurrentFilter = value === filter
          const filterStyles = isCurrentFilter
            ? 'bg-secondary text-primary-900'
            : 'bg-transparent text-secondary'

          return (
            <a
              key={key}
              onClick={handleClick}
              className={`border-secondary border-2 border-solid p-4 font-black cursor-pointer ${filterStyles}`}
            >
              {label}
            </a>
          )
        })}
      </ul>
      <button
        className="border-secondary border-2 border-solid p-4 font-black cursor-pointer"
        onClick={handleClearCompleted}
      >
        Clear completed items
      </button>
    </footer>
  )
}
