/**
 * @description Hook to manage filter reducer
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useReducer} from 'react'
import {FILTERS} from '../data/filters.ts'
import type {FilterValue} from '../types'
import {FILTER_ACTION_TYPE, filterReducer} from '../reducer/filter.ts'

export function useFilterReducer() {
  const [filter, dispatch] = useReducer(filterReducer, FILTERS.ALL.value)

  const handleFilterChange = (filterValue: FilterValue) => {
    dispatch({
      type: FILTER_ACTION_TYPE.UPDATE,
      payload: filterValue,
    })
  }

  return {
    filter,
    handleFilterChange,
  }
}
