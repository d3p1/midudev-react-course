/**
 * @description User table
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as React from 'react'
import type {User} from '../../types'

interface Props {
  users: User[] | null
}

export const UserTable: React.FC<Props> = ({users}) => {
  if (!users) {
    return null
  }

  return (
    <table className="h-full w-3/4 flex flex-col justify-start">
      <thead className="mb-5 border-b-primary-600 border-b-2 border-b-solid">
        <tr className="grid grid-cols-5 place-items-center py-4 font-black">
          <th>Picture</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="">
        {users.map((user) => (
          <tr
            key={user?.id?.value}
            className="grid grid-cols-5 place-items-center my-8 text-xs text-primary-200"
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
              <button className="cursor-pointer bg-secondary text-primary-900 p-4 rounded-2xl font-black">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
