/**
 * @description Store user slice
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {createSlice} from '@reduxjs/toolkit'
import {users} from '../../data/users.ts'

export const userSlice = createSlice({
  name: 'users',
  initialState: users,
  reducers: {},
})

export default userSlice.reducer
