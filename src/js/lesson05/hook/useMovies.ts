/**
 * @description Hook to manage movies
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import debounce from 'just-debounce-it'
import {useState, useRef, useMemo, useCallback} from 'react'
import type {Movie} from '../types'
import MovieManager from '../utils/movie-manager.ts'

const DEBOUNCE_MS = 3000

export default function useMovies(): {
  movies: Movie[]
  searchMovies: (query: string) => void
  toggleSortMovies: () => void
} {
  const [movies, setMovies] = useState<Movie[]>([])
  const [isSortedAsc, setIsSortedAsc] = useState(false)
  const prevQueryRef = useRef('')

  const searchMovies = useCallback(
    debounce((query: string) => {
      if (query === prevQueryRef.current) {
        return
      }

      MovieManager.searchMovies(query).then((movies) => {
        if (movies.length) {
          prevQueryRef.current = query
          setMovies(movies)
        }
      })
    }, DEBOUNCE_MS),
    [],
  )

  const toggleSortMovies = () => {
    setIsSortedAsc(!isSortedAsc)
  }

  const sortedMovies = useMemo(() => {
    return isSortedAsc
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [isSortedAsc, movies])

  return {movies: sortedMovies, searchMovies, toggleSortMovies}
}
