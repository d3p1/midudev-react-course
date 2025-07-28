/**
 * @description Hook to manage comments
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {CommentManager} from '../service/comment-manager.ts'
import type {Comment} from '../types'

export const useComments = () => {
  const queryClient = useQueryClient()

  const {
    data: comments,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['comments'],
    queryFn: CommentManager.getComments,
  })

  const {mutate: resetComments} = useMutation({
    mutationFn: CommentManager.resetComments,
    onSuccess: () => {
      queryClient.setQueryData(['comments'], [])
    },
  })

  const {mutate: addComment} = useMutation({
    mutationFn: CommentManager.addComment,
    onMutate: async (newComment) => {
      await queryClient.cancelQueries({
        queryKey: ['comments'],
      })

      const oldComments = queryClient.getQueryData(['comments']) as Comment[]
      const pendingComment = {
        ...newComment,
        id: crypto.randomUUID(),
        isPending: true,
      }

      queryClient.setQueryData(['comments'], (): Comment[] => {
        return [...oldComments, pendingComment]
      })

      return {oldComments}
    },
    onError: (error, _, context) => {
      console.error(error)
      if (context?.oldComments) {
        queryClient.setQueryData(['comments'], context.oldComments)
      }
    },
    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: ['comments'],
      })
    },
  })

  return {comments, isLoading, error, addComment, resetComments}
}
