/**
 * @description User list
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as React from 'react'
import type {User} from '../../../types'

interface Props {
  users: User[]
  isColoredRow: boolean
  handleRemoveUser: (email: string) => void
  handleSortByFirstname: () => void
  handleSortByLastname: () => void
  handleSortByCountry: () => void
}

export const UserList: React.FC<Props> = ({
  users,
  isColoredRow,
  handleRemoveUser,
  handleSortByFirstname,
  handleSortByLastname,
  handleSortByCountry,
}) => {
  return (
    <table>
      <thead className="border-b-primary-700 border-b-2 border-b-solid">
        <tr className="grid grid-cols-5 place-items-center py-4 font-black">
          <th>Picture</th>
          <th onClick={handleSortByFirstname} className="cursor-pointer">
            Firstname
          </th>
          <th onClick={handleSortByLastname} className="cursor-pointer">
            Lastname
          </th>
          <th onClick={handleSortByCountry} className="cursor-pointer">
            Country
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="">
        {users.map((user, index) => {
          let rowColor = 'bg-transparent'
          if (isColoredRow) {
            rowColor = 'bg-primary-700'
            if (index % 2) {
              rowColor = 'bg-primary-600'
            }
          }

          return (
            <tr
              key={user?.email}
              className={`grid grid-cols-5 place-items-center py-8 text-xs ${rowColor} text-primary-200 hover:bg-primary-500 hover:text-secondary transition-all duration-300`}
            >
              <td>
                <img
                  src={user?.picture?.thumbnail}
                  alt={`Image of ${user?.name?.first} ${user?.name?.last}`}
                  className="rounded-full"
                />
              </td>
              <td>{user?.name?.first}</td>
              <td>{user?.name?.last}</td>
              <td>{user?.location?.country}</td>
              <td>
                <button
                  onClick={() => handleRemoveUser(user?.email)}
                  className="cursor-pointer bg-secondary text-primary-900 p-4 rounded-2xl font-black"
                >
                  Delete
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
