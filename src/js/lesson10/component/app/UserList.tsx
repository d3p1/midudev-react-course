/**
 * @description User list
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useAppSelector} from '../../hook/useStore.ts'
import {DeleteIcon} from './icon/DeleteIcon.tsx'
import {EditIcon} from './icon/EditIcon.tsx'

export const UserList = () => {
  const users = useAppSelector((state) => state.users)

  return (
    <>
      <ul className="grid grid-cols-4 place-items-center p-8 border-b-primary-600 border-b-2 border-b-solid font-black text-md">
        <li>Image</li>
        <li>Name</li>
        <li>Email</li>
        <li>Actions</li>
      </ul>

      {users.map((user) => (
        <ul
          key={user.id}
          className="grid grid-cols-4 place-items-center p-8 text-sm italic"
        >
          <li>
            <img
              src={`https://unavatar.io/${user.github}`}
              alt={user.fullName}
              className="max-w-20 rounded-full"
            />
          </li>
          <li>{user.fullName}</li>
          <li>{user.email}</li>
          <li className="flex flex-row items-center justify-center">
            <button className="cursor-pointer">
              <DeleteIcon />
            </button>
            <button className="cursor-pointer">
              <EditIcon />
            </button>
          </li>
        </ul>
      ))}
    </>
  )
}
