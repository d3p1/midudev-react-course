/**
 * @description Comment list
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useComments} from '../../hook/useComments.ts'

export const CommentList = () => {
  const {comments, isLoading, error} = useComments()

  if (isLoading) {
    return <p className="font-black text-center">Loading...</p>
  }

  if (error) {
    return (
      <p className="font-black text-center text-accent-secondary italic text-sm">
        {error.message}
      </p>
    )
  }

  if (comments?.length) {
    return (
      <ul className="w-full flex flex-col gap-8 justify-center items-center">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className={`flex flex-col gap-4 justify-center items-center bg-primary-700 p-8 rounded-2xl w-full ${
              comment.isPending ? 'opacity-15' : ''
            }`}
          >
            <h3 className="text-lg font-black">{comment.title}</h3>
            <p className="italic text-sm bg-primary-600 p-4 rounded-2xl">
              {comment.message}
            </p>
          </li>
        ))}
      </ul>
    )
  }
}
