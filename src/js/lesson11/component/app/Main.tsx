/**
 * @description Main
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useUsers} from '../../hook/useUsers.ts'
import {UserTable} from './main/UserTable.tsx'

export const Main = () => {
  const {isLoading, error, refetch, users, fetchNextPage, hasNextPage} =
    useUsers()

  const handleRemoveUser = (email: string) => {
    if (users) {
      users.filter((user) => user.email !== email)
    }
  }

  const handleRestart = () => {
    void refetch()
  }

  const handleLoadMoreUsers = () => {
    if (hasNextPage) {
      void fetchNextPage()
    }
  }

  if (users?.length) {
    return (
      <UserTable
        users={users}
        hasNextPage={hasNextPage}
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
    return (
      <p className="text-accent-secondary text-sm italic">{error.message}</p>
    )
  }

  return <></>
}
