/**
 * @description Hook to manage movies
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState} from 'react'
import type {Movie} from '../types'
import MovieManager from '../utils/movie-manager.ts'

export default function useMovies(): {
  movies: Movie[] | undefined
  refreshMovies: (search: string) => void
} {
  const [movies, setMovies] = useState<Movie[]>()

  const refreshMovies = (search: string) => {
    MovieManager.getMovies(search).then((movies) => {
      if (movies.length) {
        setMovies(movies)
      }
    })
  }

  return {movies, refreshMovies}
}
