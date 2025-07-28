/**
 * @description Hook to manage comments
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useQuery} from '@tanstack/react-query'
import {CommentManager} from '../service/comment-manager.ts'

export const useComments = () => {
  const {
    data: comments,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['comments'],
    queryFn: CommentManager.getComments,
  })

  return {comments, isLoading, error}
}
