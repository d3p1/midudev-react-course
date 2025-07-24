/**
 * @description User table
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as React from 'react'
import {useMemo, useState} from 'react'
import {type User, UserSortType} from '../../types'
import {UserManager} from '../../utils/user-manager.ts'
import {UserList} from './user-table/UserList.tsx'

interface Props {
  users: User[] | null
  handleRemoveUser: (email: string) => void
  handleRestart: () => void
}

export const UserTable: React.FC<Props> = ({
  users,
  handleRemoveUser,
  handleRestart,
}) => {
  if (!users) {
    return null
  }

  const [isColoredRow, setIsColoredRow] = useState(false)
  const [sortType, setSortType] = useState<UserSortType>(UserSortType.None)
  const [countryToSearch, setCountryToSearch] = useState<string>('')

  const handleColorRow = () => {
    setIsColoredRow(!isColoredRow)
  }

  const handleSort = (type: UserSortType) => {
    const sort = type === sortType ? UserSortType.None : type
    setSortType(sort)
  }

  const handleCountryToSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCountryToSearch(e.target.value)
  }

  const filteredUsers = useMemo(() => {
    if (!countryToSearch) {
      return users
    }

    return UserManager.filterByCountry(users, countryToSearch)
  }, [users, countryToSearch])

  const sortedUsers = useMemo(() => {
    return UserManager.sort(filteredUsers, sortType)
  }, [filteredUsers, sortType])

  return (
    <div className="h-full w-3/4 flex flex-col justify-start">
      <div className="w-full flex flex-row justify-center items-center gap-4 mb-8">
        <button
          onClick={handleColorRow}
          className="bg-secondary text-primary-900 p-4 font-black rounded-2xl cursor-pointer"
        >
          {isColoredRow ? 'Uncolor' : 'Color'}
        </button>
        <button
          onClick={() => handleSort(UserSortType.Country)}
          className="bg-secondary text-primary-900 p-4 font-black rounded-2xl cursor-pointer"
        >
          {sortType === UserSortType.Country ? 'Unsort' : 'Sort'}
        </button>
        <button
          onClick={handleRestart}
          className="bg-secondary text-primary-900 p-4 font-black rounded-2xl cursor-pointer"
        >
          Restart
        </button>
        <input
          type="text"
          placeholder="Filter by country"
          value={countryToSearch}
          onChange={handleCountryToSearchChange}
          className="border-primary-700 border-2 border-solid p-3 placeholder:italic placeholder:text-xs"
        />
      </div>

      <UserList
        users={sortedUsers}
        isColoredRow={isColoredRow}
        handleRemoveUser={handleRemoveUser}
        handleSort={handleSort}
      />
    </div>
  )
}
