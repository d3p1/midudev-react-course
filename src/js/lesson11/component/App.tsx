/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useEffect, useRef, useState} from 'react'
import type {User, UserId} from '../types'
import {UserManager} from '../utils/user-manager.ts'
import {UserTable} from './app/UserTable.tsx'

export default function App() {
  const originalUsers = useRef<User[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const userManager = new UserManager()

    userManager
      .loadUsers()
      .then(() => {
        originalUsers.current = userManager.users
        setUsers(userManager.users)
      })
      .catch((e) => {
        setError(e.message)
      })
  }, [])

  const handleRemoveUser = (id: UserId) => {
    if (users) {
      setUsers(users.filter((user) => user.id.value !== id))
    }
  }

  const handleRestart = () => {
    setUsers(originalUsers.current)
  }

  if (error) {
    return <p className="text-accent-secondary text-sm italic">{error}</p>
  }

  return (
    <UserTable
      users={users}
      handleRemoveUser={handleRemoveUser}
      handleRestart={handleRestart}
    />
  )
}
