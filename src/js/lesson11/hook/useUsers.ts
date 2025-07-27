/**
 * @description Hook to manage users
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useInfiniteQuery} from '@tanstack/react-query'
import type {UserQueryResult} from '../types'
import {UserManager} from '../utils/user-manager.ts'

export const useUsers = () => {
  const {isLoading, error, refetch, data, fetchNextPage, hasNextPage} =
    useInfiniteQuery<UserQueryResult>({
      queryKey: ['users'],
      queryFn: UserManager.loadUsers,
      getNextPageParam: (page) => page.nextCursor,
      initialPageParam: 1,
      staleTime: 3000,
      refetchOnWindowFocus: false,
    })

  const users = data?.pages?.flatMap((page) => page.users)

  return {isLoading, error, refetch, users, fetchNextPage, hasNextPage}
}
