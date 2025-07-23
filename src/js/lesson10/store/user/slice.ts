/**
 * @description Store user slice
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import type {UserId, User} from '../../types'
import {UserManager} from '../../utils/user-manager.ts'

export const userSlice = createSlice({
  name: 'users',
  initialState: UserManager.loadUsers(),
  reducers: {
    removeUser: (state, action: PayloadAction<UserId>) => {
      return state.filter((user) => user.id !== action.payload)
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload)
    },
  },
})

export default userSlice.reducer

export const {removeUser, addUser} = userSlice.actions
