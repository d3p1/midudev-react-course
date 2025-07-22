/**
 * @description Custom hook to manage store
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {type RootState, type AppDispatch} from '../store'
import {type TypedUseSelectorHook} from 'react-redux'
import {useDispatch, useSelector} from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
