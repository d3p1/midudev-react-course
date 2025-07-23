/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useEffect, useState} from 'react'
import type {User} from '../types'
import {UserManager} from '../utils/user-manager.ts'
import {UserTable} from './app/UserTable.tsx'

const userManager = new UserManager()

export default function App() {
  const [users, setUsers] = useState<User[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    userManager
      .loadUsers()
      .then(() => {
        setUsers(userManager.users)
      })
      .catch((e) => {
        setError(e.message)
      })
  }, [])

  if (error) {
    return <p className="text-accent-secondary text-sm italic">{error}</p>
  }

  return <UserTable users={users} />
}
