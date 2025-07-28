/**
 * @description Hook to manage users
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {
  type InfiniteData,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import type {UserQueryResult} from '../types'
import {UserManager} from '../utils/user-manager.ts'

export const useUsers = () => {
  const queryClient = useQueryClient()

  const {isLoading, error, refetch, data, fetchNextPage, hasNextPage} =
    useInfiniteQuery<UserQueryResult>({
      queryKey: ['users'],
      queryFn: UserManager.loadUsers,
      getNextPageParam: (page) => page.nextCursor,
      initialPageParam: 1,
      staleTime: 3000,
      refetchOnWindowFocus: false,
    })

  const {mutate: removeUserByEmail} = useMutation({
    mutationFn: async (email: string) => {
      if (!data) {
        return data
      }

      const newData = structuredClone(data)

      const deletedUserPage = data.pages.findIndex(
        (page) => page.users.findIndex((user) => user.email === email) !== -1,
      )

      newData.pages[deletedUserPage].users = data.pages[
        deletedUserPage
      ].users.filter((user) => user.email !== email)

      return newData
    },
    onSuccess: (data: InfiniteData<UserQueryResult> | undefined) =>
      queryClient.setQueryData(['users'], data),
  })

  const users = data?.pages?.flatMap((page) => page.users)

  return {
    isLoading,
    error,
    refetch,
    users,
    fetchNextPage,
    hasNextPage,
    removeUserByEmail,
  }
}
