/**
 * @description Store
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {configureStore} from '@reduxjs/toolkit'
import userReducer from './user/slice.ts'

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
