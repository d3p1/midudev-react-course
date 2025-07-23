/**
 * @description Custom hook to manage user
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {addUser, removeUser} from '../store/user/slice.ts'
import type {User, UserId} from '../types'
import {useAppSelector, useAppDispatch} from './useStore.ts'

export const useUser = () => {
  const users = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()

  const handleRemoveUser = (id: UserId) => {
    dispatch(removeUser(id))
  }

  const handleAddUser = (user: Omit<User, 'id'>) => {
    dispatch(addUser({...user, id: crypto.randomUUID()}))
  }

  return {users, handleAddUser, handleRemoveUser}
}
