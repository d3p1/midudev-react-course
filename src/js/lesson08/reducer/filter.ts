/**
 * @description Filter reducer
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {FilterValue} from '../types'

export const FILTER_ACTION_TYPE = {
  UPDATE: 'update',
}

export const filterReducer = (
  state: FilterValue,
  action: {type: string; payload: FilterValue},
) => {
  const {type, payload} = action

  switch (type) {
    case FILTER_ACTION_TYPE.UPDATE:
      return payload
  }

  return state
}
