/**
 * @description Sign-in main
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {use} from 'react'
import {UserContext} from '../../../context/user.tsx'

export const Main = () => {
  const {isLoggedIn, updateUser} = use(UserContext)

  return (
    <>
      {isLoggedIn && (
        <button
          onClick={() => updateUser('', false)}
          className="bg-secondary text-primary-900 font-black p-4 rounded-2xl border-primary-300 border-solid border-4 cursor-pointer"
        >
          Sign Out
        </button>
      )}
      {!isLoggedIn && (
        <button
          onClick={() => updateUser('d3p1', true)}
          className="bg-secondary text-primary-900 font-black p-4 rounded-2xl border-primary-300 border-solid border-4 cursor-pointer"
        >
          Sign In
        </button>
      )}
    </>
  )
}
