/**
 * @description Main
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useEffect, useRef, useState} from 'react'
import type {User} from '../../types'
import {UserManager} from '../../utils/user-manager.ts'
import {UserTable} from './main/UserTable.tsx'

export const Main = () => {
  const originalUsers = useRef<User[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    UserManager.loadUsers(currentPage)
      .then((loadedUsers) => {
        const newUsers = loadedUsers.concat(users)
        originalUsers.current = newUsers
        setUsers(newUsers)
      })
      .catch((e) => {
        setError(e.message)
      })
      .finally(() => setIsLoading(false))
  }, [currentPage])

  const handleRemoveUser = (email: string) => {
    if (users) {
      setUsers(users.filter((user) => user.email !== email))
    }
  }

  const handleRestart = () => {
    setUsers(originalUsers.current)
  }

  const handleLoadMoreUsers = () => {
    setCurrentPage(currentPage + 1)
  }

  if (users.length) {
    return (
      <UserTable
        users={users}
        handleLoadMoreUsers={handleLoadMoreUsers}
        handleRemoveUser={handleRemoveUser}
        handleRestart={handleRestart}
      />
    )
  }

  if (isLoading) {
    return <p className="font-black">Loading...</p>
  }

  if (error) {
    return <p className="text-accent-secondary text-sm italic">{error}</p>
  }

  return <></>
}
