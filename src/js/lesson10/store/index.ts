/**
 * @description Store
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {configureStore, type Middleware} from '@reduxjs/toolkit'
import type {User} from '../types'
import {UserManager} from '../utils/user-manager.ts'
import userReducer, {removeUser, addUser} from './user/slice.ts'

const _execRandomError = (rollback: () => void) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      rollback()
    }
  }, 500)
}

const storageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  if (removeUser.match(action) || addUser.match(action)) {
    UserManager.saveUsers(store.getState().users)
  }
}

const randomDeleteErrorMiddleware: Middleware =
  (store) => (next) => (action) => {
    const prevState = store.getState()

    next(action)

    if (removeUser.match(action)) {
      _execRandomError(() => {
        const removedUserId = action.payload
        const users = prevState.users as User[]
        const removedUser = users.find((user) => user.id === removedUserId)
        if (removedUser) {
          store.dispatch(addUser(removedUser))
        }
      })
    }
  }

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(storageMiddleware)
      .concat(randomDeleteErrorMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
