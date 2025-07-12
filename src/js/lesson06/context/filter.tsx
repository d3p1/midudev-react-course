/**
 * @description Filter context
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useState,
} from 'react'
import type {Filter} from '../types'

export const FilterContext = createContext<{
  filter: Filter | null
  setFilter: Dispatch<SetStateAction<Filter>> | null
}>({filter: null, setFilter: null})

export function FilterProvider({children}: {children: ReactNode}) {
  const [filter, setFilter] = useState<Filter>({
    minPrice: 1000,
    category: 'laptops',
  })

  return (
    <FilterContext.Provider value={{filter, setFilter}}>
      {children}
    </FilterContext.Provider>
  )
}
