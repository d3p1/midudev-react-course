/**
 * @description Card
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState} from 'react'

export default function Card({
  fullName,
  username,
  initialIsFollowing,
}: {
  fullName: string
  username: string
  initialIsFollowing?: boolean
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const handleOnClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="rounded-2xl bg-primary-700 p-4 flex justify-between gap-10 inset-shadow-[0_0_1rem_black] text-xs">
      <section>
        <img
          className="rounded-full max-w-[100px]"
          src={`https://unavatar.io/${username}`}
          alt="Profile picture"
        />
      </section>
      <section className="flex flex-col justify-center gap-1">
        <h3>{fullName}</h3>
        <span className="text-primary-300">{username}</span>
      </section>
      <aside className="flex flex-col justify-center w-1/4">
        <button
          className="bg-secondary text-primary-900 p-5 rounded-full font-black cursor-pointer"
          onClick={handleOnClick}
        >
          {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
      </aside>
    </article>
  )
}
