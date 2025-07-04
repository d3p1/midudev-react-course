/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState} from 'react'
import Card from './Card.tsx'
import {dummyUsers} from '../utils/dummy-users.ts'

export default function App() {
  const [users, setUsers] = useState(dummyUsers.slice(0, 2))

  const handleClick = () => {
    const index = Math.floor(Math.random() * (dummyUsers.length - 2))
    setUsers(dummyUsers.slice(index, index + 2))
  }

  return (
    <section className="flex flex-col gap-4">
      {users.map(({fullName, username, isFollowing}) => (
        <Card
          fullName={fullName}
          username={username}
          initialIsFollowing={isFollowing}
          key={username}
        />
      ))}

      <button
        className="rounded-full bg-secondary text-primary-900 font-black p-5 cursor-pointer"
        onClick={handleClick}
      >
        Refresh
      </button>
    </section>
  )
}
