/**
 * @description Hook to manage movies
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState} from 'react'
import type {Movie} from '../types'
import MovieManager from '../utils/movie-manager.ts'

export default function useMovies(): {
  movies: Movie[]
  searchMovies: (search: string) => void
} {
  const [movies, setMovies] = useState<Movie[]>([])

  const searchMovies = (search: string) => {
    MovieManager.searchMovies(search).then((movies) => {
      if (movies.length) {
        setMovies(movies)
      }
    })
  }

  return {movies, searchMovies}
}
